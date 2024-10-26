import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChartLine, Settings, LogOut, UserPlus, Video, FileText } from 'lucide-react-native';
import { SignedIn, SignedOut, useUser, useAuth } from '@clerk/clerk-expo';
import SignInWithOAuth from '~/components/SignInWithOAuth';

const MenuItem = ({ icon, title, description, onPress }) => (
  <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200" onPress={onPress}>
    <View className="w-8 h-8 mr-4 items-center justify-center">
      {icon}
    </View>
    <View className="flex-1">
      <Text className="text-base font-semibold">{title}</Text>
      <Text className="text-sm text-gray-500">{description}</Text>
    </View>
  </TouchableOpacity>
);

export default function User() {
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4">Profile</Text>
          
          <SignedIn>
            <View className="flex-row items-center mb-6">
              <Image
                source={{ uri: user?.imageUrl || 'https://i.pravatar.cc/100' }}
                className="w-20 h-20 rounded-full mr-4"
              />
              <View>
                <Text className="text-lg font-semibold">{user?.username || user?.firstName}</Text>
                <Text className="text-gray-500">{user?.primaryEmailAddress?.emailAddress}</Text>
              </View>
            </View>

            <MenuItem
              icon={<ChartLine size={24} color="#FFB347" />}
              title="Progress"
              description="Track your learning progress, goals, streaks, and points earned."
            />
            <MenuItem
              icon={<Settings size={24} color="#4A90E2" />}
              title="Settings"
              description="Choose your desired settings for better reading."
            />
            <MenuItem
              icon={<UserPlus size={24} color="#50C878" />}
              title="Open a Zerodha account"
              description="Open your zerodha account."
            />
            <MenuItem
              icon={<Video size={24} color="#FF6B6B" />}
              title="Videos"
              description="Related videos and webinars from Zerodha Educate."
            />
            <MenuItem
              icon={<FileText size={24} color="#C3B1E1" />}
              title="General guidelines"
              description="Quiz and certification guidelines."
            />
            <MenuItem
              icon={<LogOut size={24} color="#48D1CC" />}
              title="LogOut"
              description="You've logged in via Google"
              onPress={handleLogout}
            />
          </SignedIn>

          <SignedOut>
            <View className="items-center justify-center py-8">
              <Text className="text-xl font-semibold mb-4">Welcome to Saarthi</Text>
              <Text className="text-gray-500 mb-6">Please sign in to access your profile</Text>
              <SignInWithOAuth />
            </View>
          </SignedOut>
        </View>
      </ScrollView>
      
      <View className='mt-8 mb-6 flex justify-center items-center'>
        <Text className="text-md text-gray-800">Created with 💖 by Saarthi</Text>
      </View>
    </SafeAreaView>
  );
}