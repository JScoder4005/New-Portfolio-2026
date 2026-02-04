#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}🐳 Building Docker image...${NC}"

# Get version from package.json or use timestamp
VERSION=$(node -p "require('./package.json').version" 2>/dev/null || date +%Y%m%d%H%M%S)
IMAGE_NAME="portfolio"
IMAGE_TAG="${IMAGE_NAME}:${VERSION}"
IMAGE_LATEST="${IMAGE_NAME}:latest"

echo -e "${YELLOW}Building ${IMAGE_TAG}...${NC}"

# Build the image
docker build \
    --platform linux/amd64 \
    --tag "${IMAGE_TAG}" \
    --tag "${IMAGE_LATEST}" \
    --build-arg NODE_ENV=production \
    .

echo -e "${GREEN}✅ Build complete!${NC}"
echo -e "${YELLOW}Image tags:${NC}"
echo "  - ${IMAGE_TAG}"
echo "  - ${IMAGE_LATEST}"

# Optional: Push to registry
read -p "Push to Docker Hub? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo -e "${GREEN}📤 Pushing to registry...${NC}"
    docker push "${IMAGE_TAG}"
    docker push "${IMAGE_LATEST}"
    echo -e "${GREEN}✅ Push complete!${NC}"
fi
