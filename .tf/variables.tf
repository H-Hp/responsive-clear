# variables.tf

variable "project" {
  type = string
}

variable "environment" {
  type = string
}

variable "vpc_cidr" {
  type        = string
  description = "vpc cidrblock"
}

variable "subnet_cidr" {
  type        = string
  description = "public subnet cidr"
}

variable "ssh_private_key_path" {
  description = "Path to the SSH key"
  type        = string
}
variable "ssh_public_key_path" {
  description = "Path to the SSH key"
  type        = string
}