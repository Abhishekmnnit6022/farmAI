import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface HeaderProps {
  title?: string; // Optional title prop
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Image 
        source={require('../assets/images/logoFarm.png')} 
        style={styles.logo} 
        resizeMode="contain"
      />
      <Text style={styles.headerTitle}>{title || 'FarmAI'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: wp('8%'),
    height: wp('8%'),
    marginRight: wp('2%'),
  },
  headerTitle: {
    fontSize: wp('5.5%'),
    fontWeight: 'bold',
    color: '#111827',
  },
});

export default Header;