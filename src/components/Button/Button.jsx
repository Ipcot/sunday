import { ButtonStyled } from './Button.styled';

export const Button = ({ caption, handleClick }) => {
  return (
    <ButtonStyled type="button" onClick={handleClick}>
      {caption}
    </ButtonStyled>
  );
};
