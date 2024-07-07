# terraform-ec2/versions.tf

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 4.49.0"
    }
  }

  required_version = "~> 1.4.0"
}

provider "aws" {
  region = "ap-northeast-1"
}