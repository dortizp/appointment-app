import styled from "@emotion/styled";

const StyledContainer = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
`;
export default function AppointmentCardPreview(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
