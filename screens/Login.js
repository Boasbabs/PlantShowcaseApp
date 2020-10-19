import React, { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "email@email.com";
const VALID_PASSWORD = "password";

const Login = ({ navigation, ...props }) => {
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState(VALID_EMAIL);
  const [passwordValue, setPasswordValue] = useState(VALID_PASSWORD);
  const [errors, setErrors] = useState([]);

  const handleLogin = () => {
    let _errors = [];
    Keyboard.dismiss();
    setLoading(true);

    if (emailValue !== VALID_EMAIL) {
      _errors.push("email");
    }
    if (passwordValue !== VALID_PASSWORD) {
      _errors.push("password");
    }

    setErrors(_errors);
    setLoading(false);

    if (!_errors.length) {
      navigation.navigate("Browse");
    }
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior={Platform.OS == "ios" ? "padding" : "height"}>
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Login
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={emailValue}
            onChangeText={(text) => setEmailValue(text)}
          />
          <Input
            secure={true}
            label="Password"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={passwordValue}
            onChangeText={(text) => setPasswordValue(text)}
          />
          <Button gradient onPress={() => handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Login
              </Text>
            )}
          </Button>

          <Button onPress={() => navigation.navigate("Forgot")}>
            <Text gray caption center>
              Forgot your password?
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
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

export default Login;
