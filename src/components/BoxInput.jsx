import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addInput } from "../redux/modules/listsaver";

// input box style
const InputWrap = styled.div`
  margin: 20px 50px;
  padding: 10px 40px 10px 20px;
  background-color: #b6c376;
  opacity: 0.8;
  border-radius: 10px;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    font-size: large;
    input {
      margin: 10px;
      font-size: large;
      outline-style: double;
    }
  }
  button {
    background-color: transparent;
    border-radius: 20px;
    border: 3px solid #475e45;
    color: #475e45;
    font-size: large;

    &:hover {
      color: #b6c376;
      background-color: #475e45;
    }
  }
`;

export default function BoxInput() {
  //   input입력값 받기
  const [todo, setTodo] = useState({
    // id: 0,
    title: "",
    body: "",
    // isDone: false,
  });
  const writeInput = (event) => {
    // console.log(event);
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setTodo({ ...todo, [name]: value });
  };

  //   디스페치 하기위해 선언
  const dispatch = useDispatch();
  //   onsubmit으로 입력값 추가 -> store에서 값 가져오기
  const saveInputs = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    dispatch(addInput(todo));
    setTodo({
      // id: 0,
      title: "",
      body: "",
      // isDone: false
    });
  };

  //   지금 여기서 바로 값을 return해줄것이 아니라서 가져올 필요가 없움!
  //   const globalAddedWord = useSelector((state) => state.wordAdder.todos);

  return (
    <div>
      <form onSubmit={saveInputs}>
        <InputWrap>
          <div>
            제목 :
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={writeInput}
            />
            내용 :
            <input
              type="text"
              name="body"
              value={todo.body}
              onChange={writeInput}
            />
          </div>

          <button>추가하기</button>
        </InputWrap>
      </form>

      {/* {globalAddedWord.map((todobox) => {
        return (
          <ListBox key={todobox.id}>
            {todobox.title}
            {todobox.body}
          </ListBox>
        );
      })} */}
    </div>
  );
}
