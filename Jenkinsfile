pipeline {
    tools {
        nodejs 'node_18'
    }
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-p 3000:3000'
        }
    }
    stages {
	stage('Node-Version') {
            steps {
                sh 'npm version'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install react-scripts --save'
                
            }
        }

	stage('Run') {
            steps {
                sh 'npm start'
            }
        }
    }
}