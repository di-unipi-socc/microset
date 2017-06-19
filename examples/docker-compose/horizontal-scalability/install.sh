#!/bin/sh -xe
abs_path=$(cd $(dirname $0)/../../.. && pwd)

cp -r $abs_path/functionality-oriented/horizontal-scalability/{consumer,producer} .

docker-compose -f docker-compose.yml build

rm -r {consumer,producer}
