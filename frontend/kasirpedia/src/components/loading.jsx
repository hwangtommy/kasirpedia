import { Center, Image, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import logo from "../logos/Kasirpedia-logos_transparent.png"
export default function Loading() {
    return (
        <Center width={"100vw"} height="90vh" flexDir={"column"}>
            <CircularProgress isIndeterminate color='blue.300' />
            <Image src={logo} maxH={79}/>
        </Center>
    )
}