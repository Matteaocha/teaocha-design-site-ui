[![CircleCI](https://circleci.com/gh/Matteaocha/teaocha-design-site-ui/tree/main.svg?style=svg)](https://circleci.com/gh/Matteaocha/teaocha-design-site-ui/tree/main)

# Teaocha-Design Site UI

This repo contains the code for the Teaocha-Design UI and embedded applications. Given that one of the purposes of the site is to act as a showcase for dev related stuff, I see no harm in this code being public. So... enjoy?

## Installing and Running

I develop and build this code from within a Docker container running within a Unix environment (Linux/MacOS/Windows-Ubuntu-Sub-System/etc), so you'll need Docker installed to continue. Once you have Docker, running the following `Make` commands will handle the rest:

```
// Installing:
make install

// Running:
(APP=teaocha-design) make start
```

## Developing

The following commands are available external to the dev-container:

```
make lint
make test-unit
make coverage
```

However, if you wish to enter the dev-container and run commands with `npm` you can use the following:

```
make node-dev-shell
```