import { 
    ChakraProvider,
    Button
  } from '@chakra-ui/react'

export const ButtonGreeting = ({ fun }: any) => {

    return (
        <ChakraProvider>
            <Button onClick={fun} colorScheme='teal' size='sm' width='100%' marginTop='10px'>
                Login
            </Button>
        </ChakraProvider>
    )

}