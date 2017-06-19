#!/bin/sh -xe

docker-compose -f docker-compose.yml up -d
docker-compose -f docker-compose.yml scale consumer=2

sleep 20
curl -f http://127.0.0.1:3000/
