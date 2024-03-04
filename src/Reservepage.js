import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Select,
    Input,
    Box,
    Heading,
    Button,
    VStack
  } from '@chakra-ui/react'
  import React from 'react'
  import {useFormik} from 'formik'
  import * as Yup from 'yup'; 
import FullScreenSection from "./FullScreenSection"; 
import useSubmit from "./useSubmit"; 


const Reservepage=()=>{
    const {isLoading,submit} = useSubmit(); 
   

 
 const formik = useFormik({ 
   initialValues: { 
    firstname:'',
    email:'',
    date:'',
    time:'',
    guestnumber:'',
    occasion:'',
}, 
onSubmit: (values) => { 
  submit('https://littlelemon.com', values); 
}, 
validationSchema: Yup.object({ 
  firstName: Yup.string().required("Required"), 
  email: Yup.string().email("Invalid email address").required("Required"), 
}),});
const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Thank you for choosing us`);
      }




return(
    <FullScreenSection 
    isDarkBackground 
    backgroundColor="#EE9972" 
    py={16} 
    spacing={8} 
  > 
  <VStack w="1024px" p={32} alignItems="flex-start"> 
       <Heading as="h3" id="reserve-section"> 
         Book Your Table Online Today
       </Heading> 
       <Box p={6} rounded="md" w="100%"> 
         <form onSubmit={handleSubmit}> 
           <VStack spacing={4}> 
             <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}> 
             <FormLabel htmlFor="firstName">Your Name</FormLabel> 
               <Input 
                 id="firstName" 
                 name="firstName" 
                 {...formik.getFieldProps("firstName")} 
               /> 
               <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage> 
             </FormControl> 
             <FormControl isInvalid={!!formik.errors.email && formik.touched.email}> 
               <FormLabel htmlFor="email">Email Address</FormLabel> 
               <Input 
                 id="email" 
                 name="email" 
                 type="email" 
                 {...formik.getFieldProps("email")} 
               /> 
               <FormErrorMessage>{formik.errors.email}</FormErrorMessage> 
             </FormControl> 
             <FormControl>
             <FormLabel>Date</FormLabel>
             <Input
             type="date"/>
             </FormControl>
             <FormControl>
  <FormLabel>Time</FormLabel>
  <Select placeholder='17:00'>
    <option>18:00</option>
    <option>19:00</option>
    <option>20:00</option>
    <option>21:00</option>
  </Select>
</FormControl>
<FormControl>
  <FormLabel>Number of Guests</FormLabel>
  <Input type="number" max="11" min="1"/>
   </FormControl>
<FormControl>
<FormLabel>Occasion</FormLabel>
  <Select>
    <option>Birthday</option>
    <option>Anniversary</option>
    <option>Others</option>
  </Select>
</FormControl>
<Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}> 
               Submit 
             </Button> 
           </VStack> 
         </form> 
       </Box> 
     </VStack> 
   </FullScreenSection> 
 ); 
}; 
export default Reservepage;