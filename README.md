# nodejs-k8s-hello-world

This is simple nodejs app which can be used as demo micro-service in Docker or Kubernetes. It has health-check endpoint also.

## Paths

1. `/prime`: Will return prime numner between 0 and randomly calculated number named as iteration. This will help you to simulate load on service.

2. `/greet`: Will return greeting message with current datetime.

3. `/health-check`: Will return `200 OK`, this is for doing health checks within k8s.

## Usage

1. Clone the repository to your local.

2. Change directory to nodejs-k8s-hello-world with `cd nodejs-k8s-hello-world`

3. Install dependencies with `yarn install`

4. Start server with `node index.js`

## Notes

1. `health-check` endpoint can be used for k8s livenessprobe and readinessprobe.

2. You need to add a proper `Dockerfile` so that you can build docker image of this.
