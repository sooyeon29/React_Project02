//액션 명
const ADD_INPUT = "ADD_INPUT";
const DELETE_LISTBOX = "DELETE_LISTBOX";
const CHANGE_LISTBOX = "CHANGE_LISTBOX";
// const TO_INFOPAGE = "TO_INFOPAGE";

//액션크리에이터
// 인풋박스에 입력하는 값을 addedword로 받는다
// ** 인풋저장 액션만들기
export const addInput = (addedword) => {
  // console.log(addedword);
  return {
    type: ADD_INPUT,
    addedword,
  };
};

//선택한 박스의 Id를 받아준다! (바꾸고 싶은 부분) ->> 액션 크리에이터!
// 새로받아 오는 값 deleteID
// ** 삭제버튼 액션만들기
export const delBox = (deleteID) => {
  //   console.log(deleteID);
  return {
    type: DELETE_LISTBOX,
    deleteID,
  };
};

// ** 카드 옮기기 액션만들기 (취소, 완료)
export const moveBox = (changeIsDone) => {
  return {
    type: CHANGE_LISTBOX,
    changeIsDone,
  };
};

//초기값
const initialState = {
  todos: [
    {
      id: 1,
      title: "월요일 할일",
      body: "개인과제완성하기",
      isDone: false,
    },
    {
      id: 2,
      title: "리덕스 실습",
      body: "실습과제 구현 및 css완성하기",
      isDone: true,
    },
  ],
};

//리듀서
const wordAdder = (state = initialState, action) => {
  // console.log(action);
  console.log(state.todos);
  switch (action.type) {
    case ADD_INPUT:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            //todos 배열의 가장마지막에 있는 값의 id를 가져와 준다!!
            // 중간에 숫자가 삭제되더라도 길이가 줄어드는것은 맞지만 길이가 문제가 nono!!!
            // 길이-1을 인덱스로 준것임으로 배열의 가장 마지막에 있는 원소를 뜻한다!!
            // 그러므로 그 id에 1을 더하면 다음 숫자가 된다!!!
            id:
              state.todos.length === 0
                ? (state.todos.id = 1)
                : state.todos[state.todos.length - 1].id + 1,
            title: action.addedword.title,
            body: action.addedword.body,
            isDone: false,
          },
        ],
      };
    //   함수가 달라지더라도 케이스를 바꿔서 써주면된다!!
    // 리듀서를 새롭게 만들어 주어야 하는것이 아님!! 다른케이스의 함수가 작동되는것!!
    case DELETE_LISTBOX:
      return {
        // initialState의 값을 만들어준 모양과 같게 만들어주어야한다!
        // todos: 뒤에 부분이 바뀌는 것이니까 똑같이 todos: 한후에 필터함수를 사용해 주어야 한다
        // 아이디가 같은 값을 비교해서 이 부분을 필터! id가 같지 않은 카드들만 보여지게 된다!
        todos: state.todos.filter((filtertodo) => {
          return filtertodo.id !== action.deleteID;
        }),
      };
    case CHANGE_LISTBOX:
      return {
        todos: state.todos.map((maptodo) => {
          if (maptodo.id === action.changeIsDone) {
            return {
              ...maptodo,
              isDone: !maptodo.isDone,
            };
          } else {
            return { ...maptodo };
          }
        }),
      };

    default:
      return state;
  }
};

//export default 리듀서
export default wordAdder;
