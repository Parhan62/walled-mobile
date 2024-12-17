import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";
import Button from "../components/Button";
import { Link, useRouter } from "expo-router";
import { z } from "zod";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

export default function App() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errorMsg, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleInputChange = (key, value) => {
    setForm({ ...form, [key]: value });
    try {
      LoginSchema.pick({ [key]: true }).parse({ [key]: value });
      setErrors((prev) => ({ ...prev, [key]: "" }));
    } catch (err) {
      setErrors((prev) => ({ ...prev, [key]: err.errors[0].message }));
    }
  };

  const handleSubmit = async () => {
    try {
      LoginSchema.parse(form);

      const res = await axios.post(
        "https://6776-182-3-53-7.ngrok-free.app/auth/login",
        form
      );
      await AsyncStorage.setItem("token", res.data.data.token);
      router.replace("/(home)");

    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setServerError(err.response.data.message || "An error occurred");
        } else if (err.request) {
          setServerError("Network error. Please try again later.");
          console.error("Network Error:", err.request);
        } else {
          setServerError("An unexpected error occurred.");
          console.error("Request Setup Error:", err.message);
        }
      } else if (err?.errors) {
        const errors = {};
        err.errors.forEach((item) => {
          const key = item.path[0];
          errors[key] = item.message;
        });
        setErrors(errors);
      } else {
        setServerError("An unknown error occurred.");
        console.error("Unhandled Error:", err);
      }
    }
  };

  return (
    <View style={styles.container}>
      {serverError && <Text>{serverError}</Text>}
      <StatusBar style="auto" hidden />
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      {errorMsg.email ? (
        <Text marginBottom="10" style={styles.errorMsg}>
          {errorMsg.email}
        </Text>
      ) : null}
      <TextInput
        marginBottom="15"
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        onChangeText={(text) => handleInputChange("email", text)}
        value={form.email}
      />

      {errorMsg.password ? (
        <Text marginBottom="10" style={styles.errorMsg}>
          {errorMsg.password}
        </Text>
      ) : null}
      <TextInput
        marginBottom="80"
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
        onChangeText={(text) => handleInputChange("password", text)}
        value={form.password}
      />

      <Button handlePress={handleSubmit} text="Login" />

      <Text marginTop="15">
        Don't have account?
        <Link href="/register" style={styles.register}>
          {" "}
          Register here
        </Link>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    marginBottom: 100,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 30,

    backgroundColor: "#f9f9f9",
    fontsize: 16,
  },
  register: {
    color: "#19918f",
  },
  errorMsg: {
    color: "red",
    fontSize: 12,
    width: "100%",
    textAlign: "left",
    marginTop: 5,
  },
});
