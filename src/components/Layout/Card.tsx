import { Box, Center, Input } from "@chakra-ui/react"
import { ButtonGreeting } from "./ButtonGreeting"
import './Card.css'

const login = () => {
  return alert('Seja bem vindo Douglas!')
}


export const Card = () => {
  return(
    <div>
      <Box className="main" minHeight='90vh' backgroundColor='#9413dc' padding='25px'>
          <Box className="main-card" backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
              <h2>Faça o login</h2>
            </Center>
            <Input marginTop={10} marginBottom={5} type="email" placeholder="Email" />
            <Input marginBottom={5} type="password" placeholder="Password" />
            <Center>
              <ButtonGreeting fun={login} />
            </Center>
          </Box>
      </Box>
    </div>
  )
}