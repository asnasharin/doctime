import { log } from "console";
import { Request, Response } from "express";
import { hashPassword } from "../../../../utils";

export default (dependencies: any) => {
    const { forgotPasswordForDocUseCase } = dependencies.useCase;

    const forgotPasswordForDocController = async (req: Request, res: Response) => {
        try {
            const { email, newPassword } = req.body


            const hashedNewPassword = await hashPassword(newPassword);
            console.log(hashedNewPassword,"hashedNewPassword");
            

            const data = {
                email, hashedNewPassword
            }

            const response = await forgotPasswordForDocUseCase(dependencies).executeFunction(data)
            console.log(response,";;;;;;;;;;;;;;;;;;;;;;");
            


            if (response && response.status && response.data) {
                res.json({ status: true, data: response.data });

            } else {
                res.json({ status: false, data: response.data });
            }

        } catch (error) {
            res.json({ status: false, data: "something went wrong " });

        }
    };


    return forgotPasswordForDocController;
};
