import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 40px auto;
`;

export const ContentHeader = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: baseline;

  h1 {
    display: block;
    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }
  div {
    display: flex;
    flex-direction: row;
    div {
      button {
        margin-top: 15px;
        height: 42px;
        width: 116px;
        background: #4dbaf9;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.08, '#4dbaf9')};
        }

        div {
          display: flex;
          justify-content: center;
          align-items: center;

          span {
            margin: auto 10px;
            color: #fff;
            font-size: 16px;
            opacity: 1;
          }
        }
      }
    }
  }

  button {
    margin: 15px 10px;
    height: 42px;
    width: 138px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#f64c75')};
    }

    &:disabled {
      background: #eee;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        margin: auto 10px;
        color: #fff;
        font-size: 16px;
        opacity: 1;
      }
    }
  }
`;

export const MeetupData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  p {
    margin: 20px 0;
    font-size: 18px;
    color: #fff;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    span {
      color: #fff;
      font-size: 16px;
      margin: 10px 10px;
    }
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  flex: 1;
  max-height: 300px;
  overflow: hidden;
  text-align: center;

  img {
    margin: 0 auto;
    max-height: 300px;
  }
`;
