import React from "react";
import { useParams } from "react-router-dom";

export default function ListInfo() {
  const param = useParams();
  console.log(param);
  return <div>상세페이지!!!</div>;
}
