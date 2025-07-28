# If a .env file exists, include it and export its variables so they are
# available to the shell commands executed by Make.
ifneq (,$(wildcard .env))
	include .env
	export
endif

# ==============================================================================
#  Development Tasks
# ==============================================================================
.PHONY: run lint format

run:
	@echo "🚀 Starting development server..."
	@npm run dev

lint:
	@echo "🔎 Linting code..."
	@npm run lint

format:
	@echo "💅 Formatting code..."
	@npm run format


# ==============================================================================
#  Production Tasks
# ==============================================================================
.PHONY: start

start:
	@echo "🚀 Starting production server..."
	@npm run start


# ==============================================================================
#  Docker Tasks
# ==============================================================================
.PHONY: docker-build docker-run

# Builds the Docker image.
docker-build:
	@echo "🐳 Building Docker image..."
	@docker build -t sveltekit-app .

# Runs the Docker container. This depends on the image being built first.
# --rm: Automatically removes the container when it exits.
# -p 8000:8000: Maps port 8000 on the host to port 8000 in the container.
# --env-file .env: Passes all variables from your .env file to the container.
docker-run: docker-build
	@echo "🚢 Running Docker container..."
	@docker run --rm -p 8000:8000 --env-file .env sveltekit-app
