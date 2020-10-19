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

const SignUp = ({ navigation, ...props }) => {
  const [username, setUsername] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);
  const [errors, setErrors] = useState([]);

  const handleSignup = () => {
    let _errors = [];
    Keyboard.dismiss();
    setLoading(true);

    if (!emailValue) {
      _errors.push("email");
    }
    if (!passwordValue) {
      _errors.push("password");
    }
    if (!username) {
      errors.push("username");
    }

    setErrors(_errors);
    setLoading(false);

    if (!_errors.length) {
      Alert.alert(
        "Success!",
        "Your account has been created",
        [
          {
            text: "Continue",
            onPress: () => {
              navigation.navigate("Browse");
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView
      style={styles.signup}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <Block padding={[theme.sizes.base, theme.sizes.base * 2]}>
        <Text h1 bold>
          Sign Up
        </Text>
        <Text h5 gray>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, 
        </Text>
        <Block middle>
          <Input
            label="Username"
            error={hasErrors("username")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={emailValue}
            onChangeText={(text) => setEmailValue(text)}
          />
          <Input
            secure
            label="Password"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={passwordValue}
            onChangeText={(text) => setPasswordValue(text)}
          />

          <Button gradient onPress={() => handleSignup()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Create account
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
  signup: {
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

export default SignUp;
