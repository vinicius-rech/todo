import { Accordion, Container, VStack } from "@chakra-ui/react";
import { AddIcon, ArrowUpIcon } from "@chakra-ui/icons";
import React from "react";
import Task from "./components/Task/Task";
import NewTask from "./components/Task/Task";

function App() {
  function scrollTop() {
    window.scrollTo(0,0)
  }
  return (
    <VStack>
      <Container>
        <Accordion allowMultiple={false}>
          <NewTask title="Nova Tarefa" icon={<AddIcon />} />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </Accordion>
        <ArrowUpIcon
          position="fixed"
          right="3vw"
          bottom="3vw"
          width="50px"
          height="50px"
          padding="10px"
          backgroundColor="green.400"
          borderRadius="50%"
          color="gray.50"
          cursor="pointer"
          _hover={{ bg: "green.300" }}
          onClick={scrollTop}
        />
      </Container>
    </VStack>
  );
}

export default App;
