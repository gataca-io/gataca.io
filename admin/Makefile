VERSION=$(shell grep version package.json | cut -d'"' -f4)

pre-release-intel-strapi:
	docker buildx build -f Dockerfile --platform linux/amd64 -t ghrc.io/gataca.io/strapi:$(VERSION)-SNAPSHOT . --push
pro-release-intel-strapi:
	docker buildx build -f Dockerfile.pro --platform linux/amd64 -t ghrc.io/gataca.io/strapi:$(VERSION) . --push

deploy-dev:
	kubectl config use-context dev && kubectl apply -f deployments/deployment-dev.yml

deploy-pro:
	kubectl config use-context pro && kubectl apply -f deployments/deployment-pro.yml
	