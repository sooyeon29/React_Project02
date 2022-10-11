import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delBox, moveBox } from "../redux/modules/listsaver";

const RenderTodos = ({ todoList, title }) => {
  // console.log(todoList);
  const dispatch = useDispatch();

  const deleteBut = (deleteID) => {
    dispatch(delBox(deleteID));
  };

  const moveBut = (changeIsDone) => {
    dispatch(moveBox(changeIsDone));
  };

  return (
    <Wrapper>
      <h1>{title}</h1>
      {todoList.map((todo) => {
        return (
          <ListBox
            borderColor={todo.isDone ? "#80b1fa" : "#ef966e"}
            key={todo.id}
          >
            <Link to={`/info/${todo.id}`}>상세보기</Link>
            <h2>{todo.title}</h2>
            <h3>{todo.body}</h3>

            <Button
              backgroundColor="#ef966e"
              fontColor="#e4331f"
              onClick={() => deleteBut(todo.id)}
            >
              삭제하기
            </Button>
            <Button
              backgroundColor="#80b1fa"
              fontColor="#4f68f8"
              onClick={() => moveBut(todo.id)}
            >
              {todo.idDone ? "취소" : "완료"}
            </Button>
          </ListBox>
        );
      })}
    </Wrapper>
  );
};

export default RenderTodos;

const ListBox = styled.div`
  border: 5px solid ${(props) => props.borderColor};
  border-radius: 10px;
  margin: 30px 100px;
  padding: 10px;
  word-break: break-all;
  Link {
    font-size: 10px;
  }
`;

const Button = styled.button`
  margin: 10px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  font-size: 18px;
  border-style: none;
  color: ${(props) => props.fontColor};
  &:hover {
    font-weight: bold;
  }
`;
const Wrapper = styled.div`
  width: 50%;
  float: left;
  h1 {
    text-align: center;
  }
`;
