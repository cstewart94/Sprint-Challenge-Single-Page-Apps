import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction: row;
  justify-content: space-between;
`
export const Card = styled.div`
  display:flex;
  width: 29%;
  margin: 2%;
  padding: 2% 0;
  background-color: lightgray;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;

`
export const ImgBox = styled.img`
  width:50%;
  height: auto;
`
export const HOne = styled.h1`
  margin: 1%;
  font-size: 1.5em;
`
export const HTwo = styled.h2`
  margin: 1%;
  font-size: 1em;
`