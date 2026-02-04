#!/bin/bash
set -e

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}🚀 Starting portfolio container...${NC}"

# Configuration
CONTAINER_NAME="portfolio-local"
IMAGE_NAME="portfolio:latest"
PORT=${PORT:-3000}

# Stop existing container if running
if [ "$(docker ps -q -f name=${CONTAINER_NAME})" ]; then
    echo -e "${YELLOW}Stopping existing container...${NC}"
    docker stop ${CONTAINER_NAME}
    docker rm ${CONTAINER_NAME}
fi

# Run the container
echo -e "${GREEN}Starting new container on port ${PORT}...${NC}"
docker run -d \
    --name ${CONTAINER_NAME} \
    -p ${PORT}:3000 \
    --restart unless-stopped \
    --health-cmd="node -e \"require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})\"" \
    --health-interval=30s \
    --health-timeout=3s \
    --health-retries=3 \
    ${IMAGE_NAME}

echo -e "${GREEN}✅ Container started!${NC}"
echo -e "${YELLOW}View logs: docker logs -f ${CONTAINER_NAME}${NC}"
echo -e "${YELLOW}Access app: http://localhost:${PORT}${NC}"
echo -e "${YELLOW}Stop container: docker stop ${CONTAINER_NAME}${NC}"
