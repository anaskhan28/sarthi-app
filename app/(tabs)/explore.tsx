import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Star, Clock, TrendingUp, Briefcase, Coins } from 'lucide-react-native';

const InvestmentCard = ({ title, returnRate, duration, icon }) => (
  <View className="bg-gray-100 rounded-lg p-4 mr-4 w-40">
    <View className="flex-row items-center mb-2">
      <View className="w-8 h-8 rounded-full bg-blue-100 items-center justify-center mr-2">
        {icon}
      </View>
      <Text className="font-bold">{title}</Text>
    </View>
    <View className="flex-row items-center mb-1">
      <Star size={16} color="#FFD700" />
      <Text className="ml-1 text-sm">{returnRate}% returns</Text>
    </View>
    <View className="flex-row items-center">
      <Clock size={16} color="#718096" />
      <Text className="ml-1 text-sm text-gray-600">{duration}</Text>
    </View>
  </View>
);

export default function Explore() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mb-6">
            <Search size={20} color="#718096" />
            <TextInput
              placeholder="Search investments..."
              className="ml-2 flex-1"
            />
          </View>

          <View className="bg-green-100 rounded-lg p-4 mb-6">
            <Text className="text-lg font-bold mb-1">Investment Opportunity</Text>
            <Text className="text-sm mb-2">Earn up to 12% returns on your first investment</Text>
            <TouchableOpacity className="bg-green-500 rounded-full py-2 px-4 self-start">
              <Text className="text-white font-semibold">Invest now</Text>
            </TouchableOpacity>
          </View>

          <View className="mb-6">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Popular Investments</Text>
              <TouchableOpacity>
                <Text className="text-blue-500">View all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <InvestmentCard
                title="Stocks"
                returnRate="8-12"
                duration="Long term"
                icon={<TrendingUp size={20} color="#4299E1" />}
              />
              <InvestmentCard
                title="Mutual Funds"
                returnRate="10-15"
                duration="3-5 years"
                icon={<Briefcase size={20} color="#4299E1" />}
              />
              <InvestmentCard
                title="Gold Bonds"
                returnRate="5-7"
                duration="8 years"
                icon={<Coins size={20} color="#4299E1" />}
              />
            </ScrollView>
          </View>

          <View>
            <Text className="text-lg font-bold mb-4">Recommended for You</Text>
            <View className="bg-gray-100 rounded-lg p-4 mb-4">
              <View className="flex-row items-center mb-2">
                <Image
                  source={{ uri: 'https://i.pravatar.cc/100' }}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <View>
                  <Text className="font-semibold">Blue Chip Stock Fund</Text>
                  <Text className="text-sm text-gray-600">By Top Investors Inc.</Text>
                </View>
              </View>
              <Text className="mb-2">Stable returns with lower risk</Text>
              <View className="flex-row justify-between">
                <Text className="font-semibold">$100 minimum</Text>
                <TouchableOpacity className="bg-blue-500 rounded-full py-1 px-3">
                  <Text className="text-white">Invest</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}