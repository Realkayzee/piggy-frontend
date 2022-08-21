import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import {
    Box,
} from "@chakra-ui/react";

export default function Navbar() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <Box>
        {isLargerThan1024 ? 
        "Larger"
        : "Mobile"
        }
    </Box>
  )
}
