package main

import (
	"fmt"
	"log"
	"net"
	"os"

	"os/signal"
	"syscall"

	"go-grpc-template/pkg/config"
	"go-grpc-template/pkg/db"
	"go-grpc-template/pkg/pb"
	"go-grpc-template/pkg/services"

	"google.golang.org/grpc"
)

func main() {
	c, err := config.LoadConfig()
	//ctx := context.TODO()

	if err != nil {
		log.Fatalln("Failed at config", err)
	}

	h := db.Init(c.DBUrl)

	lis, err := net.Listen("tcp", c.Port)

	if err != nil {
		log.Fatalln("Failed to listing:", err)
	}

	fmt.Println("Service "+c.AppName+" Start", c.Port)
	s := services.Server{
		H: h,
	}

	grpcServer := grpc.NewServer()

	pb.RegisterExampleServiceServer(grpcServer, &s)

	go func() {
		if err := grpcServer.Serve(lis); err != nil {
			log.Fatalln("Failed to serve:", err)
		}
	}()

	// Make channel listen for signals from OS
	gracefulStop := make(chan os.Signal, 1)
	signal.Notify(gracefulStop, syscall.SIGTERM)
	signal.Notify(gracefulStop, syscall.SIGINT)

	<-gracefulStop
	log.Println(c.AppName + " was Shutdown")
	// println("test disconnect")
	// h.DB.Disconnect(ctx)
}
