
import Link from "next/link";



async function getUsers() {

    let data = await fetch("http://localhost:3000/api/users/")

    data = await data.json();
    return data;

}


export default async function Page() {

    const  data = await getUsers();

    console.log(data)

    return (
        <>

            <h1>user list</h1>

            {data.map((item) => {
                return (
                    <>
                        <li>


                            <Link href={`users/${item.id}`}>{item.name}</Link>
                        </li>
                    </>
                )
            })}

        </>
    )
}