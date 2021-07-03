export PROJECT_NAME=teaocha-design-site-ui
export PROJECT_ROOT=$(shell pwd)
export AWS_PROFILE=teaocha-design
export S3_BUCKET=teaochadesign.com
export NODE_DEV_SHELL_IMAGE_NAME=$(PROJECT_NAME)-node-dev-env

# App which runs by default
export APP=teaocha-design


.PHONY: start build install node-dev-shell node-dev-shell-image lint test-unit coverage
	deploy aws-config clean

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
		-w /app/apps/$(APP) \
		$(NODE_DEV_SHELL_IMAGE_NAME) npm run start

clean:
	rm -rf apps/*/dist

build: clean
	docker run -it --rm \
		-v $(PROJECT_ROOT):/app \
		-e ASSET_PATH=$(ASSET_PATH) \
		-w /app/apps/$(APP) \
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

aws-config:
	touch ~/.aws
	docker run --rm -it \
		-v ~/.aws:/root/.aws \
		amazon/aws-cli configure --profile $(AWS_PROFILE)

deploy: build
	docker run --rm -it \
		-v ~/.aws:/root/.aws \
		-v $(PROJECT_ROOT)/apps/$(APP)/dist:/dist \
		amazon/aws-cli s3 sync \
			--profile $(AWS_PROFILE) \
			--acl public-read \
			--delete \
			/dist s3://$(S3_BUCKET)

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