FROM node:alpine

WORKDIR /
COPY main /service
RUN /service/scripts/create.sh

CMD [ "/service/scripts/start.sh", "--wait" ]
