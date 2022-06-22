import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  Skeleton,
} from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";

import React, { Component } from "react";

export default class TaskErrorBoundary extends Component {
  state = {
    errorMessage: "",
  };

  static getDerivedStateFromError(error) {
    return {
      errorMessage: error.toString(),
    };
  }

  componentDidCatch(error, info) {
    this.logErrorToService(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      return (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Skeleton width="40%" height="30px" />
              </Box>
              <Skeleton width="9%" height="30px" />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Grid templateColumns="1fr" rowGap="10px">
              <InputGroup>
                <Skeleton width="100%" height="40px" />
              </InputGroup>
              <InputGroup>
                <Skeleton width="100%" height="40px" />
              </InputGroup>
              <InputGroup>
                <Skeleton width="100%" height="40px" />
              </InputGroup>
              <InputGroup>
                <Skeleton width="100%" height="40px" />
              </InputGroup>
              <Grid gridTemplateColumns="1fr 1fr" columnGap={5}>
                <Button disabled colorScheme="red" leftIcon={<CheckIcon />}>
                  Cancelar
                </Button>
                <Button disabled colorScheme="green" leftIcon={<CheckIcon />}>
                  Salvar
                </Button>
              </Grid>
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      );
    }
    return this.props.children;
  }
}
