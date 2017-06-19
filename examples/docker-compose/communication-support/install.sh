#!/bin/sh -xe
abs_path=$(cd $(dirname $0)/../../.. && pwd)

cp -r $abs_path/functionality-oriented/communication-support/backend \
      $abs_path/functionality-oriented/communication-support/frontend .

docker-compose -f docker-compose.yml build

rm -r backend frontend
