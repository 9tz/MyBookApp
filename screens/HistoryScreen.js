import React from 'react';
import { View, Text } from 'react-native';

const HistoryScreen = ({ lastBooks }) => {
  return (
    <View>
      <Text>Last Three Books:</Text>
      {lastBooks.map((book, index) => (
        <Text key={index}>{book.title} by {book.author}</Text>
      ))}
    </View>
  );
};

export default HistoryScreen;
