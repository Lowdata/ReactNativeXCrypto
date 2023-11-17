// src/stores/WalletStore.js
import { makeObservable, observable, action } from 'mobx';

class WalletStore {
  wallet = null;
  transactionHistory = [];

  constructor() {
    makeObservable(this, {
      wallet: observable,
      transactionHistory: observable,
      setWallet: action,
      addTransaction: action,
    });
  }

  setWallet(wallet) {
    this.wallet = wallet;
  }

  addTransaction(transaction) {
    this.transactionHistory.push(transaction);
  }
}

const walletStore = new WalletStore();
export default walletStore;
