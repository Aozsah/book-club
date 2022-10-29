import { Button, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function UserRegisterButton() {
  let navigate = useNavigate();
  return (
  <Stack direction='row' spacing={4} align='center'>
  
  <Button colorScheme='teal' variant='outline' onClick={() => {
    navigate('/');
  }}>
    Kayıt Ol
  </Button>
</Stack>
  )
}

export default UserRegisterButton
