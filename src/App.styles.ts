import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  max-width: 800px;
  margin: auto;
  display: flex;
  padding: 50px 0;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media (max-width: 750px) {
    margin-bottom: 50px;
    align-items: center;
  }

`;

export const HeaderArea = styled.div`
  h4 {
    color: #9FCFFF;
  }
  
  a {
    text-decoration: none;
    color: #ccc;
    transition: all ease 0.3s;
  }

  a:hover {
    color: #60AFFF;
  }

  display: block;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const GridArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 750px) {
    justify-content: center;
    margin: 0 20px;
  }
`;

export const Grid = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const ResultArea = styled.div`
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
`;