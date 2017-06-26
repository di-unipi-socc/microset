#!/bin/sh -xe
abs_path=$(cd $(dirname $0)/../../.. && pwd)

cp -r $abs_path/horizontal-scalability/consumer \
      $abs_path/horizontal-scalability/producer .

docker-compose -f docker-compose.yml build

rm -r consumer producer
