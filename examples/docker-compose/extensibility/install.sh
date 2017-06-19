#!/bin/sh -xe
abs_path=$(cd $(dirname $0)/../../.. && pwd)

cp -r $abs_path/functionality-oriented/extensibility/backend \
      $abs_path/functionality-oriented/extensibility/frontend1 \
      $abs_path/functionality-oriented/extensibility/frontend2 .

docker-compose -f docker-compose1.yml build
docker-compose -f docker-compose2.yml build

rm -r backend frontend1 frontend2
