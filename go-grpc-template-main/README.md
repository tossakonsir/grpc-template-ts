## Prerequeist

```
brew install protobuf
brew install protoc-gen-go
brew install protoc-gen-go-grpc

npm i nice-grpc-web
npm install protobufjs long
npm install --save-dev grpc-tools ts-proto // npm_config_target_arch=x64 npm install --save-dev grpc-tools ts-proto
```

## Usage
Make sure that setup.sh and build.sh files are executable
```
$ chmod +x setup.sh
$ chmod +x build.sh
```

Start setup new gRPC service with Envoy process
```
$ ./setup.sh
```

Enter service name in camelCase
```
$ Enter the service name (camel case):login  // This example using login for login service
```

Wait a second and see the result (Looks like this)
```
$ Enter the service name (camel case):login
#################################################
############## TEMPLATE GENERATOR ###############
#################################################
> Creating proto file for Login service...

> Building protobuf files...
# Build script running
  (1/2) Building go gRPC service...
  (2/2) Building go gRPC for web...

#################################################

1.Don't forget to change pkg/config/envs/dev.env
2.For validation
  $go run main.go
  It will show Service Login Start :50052

3.To run it localy with envoy
./refactor.sh: line 46: run: command not found
- Open terminal and run 
- Open another terminal and run $docker-compose up
  (docker is required)


Template & Refactoring by SUN & BIG @ SNOCKO TECH
```

## Reference Command
gRPC build for Go command 
```
protoc --go_out=. --go-grpc_out=. protos/*.proto
```

gRPC build for Web command
```
protoc-gen-grpc \
--js_out=import_style=commonjs,binary:./js \
--grpc_out=grpc_js:./js \
--proto_path ./protos/ ./protos/*.proto
```