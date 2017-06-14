#!/bin/sh -xe

docker-compose -f docker-compose1.yml build
docker-compose -f docker-compose2.yml build
