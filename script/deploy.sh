#!/bin/bash
echo "deploy to $1"

docker build --tag analysis:$TRAVIS_COMMIT .

# gcloud docker --authorize-only
# docker push eu.gcr.io/data/analysis:$TRAVIS_COMMIT

# kubectl create -f analysis.yml
