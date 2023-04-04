VERSION=$(shell cat version)

pre-release-intel-strapi:
	docker buildx build -f Dockerfile --platform linux/amd64 -t gatacaid/website:$(VERSION)-pre . --push
