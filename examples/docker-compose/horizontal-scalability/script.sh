#!/bin/sh -xe

docker-compose -f docker-compose.yml up -d

sleep 1
docker-compose -f docker-compose.yml scale consumer=3

sleep 20
curl -f http://127.0.0.1:3000/api
