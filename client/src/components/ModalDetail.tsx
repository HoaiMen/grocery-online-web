import React, { ReactElement } from 'react';
import {
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';

type IModalProps = {
  open: boolean;
  close: () => void;
  overlayy: ReactElement;
  children: ReactElement;
};
const ModalDetail: React.FC<IModalProps> = ({
  open,
  close,
  overlayy,
  children,
}) => {
  return (
    <>
      <Modal isCentered isOpen={open} onClose={close} size="4xl">
        {overlayy}
        <ModalContent backgroundColor="orange.200">
          <ModalHeader>Stories by Chakra Templates</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={8}>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalDetail;
