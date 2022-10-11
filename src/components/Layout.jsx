import React from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 1200px;
  min-width: 800px;
  justify-content: center;
  margin: auto;
`;

export default function Layout(props) {
  return <Div>{props.children}</Div>;
}
