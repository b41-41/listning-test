import React, { ChangeEventHandler, useState } from 'react';
import * as S from './Login.styled';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === 'id') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const auth = getAuth();
      let data;
      data = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError(error.message);
    }
    console.error(error);
  };

  return (
    <S.Wrapper>
      <S.InfoContainer>
        <S.Logo>듣기 시험 프레젠테이션</S.Logo>
        <S.Message>로그인 아이디와 비밀번호를 입력해 주세요.</S.Message>
      </S.InfoContainer>
      <S.Form onSubmit={onSubmit}>
        <S.InputContainer>
          <S.Id>
            <S.Label>아이디(이메일) : </S.Label>
            <S.Input name="id" type="email" onChange={onChange} required />
          </S.Id>
          <S.Pw>
            <S.Label>비밀번호 : </S.Label>
            <S.Input name="password" type="password" onChange={onChange} />
          </S.Pw>
        </S.InputContainer>
        <S.ButtonContainer>
          <S.Button value="login" type="submit" />
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  );
};

export default Login;
