import React, { useState } from "react";
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const Forgot = ({ navigation, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState(null);
  const [errors, setErrors] = useState([]);

  const VALID_EMAIL = "email@email.com";

  const handleForgot = () => {
    let _errors = [];
    Keyboard.dismiss();
    setLoading(true);

    if (emailValue !== VALID_EMAIL) {
      _errors.push("email");
    }

    setErrors(_errors);
    setLoading(false);

    if (!errors.length) {
      Alert.alert(
        "Password sent!",
        "Please check you email.",
        [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        "Error",
        "Please check you Email address.",
        [{ text: "Try again" }],
        { cancelable: false }
      );
    }
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView
      style={styles.forgot}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
        <Text h1 bold>
          Forgot Password
        </Text>
        <Text h5 gray>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, 
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={emailValue}
            onChangeText={(text) => setEmailValue(text)}
          />

          <Button gradient onPress={() => handleForgot()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Reset Password
              </Text>
            )}
          </Button>

          <Button onPress={() => navigation.navigate("Login")}>
            <Text gray caption center>
              Back to Login
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  forgot: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

export default Forgot;
