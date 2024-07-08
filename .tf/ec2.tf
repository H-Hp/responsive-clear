# ec2.tf

resource "null_resource" "generate_ssh_key" {
 provisioner "local-exec" {
    command = "ssh-keygen -t rsa -f ec2-keypair -y"
  }

  # キーが既に存在する場合は再生成しないようにする
  triggers = {
    key_file = "~/.ssh/ec2-keypair"
  }
}


# EC2 keypair
resource "aws_key_pair" "ssh_key" {
  key_name   = "ssh_key"
  public_key = file("~/.ssh/ec2-keypair.pub")
  #public_key = var.ssh_public_key_path
}

# EC2 instance
resource "aws_instance" "main" {
  ami                         = "ami-0e0820ad173f20fbb"
  instance_type               = "t2.micro"
  subnet_id                   = aws_subnet.public.id
  associate_public_ip_address = true
  vpc_security_group_ids      = [aws_security_group.sg.id]
  key_name                    = aws_key_pair.ssh_key.key_name

  tags = {
    Name    = "${var.project}-${var.environment}-ec2"
    Project = var.project
    Env     = var.environment
  }


    provisioner "remote-exec" {
      inline = [
        "echo 'Wait until SSH is ready'",
        #"sudo yum update -y",  # Amazon Linux 2の場合
        "sudo yum install -y python3"
      ]

      connection {
        type        = "ssh"
        user        = "ec2-user"
        private_key = file("~/.ssh/ec2-keypair")
        #private_key = var.ssh_private_key_path
        host        = self.public_ip
      }
    }

  provisioner "local-exec" {
    #command = "ansible-playbook -i '${self.public_ip},' --private-key ${path.module}/.ssh/ec2-keypair setup_nextjs.yml"
    #command = "ansible-playbook -i '${self.public_ip},' --private-key file('~/.ssh/ec2-keypair') setup_nextjs.yml"
    #command = "ansible-playbook -i '${self.public_ip},' --private-key ${var.ssh_private_key_path} setup_nextjs.yml"
    command = "ansible-playbook -i '${self.public_ip},' -u ec2-user --private-key ${var.ssh_private_key_path} setup_nextjs.yml"

  }

}
