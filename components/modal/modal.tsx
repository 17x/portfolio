import React, {FC, useEffect, useState} from 'react';
import {createPortal} from "react-dom";

interface ModalProps {
  // isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({children, onClose}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // console.log(event.key)
      if (event.key === 'Escape') {
        onClose && onClose()
      }
    }
    const forbiddenScroll = (e) => {
      e.preventDefault()
      e.stopPropagation()
      return false
    }

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', forbiddenScroll);
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', forbiddenScroll);
      document.documentElement.style.overflow = 'auto';
    }
  }, [onClose]);

  return createPortal(
    <div
      className="fixed z-20 inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <button
        className="absolute z-20 block w-auto h-auto top-0 right-3 text-white hover:text-gray-600 text-4xl"
        onClick={onClose}
        aria-label="Close modal"
      >
        &times;
      </button>
      <div
        className="relative bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >

        {children}
      </div>
    </div>,
    document.body // Use React Portal to render modal outside the main DOM structure
  );
};

export default Modal;