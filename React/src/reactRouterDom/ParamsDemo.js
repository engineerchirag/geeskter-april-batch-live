import React from "react";
import { useParams } from "react-router-dom";

function ParamsDemo(props) {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}

export default ParamsDemo;
