#!/bin/sh -xe
abs_path=$(cd $(dirname $0)/../../.. && pwd)

cp -r $abs_path/fault-resilience/main .

docker-compose -f docker-compose.yml build

rm -r main
