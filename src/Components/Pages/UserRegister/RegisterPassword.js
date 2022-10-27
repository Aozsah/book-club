import React from 'react'
import { Input, InputGroup, InputRightElement, Button, FormLabel, FormControl, Stack } from '@chakra-ui/react'

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
        <Stack direction='row' spacing={4} >
        <Input  pr='4.5rem'
        type={show ? 'text' : 'password'} placeholder='Şifrenizi Oluşturun'/>
        <Input  pr='4.5rem' placeholder='Şifrenizi Tekrar Girin'
        type={show ? 'text' : 'password'} />
        </Stack>
        
        
    </FormControl>
      
      
    </InputGroup>
  )
}

export default UserPassword