package services

import (
	"context"

	"go-grpc-template/pkg/db"
	"go-grpc-template/pkg/pb"
	// "go-grpc-template/pkg/models"
	// "go-grpc-template/pkg/utils"
	// "go.mongodb.org/mongo-driver/bson"
	// "go.mongodb.org/mongo-driver/bson/primitive"
)

type Server struct {
	H db.Handler
	pb.UnimplementedExampleServiceServer
}

func (s *Server) Example(ctx context.Context, req *pb.ExampleRequest) (*pb.ExampleResponse, error) {
	return &pb.ExampleResponse{Resp: "OK"}, nil
}

func (s *Server) Ready(ctx context.Context, req *pb.EmptyRequest) (*pb.ReadyResponse, error) {
	return &pb.ReadyResponse{Ready: "Ready"}, nil
}

func (s *Server) Version(ctx context.Context, req *pb.EmptyRequest) (*pb.VersionResponse, error) {
	return &pb.VersionResponse{Version: "Version"}, nil
}
