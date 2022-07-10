import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: grey;
`;

export const Text = styled.p`
  padding: 20px;
`;

export const ModalStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background-color: #fff;
`;

export const CloseButton = styled.button`
  background-color: black;
  color: white;
`;
