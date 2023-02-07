import ListUsers from "../components/listusers";
import ItemList from "../components/itemlist";
import Navbar from "../components/navbar"
import SalesReport from "../components/salesReport"
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
            <ItemList /> 
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