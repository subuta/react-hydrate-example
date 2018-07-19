FROM node:8.4

EXPOSE 8061

RUN mkdir /iframely
WORKDIR /iframely

# Git clone into current dir.
RUN git clone https://github.com/itteco/iframely .

# Lock version to v1.2.5
RUN git checkout tags/v1.2.5 -b v1.2.5

# Add config to local.
ADD config.local.js .

RUN DEPS="libkrb5-dev" \
    apt-get update && \
    apt-get install -q -y --no-install-recommends $DEPS && \
    npm install -g forever && \
    npm install && \
    apt-get purge -y --auto-remove $DEPS && \
    apt-get autoremove && \
    apt-get clean

ENTRYPOINT ["/iframely/docker/entrypoint.sh"]