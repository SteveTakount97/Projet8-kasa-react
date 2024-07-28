import React from 'react';
import '../style/Modal.scss';
import Header from './header';
import Footer from './footer';

const Modal = ({ isOpen, onClose,  }) => {
  if (!isOpen) return null;

  return (
    <>
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
       
        <Header />
         <div className='show-container'>container</div>
        <Footer />
      </div>
    </div>
    
    </>
  );
};

export default Modal;
