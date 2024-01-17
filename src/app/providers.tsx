"use client"
import { ChakraProvider } from "@chakra-ui/react"
import  theme  from './_config/theme'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      {children}
    </ChakraProvider>
  )
}
