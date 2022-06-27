############################
# Final container
############################
FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim

WORKDIR /ops

ADD --chown=ops:9999 package.json .
RUN npm install

ADD --chown=ops:9999 . .
