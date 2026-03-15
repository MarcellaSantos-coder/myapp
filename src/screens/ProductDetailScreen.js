import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import api from "../services/api";

export default function ProductDetailScreen({ route }) {

  const { id } = route.params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 20 }}>

      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: 200, height: 200 }}
      />

      <Text style={{ fontSize: 20 }}>
        {product.title}
      </Text>

      <Text>
        {product.description}
      </Text>

      <Text>
        Preço: ${product.price}
      </Text>

      <Text>
        Desconto: {product.discountPercentage}%
      </Text>

    </View>
  );
}


