import { Box, Flex, Link, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import KasirpediaLogo from "../logos/Kasirpedia-logos_black.png";

export default function Navbar() {

    return (
        <Flex
            as="nav"
            justify="space-between"
            align="center"
            p="2px 20px"
            // bg="gray.700"
            color="white"
            minW={"100vw"}
        >
            <Link href="#">
                <Box as="img" src={KasirpediaLogo} alt="Logo" height="70px" />
            </Link>

            <Menu>
                <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />} bg='none'>
                    <Text>
                        Erwin
                    </Text>
                    <Text fontSize="xs">
                        Admin
                    </Text>
                </MenuButton>
                <MenuList color="black" zIndex='3'>
                    <MenuItem>Make New User</MenuItem>
                    <MenuItem>Sales Report</MenuItem>
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
                {/* <MenuList color="black">
                    <MenuItem>Log Out</MenuItem>
                </MenuList> */}
            </Menu>
        </Flex>
    );
}