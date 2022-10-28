import { Button, Stack } from '@chakra-ui/react'
import Homepage from '../Components/Pages/Homepage/Homepage'
import { useNavigate } from 'react-router-dom'



function SubmitButton() {
  let navigate = useNavigate();
  return (
  <Stack direction='row' spacing={4} align='center'>
  
  <Button colorScheme='teal' variant='outline' onClick={() => {
    navigate('/');
  }}>
    Kaydet
  </Button>
</Stack>
  )
}

export default SubmitButton
