import React from 'react'
import { Routes, Route, useParams } from "react-router-dom";

export default function UserView() {

    let params = useParams();

  return (
    <div>Usuário:  {params.id}</div>
  )
}
