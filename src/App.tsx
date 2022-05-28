import * as React from "react";
import {
  Center,
  chakra,
  Avatar,
  HStack,
  Text,
  Box,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import { Keyframes, Scroll } from "scrollex";
import persons from "./persons.json";

const ScrollItem = chakra(Scroll.Item);
const ScrollSection = chakra(Scroll.Section);
const ScrollContainer = chakra(Scroll.Container);

const keyframes: Record<string, Keyframes> = {
  item: ({ data }) => ({
    [data.index * 150]: {
      opacity: 0
    },
    [data.index * 150 + 1]: {
      opacity: 1
    }
  })
};

export default function App() {
  return (
    <ScrollContainer scrollAxis="y" height="100vh" bg="blackAlpha.900">
      <ScrollSection showOverflow height="300vh">
        <Center pos="sticky" top={0} h="100vh" flexDir="column">
          <Heading size="md">Scroll to Reveal</Heading>
          <SimpleGrid spacing={4} m={8} columns={{ base: 1, sm: 2 }}>
            {persons.map((person, index) => {
              return (
                <ScrollItem
                  key={person.name}
                  keyframes={keyframes.item}
                  data={{ index }}
                >
                  <HStack spacing={3}>
                    <Avatar
                      size="lg"
                      name={person.name}
                      src={person.img}
                      filter="saturate(20%)"
                      bg="blackAlpha.500"
                    />
                    <Box>
                      <Heading fontSize="md">{person.name}</Heading>
                      <Text fontSize="sm" color="whiteAlpha.500">
                        {person.role}
                      </Text>
                    </Box>
                  </HStack>
                </ScrollItem>
              );
            })}
          </SimpleGrid>
        </Center>
      </ScrollSection>
    </ScrollContainer>
  );
}
