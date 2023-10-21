import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({ lastBook, totalPagesRead, averagePages }) => {
  return (
    <View>
      <Text>Last Book: {lastBook ? lastBook.title : 'N/A'}</Text>
      <Text>Total Pages Read: {totalPagesRead}</Text>
      <Text>Average Pages: {averagePages ? averagePages.toFixed(2) : 'N/A'}</Text>
    </View>
  );
};

export default HomeScreen;
