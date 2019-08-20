import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  text-align: center;
  overflow: hidden;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: auto;
      background: #000000;
    }

    input {
      display: none;
    }
  }
`;
