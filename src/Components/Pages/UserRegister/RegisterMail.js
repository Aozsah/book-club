import { FormControl, FormLabel, Input} from '@chakra-ui/react';
import React from 'react';

function RegisterName() {

  return (
    <FormControl isRequired>
      <FormLabel>E-mail</FormLabel>
      <Input placeholder='mtrcemre@gmail.com' />
    </FormControl>
  )
}
export default RegisterName