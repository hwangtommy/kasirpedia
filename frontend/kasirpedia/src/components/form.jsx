import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
  import { useState } from 'react'

  export default function Addform() {
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')

  
    const handleInputChange = (e) => {
        if(e.target.id === "product" ) {
            setProduct(e.target.value)
        }
        if(e.target.id === "price" ) {
            setPrice(e.target.value)
        }
        if(e.target.id === "desc" ) {
            setDesc(e.target.value)
        }

        console.log(product)
        console.log(price)
        console.log(desc)

        
    }
  
    // const isError = input === ''
  
    return (
      <FormControl 
    //   isInvalid={isError}
      >
        <FormLabel>Product Name</FormLabel>
        <Input id="product" defaultValue={product} onChange={handleInputChange} />
        {/* {!isError ? (
          <FormHelperText>
          </FormHelperText>
        ) : (
          <FormErrorMessage>Type Here</FormErrorMessage>
        )} */}
        <FormLabel>Price</FormLabel>
        <Input id="price" defaultValue={price} onChange={handleInputChange} />
        {/* {!isError ? (
          <FormHelperText>
          </FormHelperText>
        ) : (
          <FormErrorMessage>Price</FormErrorMessage>
        )} */}
        <FormLabel>Description</FormLabel>
        <Input id="desc" defaultValue={desc} onChange={handleInputChange} />
        {/* {!isError ? (
          <FormHelperText>
          </FormHelperText>
        ) : (
          <FormErrorMessage>Price</FormErrorMessage>
        )} */}
      </FormControl>
      
    )
  }