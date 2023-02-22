import styled from "@emotion/styled";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0px; 20px 0px;

`;
export default function CardList(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
