import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Space Mono, sans-serif",
    body: "Space Mono, sans-serif"
  },
  components: {
    Heading: {
      baseStyle: {
        color: "whiteAlpha.800"
      }
    }
  }
});

export default theme;
