#!/bin/sh -xe
abs_path=$(cd $(dirname $0)/../../.. && pwd)

cp -r $abs_path/functionality-oriented/fault-resilience .

docker-compose -f docker-compose.yml build

rm -r fault-resilience
