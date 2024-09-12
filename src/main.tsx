import { StrictMode } from 'react'
import { ChakraProvider, ColorModeProvider, ColorModeScript } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client'
import theme from './theme.ts'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}></ColorModeScript> 
      <App />
    </ChakraProvider>
  </StrictMode>,
)
