import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import one from "../images/one.svg"
import two from "../images/two.svg"
import three from "../images/three.svg"
import four from "../images/four.svg"
import five from "../images/five.svg"
const actions = [
  {title: 'Top Up', icon: one},
  {title: 'Deposit', icon: two},
  {title: 'Pocket', icon:three},
  {title: 'Invited', icon: four},
  {title: 'See All', icon: five},
];

const Main = () => {
  return (
    <ScrollView style={{backgroundColor: '#272727'}}>
      <View style={styles.container}>
        <View style={styles.headerTop}>
          <Image source={require('../images/man.png')} style={styles.avatar} />
          <View style={styles.greeting}>
            <Text style={styles.hello}>Hello, Grachia Zaya!</Text>
            <Text style={styles.welcome}>Welcome To Flybank Banking</Text>
          </View>
          <TouchableOpacity style={styles.bell}>
            <Image
              source={require('../images/bell.png')}
              style={styles.bellIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Account Card */}
      <View style={styles.accountCard}>
        <Text style={styles.accountLabel}>Flybank Account</Text>
        <Text style={styles.accountNumber}>1281-1942-9311</Text>
        <View style={styles.balanceRow}>
          <Text style={styles.balance}>$1791.868,000</Text>
          <Image
            source={require('../images/user.png')}
            style={styles.eyeIcon}
          />
        </View>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.qrisBtn}>
            <Image
              source={require('../images/G10.png')}
              style={styles.iconSmall}
            />
            <Text style={styles.qrisText}>QRIS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.transferBtn}>
            <Image
              source={require('../images/user.png')}
              style={styles.iconSmall}
            />
            <Text style={styles.transferText}>Transfer & Pay</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={actions}
          horizontal
          contentContainerStyle={{marginTop: 20}}
          renderItem={({item}) => (
  <TouchableOpacity style={styles.actionIcon}>
 <View style={styles.iconWrapper}>
      <item.icon width={24} height={24} />
    </View>
    <Text style={styles.actionText}>{item.title}</Text>
  </TouchableOpacity>
)}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
     <View style={styles.promoContainer}>
  <View style={styles.promoLeft}>
    <Image
      source={require('../images/prom.png')} // Use your exact image path or asset
      style={styles.promoImage}
      resizeMode="contain"
    />
  </View>
  <View style={styles.promoRight}>
    <Text style={styles.promoTitle}>First Transaction With Flybank</Text>
    <Text style={styles.promoCashback}>
      <Text style={{fontWeight: 'bold'}}>CASHBACK UP TO </Text>
      <Text style={styles.cashbackAmount}>80%</Text>
      <Text style={styles.offText}> OFF</Text>
    </Text>
    <Text style={styles.promoPeriod}># Periode 12-19 December 2024</Text>
  </View>
</View>

  
    </ScrollView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#028d85',
    paddingBottom: 20,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    marginHorizontal: 10,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 10,
    marginBottom: '30%',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  greeting: {
    marginLeft: 15,
    flex: 1,
  },
  hello: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  welcome: {
    color: '#fff',
    fontSize: 12,
  },
  bell: {
    padding: 8,
    borderRadius: 20,
  },
  bellIcon: {
    width: 30,
    height: 30,
  },
  accountCard: {
    backgroundColor: '#2b2b2b',
    marginHorizontal: 20,
    borderRadius: 16,
    padding: '6%',
    marginTop: "-18%",
  },
  accountLabel: {
    color: '#aaa',
    fontSize: 12,
  },
  accountNumber: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 10,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balance: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: '#00c6ba',
  },
  actionRow: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 10,
  },
  qrisBtn: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  transferBtn: {
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  qrisText: {
    marginLeft: 5,
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  transferText: {
    marginLeft: 5,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconSmall: {
    width: 18,
    height: 18,
    tintColor: '#00c6ba',
  },
  actionIcon: {
    alignItems: 'center',
    marginRight: 20,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#00c6ba',
    marginBottom: 5,
  },
  actionText: {
    color: '#fff',
    fontSize: 12,
  },
  iconWrapper: {
  width: 60,
  height: 60,
  borderRadius: 30, // makes it circular
  borderWidth: 2,
  borderColor: "#0F8B83", // green border
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1f1f1f', // optional background
  marginBottom: 8,
},

promoContainer: {
  flexDirection: 'row',
  backgroundColor: '#009688',
  borderRadius: 16,
  margin: 20,
  padding: 15,
  alignItems: 'center',
  height:120
},
promoLeft: {
  height:100,
  width:65,
  marginRight:45,
  alignItems: 'center',
},
promoImage: {
  width: 130,
  marginTop:-18,
  height: 120,
},
promoRight: {
  flex: 2,
  paddingLeft: 10,
},
promoTitle: {
  color: '#fff',
  fontSize: 12,
  marginBottom: 4,
},
promoCashback: {
  color: '#fff',
  fontSize: 16,
},
cashbackAmount: {
  fontSize: 24,
  fontWeight: 'bold',
  color: '#fff',
},
offText: {
  fontSize: 12,
  color: '#fff',
},
promoPeriod: {
  color: '#eee',
  fontSize: 10,
  marginTop: 5,
  fontWeight:"600"
},


 });
