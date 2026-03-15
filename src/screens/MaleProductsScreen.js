import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Button
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import api from "../services/api";

export default function MaleProductsScreen() {

  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/products/category/mens-shirts");
        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={{ padding: 10 }}>

      <Button
        title="Logout"
        onPress={() => navigation.navigate("Login")}
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Details", { id: item.id })
            }
          >

            <View
              style={{
                backgroundColor: "#fff",
                padding: 10,
                marginVertical: 10,
                borderRadius: 8
              }}
            >

              <Image
                source={{ uri: item.thumbnail }}
                style={{ width: 100, height: 100 }}
              />

              <Text>{item.title}</Text>

              <Text>${item.price}</Text>

            </View>

          </TouchableOpacity>
        )}
      />

    </View>
  );
}

