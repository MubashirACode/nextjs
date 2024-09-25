import { users } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, { params }) {
  const UserId = parseInt(params.id);

  const UserData = users.find((item) => item.id === UserId);


  return NextResponse.json(

    UserData.length === 0 ? { result: 'NO Data found', success: false } : { result: UserData[0], success: true }
    , { status: 200 }
  )
}

export async function PUT(request , {params}){
  let payload = await request.json()

 payload.id=parseInt(params.id)

  console.log(payload)

return NextResponse.json({result:true})

}

