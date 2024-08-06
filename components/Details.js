import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

export default function ({ route, navigation }) {
    const { title, content, stock } = route.params;

    React.useEffect(() => {
        navigation.setOptions({ title });
    });

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text>{content} and stock is {stock}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }