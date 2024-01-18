import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Details from "./components/Details";
import Topo from "./components/Topo";
import Item from "./components/item";
import TextCustom from "../../components/Text";

export default function Cesta({ topo, details, itens }) {
  return (
    <>
      <FlatList
        data={itens.list}
        renderItem={Item}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />

              <View style={styles.basket}>
                <Details {...details} />
                <TextCustom style={styles.title}>{itens.title}</TextCustom>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});
