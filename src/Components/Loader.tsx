import React from 'react';
import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';

const LoaderStyled = styled.div`
  border-radius: 5px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Loader = () => {
  return (
    <LoaderStyled>
      <Circles
        height="80"
        width="80"
        color="#FFE600"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderStyled>
  );
};

