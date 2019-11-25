import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(178, 235, 104, 1) 0%,
    rgba(255, 246, 169, 1) 50%,
    rgba(178, 235, 104, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    width: 300px;
    height: 300px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: rgba(93, 96, 92, 0.7);
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(93, 96, 92, 0.7);
        font-weight: bold;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7ead41;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7EAD41')};
      }
    }

    a {
      color: #5d605c;
      font-weight: bold;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
