import ListUsers from "../components/listusers";
import ItemList from "../components/itemlist";
import Navbar from "../components/navbar"
import SalesReport from "../components/salesReport"
import ListItem from "../components/listitem";
import { Center } from "@chakra-ui/react"
import { useState } from "react";
import { useEffect } from "react";

export default function AdminPage(){
    const [nav,setNav] = useState("item")

    useEffect(() => {},[nav])
    
    return(
        <>
        <Navbar setNav={setNav} />
        <Center>
            {nav === "item" ? 
            <ListItem /> 
            : 
            nav === "user" ? 
            <ListUsers />
            : 
            nav === "report" ?
            <SalesReport />
            :
            null
        }
        </Center>
        </>
    )
}