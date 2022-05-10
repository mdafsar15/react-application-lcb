pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh "rm -rf node_modules || true" // removing node_modules if existing.
                sh 'npm install'
                sh 'npm run build'
            }
        }

	stage('Run') {
            steps {
                sh 'npm start'
            }
        }
    }
}