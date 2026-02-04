pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'portfolio'
        DOCKER_TAG = "${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
        DEPLOY_ENV = "${env.BRANCH_NAME == 'main' ? 'production' : 'staging'}"
    }
    
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'git rev-parse --short HEAD > .git/commit-id'
                script {
                    env.COMMIT_ID = readFile('.git/commit-id').trim()
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                }
            }
        }
        
        stage('Test Container') {
            steps {
                script {
                    sh """
                        docker run --rm -d \
                            --name test-container-${BUILD_NUMBER} \
                            -p 3100:3000 \
                            ${DOCKER_IMAGE}:${DOCKER_TAG}
                        
                        # Wait for container to be ready
                        sleep 10
                        
                        # Health check
                        curl -f http://localhost:3100 || exit 1
                        
                        # Cleanup
                        docker stop test-container-${BUILD_NUMBER}
                    """
                }
            }
        }
        
        stage('Push to Registry') {
            when {
                branch 'main'
            }
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push()
                        docker.image("${DOCKER_IMAGE}:${DOCKER_TAG}").push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    sh """
                        ssh -o StrictHostKeyChecking=no deploy@staging-server '
                            docker pull ${DOCKER_IMAGE}:${DOCKER_TAG} &&
                            docker stop portfolio-staging || true &&
                            docker rm portfolio-staging || true &&
                            docker run -d \
                                --name portfolio-staging \
                                -p 3000:3000 \
                                --restart unless-stopped \
                                ${DOCKER_IMAGE}:${DOCKER_TAG}
                        '
                    """
                }
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to Production?', ok: 'Deploy'
                
                script {
                    sh """
                        ssh -o StrictHostKeyChecking=no deploy@prod-server '
                            # Pull new image
                            docker pull ${DOCKER_IMAGE}:${DOCKER_TAG}
                            
                            # Blue-Green deployment
                            docker stop portfolio-blue || true
                            docker rm portfolio-blue || true
                            
                            # Start new container (blue)
                            docker run -d \
                                --name portfolio-blue \
                                -p 3001:3000 \
                                --restart unless-stopped \
                                ${DOCKER_IMAGE}:${DOCKER_TAG}
                            
                            # Wait for health check
                            sleep 10
                            
                            # Switch traffic
                            docker stop portfolio-green || true
                            docker rename portfolio-blue portfolio-green
                            
                            # Update nginx/load balancer config here
                        '
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo "Pipeline succeeded! Deployed ${DEPLOY_ENV}"
            // Add Slack/Email notification here
        }
        failure {
            echo "Pipeline failed!"
            // Add Slack/Email notification here
        }
        always {
            cleanWs()
        }
    }
}
