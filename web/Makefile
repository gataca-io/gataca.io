VERSION=$(shell node -p "require('./package.json').version")

install:
	yarn install

build: install
	yarn build

compile: install
	docker build -f build/Dockerfile -t gatacaid/website:$(VERSION) . 

snapshotX:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-SNAPSHOT . --push

release:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION) . --push

pre-release-intel-web6:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-SNAPSHOT . --push

pro-release-intel-web6:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION) . --push

