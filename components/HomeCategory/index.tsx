import { FlatList, Image } from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { RootTabScreenProps } from '../../types';

import styles from './styles';
import categories from '../../assets/data/categories';

interface HomeCategoryProps {
    category: {
        id: string,
        title: string,
        movies: {
            id: string,
            poster: string
        }[]
    }

}


const HomeCategory = (props: HomeCategoryProps) => {
    const { category } = props
    return (
        <>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
                data={category.movies}
                renderItem={({ item }) => (
                    <Image style={styles.image} source={{ uri: item.poster }} />
                )}
                horizontal
            />
        </>
    );
}



export default HomeCategory;
