
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
function ShoppingList() {

  const [items, setItems] = useState([
  ]);
  return (
    <View style={styles.container}>
      <h1>Build your grocery list!</h1>
      <ListInput handleSubmit={(item) => {
        setItems(items.concat(item));
      }}
      />
      <List style={styles.list} items={items} handleClick={(item) => {
        setItems(items.slice().filter((i) => i !== item));
      }} />

    </View>
  )
}

const ListItem = (props) => (
  <li onClick={() => props.handleClick(props.name)}>{props.name}</li>
)

const List = (props) => {
  const [isSelected, setSelection] = useState(false);
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      handleClick={props.handleClick}
    />
  ))
  return (
    <View style={styles.list}>
      {items}
    </View>
  )
}

const ListInput = (props) => {
  const [value, setValue] = useState('')
  return (
    <View style={styles.input}>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit(value);
        setValue('');
      }}>
        <input type="text" value={value} placeholder="Add item" onChange={e => setValue(e.target.value)} />
      </form>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  input: {
    alignItems: "center",
    backgroundColor: "#fff",

  },
  list: {
    border: 2,
    alignItems: "right"
  },
  text: {
    fontSize: 18,
    color: "#466D1D",
    fontWeight: "bold",
    alignSelf: "center",
    textDecorationLine: 'underline',
    fontFamily: 'Yatra-One',
    fontSize: 20

  },
});
export default ShoppingList;