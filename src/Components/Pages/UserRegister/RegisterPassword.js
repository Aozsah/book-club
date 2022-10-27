import React from 'react'
import { Input, InputGroup, InputRightElement, Button, FormLabel, FormControl } from '@chakra-ui/react'

function UserPassword() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    
    <InputGroup size='md'>
        <FormControl isRequired>
            <FormLabel>Şifrenizi Oluşturun</FormLabel>
            <Input placeholder='' />
        </FormControl>
        <FormControl isRequired>
            <FormLabel>Şifrenizi Tekrar Girin</FormLabel>
            <Input placeholder='' />
              <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </FormControl>
    </InputGroup>
    
  )
}

export default UserPassword