import React from 'react';
import { View, Button, Text } from 'react-native';

function BuySellApp() {
  const buyWithRakz = () => console.log("Buying with Rakz Token...");
  const sellForStakz = () => console.log("Selling for Stakz Token...");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>BTC-Pro Buy/Sell App</Text>
      <Button title="Buy BTC-P/B/B-Pl with Rakz" onPress={buyWithRakz} />
      <Button title="Sell BTC-P/B/B-Pl for Stakz" onPress={sellForStakz} />
      <Text>Connected to Grokchain Oracle + GrokDEX</Text>
    </View>
  );
}

export default BuySellApp;
