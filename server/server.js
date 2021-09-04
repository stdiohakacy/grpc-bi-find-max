const grpc = require('@grpc/grpc-js');
const calculators = require('../server/protos/calculator_pb');
const service = require('../server/protos/calculator_grpc_pb');

async function findMaximum(call, callback) {
    let currMaximum = 0;
    let currNumber = 0;

    call.on('data', request => {
        currNumber = request.getNumber();
        if(currNumber > currMaximum) {
            currMaximum = currNumber;
            // const response = new calculators.FindMaximumResponse();
            // response.setMaximum(currMaximum);
            // call.write(response);
        } else {
            // nothing
        }
        console.log(`Streamed number ${request.getNumber()}`);
    });

    call.on('error', error => {
        console.log(error);
    });

    call.on('end', () => {
        // console.log(`Ended!`);
        const response = new calculators.FindMaximumResponse();
        response.setMaximum(currMaximum);
        call.write(response);
        call.end();
        console.log(`The ended!`);
    });
}

function main() {
    const server = new grpc.Server();
    server.addService(service.CalculatorServiceService, { findMaximum });
    server.bindAsync(
        'localhost:50051', 
        grpc.ServerCredentials.createInsecure(), 
        () => {
            console.log("Server start on localhost:50051");
            server.start();
        });
}

main();