import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
    return (
        <div>


            <h1>Bem vindo ao SVL</h1>

            <nav>
                <Link to="/about">About</Link>
                <Link to="/user">Users</Link>
            </nav>

        </div>
    )
}
