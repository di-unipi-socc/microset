FROM node:alpine

WORKDIR /
COPY . /service
RUN /service/scripts/create.sh

CMD [ "/service/scripts/start.sh", "--wait" ]
