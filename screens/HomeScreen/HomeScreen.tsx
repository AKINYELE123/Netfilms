import { FlatList, Image } from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import styles from './styles';
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';


// const firstCatergory = categories.items[0];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* List of Categories */}
      <FlatList 
      data={categories.items}
      renderItem={({item}) => <HomeCategory category={item}/>}
      />
    </View>
  );
}



export default HomeScreen;
