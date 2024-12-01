import React, { useState } from "react";
import { Text, View } from "react-native";
import { Box } from "@/components/ui/box";
import { Button, ButtonText, ButtonSpinner, ButtonGroup, ButtonIcon } from "@/components/ui/button";
import { AddIcon, CloseCircleIcon } from "@/components/ui/icon";
import { StyleSheet } from "react-native";
import colors, { blue, gray } from "tailwindcss/colors";

export default function Index() {
  const [isPressed, setIsPressed] = useState(false);
  const [count, setCount] = useState(0);

  const pressed = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      setCount(count + 1);
    }, 1000);
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <View
      style={styles.container}
    >
      <Box style={styles.main}>
        <ButtonGroup>
          {!isPressed ? (
            <Button onPress={pressed} style={styles.button}>
              <ButtonIcon as={AddIcon} className="ml-2" />
              <ButtonText>Press me!</ButtonText>
            </Button>
          ) : (
            <Button className="p-3" style={styles.button}>
              <ButtonSpinner color={colors.gray[400]} />
              <ButtonText className="font-medium text-sm ml-2">Please wait...</ButtonText>
            </Button>
          )}
        </ButtonGroup>
        <Text style={styles.text}>You pressed the button {count} times</Text>
      </Box>
      <Box style={styles.counter}>
      {count >= 1 && (
        <Button onPress={resetCount}>
          <ButtonIcon as={CloseCircleIcon} className="ml-2" />
          <ButtonText>Reset Count</ButtonText>
        </Button>
      )}
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main : {
    justifyContent: "center",
    alignItems: "center",
  },
  button : {
  },
  text: {
    fontSize: 24,
    marginTop: 20
  },
  counter: {
    fontSize: 24,
    marginTop: 20,
  }
});