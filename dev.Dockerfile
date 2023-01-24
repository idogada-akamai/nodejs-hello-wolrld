ARG VERSION=19
FROM node:$VERSION

WORKDIR /usr/src/app

# setup okteto message
COPY bashrc /root/.bashrc

#RUN npm install -g nodemon

CMD ["bash"]
