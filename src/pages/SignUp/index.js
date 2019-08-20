import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.png';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Mínimo de 5 caracteres')
      .required('O nome é obrigatório'),
    email: Yup.string()
      .email()
      .required('O email é obrigatório'),
    password: Yup.string()
      .min(6, 'Sua senha deve ter pelo menos 6 caracteres.')
      .required('É necessário digitar uma senha'),
    confirmPassword: Yup.string()
      .required('É necessário digitar a confirmação.')
      .oneOf([Yup.ref('password')], 'As senhas não são iguais'),
  });

  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="MeetApp" />
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
