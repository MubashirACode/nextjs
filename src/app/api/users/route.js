import { users } from "@/utils/db";
import { NextResponse } from "next/server";




export function GET (){

const data = users;
 


return NextResponse.json(data,{status:200})


}



export async function POST(request) {
    
let payload =await  request.json();


console.log(payload.name);

if (!payload.name || !payload.age || !payload) {
    return NextResponse.json( {result:"your post api is not running"}) 
}



return NextResponse.json( {result:"your post api is running"})

    
}