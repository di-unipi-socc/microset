#!/bin/sh
abs_path=$(cd $(dirname $0)/.. && pwd)

if [ ! -f $abs_path/pid ];then
  cd $abs_path
  node app/bin/www > /dev/null &
  echo $! > $abs_path/pid
  echo 'started!'
fi
