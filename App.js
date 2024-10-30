import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.addressText}>📍9185 Mayflower Drive Atlanta</Text>

        <View style={styles.mainImageContainer}>
          <Image
            source={{ uri: 'https://file.adomicil.io/luckysushi.tr3sco.net/_files/images/product/ls-california-roll-150224-0470048282048687.png' }}
            style={styles.mainImage}
          />
          
        </View>
        <Text style={styles.puntosText}>...</Text>

        <View style={styles.TextosJuntos}>
          <Text style={styles.Text1}>All Restaurants</Text>
          <Text style={styles.Text2}>See All</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.card1}>
            <Image
              source={{ uri: 'https://tacoshappy.com/wp-content/uploads/2024/07/Burrito.webp' }}
              style={styles.cardImage}
              
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.Text1}>Groceries</Text>
              <Text style={styles.ratingText}>🌟4.7</Text>
            </View>
            <Text style={styles.descriptionText}>burger, dessert 15-20 min</Text>
          </View>

          <View style={styles.card1}>
            <Image
              source={{ uri: 'https://tacoshappy.com/wp-content/uploads/2024/07/Burrito.webp' }}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.Text1}>Groceries</Text>
              <Text style={styles.ratingText}>🌟4.7</Text>
            </View>
            <Text style={styles.descriptionText}>burger, dessert 18-25 min</Text>
          </View>
        </View>

        <View style={styles.TextosJuntos}>
          <Text style={styles.Text1}>All Groceries</Text>
          <Text style={styles.Text2}>See All</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.card2}>
            <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/024/991/947/small_2x/fresh-fruit-basket-fresh-fruits-basket-colorful-fruits-green-fruits-transparent-background-ai-generated-png.png' }}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.Text1}>Groceries</Text>
              <Text style={styles.ratingText}>🌟4.7</Text>
            </View>
            <Text style={styles.descriptionText}>fruits, fresh 20-30 min</Text>
          </View>

          <View style={styles.card2}>
            <Image
              source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/024/991/947/small_2x/fresh-fruit-basket-fresh-fruits-basket-colorful-fruits-green-fruits-transparent-background-ai-generated-png.png' }}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.Text1}>Groceries</Text>
              <Text style={styles.ratingText}>🌟4.7</Text>
            </View>
            <Text style={styles.descriptionText}>fruits, fresh 20-30 min</Text>
          </View>
        </View>

        <View style={styles.TextosJuntos}>
          <Text style={styles.Text1}>Specials</Text>
        </View>

        <View style={styles.row}>
          <View style={styles.card3}>
            <Image
              source={{ uri: 'https://rgmx.mx/cdn/shop/products/RGT_1000x1000_2.png?v=1621871886&width=1445' }}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.Text1}>Wines</Text>
              <Text style={styles.ratingText}>🌟4.9</Text>
            </View>
            <Text style={styles.descriptionText2}>Special offer</Text>
          </View>

          <View style={styles.card3}>
            <Image
              source={{ uri: 'https://rgmx.mx/cdn/shop/products/RGT_1000x1000_2.png?v=1621871886&width=1445' }}
              style={styles.cardImage}
            />
            <View style={styles.cardTextContainer}>
              <Text style={styles.Text1}>Wines</Text>
              <Text style={styles.ratingText}>🌟4.9</Text>
            </View>
            <Text style={styles.descriptionText2}>Special offer</Text>
          </View>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 30,
    marginTop:20,
    paddingBottom:50,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  mainImageContainer: {
    alignItems: 'center',
    marginBottom: 1,
    backgroundColor:"lightblue",
    borderRadius: 10,
  },
  mainImage: {
    width: '90%',
    height: 180,
    borderRadius: 10,
  },
  TextosJuntos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  Text1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  Text2: {
    color: 'gray',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card1: {
    width: '48%',
    backgroundColor: '#fffad6',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  card2: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  card3: {
    width: '48%',
    backgroundColor: '#787878',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    
  },
  cardImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ratingText: {
    fontSize: 16,
    color: '#FFD700',
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },

  descriptionText2: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  puntosText:
  {
    color:'gray',
    fontSize:50,
    paddingBottom:1,
    textAlign: 'center',
  }
});
