import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex
} from '@chakra-ui/react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import React from 'react'


function ModalPopup(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()


  return (
    <>

      <Modal closeOnOverlayClick={false} isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>

          {/* <Flex > */}
          <ModalCloseButton />
          <ModalHeader w={"full"} bg="#00A2FF" boxShadow={"xl"} >
            <Flex justifyContent={"space-between"}>
              Create, Edit, Delete
            </Flex>


          </ModalHeader>
          {/* </Flex>  */}
          <ModalBody pb={6}>
            <div>
              <p>
                belom kelar
              </p>
            </div>
          </ModalBody>

          <ModalFooter>
            <Flex alignItems="center">
              <button onClick={onOpen}>
                <DeleteIcon boxSize="7" mx={205} />
                <AlertDialog
                  isOpen={isOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete Item
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                      </AlertDialogBody> 

                       <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button colorScheme='red' onClick={onClose} ml={3}>
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog> 
              </button>
              <Button colorScheme='blue' mr={3}>
                Submit
              </Button>
              <Button onClick={props.onClose}>Cancel</Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalPopup

