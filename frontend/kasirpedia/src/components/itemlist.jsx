import { Flex, Input, Select } from '@chakra-ui/react'
import ItemCard from './itemcard'

export default function ItemList(){
    return(
        <>        
        <Flex wrap={"wrap"} maxW={"1100px"} m={"10px"} border={"1px solid grey"} borderRadius={10}>
            <Input placeholder='Search items..' size='md' m={"12px"}/>
            <Select placeholder='Categories' mx={"12px"} my={"6px"}>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
            <ItemCard name="Kopi" price="10000" photo="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG" />
        </Flex>
        </>
    )
}