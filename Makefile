VERSION=$(shell node -p "require('./package.json').version")

install:
	yarn install

build: install
	yarn build

docker: build
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION) --push .
