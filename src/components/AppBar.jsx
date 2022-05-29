import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
        <View style={styles.appbarInner}>
            <Text style={styles.appbarBack}> ＜ </Text>
            <Text style={styles.appbarText}>Marketing</Text>
        </View>
        <View style={styles.appbarBottom}>
          <Text />
        </View>
    </View>
    );
}

const styles= StyleSheet.create({
    appbar: {
        width: '100%',
        height: 88,
        backgroundColor: 'grey',
        justifyContent: 'flex-end',
    },
    appbarInner: {
        alignItems: 'center',
    },
    appbarBack: {
        position: 'absolute',
        left: 23,
        fontSize: 30,
    },
    appbarText: {
        fontSize: 24,
        marginBottom: 16,
        fontWeight: 'bold',
        lineHeight: 28.64,
    },
    appbarBottom: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
});
