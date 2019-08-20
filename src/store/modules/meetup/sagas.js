import { takeLatest, all, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
  meetupDeleteSuccess,
  meetupDeleteFailure,
  meetupCreateSuccess,
  meetupEditCreateFailure,
  meetupEditSuccess,
} from './actions';
import history from '~/services/history';
import api from '~/services/api';

export function* meetupDelRequest({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `meetups/${id}`);

    yield put(meetupDeleteSuccess());
    toast.success('Meetup deletado com sucesso.');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Ocorreu um erro ao deletar o meetup.');
    yield put(meetupDeleteFailure());
  }
}

export function* meetupEditRequest({ payload, id }) {
  try {
    const { data } = payload;
    console.tron.log(id);
    yield call(api.put, `meetups/${id}`, data);

    yield put(meetupEditSuccess());
    toast.success('Meetup alterado com sucesso.');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Ocorreu um erro ao editar o Meetup.');
    console.tron.log(error);
    yield put(meetupEditCreateFailure());
  }
}

export function* meetupCreateRequest({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, `meetups`, data);

    yield put(meetupCreateSuccess());
    toast.success('Meetup criado com sucesso.');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Ocorreu um erro ao criar o Meetup.');
    yield put(meetupEditCreateFailure());
  }
}

export default all([
  takeLatest('@meetup/MEETUP_DELETE_REQUEST', meetupDelRequest),
  takeLatest('@meetup/MEETUP_EDIT_REQUEST', meetupEditRequest),
  takeLatest('@meetup/MEETUP_CREATE_REQUEST', meetupCreateRequest),
]);
