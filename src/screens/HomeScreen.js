// src/screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import walletStore from '../stores/WalletStore';
import SendTransactionForm from '../components/SendTransactionForm';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      {/* Add components for live prices, send transactions, etc. */}
      <SendTransactionForm/>
    </View>
  );
};

export default HomeScreen;
