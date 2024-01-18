import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import TextCustom from "../../../components/Text";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function Topo({ title }) {
  return (
    <>
      <Image source={topo} style={styles.topo}></Image>
      <TextCustom style={styles.title}>{title}</TextCustom>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
    fontFamily: "Montserrat",
  },

  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 20,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 50,
  },
});
