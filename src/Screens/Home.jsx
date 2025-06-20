import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const Home = () => {
  const category = useSelector(state => state.product.category);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.bannerContainer}>
        <Image
          source={require('../images/banner.jpg')}  
          style={styles.banner}
        />
      </View>

      {category.map((item, index) => (
        <View key={index} style={styles.categoryBlock}>
          <Text style={styles.categoryTitle}>{item.category}</Text>
          <FlatList
            data={item.data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(subItem) => subItem.name}
            renderItem={({ item: product }) => (
              <TouchableOpacity activeOpacity={0.8} style={styles.cardContainer}>
                <View style={styles.card}>
                  <Image source={product.image} style={styles.image} />
                  <View style={styles.cardBody}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceTag}>
                      <Text style={styles.price}>Rs {product.price}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
  },
  bannerContainer: {
    margin: 15,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  banner: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  categoryBlock: {
    marginBottom: 25,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 15,
    marginBottom: 10,
  },
  cardContainer: {
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: '#292929',
    borderRadius: 16,
    overflow: 'hidden',
    width: width * 0.42,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  cardBody: {
    padding: 10,
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#eaeaea',
    marginBottom: 8,
    textAlign: 'center',
  },
  priceTag: {
    backgroundColor: '#00c6ba',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  price: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
