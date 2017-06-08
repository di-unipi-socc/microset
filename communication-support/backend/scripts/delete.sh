#!/bin/sh
abs_path=$(cd $(dirname $0)/.. && pwd)

rm -rf $abs_path/app/node_modules
