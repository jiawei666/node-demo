FROM node:15.5.0-buster

WORKDIR /app

COPY .. /app

EXPOSE 3000

ENTRYPOINT ["/bin/bash"]
