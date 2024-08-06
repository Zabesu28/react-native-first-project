import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles';

export default function Home({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Button
          title="Xenoblade 1"
          onPress={() => navigation.navigate('Details', 
            { 
              title: 'Xenoblade 1',
              content: 'Le premier',
              stock: 1

            })}
        />
        <Button
          title="Xenoblade 2"
          onPress={() => navigation.navigate('Details', 
            { 
              title: 'Xenoblade 2',
              content: 'Le plus impressionnant',
              stock: 0

            })}
        />
        <Button
          title="Xenoblade 3"
          onPress={() => navigation.navigate('Details', 
            { 
              title: 'Xenoblade 3',
              content: 'Le meilleur',
              stock: 30

            })}
        />
      </View>
    );
  }