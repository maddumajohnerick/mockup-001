import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { Fade } from 'react-reveal';
import './Modal.scss';

const Modal = ({ imageSelected, handleClose }) => {
  useEffect(() => {
    if (imageSelected) {
      console.log(`Viewing image ${imageSelected}`);
    }
  }, [imageSelected]);

  if (!imageSelected) {
    return null;
  }

  return (
    <ReactModal
      isOpen={imageSelected}
      style={{
        overlay: {
          backgroundColor: '#000000eb',
        },
        content: {
          backgroundColor: 'transparent',
          padding: 0,
          border: 'none',
        },
      }}
    >
      <span className="close" onClick={handleClose}></span>
      <Fade duration={500}>
        <div
          src={imageSelected}
          alt="selected full view"
          className="selectedImg"
          style={{
            backgroundImage: `url(${imageSelected})`,
          }}
        ></div>
      </Fade>
    </ReactModal>
  );
};

export default Modal;
