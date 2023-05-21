import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getIronSession } from "iron-session/edge";
import  {type SessionUserType} from "@/lib/auth/sessionusertype";
import { IronSession } from "iron-session";

require("isomorphic-fetch");
export default async function middleware(req: NextRequest) {


      const res = NextResponse.next();
      const session : IronSession = await getIronSession(req, res, {
            password: `${process.env.NEXT_PUBLIC_SESSION_TOKEN}`,
            cookieName: "userSession",
            // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
            cookieOptions: {
              secure: process.env.NODE_ENV === 'production',
            },
      });
      
      //si no existe la cokkie con la sesion del usuario la creamos
      if(!session.user){
            const dataUserSession : SessionUserType = {

                  cart : {
      
                        totalElements : 0,
                        products : [],
                        totalPrice : 0
                  }
            }
          
            session.user = dataUserSession;
            await session.save();
            
      }


      return res;
}