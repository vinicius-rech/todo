import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
} from "@chakra-ui/react";
import React, { useEffect, useContext } from "react";
import { TasksContext } from "../../contexts/Tasks";
import Task from "../Task/";
import TaskErrorBoundary from "../../ErrorBoundaries/TaskErrorBoundary";

const TaskListing = () => {
  const { allTasks } = useContext(TasksContext);

  useEffect(() => {
    console.log("Listagem de tarefas sofreu update: ", allTasks);
  }, [allTasks]);
  return (
    <>
      {!allTasks ? (
        <h1>Erro</h1>
      ) : (
        allTasks.forEach((task) => {
          <section key={task.title}>1: {task.title}</section>;
        })
      )}
    </>
    // <TaskErrorBoundary>
    //   <AccordionItem>
    //     <h2>
    //       <AccordionButton
    //         _hover={{ bg: "red.400", color: "gray.50" }}
    //         _expanded={{ bg: "red.500", color: "gray.50" }}
    //       >
    //         <Box flex="1" textAlign="left">
    //           {!title ? "Sem título" : title}
    //         </Box>
    //         <AccordionIcon />
    //       </AccordionButton>
    //     </h2>
    //     <AccordionPanel pb={4}>
    //       <form onSubmit={handleSubmit(onSubmit)}>
    //         <Grid templateColumns="1fr" rowGap="10px">
    //           <InputGroup>
    //             <InputLeftAddon children="Título" />
    //             <Input required={true} name="title" type="text" />
    //           </InputGroup>

    //           <InputGroup>
    //             <InputLeftAddon children="Data início" />
    //             <Input required={true} name="startDate" type="date" />
    //           </InputGroup>

    //           <InputGroup>
    //             <InputLeftAddon children="Data de término" />
    //             <Input required={true} name="enddate" type="date" />
    //           </InputGroup>

    //           <InputGroup>
    //             <Textarea placeholder="Descrição" />
    //           </InputGroup>

    //           <Grid gridTemplateColumns="1fr 1fr" columnGap={5}>
    //             <Button colorScheme="red" leftIcon={<DeleteIcon />}>
    //               Deletar
    //             </Button>

    //             <Button
    //               type="submit"
    //               colorScheme="green"
    //               leftIcon={<CheckIcon />}
    //             >
    //               Salvar
    //             </Button>
    //           </Grid>
    //         </Grid>
    //       </form>
    //     </AccordionPanel>
    //   </AccordionItem>
    // </TaskErrorBoundary>
  );
};

export default TaskListing;
