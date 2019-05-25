FROM ubuntu:14.04
MAINTAINER Tanvir Ahmed 
RUN apt-get update
#RUN apt-get -y upgrade
RUN apt-get update && apt-get install -y \
curl \
&& rm -rf /var/lib/apt/lists/*

#Setup node.js
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y nodejs

# setup Auth-frontend
# Copy the current directory contents into the container at /app
COPY . /blackhawk-frontend
WORKDIR /blackhawk-frontend
RUN npm init -y
RUN npm install

#only first time for react app:
RUN npm i -g create-react-app@1.5.2
#Copying enviornment variables from input.env to .env
#RUN mv input.env .env
RUN chmod 755 start.sh

RUN groupadd -g 999 nonprivuser && \
useradd -r -u 999 -g nonprivuser nonprivuser
USER nonprivuser

EXPOSE 3000
CMD ["/bin/bash", "/blackhawk-frontend/start.sh"]
