import { VStack, Center, Image } from "@chakra-ui/react";
import logo from "../logos/Kasirpedia-logos_white.png"

function Login(){
    return(
        <>
        <Center>
            <VStack bg={"black"}>
                <Image src={logo}/>

            </VStack>
        </Center>
        </>
    )
}

export default Login