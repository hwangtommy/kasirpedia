// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//     useDisclosure 
//   } from '@chakra-ui/react'

//   export default function ModalDelete() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     return (
//       <>
//         <Button onClick={onOpen}></Button>
  
//         <Modal isOpen={isOpen} onClose={onClose}>
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>Are you sure want to delete it?</ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//             </ModalBody>
  
//             <ModalFooter>
//               <Button colorScheme='blue' mr={3} onClick={onClose}>
//                 Close
//               </Button>
//               <Button variant='ghost'>Secondary Action</Button>
//             </ModalFooter>
//           </ModalContent>
//         </Modal>
//       </>
//     )
//   }