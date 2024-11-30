import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './components/Main';

function App() {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
