import { extendTheme } from "@chakra-ui/react";

const colors = {
  red: {
    50: "#ffe4e6",
    100: "#fdb8bc",
    200: "#f58b8f",
    300: "#ef5d64",
    400: "#e93038",
    500: "#cf161e",
    600: "#a20f17",
    700: "#740810",
    800: "#480307",
    900: "#1f0000",
  },
  gray: {
    50: "#f1f1fd",
    100: "#d4dadf",
    200: "#bdbfc4",
    300: "#a4a5a9",
    400: "#8a8c8f",
    500: "#707275",
    600: "#56595c",
    700: "#3d3f43",
    800: "#22262b",
    900: "#001010",
  },
};

export const MainTheme = extendTheme({ colors });
