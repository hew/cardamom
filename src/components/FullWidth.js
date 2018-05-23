import styled from 'styled-components';

export default styled.div`
  width: 100vw;
  height: ${({height = '400px'}) => height};
  position: relative;
  left: 50%;
  right: 50%;
  margin: 0 -50vw;
  background-size: cover;
  background-position: bottom;
  background-color: ${({bg = 'transparent'}) => bg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
