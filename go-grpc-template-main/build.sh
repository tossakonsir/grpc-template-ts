echo "# Build script running"
echo "  (1/2) Building go gRPC service..."
protoc --go_out=pkg/ --go-grpc_out=pkg/ pkg/pb/*.proto

echo "  (2/2) Building go gRPC for web..."
./node_modules/.bin/grpc_tools_node_protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./pkg/pb \
  --ts_proto_opt=env=browser,outputServices=nice-grpc,outputServices=generic-definitions,outputJsonMethods=false,useExactTypes=false \
  --proto_path=./pkg/pb pkg/pb/*.proto