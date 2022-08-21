import { ChakraProvider } from '@chakra-ui/react';
import Save from "./piggy-component/Save";

function Piggy() {
    return(
        <ChakraProvider>
            <Save />
        </ChakraProvider>
    )
}

export default Piggy;