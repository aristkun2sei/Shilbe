import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Footer() {
  return(
    <View style={styles.footer}>
      <View style={styles.footerWrapper}>
        <Feather name="book-open" size={35} color="black" />
        <Feather name="search" size={35} color="black" />
        <MaterialCommunityIcons name="emoticon-neutral-outline" size={35} color="black" />
      </View>
    </View>
  );
}

const styles=StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 82,
    height: 80,
    width: '100%',
    justifyContent: 'center',
  },
  footerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
});
