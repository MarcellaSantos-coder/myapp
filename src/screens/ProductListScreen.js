import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import api from "../services/api";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const navigation = useNavigation();

const [products, setProducts] = useState([]);
useEffect(() => {
  async function fetchProducts() {
    const response = await api.get("/products/category/mens-shirts");
    setProducts(response.data.products);
  }

  fetchProducts();
}, []);

<FlatList
  data={products}
  keyExtractor={(item) => item.id.toString()}
 renderItem={({ item }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("Details", { id: item.id })}
  >
    <ProductCard product={item} />
  </TouchableOpacity>
)}
/>
