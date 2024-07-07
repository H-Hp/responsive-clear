# ec2.tf
# EC2 keypair
resource "aws_key_pair" "ssh_key" {
  key_name   = "ssh_key"
  public_key = file("~/.ssh/ec2-keypair.pub")
}
# EC2 instance
resource "aws_instance" "main" {
  ami                         = "ami-0c3fd0f5d33134a76"
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
}
