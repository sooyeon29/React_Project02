import React from "react";
// navigate를 사용해서 이둉하는 방법
// import { useNavigate } from "react-router-dom";
// Link를 사용해서 페이지를 이동하는 방법!
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Header from "../components/Header";
import BoxInput from "../components/BoxInput";
import List from "../components/List";

export default function TodoList() {
  // navigate를 사용해서 이둉하는 방법
  //   const navigate = useNavigate();

  return (
    <div>
      <span>메인페이지 만들예정</span>
      {/* Link를 사용해서 페이지를 이동하는 방법! */}
      <Link to="/info">상세페이지</Link>
      {/* navigate를 사용해서 이둉하는 방법
      <button onClick={() => navigate("/info")}>상세페이지</button>
      */}
      <div>
        <Layout>
          <Header />
          <BoxInput />
          <List />
        </Layout>
      </div>
    </div>
  );
}
