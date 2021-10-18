import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'juice'},
  ]);

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please Enter an Item', {
        text: 'OK',
      });
    } else {
      setItems(prevItems => {
        return [{id: Math.floor(Math.random() * 10), text}, ...prevItems];
      });
    }
  };

  const deleteItem = id => {
    setItems(prevItem => {
      return prevItem.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
