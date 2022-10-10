import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { delBox } from "../redux/modules/listsaver";

const Working = styled.div``;

const Done = styled.div``;

const WrapBut = styled.div``;

export default function List() {
  const globalAddedWord = useSelector((state) => state.wordAdder.todos);
  console.log(globalAddedWord);

  const dispatch = useDispatch();
  //   todoListbox.id를 아래 const deleteBut = (요기!!!) 로 가져온다
  // 요 값을 스토어로 넘겨주고 싶음으로 디스페치에 넣어준다
  const deleteBut = (deleteID) => {
    dispatch(delBox(deleteID));
  };

  const moveBut = () => {};

  return (
    <div>
      <Working>
        <span>WORKING🔥🔥🔥</span>
        {globalAddedWord.map((todoListbox) => {
          if (!todoListbox.isDone) {
            return (
              <div key={todoListbox.id}>
                {todoListbox.title}
                {todoListbox.body}
                <WrapBut>
                  <button onClick={() => deleteBut(todoListbox.id)}>
                    삭제하기
                  </button>
                  <button onClick={() => moveBut(todoListbox.id)}>완료</button>
                </WrapBut>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Working>
      <Done>
        <span>Done🎉🎉🎉</span>
        {globalAddedWord.map((todoListbox) => {
          if (todoListbox.isDone) {
            return (
              <div key={todoListbox.id}>
                {todoListbox.title}
                {todoListbox.body}
                <WrapBut>
                  <button onClick={() => deleteBut(todoListbox.id)}>
                    삭제하기
                  </button>
                  <button onClick={() => moveBut(todoListbox.id)}>완료</button>
                </WrapBut>
              </div>
            );
          } else {
            return null;
          }
        })}
      </Done>
    </div>
  );
}
