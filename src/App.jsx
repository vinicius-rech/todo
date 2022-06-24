import {
  Accordion,
  Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AddIcon, ArrowUpIcon } from "@chakra-ui/icons";
import React, { useEffect, useContext } from "react";
import { TasksProvider } from "./contexts/Tasks";
import TaskListing from "./components/TaskListing";
import Task from "./components/Task";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <VStack>
      <Container maxW="100%">
        <TasksProvider>
          <Accordion allowMultiple={false}>
            <TaskListing />
          </Accordion>
        </TasksProvider>
        <Modal
          closeOnOverlayClick={false}
          blockScrollOnMount={true}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Nova Tarefa</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TasksProvider>
                <Task isNewTask={true} />
              </TasksProvider>
            </ModalBody>
          </ModalContent>
        </Modal>
        <ArrowUpIcon
          position="fixed"
          left="3vw"
          bottom="3vw"
          width="50px"
          height="50px"
          padding="10px"
          backgroundColor="gray.900"
          borderRadius="50%"
          color="gray.50"
          cursor="pointer"
          _hover={{ bg: "gray.600" }}
          onClick={scrollTop}
        />
        <AddIcon
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
          onClick={onOpen}
        />
      </Container>
    </VStack>
  );
}

export default App;
