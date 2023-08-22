VERSION=$(shell node -p "require('./package.json').version")

install:
	yarn install

build: install
	yarn build

compile: install
	docker build -f build/Dockerfile -t gatacaid/website:$(VERSION) . 

release:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-new . --push

pre-release-intel-web6:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-web6-SNAPSHOT . --push

pro-release-intel-web6:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-web6 . --push

