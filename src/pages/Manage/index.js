import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline, MdSync } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, Content, LoadingContainer } from './styles';
import DatePicker from '~/components/DatePicker';
import Banner from './Banner';
import {
  meetupEditRequest,
  meetupCreateRequest,
} from '~/store/modules/meetup/actions';

export default function Manage({ location }) {
  const schema = Yup.object().shape({
    banner: Yup.number('É necessário inserir uma imagem.').required(() =>
      toast.error('Você precisa selecionar uma imagem!')
    ),
    title: Yup.string().required('O título do Meetup é obrigatório.'),
    description: Yup.string().required(
      'É obrigatório inserir uma descrição para o Meetup.'
    ),
    date: Yup.date().required('É necessário inserir a data do Meetup.'),
    location: Yup.string().required('A localização do Meetup é obrigatória!'),
  });

  const { parsedMeetup } = location;
  const loading = useSelector(state => state.meetup.loading);
  const dispatch = useDispatch();
  function handleSubmit(data) {
    if (parsedMeetup) {
      const dataId = parsedMeetup.id;
      dispatch(meetupEditRequest(data, dataId));
    } else {
      dispatch(meetupCreateRequest(data));
    }
  }
  return (
    <Container>
      {loading ? (
        <LoadingContainer>
          <MdSync size={56} color="#fb6f9f" />
        </LoadingContainer>
      ) : null}
      <Content>
        <Form
          schema={schema}
          initialData={parsedMeetup || null}
          onSubmit={data => handleSubmit(data)}
        >
          <Banner name="banner" />
          <Input name="title" type="text" placeholder="Título do Meetup" />
          <Input
            name="description"
            multiline
            maxlength="255"
            type="text"
            placeholder="Descrição completa"
          />
          <DatePicker name="date" placeholder="Data do Meetup" />
          <Input name="location" type="text" placeholder="Localização" />
          <button type="submit">
            <div>
              <MdAddCircleOutline size={20} color="#fff" />
              <span>Salvar Meetup</span>
            </div>
          </button>
        </Form>
      </Content>
    </Container>
  );
}
