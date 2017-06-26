#!/bin/sh -xe

docker-compose -f docker-compose1.yml up -d

sleep 5
curl -f http://127.0.0.1:3001/api

docker-compose -f docker-compose2.yml up -d

sleep 5
curl -f http://127.0.0.1:3002/api
