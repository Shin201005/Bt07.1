import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

export default function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const phoneRegex = /^0\d{9}$/;

  const onChangePhone = (text: string) => {
    const digitsOnly = text.replace(/[^\d]/g, "");
    setPhone(digitsOnly);

    if (phoneRegex.test(digitsOnly)) {
      setError("");
    } else {
      setError("Không hợp lệ");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.safe}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Đăng nhập</Text>

          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Nhập số điện thoại</Text>
            <Text style={styles.sectionDesc}>
              Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại
              OneHousing Pro
            </Text>

            <TextInput
              value={phone}
              onChangeText={onChangePhone}
              placeholder="Nhập số điện thoại của bạn"
              keyboardType="number-pad"
              maxLength={10}
              style={styles.input}
              placeholderTextColor="#9AA0A6"
            />

            <View style={styles.resultBox}>
              <View style={styles.resultBox}>
  {error === "" && phone !== "" && (
    <Text style={styles.valid}>Hợp lệ: {phone}</Text>
  )}

  {error !== "" && (
    <Text style={styles.invalid}>Không hợp lệ: {phone}</Text>
  )}
</View>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tiếp tục</Text>
          </TouchableOpacity>

          <Text style={styles.hint}>
            Nhập số điện thoại gồm 10 chữ số, bắt đầu bằng số 0.
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFFFFF" },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 18,
  },
  card: {
    paddingVertical: 8,
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  sectionDesc: {
    fontSize: 13,
    lineHeight: 18,
    color: "#6B7280",
    marginBottom: 16,
    maxWidth: 330,
  },
  input: {
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB",
    fontSize: 16,
    color: "#111827",
    paddingVertical: 8,
  },
  resultBox: {
    marginTop: 10,
    gap: 4,
  },
  valid: {
    color: "green",
    fontSize: 14,
  },
  invalid: {
    color: "red",
    fontSize: 14,
  },
  button: {
    height: 48,
    borderRadius: 8,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
  },
  hint: {
    marginTop: 10,
    fontSize: 12,
    color: "#9CA3AF",
  },
});