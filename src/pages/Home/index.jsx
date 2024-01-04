import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  Stack,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Home = ({ page }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fz="24px" fw="bold">
            Dreams Note
          </Text>
          <Group>
            <Text>Haikal</Text>
            <Avatar src="./src/assets/img/kalprofile.png" />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Stack justify="flex-start" gap="xs">
          <Button
            variant="subtle"
            size="md"
            radius="xs"
            color="rgba(0, 0, 0, 1)"
            href="/"
            component="a"
          >
            Notes
          </Button>
          <Button
            variant="subtle"
            size="md"
            radius="xs"
            color="rgba(0, 0, 0, 1)"
          >
            Todo List
          </Button>
          <Button
            variant="subtle"
            size="md"
            radius="xs"
            color="rgba(0, 0, 0, 1)"
            component="a"
            href="/pomodoro"
          >
            Pomodoro Timer
          </Button>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>{page}</AppShell.Main>
    </AppShell>
  );
};

export default Home;
