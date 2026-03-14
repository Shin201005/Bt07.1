import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function HomePage() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Home Page</Text>
        <Text style={styles.text}>Bạn đã đăng nhập thành công.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: "#6B7280",
  },
});