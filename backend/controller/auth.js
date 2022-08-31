import User from "../model/users.js";
import bcrpyt from 'bcryptjs';

export const signIn = async (req,res)=>{
    const data = req.body;
    try{
        const existUser = await User.findOne({email:data.email});

        if(!existUser){
            if(data.accountType==='google') return signUp(req,res);
            return res.status(405).send({error:'User does not exist'});
        }
        const passwordCorrect = await bcrpyt.compare(data.password, existUser.password);

        if(data.accountType!=='google' && !passwordCorrect) return res.status(400).send({error:'Incorrect Password'});;
        
        res.status(200).send(existUser);
    }
    catch(e){
        return res.status(400).send({error:'something went wrong'});
    }
}
export const signUp = async (req,res)=>{
    
    try{
        const data = req.body;

        const user = await User.findOne({email:data.email});
        
        if(user){
            if(data.accountType==='google') return res.status(201).send(user);
            return res.status(404).send({error:'user already exist'});
        }
        const hashedPassword = await bcrpyt.hash(data.password,12);

        const newUser = new User({email:data.email, given_name:data.given_name, family_name:data.family_name, password:hashedPassword});
        
        newUser.save().then(doc=>res.status(201).send(doc));
        
    }
    catch(e){
        return res.status(405).send({error:'something went wrong'});
    }
}