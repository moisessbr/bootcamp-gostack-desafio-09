import styled, { keyframes } from 'styled-components';
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

  button {
    margin-top: 15px;
    height: 42px;
    width: 162px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.04, '#f64c75')};
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      > span {
        margin: auto 10px;
        color: #fff;
        font-size: 16px;
        opacity: 1;
      }
    }
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const MeetupList = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;

  p {
    font-size: 18px;
    color: #fff;
    font-weight: bolder;
    text-align: center;
    margin: 10px 0px;
  }

  li {
    display: flex;
    flex: 1;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    min-height: 62px;
    padding: 0 20px;
    color: #fff;
    margin: 5px 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    span {
      display: block;
      font-size: 18px;
      font-weight: bold;
    }

    div {
      display: flex;
      align-items: center;

      time {
        margin-right: 20px;
      }
    }
  }
`;
