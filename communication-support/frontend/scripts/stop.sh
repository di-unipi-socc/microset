#!/bin/sh
abs_path=$(cd $(dirname $0)/.. && pwd)

pid=$(cat $abs_path/pid)
kill -9 $pid

rm $abs_path/pid
