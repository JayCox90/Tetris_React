import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  aspect-ratio: 1;
  background: rgba(${(props) => props.theme[props.type]}, 0.8);
  // Border shadows
  border: ${(props) => (props.type === 0 ? "0px solid" : "4px solid")};
  border-bottom-color: rgba(${(props) => props.theme[props.type]}, 0.1);
  border-right-color: rgba(${(props) => props.theme[props.type]}, 1);
  border-top-color: rgba(${(props) => props.theme[props.type]}, 1);
  border-left-color: rgba(${(props) => props.theme[props.type]}, 0.3);
`;
