#!/bin/sh -xe
abs_path=$(cd $(dirname $0)/../../.. && pwd)

cp -r $abs_path/functionality-oriented/replaceability/backend1 \
      $abs_path/functionality-oriented/replaceability/backend2 \
      $abs_path/functionality-oriented/replaceability/frontend .

docker-compose -f docker-compose1.yml build
docker-compose -f docker-compose2.yml build

rm -r backend1 backend2 frontend
