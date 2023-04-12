import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button<{ size?: string, smallBtnUp?: boolean }>`
  width: ${props => props.size === 'large' ? "96px" : props.size === 'medium' ? "64px" : "48px"};
  height: ${props => props.size === 'large' ? "96px" : props.size === 'medium' ? "64px" : "48px"};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
  border: none;
  outline: none;
  background: #FFE600;
  transform: ${props => props.size === 'small' && props.smallBtnUp === true ? 'translate(20%, -20%)' : props.size === 'small' && props.smallBtnUp === false ? 'translate(-20%, 20%)' : 'translate(0)'};
`;

export const MyButton: React.FC <any> = ({ img, click = () => {}, size, smallBtnUp}) => {

  return (
    <StyledButton 
      onClick={(e) => {
        e.preventDefault();
        click();
      }}
      size={size}
      smallBtnUp={smallBtnUp}
    >
      <img 
       src={img}
       alt=''
      />
    </StyledButton>
  );
};

