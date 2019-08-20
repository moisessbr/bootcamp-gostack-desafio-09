import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {
  MdModeEdit,
  MdDeleteForever,
  MdEvent,
  MdLocationOn,
} from 'react-icons/md';
import { parseISO, isAfter } from 'date-fns';
import { meetupDeleteRequest } from '~/store/modules/meetup/actions';
import history from '~/services/history';
import {
  Container,
  ContentHeader,
  MeetupData,
  BannerContainer,
} from './styles';

export default function Details({ location }) {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(meetupDeleteRequest(id));
  }
  // Receive 'meetup' from Details and send to edit.
  function handleEdit(meetup) {
    const { time, id, date, title, description, location, banner_id } = meetup;
    const parsedMeetup = {
      time,
      id,
      date: parseISO(date),
      title,
      description,
      location,
      banner: banner_id,
    };
    history.push({
      pathname: '/manage',
      parsedMeetup,
    });
  }

  // Details receive 'meetup' from dashboard. In direct access redirect to dashboard.
  const { meetup } = location;

  if (!meetup) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <ContentHeader>
        <h1>{meetup.title} </h1>
        <div>
          <div>
            <button type="button" onClick={() => handleEdit(meetup)}>
              <div>
                <MdModeEdit size={20} color="#fff" />
                <span>Editar</span>
              </div>
            </button>
          </div>
          <button
            type="button"
            onClick={() => handleDelete(meetup.id)}
            disabled={isAfter(new Date(), parseISO(meetup.date))}
          >
            <div>
              <MdDeleteForever size={20} color="#fff" />
              <span>Cancelar</span>
            </div>
          </button>
        </div>
      </ContentHeader>
      <MeetupData>
        <BannerContainer>
          <img src={meetup.banner_id.url} alt="re" />
        </BannerContainer>
        <p>{meetup.description}</p>
        <div>
          <div>
            <MdEvent size={20} color="#fff" />
            <span>{meetup.time}</span>
          </div>
          <div>
            <MdLocationOn size={20} color="#fff" />
            <span>{meetup.location}</span>
          </div>
        </div>
      </MeetupData>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.objectOf.isRequired,
  meetup: PropTypes.arrayOf.isRequired,
};
