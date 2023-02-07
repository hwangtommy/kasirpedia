import { Box, Flex, Link, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import KasirpediaLogo from "../logos/Kasirpedia-logos_white.png";

export default function Navbar() {

    return (
        <Flex
            as="nav"
            justify="space-between"
            align="center"
            p="2px 20px"
            bg="gray.700"
            color="white"
            position={"absolute"}
            top="0"
            minW={"100vw"}
        >
            <Link href="#">
                <Box as="img" src={KasirpediaLogo} alt="Logo" height="70px" />
            </Link>

            <Menu>
                <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />}>
                    <Text>
                        Erwin
                    </Text>
                    <Text fontSize="xs">
                        Admin
                    </Text>
                </MenuButton>
                <MenuList color="black">
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