import React from "react";
import{Text, StyleSheet, Image, Dimensions, View} from "react-native"

import topo from '../assets/topo.png';
import logo from '../assets/logo.png';

const width =Dimensions.get('screen').width;

export default function Cesta(){
    return <>
    <Image source={topo} style={styles.topo}></Image>
    <Text style={styles.title}>Detail of Basket</Text>
    
    <View style={styles.basket}>

        <Text style={styles.subTitle}>Basket of vegetables</Text>

        <View style={styles.farm}>
        <Image source={logo} style={styles.imagemFarm}/>
        <Text style={styles.namefarm}>Jenny Jack Farm</Text>
        </View>

        
        
        <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius suscipit magna, sit amet varius odio vestibulum at. 
        </Text>
        <Text style={styles.price}>R$ 40,00</Text>
    </View>
    
    </>
}

const styles = StyleSheet.create({
topo:{
    width: "100%",
    height: 578/768 * width
}, 

title:{
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold", 
    padding: 50
},

basket:{
paddingVertical: 8,
paddingHorizontal: 16
},

subTitle:{
color: "#464646",
fontSize: 26,
lineHeight: 42,
fontWeight: "bold"
},

farm:{
flexDirection: "row",
gap: 12
},

imagemFarm:{
width: 32,
height: 32
},

namefarm:{
fontSize: 16,
lineHeight: 26
},

description:{
color: "#A3A3A3",
fontSize: 16,
lineHeight: 26
},

price:{
color: "#2A9F85",
fontWeight: "bold",
fontSize: 26,
lineHeight: 42,
marginTop: 8
},

});