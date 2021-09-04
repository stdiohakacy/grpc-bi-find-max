// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_calculator_pb = require('../protos/calculator_pb.js');

function serialize_calculator_FindMaximumRequest(arg) {
  if (!(arg instanceof protos_calculator_pb.FindMaximumRequest)) {
    throw new Error('Expected argument of type calculator.FindMaximumRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_FindMaximumRequest(buffer_arg) {
  return protos_calculator_pb.FindMaximumRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_calculator_FindMaximumResponse(arg) {
  if (!(arg instanceof protos_calculator_pb.FindMaximumResponse)) {
    throw new Error('Expected argument of type calculator.FindMaximumResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_calculator_FindMaximumResponse(buffer_arg) {
  return protos_calculator_pb.FindMaximumResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorServiceService = exports.CalculatorServiceService = {
  findMaximum: {
    path: '/calculator.CalculatorService/FindMaximum',
    requestStream: true,
    responseStream: true,
    requestType: protos_calculator_pb.FindMaximumRequest,
    responseType: protos_calculator_pb.FindMaximumResponse,
    requestSerialize: serialize_calculator_FindMaximumRequest,
    requestDeserialize: deserialize_calculator_FindMaximumRequest,
    responseSerialize: serialize_calculator_FindMaximumResponse,
    responseDeserialize: deserialize_calculator_FindMaximumResponse,
  },
};

exports.CalculatorServiceClient = grpc.makeGenericClientConstructor(CalculatorServiceService);
