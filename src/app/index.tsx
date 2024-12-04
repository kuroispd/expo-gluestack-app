import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { Box } from "@components/ui/box";
import { Button, ButtonText, ButtonSpinner, ButtonGroup } from "@components/ui/button";
import { Center } from "@components/ui/center";
import { Text } from "@components/ui/text";
import { Icon, AddIcon, CloseCircleIcon } from "@components/ui/icon";
import { VStack } from "@components/ui/vstack";

/**
 * issue: ButtonIcon could not use Icon components for as prop
 * 
 */
export default function Index() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

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
    <Box className="flex items-center justify-center h-screen">
      <VStack space="md">
        <Box className="w-auto h-auto">
          <Center>
            {!isPressed ? (
              <Button onPress={pressed} action="positive">
                <Icon as={AddIcon} className="text-white w-5 h-5" />
                <ButtonText>Press me!</ButtonText>
              </Button>
            ) : (
              <Button className="bg-green-900" action="positive" disabled={true}>
                <ButtonSpinner />
                <ButtonText className="font-medium text-sm ml-2">Please wait...</ButtonText>
              </Button>
            )}
            <Text>You pressed the button {count} times</Text>
          </Center>
        </Box>
        <Box className="h-[100px] w-auto">
          <Center>
            {count >= 1 && (
              <Button onPress={resetCount} className="w-[200px]" action="negative">
                <Icon as={CloseCircleIcon} className="text-white w-5 h-5" />
                <ButtonText>Reset Count</ButtonText>
              </Button>
            )}
          </Center>
        </Box>
      </VStack>
    </Box>
  );
}