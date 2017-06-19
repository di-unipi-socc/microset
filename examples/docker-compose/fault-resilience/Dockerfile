FROM node:alpine

WORKDIR /
COPY fault-resilience /service
RUN /service/scripts/create.sh

CMD [ "/service/scripts/start.sh", "--wait" ]
