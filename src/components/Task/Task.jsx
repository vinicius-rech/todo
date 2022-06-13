import React, { Component } from "react";
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
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import TaskErrorBoundary from "./TaskErrorBoundary";
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      icon: props.icon,
      goToFloatingButton: true,
      tasks: !localStorage.getItem("tasks")
        ? localStorage.setItem("tasks", null)
        : localStorage.getItem("tasks"),
    };
  }

  componentDidMount() {
    // console.log(this.props.title);
    console.log(
      "Task mounted: ",
      this.state.title ? this.state.title : "anonymous"
    );
    // console.log("Localstorage Tasks: ", localStorage.getItem("tasks"));
  }

  render() {
    return (
      <TaskErrorBoundary>
        <AccordionItem defaultChecked={true}>
          <h2>
            <AccordionButton
              _hover={{ bg: "red.400", color: "gray.50" }}
              _expanded={{ bg: "red.500", color: "gray.50" }}
            >
              <Box flex="1" textAlign="left">
                {this.state.title ? this.state.title : "Sem título"}
              </Box>
              {this.state.icon ? this.state.icon : <AccordionIcon />}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <form>
              <Grid templateColumns="1fr" rowGap="10px">
                <InputGroup>
                  <InputLeftAddon children="Título" />
                  <Input required={true} name="title" type="text" />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Data início" />
                  <Input required={true} name="startDate" type="date" />
                </InputGroup>
                <InputGroup>
                  <InputLeftAddon children="Data de término" />
                  <Input required={true} name="enddate" type="date" />
                </InputGroup>
                <InputGroup>
                  <Textarea placeholder="Descrição" />
                </InputGroup>
                <Grid gridTemplateColumns="1fr 1fr" columnGap={5}>
                  <Button colorScheme="red" leftIcon={<DeleteIcon />}>
                    Deletar
                  </Button>
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
      </TaskErrorBoundary>
    );
  }
}

export default Task;
