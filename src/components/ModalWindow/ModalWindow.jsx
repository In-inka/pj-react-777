import { useState, useEffect, useCallback } from 'react';

import { Close, Content, Modal } from './ModalWindow.styled';

export const ModalWindow = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
  }, []);

  useEffect(() => {
    if (props.isOpen) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [props.isOpen, handleEscape]);

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  const modalStyles = {
    display: isOpen ? 'flex' : 'none',
  };

  const contentStyles = {
    backgroundColor: '#10100F',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    padding: '48px 32px',
    zIndex: 1001,
    border: '1px solid #EFEDE833',
    width: `${props.contentWidth}`,
    height: `${props.contentHeight}`,
  };

  return (
    <Modal
      className={`modal-backdrop ${isOpen ? 'centered-modal' : '' }`}
      style={modalStyles}
    >
      <Content style={contentStyles}>
        <Close onClick={handleClose}>&times;</Close>
        {props.children}
      </Content>
    </Modal>
  );
};

// ПРИКЛАД ВИКОРИСТАННЯ
// імпортуємо все потрібне

// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => {
//   setIsModalOpen(true);
// };

// <PrimaryButton text={"Open modal window"} onClick={openModal} />

// {isModalOpen && (
//     <ModalWindow isOpen={isModalOpen}>
//       <div>Modal Content</div>
//       <SecondaryButton onClick={() => setIsModalOpen(false)} text={"Close modal"} height={50} width={160}/>
//     </ModalWindow>
//  )}
