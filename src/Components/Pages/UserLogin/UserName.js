import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input} from '@chakra-ui/react';
import React from 'react';

function UserName() {

  return (
    <FormControl isRequired>
      <FormLabel>Kullanıcı Adı</FormLabel>
      <Input placeholder='mtrcemre@gmail.com' />
    </FormControl>
  )
}
export default UserName