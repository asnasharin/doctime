import { hashPassword, verifyHashPassword } from "../../../utils";
import { generateToken } from "../../../utils";
import { v4 as uuidv4 } from 'uuid'; // For generating refresh token

export default function doctorLoginUseCase(dependencies: any) {
  const { doctorRepositery } = dependencies.repositery;

  const executeFunction = async (data: any) => {
    console.log('this is data', data);

    const response = await doctorRepositery.findDoctor(data.email);
    console.log(response, "responseresponseresponse");
    console.log("hyyy");


    if (response.status) {
      const user = response.user; // Assuming the user data is within the 'user' property

      // Check if the entered password is correct
      const isPasswordCorrect = await verifyHashPassword(data.password, user.password);

      if (isPasswordCorrect) {
        // Generate tokens
        const { token } = generateToken({ userId: user._id });
        // console.log(token,"token");
        
 
        return { status: true, data: user, token };
       } else {
        return { status: false, message: 'Incorrect password' };
       }
    } else {
      return { status: false, message: response.message };
    }
  };  

  return { executeFunction };
}
