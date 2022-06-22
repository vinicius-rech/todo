import { Accordion, Container, Skeleton, VStack } from "@chakra-ui/react";
import { AddIcon, ArrowUpIcon } from "@chakra-ui/icons";
import React, { useEffect, useContext } from "react";
import { TasksProvider } from "./contexts/Tasks";
import TaskListing from "./components/TaskListing";
import AddNewTask from "./components/AddNewTask";
import Task from "./components/Task";

function App() {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <VStack>
      <Container maxW="x1">
        <Accordion allowMultiple={false}>
          <TasksProvider>
            <Task internalKey={999} />
            {/* <TaskListing /> */}
          </TasksProvider>
          {/* <AddNewTask icon={} /> */}
          {/* <Task /> */}

          {/* {!tasks ? (
            <Skeleton width="100%" height="3px" />
          ) : (
            <div>
              <h1>Tarefas</h1>
              <TasksProvider>
                <Task key={index}  />
              </TasksProvider>
            </div>
          )} */}
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
