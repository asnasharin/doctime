


export default function doctorSendMessegesUseCase(dependencies: any) {
    const { doctorRepositery } = dependencies.repositery;

    const executeFunction = async (data: any) => {


        const response = await doctorRepositery.sendMesseges(data)
        console.log(response, "use resssso");

        if (response.status) {
            return { status: true, data: response.data };
        } else {
            return { status: false, message: response.message };
        }

    };

    return { executeFunction };
}
