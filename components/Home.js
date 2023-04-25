import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import Recipes from "./Recipes";
import RecipeBox from "./RecipeBox";
export default function Home() {
    const navigation = useNavigation();
    const onRecipesPressed = () => {
        console.warn("Recipes");
        navigation.navigate("Recipes");
    };
    const onShoppingListPressed = () => {
        console.warn("ShoppingList");
        navigation.navigate("Shopping");
    };
    return (
        <View>
            <View style={styles.container}>
                <h1 style={styles.header}> Welcome to Chef's Friend </h1>
                <View style={styles.buttons}>

                    <TouchableOpacity style={styles.button} onPress={onRecipesPressed}>
                        <Text style={styles.text}>Recipes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onShoppingListPressed}>
                        <Text style={styles.text}>Grocery List</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.recent}>
                <h1>Recent Recipes</h1>
                <RecipeBox />
            </View>
        </View>
    );
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
    buttons: {
        flexDirection: 'row',
        padding: 10,
    },
    button: {
        color: "#fff",
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    recent: {
        backgroundColor: '#F5F5DC',
        alignItems: "left"
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