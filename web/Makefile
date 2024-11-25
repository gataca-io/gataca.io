VERSION=$(shell node -p "require('./package.json').version")

install:
	yarn install

build: install
	yarn build

compile: install
	docker build -f build/Dockerfile -t gatacaid/website:$(VERSION) . 

pre-release:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t ghcr.io/gataca-io/gataca.io/website:$(VERSION)-SNAPSHOT . --push

pro-release:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t ghcr.io/gataca-io/gataca.io/website:$(VERSION) . --push

