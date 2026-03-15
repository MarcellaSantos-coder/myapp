import React from "react";
import { View, Text, Image } from "react-native";

export default function ProductCard({ product }) {
  return (
    <View>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: 100, height: 100 }}
      />

      <Text>{product.title}</Text>

      <Text>${product.price}</Text>
    </View>
  );
}
