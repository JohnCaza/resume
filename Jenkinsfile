pipeline {
    agent {
        docker {
            image 'node:alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn --version' 
                sh 'yarn install'
                sh 'yarn build' 
            }
        }
    }
}