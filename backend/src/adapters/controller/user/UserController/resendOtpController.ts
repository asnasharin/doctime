import { Request, Response } from "express";

export default (dependecies: any) => {

    const { resendOtpUseCase }=dependecies.useCase
  
    const resendOtpController = async (req: Request, res: Response) => {
        const {enteredOtp}=req.body
        console.log(req.body,"reqqqqqqqqqbodyyyyyyyyy")
      
        const userData=req.session.userData

        if(req.session.Otp===enteredOtp){
            const responce =await resendOtpUseCase(dependecies).executeFunction(userData) 
           if(responce.status){
             res.status(200).json({status:true,data:responce.data})
           }else{
            res.status(400).json({status:false,message:responce.message})
           }
        }else{

            res.status(400).json({status:false,message:"Wrong otp"})
        }

    }

    return resendOtpController
}