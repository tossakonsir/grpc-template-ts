// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');

function serialize_example_EmptyRequest(arg) {
  if (!(arg instanceof example_pb.EmptyRequest)) {
    throw new Error('Expected argument of type example.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_EmptyRequest(buffer_arg) {
  return example_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ExampleRequest(arg) {
  if (!(arg instanceof example_pb.ExampleRequest)) {
    throw new Error('Expected argument of type example.ExampleRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExampleRequest(buffer_arg) {
  return example_pb.ExampleRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ExampleResponse(arg) {
  if (!(arg instanceof example_pb.ExampleResponse)) {
    throw new Error('Expected argument of type example.ExampleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ExampleResponse(buffer_arg) {
  return example_pb.ExampleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_ReadyResponse(arg) {
  if (!(arg instanceof example_pb.ReadyResponse)) {
    throw new Error('Expected argument of type example.ReadyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_ReadyResponse(buffer_arg) {
  return example_pb.ReadyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_VersionResponse(arg) {
  if (!(arg instanceof example_pb.VersionResponse)) {
    throw new Error('Expected argument of type example.VersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_VersionResponse(buffer_arg) {
  return example_pb.VersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleServiceService = exports.ExampleServiceService = {
  example: {
    path: '/example.ExampleService/Example',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.ExampleRequest,
    responseType: example_pb.ExampleResponse,
    requestSerialize: serialize_example_ExampleRequest,
    requestDeserialize: deserialize_example_ExampleRequest,
    responseSerialize: serialize_example_ExampleResponse,
    responseDeserialize: deserialize_example_ExampleResponse,
  },
  ready: {
    path: '/example.ExampleService/Ready',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.EmptyRequest,
    responseType: example_pb.ReadyResponse,
    requestSerialize: serialize_example_EmptyRequest,
    requestDeserialize: deserialize_example_EmptyRequest,
    responseSerialize: serialize_example_ReadyResponse,
    responseDeserialize: deserialize_example_ReadyResponse,
  },
  version: {
    path: '/example.ExampleService/Version',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.EmptyRequest,
    responseType: example_pb.VersionResponse,
    requestSerialize: serialize_example_EmptyRequest,
    requestDeserialize: deserialize_example_EmptyRequest,
    responseSerialize: serialize_example_VersionResponse,
    responseDeserialize: deserialize_example_VersionResponse,
  },
};

exports.ExampleServiceClient = grpc.makeGenericClientConstructor(ExampleServiceService);
