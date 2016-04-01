#FROM ubuntu:14.04
FROM node:4.4.1
MAINTAINER Jorge Arturo <dev@jorgeartware.com>

# Prepare mongodb
#RUN DEBIAN_FRONTEND=noninteractive
#RUN apt-get update
#RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
#RUN echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.2.list
#RUN apt-get clean
#RUN apt-get update
#RUN apt-get install -y mongodb-org

# Install node
#RUN apt-get install -y wget
#RUN wget https://nodejs.org/dist/v4.4.1/node-v4.4.1-linux-x64.tar.gz
#RUN tar --strip-components 1 -xf node-v4.4.1-linux-x64.tar.gz

# Install app dependencies
RUN npm i -g sails pm2 grunt grunt-cli

# Download app, install local depenencies
#RUN wget https://github.com/nodejsmx/website/archive/2.x.zip && unzip 2.x.zip && mv website-2.x app && cd app && npm i && sails lift
#RUN git clone git@github.com:nodejsmx/website.git app && cd app && git checkout 2.x && npm i && sails lift

# Run app
EXPOSE 1337
#VOLUME /app/
ADD . /app/
WORKDIR /app/
#RUN git clone https://github.com/nodejsmx/website.git app &&  cd app && npm i
#RUN cd app & sails lift
RUN git checkout 2.x && npm i
CMD sails lift
#RUN cd app/ && pm2 start app.js -x -- --prod

