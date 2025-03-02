import { Request, Response } from "express";
export default (dependecies: any) => {
  const { bookAppointmentUseCase } = dependecies.useCase
  const bookAppointmentController = async (req: Request, res: Response) => {
    try {

      
      // const { doctorEmail, selectedTime, selectedDate } = req.body
      // const data = {
      //   doctorEmail,
      //   selectedDate,
      //   selectedTime
      // }

      
      // const response = await bookAppointmentUseCase(dependecies).executeFunction(data)
      // if (response && response.status && response.data) {
      //   res.json({ status: true, data: response.data });
      // } else {
      //   res.json({ status: false, data: response.data});
      // }

      const { doctorEmail, selectedDate, selectedTime } = req.body;

// Convert '21-02-2025' (DD-MM-YYYY) to '2025-02-21' (YYYY-MM-DD)
const formattedDate = selectedDate.split("-").reverse().join("-");

const data = {
  doctorEmail,
  selectedDate: new Date(formattedDate), // Convert to Date object
  selectedTime
};

const response = await bookAppointmentUseCase(dependecies).executeFunction(data);
if (response && response.status && response.data) {
        res.json({ status: true, data: response.data });
      } else {
        res.json({ status: false, data: response.data});
      }


    } catch (error) {
      console.log(error, "error in bookAppointmentController ")
    }
  };
  return bookAppointmentController;
};
