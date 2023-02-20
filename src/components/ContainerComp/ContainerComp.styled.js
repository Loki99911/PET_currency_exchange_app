import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 360px;
  margin: 0px auto;
  padding: 0 16px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 1024px;
    padding: 0 60px;
  }
  @media screen and (min-width: 1170px) {
    width: 1170px;
    padding: 0;
  }
`;
