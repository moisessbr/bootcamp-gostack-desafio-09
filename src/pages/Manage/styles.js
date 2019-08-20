import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 940px;
  margin: auto;
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Content = styled.div`
   width: 100%;
form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    > div {
          span {
          color: rgba(255, 255, 255, 0.3);
          font-size: 20px;
          margin-top: 20px;
          }
    }


    span {
      color: #fb6f9f;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    input {
      width: 100%;
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }



    .react-datepicker-wrapper,
    .react-datepicker__input-container,
    .react-datepicker__input-container input {
    display: block;
    width: 100%;
    }

    textarea {
      border: 0;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      height: 200px;
      padding: 15px 15px;
      color: #fff;
      margin: 0 0 10px;
      resize: none;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

  > button {
    align-self: flex-end;
    margin-top: 10px;
    height: 42px;
    width: 162px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    > &:hover {
      background: ${darken(0.04, '#f64c75')};
    }

    > div {
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
  }`;
