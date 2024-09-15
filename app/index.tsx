import Audioplayer from '@/components/Audioplay';
import QrcodeScanner from '@/components/Qrcodescanner';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [previousResult, setpreviousResult] = useState();
  const [newResult, setnewResult] = useState(null);
  const getResult:any = (result:any)=>{
    setnewResult(result?.data)
    if(result?.data!==previousResult){
      setpreviousResult(result?.data)
      console.log('result',result);
    }
    
    
  }
  return (
    <View style={styles.container}>
      {/* Top Content */}
      <View style={styles.topContent}>
        <Text style={styles.instructions}>
          Align the QR code within the frame to scan.
        </Text>
      </View>

      {/* QR Code Scanner Frame */}
      <View style={styles.scannerFrame}>
        <View style={styles.outerFrame}>
          {/* <View style={styles.innerFrame} /> */}
          <QrcodeScanner getResult={getResult}/>
        </View>
      </View>

      {/* Bottom Content */}
      {<View style={styles.bottomContent}>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity> */}
        <Audioplayer data={newResult} getResult={getResult}/>
        <Text style={{fontWeight:'bold'}}>Result</Text>
        <Text style={{}}>Playing Track- {newResult}</Text>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  topContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  instructions: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
  scannerFrame: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerFrame: {
    width: 350,
    height: 350,
    borderRadius: 12,
    borderColor: '#000',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    overflow:'hidden'
  },
  innerFrame: {
    width: 220,
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  bottomContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:"#rgba(0,0,0,0.1)"
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
