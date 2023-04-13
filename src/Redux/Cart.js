import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Products} from './Products';
import {removeItemFromCart} from './Action/Actions';

export const Cart = () => {
  const Navigation = useNavigation();
  const OnPressBackProductScreen = () => {
    Navigation.navigate(Products);
  };
  const items = useSelector(state => state);
  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(removeItemFromCart(index));
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.CardView}>
        <View>
          <Text>{item.ItemName}</Text>
          <Text>{item.ItemPrice}</Text>
          <TouchableOpacity
            style={styles.AddToCartButton}
            onPress={() => {
              removeItem(index);
            }}>
            <Text style={{color: 'white'}}>{'Remove'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ImageView}>
          <Image
            style={styles.ImageStyle}
            source={{uri: item.ItemImageUrl}}></Image>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text style={styles.AppCartTitle}>{'Cart Item'}</Text>
        <TouchableOpacity onPress={OnPressBackProductScreen}>
          <Text style={styles.CardItemNumber}>{'Back'}</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={items} renderItem={renderItem}></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightgrey',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  AppCartTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  CardItemNumber: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 150,
  },

  CardView: {
    marginTop: 10,
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    height: 100,
    padding: 10,
    marginLeft: 10,
    flexDirection: 'row',
  },
  AddToCartButton: {
    backgroundColor: 'red',
    width: 80,
    height: 30,
    marginTop: 15,
    borderRadius: 8,
    padding: 5,
  },
  ImageView: {
    marginLeft: 120,
    padding: 10,
  },
  ImageStyle: {
    width: 80,
    height: 80,
  },
});

// import {
//   FlatList,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// export const Cart = () => {
//   const Data = [
//     {
//       ItemName: 'Item1',
//       ItemPrice: 'ItemPrice1',
//       ItemImageUrl:
//         'https://lh3.googleusercontent.com/spp/AIA7d4fnp8xDKsl4Kf2JqbsxXJtQDb999ufYO6Swn_tBS6Zg3lWv9g-I6dAv0oVmWeqDJ7-Rgp-UTIas4VA_7ssLkdZVzxc3pgUCXpY1f7KXJrG4hPZo630SGuA8yJnjZdYBIr8mB0gWXvaGOLtcIG7L1i8Qb36JJcj52lOFdqepRHFUCrPXuwbzWaw7BQhRHXBq1QR96HH9=s512-rw-pd-pc0x00ffffff',
//     },
//     {
//       ItemName: 'Item2',
//       ItemPrice: 'ItemPrice2',
//       ItemImageUrl:
//         'https://lh3.googleusercontent.com/spp/AIA7d4fyJrTdMd20SaVI8yuzF1u5nzFMlWO20_COOxg3EGWwHZONy8CNgPHWYnFpm0VpIJq68TCVL65oEQ002NIJFL5nqUejPtOYdjuKQk0lWvMs0eJHtXMTlWedObLCancngmkN2T79jtWWKdeUf4DniaFsrZiVhzFL975yi2nRhkfvJjBlbO2iDtj2N5yMX9-UWKJSiVb-Lw=s512-rw-pd-pc0x00ffffff',
//     },
//     {
//       ItemName: 'Item3',
//       ItemPrice: 'ItemPrice3',
//       ItemImageUrl:
//         'https://lh3.googleusercontent.com/spp/AIA7d4fnp8xDKsl4Kf2JqbsxXJtQDb999ufYO6Swn_tBS6Zg3lWv9g-I6dAv0oVmWeqDJ7-Rgp-UTIas4VA_7ssLkdZVzxc3pgUCXpY1f7KXJrG4hPZo630SGuA8yJnjZdYBIr8mB0gWXvaGOLtcIG7L1i8Qb36JJcj52lOFdqepRHFUCrPXuwbzWaw7BQhRHXBq1QR96HH9=s512-rw-pd-pc0x00ffffff',
//     },
//     {
//       ItemName: 'Item4',
//       ItemPrice: 'ItemPrice4',
//       ItemImageUrl:
//         'https://lh3.googleusercontent.com/spp/AIA7d4fnp8xDKsl4Kf2JqbsxXJtQDb999ufYO6Swn_tBS6Zg3lWv9g-I6dAv0oVmWeqDJ7-Rgp-UTIas4VA_7ssLkdZVzxc3pgUCXpY1f7KXJrG4hPZo630SGuA8yJnjZdYBIr8mB0gWXvaGOLtcIG7L1i8Qb36JJcj52lOFdqepRHFUCrPXuwbzWaw7BQhRHXBq1QR96HH9=s512-rw-pd-pc0x00ffffff',
//     },
//     {
//       ItemName: 'Item5',
//       ItemPrice: 'ItemPrice5',
//       ItemImageUrl:
//         'https://lh3.googleusercontent.com/spp/AIA7d4fnp8xDKsl4Kf2JqbsxXJtQDb999ufYO6Swn_tBS6Zg3lWv9g-I6dAv0oVmWeqDJ7-Rgp-UTIas4VA_7ssLkdZVzxc3pgUCXpY1f7KXJrG4hPZo630SGuA8yJnjZdYBIr8mB0gWXvaGOLtcIG7L1i8Qb36JJcj52lOFdqepRHFUCrPXuwbzWaw7BQhRHXBq1QR96HH9=s512-rw-pd-pc0x00ffffff',
//     },
//   ];
//   const renderItem = ({item}) => {
//     return (
//       <View style={styles.CardView}>
//         <View>
//           <Text>{item.ItemName}</Text>
//           <Text>{item.ItemPrice}</Text>
//           <TouchableOpacity style={styles.AddToCartButton}>
//             <Text style={{color: 'white'}}>{'Add to Cart'}</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.ImageView}>
//           <Image
//             style={styles.ImageStyle}
//             source={{uri: item.ItemImageUrl}}></Image>
//         </View>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.mainContainer}>
//       <View
//         style={{
//           flexDirection: 'row',
//         }}>
//         <Text style={styles.AppCartTitle}>{'App Cart'}</Text>
//         <Text style={styles.CardItemNumber}>{'  0'}</Text>
//       </View>
//       <FlatList data={Data} renderItem={renderItem}></FlatList>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     backgroundColor: 'lightgrey',
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
//   AppCartTitle: {
//     color: 'black',
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginLeft: 10,
//   },
//   CardItemNumber: {
//     color: 'black',
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginLeft: 200,
//   },

//   CardView: {
//     marginTop: 10,
//     backgroundColor: 'white',
//     width: '90%',
//     borderRadius: 10,
//     height: 100,
//     padding: 10,
//     marginLeft: 10,
//     flexDirection: 'row',
//   },
//   AddToCartButton: {
//     backgroundColor: 'green',
//     width: 80,
//     height: 30,
//     marginTop: 15,
//     borderRadius: 8,
//     padding: 2,
//   },
//   ImageView: {
//     marginLeft: 120,
//     padding: 10,
//   },
//   ImageStyle: {
//     width: 80,
//     height: 80,
//   },
// });
