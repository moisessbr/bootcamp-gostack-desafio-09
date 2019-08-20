import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight, MdSync } from 'react-icons/md';
import {
  Container,
  ContentHeader,
  MeetupList,
  LoadingContainer,
} from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function loadMeetups() {
      const response = await api.get('organized');
      const data = response.data.map(meetup => {
        return {
          time: format(parseISO(meetup.date), "dd 'de' MMMM', às ' HH:mm'", {
            locale: pt,
          }),
          ...meetup,
        };
      });
      setMeetups(data);
      setLoading(false);
    }
    loadMeetups();
  }, []);
  return (
    <Container>
      <ContentHeader>
        <h1>Meus meetups</h1>
        <Link to="/manage">
          <button type="button">
            <div>
              <MdAddCircleOutline size={20} color="#fff" />
              <span>Novo meetup</span>
            </div>
          </button>
        </Link>
      </ContentHeader>
      <MeetupList>
        {loading ? (
          <LoadingContainer>
            <MdSync size={56} color="#fb6f9f" />
          </LoadingContainer>
        ) : (
          meetups.map(meetup => (
            <li key={meetup.id}>
              <span>{meetup.title}</span>
              <div>
                <time>{meetup.time}</time>
                <Link
                  to={{
                    pathname: '/details',
                    meetup,
                  }}
                >
                  <MdChevronRight size={24} color="#fff" />
                </Link>
              </div>
            </li>
          ))
        )}
        {!meetups.length ? (
          <p>Você ainda não tem Meetups cadastrados.</p>
        ) : null}
      </MeetupList>
    </Container>
  );
}
