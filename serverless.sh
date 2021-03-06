#!/usr/bin/env bash
##########################################################################################################
#   Run this file from the root of the repository to build and run a PWA Studio Serverless container     #
##########################################################################################################

dist='./fargate/dist'
base='./serverless'
pub_prod='./serverless/prod'
pub_test='./serverless/test'
CONFIG_ENV_FILE='./fargate/.env'
date=$(date '+%Y-%m-%d--%H:%M:%S')

# Copy serverless files to 'pub' folder
# Copy the MAGENTO_BACKEND_URL into the server.js
# Rsync./fargate/dist to /pub prod or test folder including additional files 

if [ "$1" == test ]; then
    rm -rf $pub_test/*
    sleep 1
    find $base/ -maxdepth 1 \( -name '*.json' -o -name '*.js' -o -name 'Dockerfile' \) | while read files ; do cp -Rp $files $pub_test/; done
    url=$(awk -F '"' '/MAGENTO_BACKEND_URL=/ {print $1}' $CONFIG_ENV_FILE | awk '{print substr($0, 21, length($0) - 0)}')
    sed -i '' -e "s|example.com|$url|g" $pub_test/server.js
    rsync -r $dist/* $pub_test
else
    rm -rf $pub_prod/*
    sleep 1
    find $base/ -maxdepth 1 \( -name '*.json' -o -name '*.js' -o -name 'Dockerfile' \) | while read files ; do cp -Rp $files $pub_prod/; done
    url=$(awk -F '"' '/MAGENTO_BACKEND_URL=/ {print $1}' $CONFIG_ENV_FILE | awk '{print substr($0, 21, length($0) - 0)}')
    sed -i '' -e "s|example.com|$url|g" $pub_prod/server.js
    rsync -r $dist/* $pub_prod
fi

# Optional auto git push option && Alternative could be 'copilot svc deploy'
if [ "$1" == test ]; then
  cd $base/ && git add . && git commit -m "Build TEST: $date"
else
  cd $base/ && git add . && git commit -m "Build PROD: $date"
fi

git push