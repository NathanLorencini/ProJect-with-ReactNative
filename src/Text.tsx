import React from "react";
import{Text, StyleSheet} from "react-native"

export default function TextBold({ informText }){
    return <Text style={styles.container}>{ informText }</Text>
}



const styles = StyleSheet.create({
    container: {
        fontFamily : "Montserrat-Bold",
        fontWeight: "bold",
        color: "white",
        fontSize: 16
    }
})