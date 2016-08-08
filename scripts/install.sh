#!/usr/bin/env sh
set -x

openssl aes-256-cbc -K $encrypted_c887e9d9f7fe_key -iv $encrypted_c887e9d9f7fe_iv -in deploy-key.enc -out deploy-key -d
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa
