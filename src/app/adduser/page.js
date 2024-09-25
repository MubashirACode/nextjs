'use client';

import { useState } from "react";

export default function Page() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");


    const AddUsers = async () => {

        let responce = await fetch("http://localhost:3000/api/users", { method: "post", body: JSON.stringify({ name, age, email }) })

        responce = await responce.json()


        console.log(responce)

    }

    return (
        <>

            <h1>add user page </h1>

            <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Name" />
            <input type='text' onChange={(e) => setAge(e.target.value)} value={age} placeholder="Enter age" />
            <input type='text' onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email" />


            <button onClick={AddUsers}    >
                Add Data
            </button>

        </>
    )
}