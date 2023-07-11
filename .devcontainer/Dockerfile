FROM mcr.microsoft.com/devcontainers/typescript-node:1-18-bookworm
RUN apt-get update && apt-get install -y git zip

WORKDIR /tmp
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
RUN unzip awscliv2.zip
RUN /tmp/aws/install