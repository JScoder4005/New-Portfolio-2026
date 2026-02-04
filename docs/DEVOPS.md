# DevOps Setup Guide

## 🚀 CI/CD Pipeline Overview

This project uses a modern DevOps pipeline with:
- **GitHub Actions** for Continuous Integration
- **Docker (Alpine)** for containerization (~150MB image)
- **Jenkins** for Continuous Deployment
- **Blue-Green deployment** strategy for zero-downtime

## 📁 DevOps Files Structure

```
portfolio/
├── .github/workflows/
│   └── ci.yml                 # GitHub Actions CI pipeline
├── Dockerfile                 # Multi-stage Alpine Dockerfile
├── .dockerignore             # Docker build optimization
├── docker-compose.yml        # Local dev & testing
├── Jenkinsfile              # Jenkins CD pipeline
└── scripts/
    ├── docker-build.sh      # Build Docker image
    ├── docker-run.sh        # Run container locally
    └── deploy.sh            # Deploy to servers
```

## 🐳 Docker Quick Start

### Build the Image
```bash
# Using script (recommended)
./scripts/docker-build.sh

# Or manually
docker build -t portfolio:latest .
```

### Run Locally
```bash
# Using script
./scripts/docker-run.sh

# Or manually
docker run -p 3000:3000 portfolio:latest
```

### Using Docker Compose
```bash
# Production mode
docker-compose up

# Development mode
docker-compose --profile dev up portfolio-dev
```

## 📋 GitHub Actions CI

The CI pipeline runs automatically on every push/PR:

### Jobs
1. **Lint & Type Check** - ESLint + TypeScript validation
2. **Build** - Next.js production build
3. **Docker Build** - Build and push Alpine image
4. **Security Scan** - Trivy vulnerability scanning

### Required Secrets
Add these to GitHub repository secrets:
- `DOCKER_USERNAME` - Docker Hub username
- `DOCKER_PASSWORD` - Docker Hub password/token

### Trigger the Pipeline
```bash
git push origin main        # Triggers full pipeline
git push origin develop     # Triggers lint + build only
```

## 🔧 Jenkins Setup

### Prerequisites
1. Jenkins server with Docker installed
2. GitHub webhook configured
3. Docker Hub credentials in Jenkins

### Jenkins Configuration

#### 1. Install Required Plugins
- Docker Plugin
- Docker Pipeline Plugin
- SSH Agent Plugin
- Blue Ocean (optional, for better UI)

#### 2. Add Credentials
Go to `Jenkins > Manage Jenkins > Credentials`:

- **Docker Hub** (ID: `docker-hub-credentials`)
  - Type: Username with password
  - Username: Your Docker Hub username
  - Password: Your Docker Hub token

- **SSH Keys** (ID: `deploy-ssh-key`)
  - Type: SSH Username with private key
  - For server deployments

#### 3. Create Pipeline Job
1. New Item → Pipeline
2. Name: `portfolio-pipeline`
3. Pipeline Definition: Pipeline script from SCM
4. SCM: Git
5. Repository URL: Your GitHub repo
6. Script Path: `Jenkinsfile`

#### 4. Configure Webhook
In GitHub repository settings:
- Payload URL: `http://your-jenkins-server/github-webhook/`
- Content type: `application/json`
- Events: Push events

### Manual Deployment

#### To Staging
```bash
./scripts/deploy.sh staging
```

#### To Production
```bash
./scripts/deploy.sh production
```

## 🔐 Environment Variables

### Required for Production
Create `.env.production`:
```env
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.yoursite.com
# Add other environment variables
```

### Docker Environment
Pass variables via docker-compose or run command:
```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_API_URL=https://api.yoursite.com \
  portfolio:latest
```

## 📊 Health Checks

The Docker container includes built-in health checks:
```bash
# Check container health
docker ps

# View health check logs
docker inspect portfolio-local | grep Health
```

## 🚦 Deployment Workflow

### Development → Staging → Production

1. **Develop** on feature branch
   ```bash
   git checkout -b feature/my-feature
   # Make changes
   git commit -m "Add feature"
   git push origin feature/my-feature
   ```

2. **Merge to develop** → Triggers staging deployment
   ```bash
   # After PR approval
   git checkout develop
   git merge feature/my-feature
   git push origin develop
   ```

3. **Merge to main** → Triggers production deployment
   ```bash
   # After staging verification
   git checkout main
   git merge develop
   git push origin main
   # Jenkins will ask for manual approval before production deploy
   ```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clean Docker cache
docker system prune -a

# Rebuild without cache
docker build --no-cache -t portfolio:latest .
```

### Container Won't Start
```bash
# Check logs
docker logs portfolio-local

# Interactive debugging
docker run -it portfolio:latest sh
```

### Health Check Fails
```bash
# Test health endpoint manually
curl http://localhost:3000/api/health

# Check container networking
docker network inspect portfolio-network
```

## 📝 Best Practices

1. **Always test locally first**
   ```bash
   ./scripts/docker-build.sh
   ./scripts/docker-run.sh
   ```

2. **Review CI logs** before merging PRs

3. **Tag releases** for easy rollback
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```

4. **Monitor deployments** in Jenkins

5. **Keep secrets secure** - Never commit credentials

## 🔄 Rollback Procedure

### Docker
```bash
# List available images
docker images portfolio

# Run previous version
docker run -p 3000:3000 portfolio:v1.0.0
```

### Jenkins
1. Go to pipeline build history
2. Select successful previous build
3. Click "Replay" or "Rebuild"

## 📞 Support

For issues with:
- **CI/CD Pipeline**: Check GitHub Actions logs
- **Docker**: Check container logs with `docker logs`
- **Jenkins**: Check Jenkins build console output
- **Deployment**: Review server logs via SSH

## 🎯 Next Steps

- [ ] Configure production servers
- [ ] Set up monitoring (Prometheus/Grafana)
- [ ] Add automated tests
- [ ] Configure CDN for static assets
- [ ] Set up backup strategy
