import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'

export default function HomeScreen() {

  const modules = [
    { id: '01', title: 'Stock Market Basics', color: 'bg-green-200' },
    { id: '02', title: 'Technical Analysis', color: 'bg-pink-200' },
    { id: '03', title: 'Futures Trading', color: 'bg-yellow-200' },
    { id: '04', title: 'Options Trading', color: 'bg-purple-200' },
    { id: '05', title: 'Fundamental Analysis', color: 'bg-blue-200' },
    { id: '06', title: 'Option Strategies', color: 'bg-red-200' },
    { id: '07', title: 'Currency, Commodity, And Govt Securities', color: 'bg-orange-200' },
    { id: '08', title: 'Markets And Taxation', color: 'bg-teal-200' },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.greeting}>Hello Mizuhara!</Text>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.introducing}>Introducing</Text>
          </View>
          <View style={styles.cardContent}>
            <Image
              source={{ uri: 'https://placeholder.com/150' }}
              style={styles.cardImage}
            />
            <View style={styles.cardText}>
              <Text style={styles.cardTitle}>Varsity video series</Text>
              <Text style={styles.cardDescription}>
                Introducing varsity video series for an absolute beginner. We picked essential topics from Varsity to help you get started.
              </Text>
              <TouchableOpacity>
                <Text style={styles.exploreLink}>Explore</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Start reading</Text>

        <View style={styles.moduleCard}>
          <Text style={styles.moduleLabel}>Module:</Text>
          <View style={styles.moduleHeader}>
            <Text style={styles.moduleNumber}>01</Text>
            <Text style={styles.moduleTitle}>Stock Market Basics</Text>
          </View>
          <View style={styles.moduleInfo}>
            <Text style={styles.moduleLevel}>Level: Beginner</Text>
            <Text style={styles.moduleChapter}>Chapter: 01</Text>
          </View>
          <View style={styles.progressBar} />
        </View>
        <View style={styles.goalCard}>
          <Image
            source={{ uri: 'https://placeholder.com/80' }}
            style={styles.goalImage}
          />
          <View style={styles.goalText}>
            <Text style={styles.goalDescription}>
              Let's begin this journey by setting your daily goal
            </Text>
            <TouchableOpacity style={styles.goalButton}>
              <Text style={styles.goalButtonText}>Set a goal</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.newCard}>
          <View style={styles.newLabel}>
            <Text style={styles.newLabelText}>New</Text>
          </View>
          <Text style={styles.newTitle}>Innerworth</Text>
          <Text style={styles.newDescription}>Mind over markets series</Text>
        </View>
        <Text style={styles.sectionTitle}>Modules</Text>
        {/* Add module content here */}

        <View className="bg-white rounded-lg shadow-md mt-4 p-4 flex-row items-center">
          <View className="bg-blue-500 rounded px-2 py-1 mr-3">
            <Text className="text-white font-bold text-xs">New</Text>
          </View>
          <View>
            <Text className="font-bold text-lg">Innerworth</Text>
            <Text className="text-gray-600">Mind over markets series</Text>
          </View>
        </View>

        <Text className="text-2xl font-bold mt-6 mb-4">Modules</Text>

        <View className="flex-row flex-wrap justify-between mb-8">
          {modules.map((module) => (
            <TouchableOpacity
              key={module.id}
              className={`w-[48%] ${module.color} rounded-lg p-4 mb-4`}
            >
              <Text className="text-3xl font-bold mb-2">{module.id}</Text>
              <Text className="font-semibold">{module.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      {/* <View style={styles.navbar}>
        <TouchableOpacity style={styles.navItem}>
          <Home size={24} color="#000" />
          <Text style={styles.navText}>Home</Text>   
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <LayoutGrid size={24} color="#000" />
          <Text style={styles.navText}>The Wall</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Bookmark size={24} color="#000" />
          <Text style={styles.navText}>Bookmarks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <User size={24} color="#000" />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  time: {
    color: '#fff',
    fontWeight: 'bold',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  batteryPercentage: {
    color: '#fff',
    marginLeft: 5,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardHeader: {
    backgroundColor: '#6c5ce7',
    padding: 10,
  },
  introducing: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  exploreLink: {
    color: '#6c5ce7',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
  },
  moduleCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  moduleLabel: {
    color: '#666',
    marginBottom: 5,
  },
  moduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  moduleNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moduleInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  moduleLevel: {
    color: '#666',
  },
  moduleChapter: {
    color: '#666',
  },
  progressBar: {
    height: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  goalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  goalImage: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  goalText: {
    flex: 1,
  },
  goalDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  goalButton: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  goalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  newCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  newLabel: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  newLabelText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  newTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  newDescription: {
    color: '#666',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});
