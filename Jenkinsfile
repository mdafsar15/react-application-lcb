pipeline {

    agent any

    tools {
        nodejs 'node_18'
    }
    environment {
        imageName = "react"
        registryCredentials = "nexus"
        registry = "192.168.0.69:8085/"
        dockerImage = ''
    }
    
    stages {

	stage('checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/mdafsar15/react-application-lcb.git']]])
            }
        }
	
        stage('Build') {
            steps {
                sh 'npm install'
                
            }
        }

	stage ('Build image') {
            steps {
                script {
                    dockerImage = docker.build imageName
                }
            }
        }


	stage('Uploading to Nexus') {
            steps{  
                script {
                    docker.withRegistry( 'http://'+registry, registryCredentials ) {
                    dockerImage.push('latest')
          }
        }
      }
    }
    }
}