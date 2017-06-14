#!/bin/sh -xe

docker-compose -f docker-compose.yml scale producer=1 consumer=2

sleep 20
curl -f http://127.0.0.1:3000/
