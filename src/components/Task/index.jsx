import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Grid,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  AccordionIcon,
  Textarea,
  Alert,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useToast,
} from "@chakra-ui/react";

import React, { useContext, useState, useEffect } from "react";
import { TasksContext } from "../../contexts/Tasks";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

function Task(props) {
  const { submit, error } = useContext(TasksContext);
  const [title, updateTitle] = useState(props.title ?? "");
  const [startDate, updateStartDate] = useState(props.startDate ?? "");
  const [endDate, updateEndDate] = useState(props.endDate ?? "");
  const [description, updateDescription] = useState(props.description ?? "");
  const [internalKey, updateInternalKey] = useState(props.internalKey ?? null);
  const toast = useToast();

  const _hover = { bg: "red.400", color: "gray.50" };
  const _expanded = { bg: "red.500", color: "gray.50" };

  const formReset = () => {
    updateTitle("");
    updateStartDate("");
    updateEndDate("");
    updateDescription("");
  };

  useEffect(() => {
    switch (error) {
      case "hasError":
        toast({
          title: "Ops!",
          description: "Por favor preencha todos os campos!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        break;
      case "hasNoError":
        toast({
          title: "=)",
          description: "Nova tarefa adicionada com sucesso",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        break;

      default:
        null;
        break;
    }
  }, [error]);

  return (
    <AccordionItem key={internalKey}>
      <h2>
        <AccordionButton _hover={_hover} _expanded={_expanded}>
          <Box flex="1" textAlign="left">
            {!title ? "Nova Tarefa" : title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            submit([title, startDate, endDate, description]);
          }}
        >
          <Grid templateColumns="1fr" rowGap="10px">
            <InputGroup>
              <InputLeftAddon children="Título" />
              <Input
                name="title"
                type="text"
                required
                onChange={(e) => updateTitle(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftAddon children="Data início" />
              <Input
                name="startDate"
                type="date"
                required
                onChange={(e) => updateStartDate(e.target.value)}
              />
              <InputLeftAddon children="Data de término" />
              <Input
                name="endDate"
                type="date"
                required
                onChange={(e) => updateEndDate(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <Textarea
                name="description"
                placeholder="Descrição"
                required
                onChange={(e) => updateDescription(e.target.value)}
              />
            </InputGroup>
            <Grid gridTemplateColumns="1fr 1fr" columnGap={5}>
              {!title ? null : (
                <Button colorScheme="red" leftIcon={<DeleteIcon />}>
                  Deletar
                </Button>
              )}
              <Button
                type="submit"
                colorScheme="green"
                leftIcon={<CheckIcon />}
              >
                Salvar
              </Button>
            </Grid>
          </Grid>
        </form>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default Task;
