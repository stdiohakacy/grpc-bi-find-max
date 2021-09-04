const calculators = require('../server/protos/calculator_pb');
const service = require('../server/protos/calculator_grpc_pb');
const grpc = require('@grpc/grpc-js');

async function sleep(interval) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), interval);
    });
}

async function callBiDiFindMaximum() {
    console.log(`gRPC Client`);
    const client = new service.CalculatorServiceClient(
        'localhost:50051',
        grpc.credentials.createInsecure()
    );
    let request = null;
    const call = client.findMaximum(request, (error, response) => {});
    const data = [3, 5, 17, 9, 8, 30, 12];
    for(let i = 0; i < data.length; i++) {
        request = new calculators.FindMaximumRequest();
        request.setNumber(data[i]);
        call.write(request);
        await sleep(500);
    }
    
    call.on('data', response => { console.log(response.getMaximum()) });
    call.on('error', error => { console.error(error) });
    call.on('end', () => { console.log(`Server is completed sending messages`) });
    call.end();
}

function main() {
    callBiDiFindMaximum();
}

main()