import React from 'react';
import * as S from './Login.styled';

const Login = () => {
  return (
    <S.Wrapper>
      <S.InfoContainer>
        <S.Logo>듣기 시험 프레젠테이션</S.Logo>
        <S.Message>로그인 아이디와 비밀번호를 입력해 주세요.</S.Message>
      </S.InfoContainer>
      <S.Form>
        <S.InputContainer>
          <S.Id>
            <S.Label>아이디(이메일) : </S.Label>
            <S.Input name="id" type="email" required />
          </S.Id>
          <S.Pw>
            <S.Label>비밀번호 : </S.Label>
            <S.Input name="password" type="password" />
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
