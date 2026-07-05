terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "ap-southeast-1"
}

# 1. Create a Secure isolated network (VPC)
resource "aws_vpc" "blog_hub_vpc" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "blog-hub-vpc" }
}

# 2. Create an AWS ECR Repository to house our Docker images safely
resource "aws_ecr_repository" "frontend" {
  name                 = "blog-hub-frontend"
  image_tag_mutability = "MUTABLE"
}

resource "aws_ecr_repository" "backend" {
  name                 = "blog-hub-backend"
  image_tag_mutability = "MUTABLE"
}