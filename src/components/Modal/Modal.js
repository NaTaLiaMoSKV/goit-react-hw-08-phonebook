import React, { useState } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import crossImage from '../../images/cross-icon.png'
import { OpenModalButton, ModalOverlay, ModalContainer, CloseModalButton, CloseModalIcon } from './ModalStyles';
const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <OpenModalButton onClick={openModal}>Add new contact</OpenModalButton>

      {isOpen && (
        <ModalOverlay>
            <ModalContainer>
                <CloseModalButton onClick={closeModal}><CloseModalIcon src={crossImage}></CloseModalIcon></CloseModalButton>
                <ContactForm />
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
};

export default Modal;