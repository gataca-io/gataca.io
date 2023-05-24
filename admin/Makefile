VERSION=$(shell grep version package.json | cut -d'"' -f4)

pre-release-intel-strapi:
	docker buildx build -f Dockerfile --platform linux/amd64 -t gatacaid/strapi:$(VERSION)-SNAPSHOT . --push
pro-release-intel-strapi:
	docker buildx build -f Dockerfile.pro --platform linux/amd64 -t gatacaid/strapi:$(VERSION) . --push
