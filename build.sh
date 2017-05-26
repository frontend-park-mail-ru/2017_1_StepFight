#!/bin/bash

export REGISTRY=registry.heroku.com

docker login --username=_ --password=$(echo $API_KEY) registry.heroku.com
docker build -t registry.heroku.com/stepfighting/web .
docker push registry.heroku.com/stepfighting/web