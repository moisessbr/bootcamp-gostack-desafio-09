import React from 'react';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(5, 'Mínimo de 5 caracteres')
      .required('O nome é obrigatório'),
    email: Yup.string()
      .email()
      .required('O email é obrigatório'),
    oldPassword: Yup.string(),
    password: Yup.string(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'As senhas não são iguais'
    ),
  });
  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit} schema={schema}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" placeholder="Seu e-mail" />
        <hr />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input
          type="password"
          name="password"
          placeholder="Digite sua nova senha"
        />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirme a nova senha"
        />
        <button type="submit">
          <div>
            <MdAddCircleOutline size={20} color="#fff" />
            <span>Salvar Perfil</span>
          </div>
        </button>
      </Form>
    </Container>
  );
}
