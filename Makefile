VERSION=$(shell node -p "require('./package.json').version")

install:
	yarn install

build: install
	yarn build

release:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION) . --push

pre-release-intel:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-pre . --push
pre-release-mac:
	docker buildx build -f build/Dockerfile --platform linux/arm64 -t gatacaid/website:$(VERSION)-pre . --push
