VERSION=$(shell node -p "require('./package.json').version")

install:
	yarn install

build: install
	yarn build

release:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-new . --push

pre-release-intel-web6:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-web-pre . --push

pro-release-intel-web6:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-web6 . --push

