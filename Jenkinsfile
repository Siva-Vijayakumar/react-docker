pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Siva-Vijayakumar/react-docker.git'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t react-docker:latest .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop react-docker || true
                docker rm react-docker || true
                '''
            }
        }

        stage('Docker Run') {
            steps {
                sh '''
                docker run -d \
                --name react-docker \
                -p 5173:5173 \
                react-docker:latest
                '''
            }
        }
    }
}
