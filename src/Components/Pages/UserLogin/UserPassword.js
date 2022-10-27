import React from 'react'
import { Input, InputGroup, InputRightElement, Button, FormLabel, FormControl } from '@chakra-ui/react'

function UserPassword() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    
    <InputGroup size='md'>
      <FormControl isRequired>
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Gizle' : 'Göster'}
          </Button>
        </InputRightElement>
        <FormLabel>Şifre</FormLabel>
        <Input  pr='4.5rem' placeholder='Şifrenizi Girin'
        type={show ? 'text' : 'password'} />
        
    </FormControl>
      
      
    </InputGroup>
  )
}

export default UserPassword