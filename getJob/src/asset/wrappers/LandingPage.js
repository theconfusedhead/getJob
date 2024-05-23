import styled from "styled-components";

const Wrapper = styled.main`
  nav {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    height: 6rem;
    background-color: #f9f9f9;
  }
  img {
    height: 98px;
  }
  div {
    width: 90vw;
    max-width: 1120px;
    margin: 0 auto;
    min-height: calc(100vh - 6rem);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Wrapper;
