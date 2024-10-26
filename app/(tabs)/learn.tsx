import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, ChevronRight, DollarSign, Wallet, Clock } from 'lucide-react-native';

export default function Learn() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="p-4">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-6">
            <View className="flex-row items-center">
              <Image
                source={{ uri: 'https://i.pravatar.cc/100' }}
                className="w-10 h-10 rounded-full mr-3"
              />
              <View>
                <Text className="text-gray-500 text-sm">Good Morning</Text>
                <Text className="text-lg font-semibold">William Butcher</Text>
              </View>
            </View>
            <Bell className="text-gray-600" size={24} />
          </View>

          {/* Portfolio Value */}
          <View className="mb-6">
            <Text className="text-gray-500 mb-1">Total Portfolio</Text>
            <View className="flex-row items-baseline">
              <Text className="text-3xl font-bold">$24,554,960</Text>
              <Text className="text-green-500 ml-2">+$4,512.24</Text>
            </View>
          </View>

          {/* Withdraw Button */}
          <TouchableOpacity className="bg-black py-3 px-6 rounded-full self-start mb-6">
            <Text className="text-white font-semibold">Withdraw</Text>
          </TouchableOpacity>

          {/* Trading Balance */}
          <View className="bg-gray-100 p-4 rounded-lg mb-6">
            <View className="flex-row justify-between items-center mb-2">
              <Text className="font-semibold">Trading Balance</Text>
              <ChevronRight size={20} className="text-gray-400" />
            </View>
            <Text className="text-2xl font-bold">$14,663,345</Text>
          </View>

          {/* Stock Portfolio */}
          <View className="mb-6">
            <Text className="font-semibold mb-4">Stock Portfolio</Text>
            {['AAPL', 'ABNB', 'VISA'].map((stock, index) => (
              <View key={stock} className="flex-row justify-between items-center mb-4">
                <View className="flex-row items-center">
                  <View className={`w-10 h-10 rounded-full ${index === 0 ? 'bg-gray-800' : index === 1 ? 'bg-red-500' : 'bg-blue-600'} items-center justify-center mr-3`}>
                    <Text className="text-white font-bold">{stock[0]}</Text>
                  </View>
                  <Text className="font-semibold">{stock}</Text>
                </View>
                <View>
                  <Text className="text-right font-semibold">{index === 0 ? '120,842' : index === 1 ? '4,924' : '249.45'}</Text>
                  <Text className={`text-right ${index === 1 ? 'text-red-500' : 'text-green-500'}`}>
                    {index === 0 ? '+1.79%' : index === 1 ? '-1.48%' : '+0.72%'}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          {/* My Transaction */}
          <View>
            <Text className="font-semibold mb-4">My Transaction</Text>
            <View className="bg-gray-100 p-4 rounded-lg mb-4">
              <Text className="font-semibold mb-2">Success</Text>
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <View className="w-10 h-10 rounded-full bg-red-500 items-center justify-center mr-3">
                    <Text className="text-white font-bold">A</Text>
                  </View>
                  <View>
                    <Text className="font-semibold">Buy ABNB (Airbnb)</Text>
                    <Text className="text-gray-500">34,8345</Text>
                  </View>
                </View>
                <Text className="font-semibold">$673,936</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}