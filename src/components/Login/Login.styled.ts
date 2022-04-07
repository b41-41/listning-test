import styled from 'styled-components';
import { theme } from 'styles/theme';

export const Wrapper = styled.div`
  position: absolute;
  width: 400px;
  padding: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InfoContainer = styled.div`
  margin-bottom: 10px;
`;

export const Logo = styled.div`
  display: block;
  font-size: ${theme.fontSize.xl};
  font-weight: ${theme.fontWeight.strong};
`;

export const Message = styled.div`
  display: block;
  font-size: ${theme.fontSize.m};
`;

export const Form = styled.form`
  display: block;
`;

export const Id = styled.div`
  display: block;
  margin: 10px 0;
`;
export const Pw = styled.div`
  display: block;
  margin: 10px 0;
`;

export const Label = styled.div`
  font-weight: ${theme.fontWeight.semiStrong};
  margin: 5px 0;
`;

export const Input = styled.input`
  width: 100%;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
`;

export const ButtonContainer = styled.div``;

export const Button = styled.input``;
