#!/bin/sh
abs_path=$(cd $(dirname $0)/.. && pwd)

cd $abs_path/app && npm install
