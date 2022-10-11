import React from "react";
import { useSelector } from "react-redux";
// import styled from "styled-components";
// // 스토어에서 만든 액션을 import해와야 한다!
// import { delBox, moveBox, movePage } from "../redux/modules/listsaver";
// import { Link } from "react-router-dom";
import RenderTodos from "./WorkDone";

// const Working = styled.div`
//   width: 50%;
//   float: left;
//   h1 {
//     text-align: center;
//   }
// `;

// const Done = styled.div`
//   width: 50%;
//   float: right;
//   h1 {
//     text-align: center;
//   }
// `;

// const ListBox = styled.div`
//   border: 5px solid ${(props) => props.borderColor};
//   border-radius: 10px;
//   margin: 30px 100px;
//   padding: 10px;
//   word-break: break-all;
//   Link {
//     font-size: 10px;
//   }
// `;

// const Button = styled.button`
//   margin: 10px;
//   background-color: ${(props) => props.backgroundColor};
//   border-radius: 10px;
//   font-size: 18px;
//   border-style: none;
//   color: ${(props) => props.fontColor};
//   &:hover {
//     font-weight: bold;
//   }
// `;

export default function List() {
  // useSelector을 이용하여 리듀서에서 변경되어 받은 인풋박스의 값을 가져온다
  const globalAddedWord = useSelector((state) => state.wordAdder.todos);
  const completedList = globalAddedWord.filter((item) => !item.isDone);
  const inCompletedList = globalAddedWord.filter((item) => item.isDone);

  // console.log(completedList);
  // console.log(inCompletedList);

  // const dispatch = useDispatch();
  //   todoListbox.id를 아래 const deleteBut = (요기!!!) 로 가져온다
  // 요 값을 스토어로 넘겨주고 싶음으로 디스페치에 넣어준다
  // const deleteBut = (deleteID) => {
  //   dispatch(delBox(deleteID));
  // };

  // const moveBut = (changeIsDone) => {
  //   dispatch(moveBox(changeIsDone));
  // };

  return (
    <div>
      <RenderTodos todoList={completedList} title="WORKING🔥🔥🔥" />
      <RenderTodos todoList={inCompletedList} title="Done🎉🎉🎉" />

      {/* 아래 작성한 내용을  위에 props로 넘겨주어 코드를 줄여주었다! 모듈화 해주었다!*/}
      {/* <div>
      <Working>
      <h1>WORKING🔥🔥🔥</h1>

      {globalAddedWord.map((todoListbox) => {
          if (!todoListbox.isDone) {
            return (
              <ListBox borderColor="#ef966e" key={todoListbox.id}>
                <Link to={`/info/${todoListbox.id}`}>상세보기</Link>
                <h2>{todoListbox.title}</h2>
                <h3>{todoListbox.body}</h3>

                <Button
                  backgroundColor="#ef966e"
                  fontColor="#e4331f"
                  onClick={() => deleteBut(todoListbox.id)}
                >
                  삭제하기
                </Button>
                <Button
                  backgroundColor="#80b1fa"
                  fontColor="#4f68f8"
                  onClick={() => moveBut(todoListbox.id)}
                >
                  {todoListbox.idDone ? "취소" : "완료"}
                </Button>
              </ListBox>
            );
          } else {
            return null;
          }
        })}
      </Working>
      <Done>
      <h1>Done🎉🎉🎉</h1>

      {globalAddedWord.map((todoListbox) => {
          if (todoListbox.isDone) {
            return (
              <ListBox borderColor="#80b1fa" key={todoListbox.id}>
                <Link to={`/info/${todoListbox.id}`}>상세보기</Link>
                <h2>{todoListbox.title}</h2>
                <h3>{todoListbox.body}</h3>

                <Button
                  backgroundColor="#ef966e"
                  fontColor="#e4331f"
                  onClick={() => deleteBut(todoListbox.id)}
                >
                  삭제하기
                </Button>
                <Button
                  backgroundColor="#80b1fa"
                  fontColor="#4f68f8"
                  onClick={() => moveBut(todoListbox.id)}
                >
                  {!todoListbox.idDone ? "취소" : "완료"}
                </Button>
              </ListBox>
            );
          } else {
            return null;
          }
        })}
      </Done>
      </div> */}
    </div>
  );
}
