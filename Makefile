VERSION=$(shell node -p "require('./package.json').version")

install:
	yarn install

build: install
	yarn build

docker:
	docker buildx build -f build/Dockerfile --platform linux/arm64 -t gatacaid/website:$(VERSION) . # --push
