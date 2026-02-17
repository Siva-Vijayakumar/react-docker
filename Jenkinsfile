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

// pipeline {
//     agent any

//     environment {
//         DOCKER_IMAGE = "sivav2004/react-docker"
//         DOCKER_TAG = "latest"
//     }

//     stages {

//         stage('Checkout') {
//             steps {
//                 git branch: 'main',
//                     url: 'https://github.com/Siva-Vijayakumar/react-docker.git'
//             }
//         }

//         stage('Docker Build') {
//             steps {
//                 sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
//             }
//         }

//         stage('Docker Login') {
//             steps {
//                 sh 'docker login -u sivav2004 -p siva@1222'
//             }
//         }

//         stage('Push Image') {
//             steps {
//                 sh 'docker push $DOCKER_IMAGE:$DOCKER_TAG'
//             }
//         }

//         stage('Deploy') {
//             steps {
//                 sh '''
//                 docker stop react-docker || true
//                 docker rm react-docker || true
//                 docker run -d \
//                   --restart unless-stopped \
//                   --name react-docker \
//                   -p 80:80 \
//                   $DOCKER_IMAGE:$DOCKER_TAG
//                 '''
//             }
//         }
//     }
// }
