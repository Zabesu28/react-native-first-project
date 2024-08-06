import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

export default function ({ route, navigation }) {
    const { title } = route.params;

    React.useEffect(() => {
        navigation.setOptions({ title });
    });

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        <Text>News page</Text>
      </View>
    );
  }