import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;

  margin: 100px auto;
  padding: 20px;

  width: 500px;
  height: 200px;

  background-color: aliceblue;
  box-shadow: 0px 0px 5px 0px #4d6ac7b0;
  h3 {
    text-decoration: underline;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: small;
  color: #5a8ab8d5;
  button {
    height: fit-content;
    border-radius: 10px;
    border-style: dashed;
    border-color: #549aeb9b;
    background-color: #4d69c786;
    color: white;
  }
`;

export default function ListInfo() {
  const param = useParams();
  console.log(param.id);
  const navigate = useNavigate();
  const gloablTodos = useSelector((state) => state.wordAdder.todos);
  console.log(gloablTodos);

  const myTodoInfo = gloablTodos.filter((todoInfo) => {
    // console.log(todoInfo.id);
    return parseInt(param.id) === todoInfo.id;
  });
  console.log(myTodoInfo);

  return myTodoInfo.map((todoInfoPage) => {
    return (
      <Box key={todoInfoPage.id}>
        <Head>
          <p>id : {todoInfoPage.id}</p>
          <button onClick={() => navigate("/")}>이전으로</button>
        </Head>
        <h3>{todoInfoPage.title}</h3>
        <h4>{todoInfoPage.body}</h4>
      </Box>
    );
  });
}
