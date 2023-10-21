import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/homescreen';
import BookForm from './components/bookform';
import HistoryScreen from './screens/HistoryScreen';
import GenreScreen from './screens/GenreScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [lastBook, setLastBook] = useState(null);
  const [totalPagesRead, setTotalPagesRead] = useState(0);
  const [numBooks, setNumBooks] = useState(0);
  const [lastBooks, setLastBooks] = useState([]);
  const [genreData, setGenreData] = useState({});

  const addBook = (bookDetails) => {
    setLastBook(bookDetails);
    setTotalPagesRead(totalPagesRead + bookDetails.numPages);
    setNumBooks(numBooks + 1);

    setLastBooks([bookDetails, ...lastBooks.slice(0, 2)]);

    const updatedGenreData = { ...genreData };
    if (updatedGenreData[bookDetails.genre]) {
      updatedGenreData[bookDetails.genre] += 1;
    } else {
      updatedGenreData[bookDetails.genre] = 1;
    }
    setGenreData(updatedGenreData);
  };

  const averagePages = numBooks === 0 ? 0 : totalPagesRead / numBooks;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home">
          {() => <HomeScreen lastBook={lastBook} totalPagesRead={totalPagesRead} averagePages={averagePages} />}
        </Tab.Screen>
        <Tab.Screen name="Add Book">
          {() => <BookForm addBook={addBook} />}
        </Tab.Screen>
        <Tab.Screen name="History">
          {() => <HistoryScreen lastBooks={lastBooks} />}
        </Tab.Screen>
        <Tab.Screen name="Genres">
          {() => <GenreScreen genreData={genreData} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
