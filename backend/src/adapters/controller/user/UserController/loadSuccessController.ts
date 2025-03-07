import { Request, Response } from "express";
export default (dependecies: any) => {


    const { loadSuccessUseCase } = dependecies.useCase
    const loadSuccessController = async (req: Request, res: Response) => {

        try {
            const { userId, doctorId, date, time } = req.body
            const data = {
                userId,
                doctorId,
                date,
                time
            }

            const response = await loadSuccessUseCase(dependecies).executeFunction(data);


            // Check if the response object and its data property are defined
            if (response && response.status && response.data) {
                res.json({ status: true, data: response.data });

            } else {
                res.json({ status: false, message: "Data not found" });
            }
        } catch (error) {
            console.error("Error in adminUserController:", error);
            res.status(500).json({ status: false, message: "Internal server error" });
        }

    };
    return loadSuccessController;
};
