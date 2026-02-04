#!/bin/bash
set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
ENVIRONMENT=${1:-staging}
SERVER_USER="deploy"
SERVER_HOST=""
CONTAINER_NAME="portfolio-${ENVIRONMENT}"
IMAGE_NAME="portfolio:latest"

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(staging|production)$ ]]; then
    echo -e "${RED}Error: Environment must be 'staging' or 'production'${NC}"
    exit 1
fi

# Set server based on environment
if [ "$ENVIRONMENT" == "production" ]; then
    SERVER_HOST="your-production-server.com"
else
    SERVER_HOST="your-staging-server.com"
fi

echo -e "${GREEN}🚀 Deploying to ${ENVIRONMENT}...${NC}"

# Deploy via SSH
ssh ${SERVER_USER}@${SERVER_HOST} bash << EOF
    set -e
    echo -e"${YELLOW}Pulling latest image...${NC}"
    docker pull ${IMAGE_NAME}
    
    echo -e "${YELLOW}Stopping old container...${NC}"
    docker stop ${CONTAINER_NAME} || true
    docker rm ${CONTAINER_NAME} || true
    
    echo -e "${YELLOW}Starting new container...${NC}"
    docker run -d \
        --name ${CONTAINER_NAME} \
        -p 3000:3000 \
        --restart unless-stopped \
        ${IMAGE_NAME}
    
    echo -e "${GREEN}✅ Deployment complete!${NC}"
    
    # Health check
    sleep 5
    if curl -f http://localhost:3000 > /dev/null 2>&1; then
        echo -e "${GREEN}✅ Health check passed${NC}"
    else
        echo -e "${RED}❌ Health check failed${NC}"
        exit 1
    fi
EOF

echo -e "${GREEN}🎉 Successfully deployed to ${ENVIRONMENT}!${NC}"
