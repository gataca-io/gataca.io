VERSION=$(shell node -p "require('./package.json').version")

docker:
	docker buildx build -f build/Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION) --push .


