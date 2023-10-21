import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const BookForm = ({ addBook }) => { // Receive addBook as a prop
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('Fiction');
  const [numPages, setNumPages] = useState('');

  const [lastBook, setLastBook] = useState(null);
  const [totalPagesRead, setTotalPagesRead] = useState(0);
  const [numBooks, setNumBooks] = useState(0);

  const handleSubmit = () => {
    if (title && author && genre && numPages) {
      const bookDetails = {
        title,
        author,
        genre,
        numPages: parseInt(numPages),
      };

      setLastBook(bookDetails);
      setTotalPagesRead(totalPagesRead + bookDetails.numPages);
      setNumBooks(numBooks + 1);

      setTitle('');
      setAuthor('');
      setGenre('Fiction');
      setNumPages('');

      // Use the addBook function from props to update the state in the parent component
      addBook(bookDetails);
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  const averagePages = numBooks === 0 ? 0 : totalPagesRead / numBooks;
  return (
    <View style={bookFormStyles.container}>
      <TextInput
        style={bookFormStyles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        style={bookFormStyles.input}
        placeholder="Author"
        value={author}
        onChangeText={text => setAuthor(text)}
      />
      <Picker
        style={bookFormStyles.input}
        selectedValue={genre}
        onValueChange={(itemValue, itemIndex) => setGenre(itemValue)}
      >
        <Picker.Item label="Fiction" value="Fiction" />
        <Picker.Item label="Non-Fiction" value="Non-Fiction" />
        <Picker.Item label="Mystery" value="Mystery" />
        <Picker.Item label="Science Fiction" value="Science Fiction" />
        <Picker.Item label="Romance" value="Romance" />
        <Picker.Item label="Fantasy" value="Fantasy" />
        <Picker.Item label="Biography" value="Biography" />
      </Picker>
      <TextInput
        style={bookFormStyles.input}
        placeholder="Number of Pages"
        value={numPages}
        onChangeText={text => setNumPages(text)}
        keyboardType="numeric"
      />
     <Button title="Submit" style={bookFormStyles.button} onPress={handleSubmit} />
      <Text>Total Pages Read: {totalPagesRead}</Text>
      <Text>Average Pages: {averagePages.toFixed(2)}</Text>
    </View>
  );
};

const bookFormStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default BookForm;
