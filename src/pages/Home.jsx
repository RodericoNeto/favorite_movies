import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
    return (
        <div>

            <h1>Home do SVL</h1>

            <nav>
                <Link to="/about">About </Link>
                <Link to="/user">Users</Link>
                <Link to="/user/">UserView</Link>
            </nav>

        </div>
    )
}
