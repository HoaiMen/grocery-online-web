import React, { ReactElement, useState, Dispatch } from 'react';
import { ModalOverlay } from '@chakra-ui/react';
type IModalProps = {
  children: ReactElement;
};
type IModalContextProps = {
  overlay: ReactElement;
  setOverlay: Dispatch<React.SetStateAction<ReactElement>>;
};

export const OverlayOne = () => (
  <ModalOverlay
    bg="whiteAlpha.50"
    backdropFilter="blur(5px) hue-rotate(10deg)"
  />
);

export const ModalContext = React.createContext<IModalContextProps>({
  overlay: <OverlayOne />,
  setOverlay: () => {},
});
const ModalContextProvider: React.FC<IModalProps> = ({ children }) => {
  const [overlay, setOverlay] = useState(<OverlayOne />);
  return (
    <ModalContext.Provider value={{ overlay, setOverlay }}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
