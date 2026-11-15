.PHONY: install dev dev-web dev-app build lint clean test

install:
	@echo "Installing dependencies for apps/web and apps/app..."
	cd apps/web && npm install
	cd apps/app && npm install

dev:
	@echo "To run development servers, open two terminals:"
	@echo "  Terminal 1: cd apps/app && npm run dev  (port 3000)"
	@echo "  Terminal 2: cd apps/web && npm run dev  (port 4321)"

dev-web:
	cd apps/web && npm run dev

dev-app:
	cd apps/app && npm run dev

build:
	cd apps/web && npm run build
	cd apps/app && npm run build

lint:
	cd apps/app && npm run lint

test:
	cd apps/web && npm test
	cd apps/app && npm test

clean:
	@echo "Cleaning build artifacts..."
	rm -rf apps/web/dist apps/web/.astro apps/app/.next
