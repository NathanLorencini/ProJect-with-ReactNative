import React from "react";
import TextCustom from "../../../components/Text";
import { View, Image, StyleSheet } from "react-native";

export default function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image}></Image>
      <TextCustom style={styles.name}>{name}</TextCustom>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
