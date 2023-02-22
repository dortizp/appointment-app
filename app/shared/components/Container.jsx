import styled from "@emotion/styled";

const StyledContainer = styled.div`
  margin: auto;
  max-width: 800px;
`;
export default function Container(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
