import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GenreScreen = ({ genreData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Books Read by Genre:</Text>
      {Object.entries(genreData).map(([genre, count]) => (
        <View key={genre} style={styles.genreItem}>
          <Text>{genre}: {count}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  genreItem: {
    backgroundColor: 'lightgray',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default GenreScreen;
