pipeline {
    agent any

    environment {
        // You can set environment variables here if needed
        DEPLOY_SERVER = 'https://5fe08b9815d8.ngrok-free.app'
        DEPLOY_DIR = '/var/www/sthadashboard'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository code from GitHub
                git url: 'https://github.com/Amir8873yh/sthadashboard.git', branch: 'dev'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Assuming you're using npm or yarn
                sh 'npm install'  // Or `yarn install` if you're using yarn
            }
        }

        stage('Run Tests') {
            steps {
                // Example test command (adjust according to your project)
                sh 'npm test'  // Or `yarn test` for Yarn
            }
        }

        stage('Build') {
            steps {
                // Example build command (adjust according to your project)
                sh 'npm run build'  // Or `yarn build`
            }
        }

        stage('Deploy') {
            steps {
                // Deploy to server (assuming you're using SSH or SCP for deployment)
                // Replace with your actual deployment steps
                sh """
                    scp -r ./build/* ${DEPLOY_SERVER}:${DEPLOY_DIR}
                    ssh ${DEPLOY_SERVER} 'cd ${DEPLOY_DIR} && npm run start'  // Adjust as necessary
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
