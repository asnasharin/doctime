export default function showAppoinmentsUseCase(dependencies: any) {
    const { doctorRepositery } = dependencies.repositery;

    const executeFunction = async (data: any) => { 
        try {
            const response = await doctorRepositery.appointmentList(data);
            console.log(response,"ll");
            
            
            if (response.status) {
                return { status: true, data: response.data };
            } else {
                return { status: false, message: response.data };
            }
        } catch (error) {
            console.log(error);
            return { status: false, message: "Error in bookAppointmentUseCase" };
        }
    };

    return { executeFunction };
}
