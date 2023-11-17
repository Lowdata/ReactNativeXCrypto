// src/components/SendTransactionForm.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import walletStore from '../stores/WalletStore';
import axios from 'axios';
const SendTransactionForm = observer(() => {
  const [receiverAddress, setReceiverAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleSendTransaction = () => {
    // Validate receiver address
    // Make API call to send transaction
    // Update MobX store with transaction details
    walletStore.addTransaction({
      receiverAddress,
      amount,
      status: 'pending',
    });
  };

  return (
    <View>
      <Text>Send Transaction Form</Text>
      <TextInput
        placeholder="Receiver Address"
        value={receiverAddress}
        onChangeText={setReceiverAddress}
      />
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Send Transaction" onPress={handleSendTransaction} />
    </View>
  );
});

export default SendTransactionForm;
