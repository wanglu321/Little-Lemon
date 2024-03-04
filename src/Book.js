import {HStack, VStack} from '@chakra-ui/react'
import homeimage from './assets/homeimage.jpg'
import {Button} from '@chakra-ui/react'
import './Book.css'

function Book(){
    const handleClick = (anchor) => () => { 
        const id = `${anchor}-section`; 
        const element = document.getElementById(id); 
        if (element) { 
          element.scrollIntoView({ 
            behavior: "smooth", 
            block: "start", 
          }); 
        } 
      }; 
    
    return(
        <div className='Book'>
    <HStack spacing='60px'>
        <img
        src={homeimage}
        alt="An image for the restaurant"
        />
        <VStack spacing='50px'>
        <h3>
            Little Lemon is a charming neighborhood bistro that serves
            simple food and classic cocktails in a lively but casual enviroment.
            The restaurant features a locally-sourced menu with daily specials.
        </h3>
        <a href='#reserve' onClick={handleClick('reserve')}>
        <Button
        
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
  Book A Table
</Button>
</a>

        </VStack>

    </HStack>
    </div>
    )
}
export default Book;