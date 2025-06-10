// import {Request,Response} from "express"
// import { envConfigs } from "../config/envconfig";
// import axios from "axios";
// import dbservices from "../services/dbservices";
// import url from "node:url";
// import WhatsappService from "../services/whatsapp";
// import Twillio from "../services/twilio";
// import { OtpVerificationMethods } from "../enums";
// import { generateAuthTokens } from "../config/token";
// import { otpToken } from "../helper/common";
// import jwt from 'jsonwebtoken'
// import crypto from 'crypto';



// export class auth{

//     static googleSignInSignUp =  async(req:Request,res:Response)=>{
//         try {
//           const token = req.query.code;
//           let clientId = envConfigs.googleClientId;
//           let clientSecret = envConfigs.googleClientSecret;
//           let REDIRECT_URI = envConfigs.redirectUri;
//           const validateUser = await axios.post(`https://oauth2.googleapis.com/token`,{code:token,client_id: clientId,client_secret: clientSecret,redirect_uri:REDIRECT_URI,grant_type: "authorization_code"});
//           const { id_token, access_token } = validateUser.data;
//           const {email,name,picture} = await axios
//           .get(
//             `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
//             {
//               headers: {
//                 Authorization: `Bearer ${id_token}`,
//               },
//             }
//           )
//           .then((res) => res.data)
//           .catch((error) => {
//             console.error(`Failed to fetch user`);
//             throw new Error(error.message);
//           });
//           if(!email) throw new Error("Error fetching email please try again");
  
  
//           let userExists = await dbservices.auth.login({email},true);
//           if (!userExists) {
//             const createBody = {
//                 email: email,
//                 name: name,
//                 avatar:picture,
//             };
//             userExists=await dbservices.auth.register(createBody,true); 
//           }
//           let FRONTEND_REDIRECT_URL = envConfigs.frontendRedirectUrlLocal;
  
//           return res.redirect(url.format({
//             pathname:`${FRONTEND_REDIRECT_URL}`,
//             query:{user:JSON.stringify(userExists)}
//           }));
//         } catch (error) {
//           console.log(error);
//           // return res.redirect(url.format({
//           //   pathname:`${FRONTEND_REDIRECT_URL}`,
//           //   query:{
//           //     error_message:error["message"]
//           //   }
//           // }));
//         }
//       }

//       static emailLogin=async(req:Request,res:Response)=>{
//         try{
//           const {email,password} = req.body;
//           if(!email) throw new Error("Email is required");
//           if(!password) throw new Error("Password is required");
//           let userExists = await dbservices.auth.login({email},true);
//           if(!userExists) throw new Error("User not found");
//           if(!userExists["password"]) throw new Error("User not found");
//           let isPasswordValid = await bcrypt.compare(password,userExists["password"]);
//           if(!isPasswordValid) throw new Error("Invalid Password");
//           const token = await generateAuthTokens({userId:userExists["userId"]});  
//           return res.status(200).send({message:"Login Success",data:userExists,token});
          

//         }catch(error){
//           return res.status(500).json({ status: false, message: error});
//         }
  
    
//       }
// }