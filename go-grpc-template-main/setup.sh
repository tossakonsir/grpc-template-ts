#!/bin/bash
echo "Refactoring for service."

# Get service name
read -p "Enter the service name (camel case):" serviceName

Service="$(tr '[:lower:]' '[:upper:]' <<< ${serviceName:0:1})${serviceName:1}"
echo "#################################################"
echo "############## TEMPLATE GENERATOR ###############"
echo "#################################################"

echo "> Creating proto file for $Service service..."
# Refactor variable name
sed -i "" "s/package example;/package $serviceName;/gi" "pkg/pb/example.proto"
sed -i "" "s/ExampleService/${Service}Service/gi" "pkg/pb/example.proto"
sed -i "" "s/ExampleRequest/${Service}Request/gi" "pkg/pb/example.proto"
sed -i "" "s/ExampleResponse/${Service}Response/gi" "pkg/pb/example.proto"
sed -i "" "s/rpc Example/rpc ${Service}/gi" "pkg/pb/example.proto"

# Change proto file name
mv "pkg/pb/example.proto" "pkg/pb/${serviceName}.proto"

sed -i "" "s/RegisterExampleServiceServer/Register${Service}ServiceServer/gi" "main.go"

sed -i "" "s/Example/${Service}/gi" "pkg/config/envs/dev.env"

sed -i "" "s/UnimplementedExampleServiceServer/Unimplemented${Service}ServiceServer/gi" "pkg/services/template.go"
sed -i "" "s/ExampleResponse/${Service}Response/gi" "pkg/services/template.go"
sed -i "" "s/ExampleRequest/${Service}Request/gi" "pkg/services/template.go"
sed -i "" "s/Example/${Service}/gi" "pkg/services/template.go"

mv "pkg/services/template.go" "pkg/services/${serviceName}.go"

echo "# Done"
echo "> Building protobuf files..."
./build.sh
echo "# Done"
echo "#################################################"
echo ""
echo "1.Don't forget to change pkg/config/envs/dev.env"
echo "2.For validation"
echo "  \$go run main.go"
echo "  It will show Service $Service Start :50052"
echo ""
echo "3.To run it localy with envoy"
echo "- Open terminal and run '\$go run main.go'"
echo "- Open another terminal and run '\$docker-compose up'"
echo "  (Docker is required)"
echo ""
echo "Credit:"
echo "Template & Refactoring by SUN & BIG @ SNOCKO TECH"