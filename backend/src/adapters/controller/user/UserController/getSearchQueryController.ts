import { Request, Response } from "express";
export default (dependecies: any) => {
  

  const { getSearchQueryUseCase }=dependecies.useCase
  const getSearchQueryController = async (req: Request, res: Response) => {
   
    try { 
            const {query}=req.query
            const data={
               query
            } 
        const response = await getSearchQueryUseCase(dependecies).executeFunction(data);
        console.log(response,'-----------------');

        if ( response.status ) {
            res.status(200).json({ status: true, data: response.data });
    
        } else {
            res.status(400).json({ status: false, message: response.message});
        }
    } catch (error) {
        console.error("Error in getConverstationsUseCase:", error);
        res.status(500).json({ status: false, message: "Internal server error" });
    }
    
  };
  return getSearchQueryController;
};
