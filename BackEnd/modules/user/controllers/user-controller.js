import { UserModel } from "../../../shared/db/models/user-schema.js";
import { hashing } from "../../../shared/encryption/encrypt.js";
import Redirect from 'react-router-dom';

export const userController={
    async register(request, response){
        const userInfo= request.body; //post data
        //console.log('Body is ', body);
        userInfo.password = hashing.passwordHash(userInfo.password);
        try{
        const doc= await UserModel.create(userInfo);
        if(doc ){
            response.json({message:'Register Successfully'});
        }
        else{
            response.json({message:'Problem in Register'});
        }
    } 
    catch(err){
        console.log('register err', err);
        response.json({message:'Problem in Register'});
    }
    },

   async login(request, response){
        const userInfo= request.body;
        const doc= await UserModel.findOne({'email':userInfo.email}).exec();
        console.log(doc);
        if(doc && doc._id){
            const plainPassword= userInfo.password;
            const dbPassword= doc.password;
            console.log(plainPassword+"    "+dbPassword);
            if(hashing.matchPassword(plainPassword, dbPassword)){
                response.json({message:'Welcome '+doc.name})  
            }
            else{
                response.json({message:'Invalid Userid or Password'})
            }
        }
        else{
            response.json({message:'Invalid Userid or Password'})
        }
        // if(userInfo.userid= userInfo.userpassword){
        //     response.json({message:'Welcome'+ userInfo.userid});
        // }
        // else{
        //     response.json({message:'Invalid Userid or Password'}); 
        // }
    },

    changePassword(request, response){
        response.json({message:'Change pwd'});
    },

    profile(request, response){
        const userName= request.params.username; 
        response.json({message: userName + 'Profile'});
    },

    removeAccount(request, response){
        response.json({message:''});
    },
}