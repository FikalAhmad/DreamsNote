import { Button, Flex, NumberInput, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";

const Pomodoro = () => {
  const [timer, setTimer] = useState("00:00");
  let [inputTimer, setInputTimer] = useState("");
  const [value, setValue] = useState("");

  const formatTime = (minutes) => {
    var remainingSeconds = minutes % 60;

    setTimer(
      (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (remainingSeconds < 10 ? "0" : "") +
        remainingSeconds
    );
  };

  useEffect(() => {
    const interval = setInterval(function () {
      inputTimer--;
      if (inputTimer < 0) {
        clearInterval(interval);
      } else {
        formatTime(inputTimer);
      }
    }, 1000);
  }, [inputTimer]);
  return (
    <Stack align="center">
      <Text>{timer}</Text>
      <NumberInput
        value={value}
        onChange={setValue}
        label="Set Timer"
        description="Time (minutes)"
        placeholder="0"
      />
      <Flex>
        <Button onClick={() => setInputTimer(value)}>Start</Button>
      </Flex>
    </Stack>
  );
};

export default Pomodoro;
