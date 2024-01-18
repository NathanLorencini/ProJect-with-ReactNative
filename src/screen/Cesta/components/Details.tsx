import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";

import TextCustom from "../../../components/Text";

export default function Details({
  subTitle,
  logoFarm,
  nameFarm,
  description,
  price,
  button,
}) {
  return (
    <>
      <TextCustom style={styles.subTitle}>{subTitle}</TextCustom>

      <View style={styles.farm}>
        <Image source={logoFarm} style={styles.imagemFarm} />
        <TextCustom style={styles.namefarm}>{nameFarm}</TextCustom>
      </View>

      <TextCustom style={styles.description}>{description}</TextCustom>
      <TextCustom style={styles.price}>{price}</TextCustom>

      <TouchableOpacity style={styles.button}>
        <TextCustom style={styles.textButton}>{button}</TextCustom>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },

  farm: {
    flexDirection: "row",
    gap: 12,
  },

  imagemFarm: {
    width: 32,
    height: 32,
  },

  namefarm: {
    fontSize: 16,
    lineHeight: 26,
  },

  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },

  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },

  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },

  textButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
