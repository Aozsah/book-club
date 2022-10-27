import React from 'react'
import { Stack, Text } from '@chakra-ui/react'
import Books from '../../../Modules/Books'


function Homepage() {
  return (
    <div>
      <Stack spacing={3}>
      <Books />
      </Stack>
    </div>
  )
}

export default Homepage
