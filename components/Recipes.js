import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from "react-native";
import RecipeBox from './RecipeBox';

export default function Recipes() {
    return (
        <View>
            <h1>Saved Recipes</h1>
            <RecipeBox />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        border: "black"
    },
});