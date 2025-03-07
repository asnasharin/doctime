
export default function forgotPasswordUseCase(dependencies: any) {
    const {   userRepositery } = dependencies.repositery;

    const executeFunction = async (data: any) => {
        try {
            console.log("hy");
            
            const response = await userRepositery.forgotPassword(data);
            console.log(response,"''''''''''''''''''''''''''''''''''''''''");
            
            
            if (response.status) {
                return { status: true, data: response.data };
            } else {
                return { status: false, data: response.data };
            }
            
        } catch (error) {
            console.log(error);
            return { status: false, message: "Error in adminUserUseCase" };
        }

    };

    return { executeFunction };
}
