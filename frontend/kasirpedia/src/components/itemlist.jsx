import { Flex, Box } from '@chakra-ui/react'
import ItemCard from './itemcard'

export default function ItemList(){
    return(
        <>
        <Flex wrap={"wrap"} maxW={"1100px"} m={"10px"} border={"1px solid grey"} borderRadius={10}>
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