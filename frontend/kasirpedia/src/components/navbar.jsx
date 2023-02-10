import { Box, Flex, Link, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import KasirpediaLogo from "../logos/Kasirpedia-logos_white.png";
import { useState } from "react";
import { Link as ReachLink } from "react-router-dom"

export default function Navbar(props) {
    const [isAdmin, setIsAdmin] = useState(true);

    return (
        <Flex
            as="nav"
            justify="space-between"
            align="center"
            p="2px 20px"
            bg={"#0e66b3"}
            minW={"100vw"}
            boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"
            pos={"sticky"}
            zIndex={8}
            top="0"
        >
            <Link href="#">
                <Box as="img" src={KasirpediaLogo} alt="Logo" height="60px" />
            </Link>

            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    bg='none' color='white'
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

                <MenuList color="black" zIndex={3}>
                    {isAdmin ? (
                        <>
                            <MenuItem bg='none' 
                            onClick={() => props?.setNav("item")}
                            sx={{
                                _hover: {
                                    bg: 'none',
                                    color: 'gray.500'
                                },
                                _active: {
                                    color: 'black'
                                },
                            }}>Item List</MenuItem>
                            <MenuItem bg='none' 
                            onClick={() => props?.setNav("user")}
                            sx={{
                                _hover: {
                                    bg: 'none',
                                    color: 'gray.500'
                                },
                                _active: {
                                    color: 'black'
                                }
                            }}>User List</MenuItem>
                            <MenuItem bg='none' 
                            onClick={() => props?.setNav("report")}
                            sx={{
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