import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChartLine, Settings, LogOut, UserPlus, Video, FileText, Share2 } from 'lucide-react-native';

const MenuItem = ({ icon, title, description }) => (
  <TouchableOpacity className="flex-row items-center py-4 border-b border-gray-200">
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
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4">Profile</Text>
          
          <View className="flex-row items-center mb-6">
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              className="w-20 h-20 rounded-full mr-4"
            />
            <View>
              <Text className="text-lg font-semibold">Mizuhara.kakashi</Text>
              <Text className="text-gray-500">mizuhara.kakashi@gmail.com</Text>
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
          />
        </View>
      </ScrollView>
      <View className='mt-8 mb-6 flex justify-center items-center '>
      <Text className="text-md text-gray-800">Created with 💖 by Saarthi </Text>
      </View>
    </SafeAreaView>
  );
}