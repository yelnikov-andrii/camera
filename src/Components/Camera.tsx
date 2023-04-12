import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import scanBorder from '../images/scan border.svg';
import { Loader } from './Loader';

const CameraStyled = styled.div<{ blur?: boolean }>`
  opacity: ${props => props.blur ? "0.6" : "1"};
  position: relative;
`;

interface Props {
  screen: number;
  loading: boolean;
  videoRef: any;
  popupOpen: boolean;
  setPopupOpen: Dispatch<SetStateAction<boolean>>;
}

export const Camera: React.FC <Props> = ({screen, loading, videoRef, popupOpen, setPopupOpen }) => {
  return (
    <CameraStyled blur={screen === 4 && popupOpen === true}>
        {screen === 1 && loading === false && (
          <>
          <div className="scan-border">
            <img src={scanBorder} alt=""/>
          </div>
          <div className='main-button'>
            <span className='main-button__span'>
              “Who is this cutest kitty?”
            </span>
          </div>
          </>
        )}
        {screen === 4 && loading === false && popupOpen === true && (
          <div className='popup'>
          <span className='popup__span'>
            "This service does not collect or store any user metadata. We do not track or monitor user activity, 
            nor do we collect any information about user behavior or preferences."
          </span>
          <button className='popup__button' onClick={(e) => {
            e.preventDefault();
            setPopupOpen(false)
          }}>
            Got it
          </button>
        </div>
        )}
        {loading === true && (
          <Loader />
        )}
        <video ref={videoRef} className='video'></video>
      </CameraStyled>
  );
};

