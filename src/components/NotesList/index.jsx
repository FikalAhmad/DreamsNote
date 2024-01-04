// import { useSelector } from "react-redux";

import { Button, Card, SimpleGrid, Text } from "@mantine/core";

const NotesList = () => {
  // const notes = useSelector((state) => state.notes);

  // const renderedNotes = () => {
  //   return notes.map((note) => (
  //     <div className="card--item" key={note.id}>
  //       <Card
  //         noteid={note.id}
  //         title={note.title}
  //         content={note.content}
  //         date={note.createdAt}
  //       />
  //     </div>
  //   ));
  // };

  return (
    <div>
      <Text fz="32px" style={{ fontFamily: "PlusJakartaBold" }}>
        Your Notes
      </Text>
      <SimpleGrid cols={{ base: 1, sm: 2 }} pt={20}>
        <Card shadow="sm" padding="lg" radius="md" withBorder maw={750}>
          <Text
            pb={15}
            fw={500}
            fz={18}
            style={{ fontFamily: "PlusJakartaBold" }}
          >
            Norway Fjord Adventures
          </Text>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder maw={750}>
          <Text
            pb={15}
            fw={500}
            fz={18}
            style={{ fontFamily: "PlusJakartaBold" }}
          >
            Norway Fjord Adventures
          </Text>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder maw={750}>
          <Text
            pb={15}
            fw={500}
            fz={18}
            style={{ fontFamily: "PlusJakartaBold" }}
          >
            Norway Fjord Adventures
          </Text>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="md" withBorder maw={750}>
          <Text
            pb={15}
            fw={500}
            fz={18}
            style={{ fontFamily: "PlusJakartaBold" }}
          >
            Norway Fjord Adventures
          </Text>

          <Text size="sm" c="dimmed">
            With Fjord Tours you can explore more of the magical fjord
            landscapes with tours and activities on and around the fjords of
            Norway
          </Text>

          <Button color="blue" fullWidth mt="md" radius="md">
            Book classic tour now
          </Button>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default NotesList;
