import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Stock {
    name: string;
    exchange: string;
    price: string;
    change: string;
    percentChange: string;
}

const stockData: Stock[] = [
    { name: 'NUCLEUS', exchange: 'NSE', price: '0.00', change: '0.00', percentChange: '(0.00%)' },
    { name: 'TRITURBINE', exchange: 'NSE', price: '0.00', change: '0.00', percentChange: '(0.00%)' },
    { name: 'APOLLOTYRE', exchange: 'NSE', price: '480.05', change: '-7.45', percentChange: '(-1.52%)' },
    { name: 'MARKSANS', exchange: 'NSE', price: '0.00', change: '0.00', percentChange: '(0.00%)' },
    { name: 'BSOFT', exchange: 'NSE', price: '0.00', change: '0.00', percentChange: '(0.00%)' },
    { name: 'MRF', exchange: 'NSE', price: '0.00', change: '0.00', percentChange: '(0.00%)' },
    { name: 'BOSCHLTD', exchange: 'NSE', price: '0.00', change: '0.00', percentChange: '(0.00%)' },
    { name: 'GRASIM', exchange: 'NSE', price: '0.00', change: '0.00', percentChange: '(0.00%)' },
];

export default function StockWatchlist() {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

    const openStockDetails = (stock: Stock) => {
        setSelectedStock(stock);
        setModalVisible(true);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>NIFTY 50</Text>
                <Text style={styles.headerSubText}>0.00 0.00 (0.00%)</Text>
                <Text style={styles.headerText}>NIFTY BANK</Text>
                <Text style={styles.headerSubText}>0.00 0.00 (0.00%)</Text>
            </View>

            <View style={styles.tabContainer}>
                <Text style={[styles.tabText, styles.activeTab]}>Watchlist 1</Text>
                <Text style={styles.tabText}>Watchlist 2</Text>
                <Text style={styles.tabText}>Watchlist 3</Text>
            </View>

            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search & add"
                    placeholderTextColor="#888"
                />
                <Text style={styles.stockCount}>31/100</Text>
            </View>

            <ScrollView style={styles.stockList}>
                {stockData.map((stock, index) => (
                    <TouchableOpacity key={index} onPress={() => openStockDetails(stock)} style={styles.stockItem}>
                        <View>
                            <Text style={styles.stockName}>{stock.name}</Text>
                            <Text style={styles.stockExchange}>{stock.exchange}</Text>
                        </View>
                        <View style={styles.stockPriceContainer}>
                            <Text style={styles.stockPrice}>{stock.price}</Text>
                            <Text style={styles.stockChange}>{stock.change} {stock.percentChange}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="bookmark-outline" size={24} color="#007AFF" />
                    <Text style={styles.footerText}>Watchlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="document-text-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="briefcase-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Portfolio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="stats-chart-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>Bids</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerItem}>
                    <Ionicons name="person-outline" size={24} color="#888" />
                    <Text style={styles.footerText}>JK6726</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
                            <Ionicons name="close" size={24} color="#000" />
                        </TouchableOpacity>
                        {selectedStock && (
                            <>
                                <Text style={styles.modalStockName}>{selectedStock.name}</Text>
                                <Text style={styles.modalStockExchange}>{selectedStock.exchange} {selectedStock.price} {selectedStock.change} {selectedStock.percentChange}</Text>
                                <View style={styles.buttonContainer}>
                                    <TouchableOpacity style={styles.buyButton}>
                                        <Text style={styles.buttonText}>BUY</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.sellButton}>
                                        <Text style={styles.buttonText}>SELL</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.viewChartButton}>
                                    <Ionicons name="stats-chart" size={20} color="#007AFF" />
                                    <Text style={styles.viewChartText}>View chart</Text>
                                </TouchableOpacity>
                                <View style={styles.actionButtons}>
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Ionicons name="notifications-outline" size={20} color="#007AFF" />
                                        <Text style={styles.actionButtonText}>Set alert</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Ionicons name="create-outline" size={20} color="#007AFF" />
                                        <Text style={styles.actionButtonText}>Add notes</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.actionButton}>
                                        <Ionicons name="flash-outline" size={20} color="#007AFF" />
                                        <Text style={styles.actionButtonText}>Create GTT</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.depthContainer}>
                                    <View style={styles.depthHeader}>
                                        <Text style={styles.depthHeaderText}>Bid</Text>
                                        <Text style={styles.depthHeaderText}>Orders</Text>
                                        <Text style={styles.depthHeaderText}>Qty</Text>
                                        <Text style={styles.depthHeaderText}>Offer</Text>
                                        <Text style={styles.depthHeaderText}>Orders</Text>
                                        <Text style={styles.depthHeaderText}>Qty</Text>
                                    </View>
                                    {[...Array(5)].map((_, index) => (
                                        <View key={index} style={styles.depthRow}>
                                            <Text style={styles.depthText}>0.00</Text>
                                            <Text style={styles.depthText}>0</Text>
                                            <Text style={styles.depthText}>0</Text>
                                            <Text style={styles.depthText}>0.00</Text>
                                            <Text style={styles.depthText}>0</Text>
                                            <Text style={styles.depthText}>0</Text>
                                        </View>
                                    ))}
                                </View>
                                <TouchableOpacity style={styles.showDepthButton}>
                                    <Text style={styles.showDepthText}>Show 20 depth</Text>
                                </TouchableOpacity>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: '#fff',
        padding: 10,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerSubText: {
        fontSize: 14,
        color: '#888',
        marginBottom: 5,
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },
    tabText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        color: '#888',
    },
    activeTab: {
        color: '#007AFF',
        borderBottomWidth: 2,
        borderBottomColor: '#007AFF',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
    },
    stockCount: {
        color: '#888',
    },
    stockList: {
        flex: 1,
    },
    stockItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    stockName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    stockExchange: {
        fontSize: 14,
        color: '#888',
    },
    stockPriceContainer: {
        alignItems: 'flex-end',
    },
    stockPrice: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    stockChange: {
        fontSize: 14,
        color: '#888',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    footerItem: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 12,
        color: '#888',
        marginTop: 5,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: '80%',
    },
    closeButton: {
        alignSelf: 'flex-end',
        padding: 10,
    },
    modalStockName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    modalStockExchange: {
        fontSize: 18,
        color: '#888',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    buyButton: {
        flex: 1,
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 5,
        marginRight: 10,
    },
    sellButton: {
        flex: 1,
        backgroundColor: '#FF3B30',
        padding: 15,
        borderRadius: 5,
        marginLeft: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    viewChartButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    viewChartText: {
        color: '#007AFF',
        marginLeft: 5,
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    actionButton: {
        alignItems: 'center',
    },
    actionButtonText: {
        color: '#007AFF',
        marginTop: 5,
    },
    depthContainer: {
        marginBottom: 20,
    },
    depthHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    depthHeaderText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },
    depthRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    depthText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 12,
    },
    showDepthButton: {
        alignItems: 'center',
    },
    showDepthText: {
        color: '#007AFF',
    },
});