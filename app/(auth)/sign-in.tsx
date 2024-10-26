import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { Link } from 'expo-router';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

// Define the warm up browser hook outside the component
export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

// Initialize WebBrowser
WebBrowser.maybeCompleteAuthSession();

export default function GoogleLoginScreen() {
  // Use the warm up browser hook
  useWarmUpBrowser();
  
  // Get OAuth function from Clerk
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  // Define onPress handler
  const handleSignIn = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow({
        redirectUrl: Linking.createURL('/dashboard', { scheme: 'myapp' }),
      });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, [startOAuthFlow]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-xl font-semibold mb-8">Continue with:</Text>
        
        <TouchableOpacity
          onPress={handleSignIn}
          className="flex-row items-center bg-white border border-gray-300 rounded-full px-6 py-3"
        >
          <Image
            source={require('../../assets/google.png')} // Replace with local image
            className="w-6 h-6 mr-3"
            resizeMode="contain"
          />
          <Text className="text-base font-medium">Sign In With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-8">
          <Text className="text-blue-500">Why Login?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}