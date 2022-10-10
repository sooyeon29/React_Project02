import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addInput } from "../redux/modules/listsaver";

// input box style
const InputWrap = styled.div`
  /* input {
  } */
`;
const Button = styled.button``;
// const ListBox = styled.div``;

export default function BoxInput() {
  //   input입력값 받기
  const [todo, setTodo] = useState({});
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
    // setTodo("");
  };

  //   지금 여기서 바로 값을 return해줄것이 아니라서 가져올 필요가 없움!
  //   const globalAddedWord = useSelector((state) => state.wordAdder.todos);

  return (
    <div>
      <form onSubmit={saveInputs}>
        <InputWrap>
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
        </InputWrap>
        <Button>추가하기</Button>
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
