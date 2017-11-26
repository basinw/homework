import styled, { injectGlobal } from 'styled-components'

const Title = styled.span`
  font-family: 'PWScratchedFont', sans-serif;
  text-align: center;
  font-size: 2em;
  display: inline-block;
  margin-top: 20px;
  margin-bottom: 5px;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 4em;
`

const Button = styled.button`
  color: #fff;
  border-radius: 5px;
  font-size: 1.2em;
  height: 2.5em;
  border: 1px solid transparent;
  cursor: pointer;
  padding: 5px 10px;

  @media screen and (max-width: 768px) {
    width: 100% !important;
    margin: 5px 0;
  }

  @media screen and (min-width: 769px) {
    width: calc(100% / 4);
    margin: 0 5px;
  }

  ${props =>
    props.major === props.selectedMajor
      ? `
    background-color: #00838f;
    font-weight: bold;
    &:hover {
      background-color: #26C6DA;
      box-shadow: 0px 0px 20px #888888;
    }
      `
      : `
      background: #455A64;
      &:hover {
        background: #E0E0E0;
        border-color: #424242;
        color: #000;
      } 
      `};
`

const Tr = styled.tr`
  & th:nth-child(1) {
    width: calc(150% / 2);
  }
  th:nth-child(2) {
    width: calc(50%);
  }
`

const Background = styled.div`
  background-image: url('/static/images/img1.png');
  background-size: contain;
`

const Table = styled.table`
  color: #fff;
  box-shadow: 0px 0px 20px #888888;
  background-color: rgba(33, 37, 41, 0.7) !important;
  & tbody tr:hover {
    background-color: rgba(255, 255, 255, 0.5) !important;
    cursor: pointer;
  }
`

const Col = styled.div`
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
`

const Title2 = styled.div`
  font-family: 'PWScratchedFont', sans-serif;
  margin: 20px 0 10px;
`

const Name = styled.div`
  /* font-size: 3em; */
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  & > div {
    fontsize: 1em;
    & > .major {
      color: #05d7ea;
    }
  }
`

export { Title, Button, Tr, Table, FlexBox, Background, Col, Name, Title2 }
