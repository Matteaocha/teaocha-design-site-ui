export PROJECT_NAME=teaocha-design-site-ui
export PROJECT_ROOT=$(shell pwd)

export NODE_DEV_SHELL_IMAGE_NAME=$(PROJECT_NAME)-node-dev-env


.PHONY: start build install node-dev-shell node-dev-shell-image lint test-unit coverage

install:
	make node-dev-shell-image
	docker run -it --rm \
		-v $(PROJECT_ROOT):/app \
		$(NODE_DEV_SHELL_IMAGE_NAME) npm install

start:
	docker run -it --rm \
		-p 8080:8080 \
		-p 8088:8088 \
		-v $(PROJECT_ROOT):/app \
		-h node-dev-shell \
		--name $(NODE_DEV_SHELL_IMAGE_NAME) \
		$(NODE_DEV_SHELL_IMAGE_NAME) npm run start

build:
	docker run -it --rm \
		-v $(PROJECT_ROOT):/app \
		$(NODE_DEV_SHELL_IMAGE_NAME) npm run build

lint:
	docker run -it --rm \
		-v $(PROJECT_ROOT):/app \
		$(NODE_DEV_SHELL_IMAGE_NAME) npm run lint

test-unit:
	docker run -it --rm \
		-v $(PROJECT_ROOT):/app \
		$(NODE_DEV_SHELL_IMAGE_NAME) npm run test

coverage:
	docker run -it --rm \
		-v $(PROJECT_ROOT):/app \
		$(NODE_DEV_SHELL_IMAGE_NAME) npm run test-coverage

# ---------------------------------------------

node-dev-shell:
	docker run -it --rm \
		-p 8080:8080 \
		-p 8088:8088 \
		-v $(PROJECT_ROOT):/app \
		-h node-dev-shell \
		--name $(NODE_DEV_SHELL_IMAGE_NAME) \
		$(NODE_DEV_SHELL_IMAGE_NAME) /bin/bash

node-dev-shell-connect:
	docker exec -it $(NODE_DEV_SHELL_IMAGE_NAME) /bin/bash

# ---------------------------------------------

node-dev-shell-image:
	docker build --tag $(NODE_DEV_SHELL_IMAGE_NAME) --target dev .