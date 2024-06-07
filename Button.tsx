import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  // Add your button styles here
`;

type ButtonProps = {
  onClick: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
