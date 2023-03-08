############################
# STEP 1 build executable binary
############################

FROM golang:alpine as builder

# Install git.
# Git is required for fetching the dependencies.
RUN apk add --no-cache git

WORKDIR $GOPATH/src/go-grpc-template
COPY . .

# Fetch dependencies
RUN go mod tidy

# Build the binary. for grpc gateway
RUN go build -o main

RUN pwd
RUN echo $GOPATH

# final build
FROM alpine:3.11.3
RUN apk --no-cache add bash curl ca-certificates
RUN apk update
WORKDIR /root/
COPY --from=builder /go/src/go-grpc-template .
EXPOSE 8084
ENTRYPOINT ["bash", "-c", "/root/main -grpc-port=8084"]
