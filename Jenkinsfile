pipeline {
    agent any

    environment {
        DEPLOY_SERVER = 'https://5fe08b9815d8.ngrok-free.app'
        DEPLOY_DIR = '/var/www/sthadashboard'
        NODE_VERSION = 'v20.19.0'  // Specify the correct Node version for compatibility
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Amir8873yh/sthadashboard.git', branch: 'dev'
            }
        }

        stage('Install Node Using NVM') {
            steps {
                script {
                    // Install NVM and Node.js without sudo
                    sh """
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
                    export NVM_DIR="\$HOME/.nvm"
                    [ -s "\$NVM_DIR/nvm.sh" ] && \. "\$NVM_DIR/nvm.sh"  # This loads nvm
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}
                    """
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // If no tests are defined, comment this out or add a simple test script to package.json
                sh 'npm test'  // Or add a dummy test script to your package.json
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'  // Or use `yarn build` if you're using Yarn
            }
        }

        stage('Deploy') {
            steps {
                sh """
                    scp -r ./build/* ${DEPLOY_SERVER}:${DEPLOY_DIR}
                    ssh ${DEPLOY_SERVER} 'cd ${DEPLOY_DIR} && npm install --production && npm run start'
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
