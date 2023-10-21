# MyBookApp

MyBookApp is a mobile application developed using React Native that helps you track the books you've read, categorize them by genre, and view statistics related to your reading habits.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Record and store book details, including title, author, genre, and number of pages.
- Keep track of your total pages read and average pages per book.
- View your last three books read.
- Explore a genre screen showing the total number of books read in each category.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- A working development environment for React Native. You can set it up following the [React Native Getting Started guide](https://reactnative.dev/docs/environment-setup).

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/9tz/MyBookApp
   cd mybookapp
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Run the app on your desired platform:

   - For Android:
     ```bash
     npm run android
     ```
   - For iOS:
     ```bash
     npm run ios
     ```

5. The development server will open in your browser. Use the provided QR code to open the app on your device using the Expo Go app.

## Project Structure

- `App.js`: The main application file.
- `screens/`: Contains the application screens.
- `components/`: Contains app components.
- `package.json`: Defines project dependencies and scripts.
- `README.md`: You are here.

## Dependencies

- @react-native-community/viewpager: ^5.0.11
- @react-native-picker/picker: ^2.5.1
- @react-navigation/bottom-tabs: ^6.5.10
- @react-navigation/native: ^6.1.9
- @react-navigation/stack: ^6.3.19
- expo: ~49.0.13
- expo-status-bar: ~1.6.0
- react: 18.2.0
- react-native: 0.72.5
- react-native-gesture-handler: ^2.13.2
- react-native-reanimated: ^3.5.4
- react-native-safe-area-context: ^4.7.2
- react-native-screens: ^3.25.0
- react-native-vector-icons: ^10.0.0

## Usage

1. Open the app.
2. Add books you've read, providing details such as title, author, genre, and the number of pages.
3. Check the home screen for information about your last book, total pages read, and average pages per book.
4. Navigate to the history screen to see your last three books.
5. Explore the genre screen to view the total number of books read in each category.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed information on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
