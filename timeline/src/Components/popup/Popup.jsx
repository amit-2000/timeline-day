import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  // ModalCloseButton,
} from "@chakra-ui/react";
import { Button, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function Popup() {
  // const date = new Date();
  // const showTime = date.getHours();
  useEffect(() => {
    setTimeout(() => {
      onOpen();
      setOverlay(<OverlayOne />);
    }, 2000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  // const OverlayTwo = () => (
  //   <ModalOverlay
  //     bg="none"
  //     backdropFilter="auto"
  //     backdropInvert="80%"
  //     backdropBlur="2px"
  //   />
  // );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Note...</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <Text fontSize="xl" as="b">
              Don't Forget To Scroll Right..!!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Popup;
