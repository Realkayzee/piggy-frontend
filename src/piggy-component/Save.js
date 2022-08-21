import React from 'react';
import { 
    Box,
    Text,
    SimpleGrid
 } from "@chakra-ui/react"

export default function Save() {
  return (
    <Box
    w="100%"
    bgGradient="linear(to-br,#2E0249, #46244C, #7A4069)"
    minHeight="100vh"
    >
        <Box>
          <SimpleGrid
          columns={{sm: 2, md: 3}}
          spacing="10"
          w="100%"
          h="50px"
          p="1rem"
          color="white"
          >
            <Box><Text>Piggy</Text></Box>
            <Box
            bg="blackAlpha.700"
            >
              <Box></Box>
            </Box>
            <Box><Text>Connect</Text></Box>
          </SimpleGrid>
        </Box>
    </Box>
  )
}