#!/bin/sh -xe

docker-compose -f docker-compose.yml up -d

sleep 5
curl -f http://127.0.0.1:3000/api

sleep 10
curl -f http://127.0.0.1:3000/api
# TODO: explicitly check that the time counter has decreased
