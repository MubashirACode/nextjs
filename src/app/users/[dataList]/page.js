



async function getUsers(id) {

    let data = await fetch(`http://localhost:3000/api/users/${id}`)

    data = await data.json();
    return data;

}                                                                                                                                   



export default async function Page({params}) {

    // console.log(params);
    const user = await getUsers(params.dataList);


    return(
        <>
        
        
        <div className="">
            <h1>mubashir ali</h1>
            <h4>Name: {user.name}</h4>
            <h4>Age: {user.age}</h4>
            <h4>Email: {user.email}</h4>
        </div>
        
        </>
    )
    
}