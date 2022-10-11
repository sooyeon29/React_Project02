import React from "react";
// react-router-dom 사용을 위해 아래 API import
import { BrowserRouter, Route, Routes } from "react-router-dom";
// 열어주고 싶은 페이지들의 컴포넌트를 import
import TodoList from "../pages/TodoList";
import ListInfo from "../pages/ListInfo";

// router라는 함수를 만든다!
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoList />} />
        {/* 그냥인포라는페이지로 갈 필요가 없음으로  */}
        {/* <Route path="info" element={<ListInfo />} /> */}
        {/* Dynamic Routes를 위한 설정
        ---> :id 라는 것이 동적인 값을 받겠다는 의미이다
        이 :id는 useParams훅에서 조회할 수 있는 값이 된다  */}
        {/* : 뒤에는 동적으로 바뀔수있다는의미 */}
        <Route path="/info/:id" element={<ListInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
