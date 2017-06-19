#!/bin/sh
abs_path=$(cd $(dirname $0)/.. && pwd)

while [ $# -gt 0 ]; do
  case "$1" in
    --wait)
      wait=y
      shift
      break
      ;;
    *)
      echo 'error parameter'
      exit 1
      ;;
  esac
done

cd $abs_path
if [ "$wait" != "y" ]; then
  if [ ! -f $abs_path/pid ];then
    node app/bin/www > /dev/null &
    echo $! > $abs_path/pid
    echo 'started!'
  fi
else
  node app/bin/www
fi
