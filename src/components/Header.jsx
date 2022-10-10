import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  span {
    font-size: 20px;
  }
`;

export default function Header() {
  return (
    <Div>
      <span>MY TODO LIST📝</span>
      React
    </Div>
  );
}
