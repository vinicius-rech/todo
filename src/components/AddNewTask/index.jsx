import React from "react";
import TaskErrorBoundary from "../../ErrorBoundaries/TaskErrorBoundary";
import { useForm } from "react-hook-form";
import Model from "../../database/Model";

// Chakra ui Icons
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

// Chakra Ui Components
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
  AlertIcon,
  AlertTitle,
  Kbd,
  AlertDescription,
} from "@chakra-ui/react";

export default function Task(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data) new Model().addTask(data);
  };

  return (
    <TaskErrorBoundary>
      <AccordionItem>
        <h2>
          <AccordionButton
            _hover={{ bg: "red.400", color: "gray.50" }}
            _expanded={{ bg: "red.500", color: "gray.50" }}
          >
            <Box flex="1" textAlign="left">
              Nova Tarefa
            </Box>
            {!props.icon ? <AccordionIcon /> : props.icon}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateColumns="1fr" rowGap="10px">
              <InputGroup>
                <InputLeftAddon children="Título" />
                <Input {...register("title", { required: true })} type="text" />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="Data de início" />
                <Input
                  {...register("startDate", { required: true })}
                  type="date"
                />
              </InputGroup>
              <InputGroup>
                <InputLeftAddon children="Data de término" />
                <Input
                  {...register("endDate", { required: true })}
                  type="date"
                />
              </InputGroup>
              <InputGroup>
                <Textarea
                  {...register("description", { required: true })}
                  placeholder="Descrição"
                />
              </InputGroup>
              <Button
                type="submit"
                colorScheme="green"
                leftIcon={<CheckIcon />}
              >
                Salvar
              </Button>
              <Grid>
                {errors.title && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Ops! </AlertTitle>
                    <AlertDescription>
                      por favor preencha o campo <Kbd>Título</Kbd>
                    </AlertDescription>
                  </Alert>
                )}
                {errors.startDate && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Ops! </AlertTitle>
                    <AlertDescription>
                      por favor preencha o campo <Kbd>Data de início</Kbd>
                    </AlertDescription>
                  </Alert>
                )}
                {errors.endDate && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Ops! </AlertTitle>
                    <AlertDescription>
                      por favor preencha o campo <Kbd>Data de término</Kbd>
                    </AlertDescription>
                  </Alert>
                )}
                {errors.description && (
                  <Alert status="error">
                    <AlertIcon />
                    <AlertTitle>Ops! </AlertTitle>
                    <AlertDescription>
                      por favor preencha o campo <Kbd>Descrição</Kbd>
                    </AlertDescription>
                  </Alert>
                )}
              </Grid>
            </Grid>
          </form>
        </AccordionPanel>
      </AccordionItem>
    </TaskErrorBoundary>
  );
}
