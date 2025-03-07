export default function getConverstationByIdUseCase(dependencies: any) {
    const { userRepositery } = dependencies.repositery;

    const executeFunction = async (data: any) => {
        try {
            
            const response = await userRepositery.getConverstationById(data);
            
            if (response.status) {
                return { status: true, data: response.data };
            } else {
                return { status: false, message: response.message };
            }
        } catch (error) {
            console.log(error);
            return { status: false, message: "Error in viewDoctorDetailsUseCase" };
        }
    };

    return { executeFunction };
}
