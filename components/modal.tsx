import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";

interface ModalProps {
  // isOpen: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({children, onClose}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log(event.key)
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

  // if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body // Use React Portal to render modal outside the main DOM structure
  );
};

export default Modal;