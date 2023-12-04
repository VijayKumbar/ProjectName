import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const AutoCompleteExample = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([
    'Apple',
    'Abple',
    'Acple',
    'Apdle',
    'Aggle',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Lemon',
    'Orange',
    'Peach',
    'Pear',
    'Watermelon',
  ]);

  const findData = (query) => {
    if (query === '') {
      return [];
    }

    const regex = new RegExp(`${query.trim()}`, 'i');
    return data.filter((item) => item.search(regex) >= 0);
  };

  const renderSuggestions = (item) => (
    <Text style={{ padding: 10, fontSize: 16 }}>{item}</Text>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Autocomplete
        data={findData(query)}
        defaultValue={query}
        onChangeText={(text) => setQuery(text)}
        renderItem={({ item }) => renderSuggestions(item)}
        keyExtractor={(item) => item.toString()}
        placeholder="Enter a fruit name"
      />
    </View>
  );
};

export default AutoCompleteExample;
