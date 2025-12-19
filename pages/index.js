import { Box, Flex, Text, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
      <Flex
        direction="column"
        align="center"
        justify="center"
        minH="100vh"
        p={4}
      >
        <Text fontSize="4xl" fontWeight="bold" mb={4}>
          Real Estate Project
        </Text>
        <Text fontSize="xl" mb={8} color="gray.600">
          Welcome to your Next.js real estate application
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Flex>
    </Box>
  )
}
