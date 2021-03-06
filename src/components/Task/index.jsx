import { v4 as uuidv4 } from "uuid";
import React, { useContext, useState, useEffect } from "react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { TasksContext } from "../../contexts/Tasks";
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
  useToast,
  Progress,
} from "@chakra-ui/react";

function Task(props) {
  const { submit, errorStatus, success, setSuccess } = useContext(TasksContext);
  const [isNewTask] = useState(props.isNewTask ?? false);

  // Form inputs
  const [title, updateTitle] = useState(props.title ?? "");
  const [startDate, updateStartDate] = useState(props.startDate ?? "");
  const [endDate, updateEndDate] = useState(props.endDate ?? "");
  const [description, updateDescription] = useState(props.description ?? "");
  const [progress, updateProgress] = useState(0);

  // Form inputs for validation
  const [isTitleFilled, setIsTitleFilled] = useState(false);
  const [isStartDateFilled, setIsStartDateFilled] = useState(false);
  const [isEndDateFilled, setIsEndDateFilled] = useState(false);
  const [isDescriptionFilled, setIsDescriptionFilled] = useState(false);
  const _hover = { bg: "red.400", color: "gray.50" };
  const _expanded = { bg: "red.500", color: "gray.50" };
  const toast = useToast();

  useEffect(() => {
    if (success) {
      formReset();
      setSuccess(false);
      updateProgress(0);
    }
  }, [success]);

  useEffect(() => {
    validateInputs();
  }, [title, startDate, endDate, description]);

  useEffect(() => {
    handleError();
  }, [errorStatus]);

  function incrementProgress() {
    if (progress <= 100) updateProgress(progress + 25);
  }

  function decrementProgress() {
    if (progress > 0) updateProgress(progress - 25);
  }

  function validateInput(input, isFilledStatus, setFilledState) {
    if (input.trim().length > 0) {
      if (!isFilledStatus) {
        setFilledState(true);
        incrementProgress();
      }
    } else {
      if (isFilledStatus) {
        setFilledState(false);
        decrementProgress();
      }
    }
  }

  function validateInputs() {
    validateInput(title, isTitleFilled, setIsTitleFilled);
    validateInput(startDate, isStartDateFilled, setIsStartDateFilled);
    validateInput(endDate, isEndDateFilled, setIsEndDateFilled);
    validateInput(description, isDescriptionFilled, setIsDescriptionFilled);
  }

  function formReset() {
    updateTitle("");
    updateStartDate("");
    updateEndDate("");
    updateDescription("");
    toast({
      title: "Sucesso",
      description: "Formul??rio reiniciado com sucesso",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  function handleError() {
    switch (errorStatus) {
      case "hasError":
        setSuccess(true);
        toast({
          title: "Ops!",
          description: "Por favor preencha todos os campos!",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        break;
      case "hasNoError":
        setSuccess(false);
        toast({
          title: "Sucesso =)",
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
  }

  if (!isNewTask) {
    return (
      <AccordionItem>
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
                <InputLeftAddon children="T??tulo" />
                <Input
                  name="title"
                  type="text"
                  value={title}
                  onChange={(e) => updateTitle(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="Data in??cio" />
                <Input
                  name="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => updateStartDate(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="Data de t??rmino" />
                <Input
                  name="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => updateEndDate(e.target.value)}
                />
              </InputGroup>
              <InputGroup>
                <Textarea
                  name="description"
                  value={description}
                  placeholder="Descri????o"
                  onChange={(e) => updateDescription(e.target.value)}
                />
              </InputGroup>
              {/* @todo implement delete and save edited task */}
              {/* <Grid gridTemplateColumns="1fr 1fr" columnGap={5}>
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
              </Grid> */}
            </Grid>
          </form>
        </AccordionPanel>
      </AccordionItem>
    );
  } else {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submit([title, startDate, endDate, description]);
        }}
        style={{ display: "flex", flexDirection: "column", rowGap: 10 }}
      >
        <InputGroup>
          <InputLeftAddon children="T??tulo" />
          <Input
            name="title"
            type="text"
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Data in??cio" />
          <Input
            name="startDate"
            type="date"
            value={startDate}
            onChange={(e) => updateStartDate(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <InputLeftAddon children="Data de t??rmino" />
          <Input
            name="endDate"
            type="date"
            value={endDate}
            onChange={(e) => updateEndDate(e.target.value)}
          />
        </InputGroup>

        <InputGroup>
          <Textarea
            name="description"
            value={description}
            placeholder="Descri????o"
            onChange={(e) => updateDescription(e.target.value)}
          />
        </InputGroup>

        {progress >= 100 ? null : <Progress value={progress} />}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            columnGap: 10,
          }}
        >
          <Button
            colorScheme="red"
            leftIcon={<DeleteIcon />}
            onClick={formReset}
          >
            Limpar campos
          </Button>
          {progress <= 99 ? null : (
            <Button type="submit" colorScheme="green" leftIcon={<CheckIcon />}>
              Salvar
            </Button>
          )}
        </div>
      </form>
    );
  }
}

export default Task;
