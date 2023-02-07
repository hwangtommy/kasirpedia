import { Box, Flex, Link, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import KasirpediaLogo from "../logos/Kasirpedia-logos_black.png";
import { useState } from "react";

export default function Navbar() {
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <Flex
            as="nav"
            justify="space-between"
            align="center"
            p="2px 20px"
            color="white"
            minW={"100vw"}
        >
            <Link href="#">
                <Box as="img" src={KasirpediaLogo} alt="Logo" height="60px" />
            </Link>

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg='none' color='black'
                    sx={{
                        _hover: {
                            bg: 'none',
                        }
                    }}
                >
                    <Text>
                        Erwin
                    </Text>
                    <Text fontSize="xs">
                        {isAdmin ? "Admin" : "Cashier"}
                    </Text>

                </MenuButton>

                <MenuList color="black" zIndex='3'>
                    {isAdmin ? (
                        <>
                            <MenuItem bg='none' sx={{
                                _hover: {
                                    bg: 'none',
                                    color: 'gray.500'
                                },
                                _active: {
                                    color: 'black'
                                }
                            }}>Make New User</MenuItem>
                            <MenuItem bg='none' sx={{
                                _hover: {
                                    bg: 'none',
                                    color: 'gray.500'
                                },
                                _active: {
                                    color: 'black'
                                }
                            }}>Sales Report</MenuItem>
                            <MenuItem bg='none' sx={{
                                _hover: {
                                    bg: 'none',
                                    color: 'gray.500'
                                },
                                _active: {
                                    color: 'black'
                                }
                            }}>Log Out</MenuItem>
                        </>
                    ) : (
                        <MenuItem bg='none' sx={{
                            _hover: {
                                bg: 'none',
                                color: 'gray.500'
                            },
                            _active: {
                                color: 'black'
                            }
                        }}>Log Out</MenuItem>
                    )}
                </MenuList>
            </Menu>
        </Flex>
    );
}