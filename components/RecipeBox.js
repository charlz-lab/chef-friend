import React from "react"
import { StyleSheet, View } from "react-native"

export default function RecipeBox() {
    return (
        <article className="Card">
            <div className="col-2">
                <img alt="Donuts" src="https://via.placeholder.com/200x200" />
                <h2>Cinnamon Sugar Donuts</h2>
                <div className="col-2 pantry-status have-all">
                    <span className="ing-count">3/4 Ingredients</span>
                </div>
                <button onClick="window.location.href='https://w3docs.com';">More Info</button>
            </div>
        </article>
    );
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    content: {
        marginHorizontal: 18,
        marginVertical: 20,
    }
})