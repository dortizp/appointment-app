import styled from "@emotion/styled";

const StyledContainer = styled.div`
  border: 1px solid grey;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, 0.2);
`;
export default function AppointmentCard(props) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
