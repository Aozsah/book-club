import { FormControl, FormLabel, Input} from '@chakra-ui/react';
import React from 'react';

function RegisterName() {

  return (
    <FormControl isRequired>
      <FormLabel>Kullanıcı Adı</FormLabel>
      <Input placeholder='emremataraci' />
    </FormControl>
  )
}
export default RegisterName