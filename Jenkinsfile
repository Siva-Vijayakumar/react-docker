pipeline{
    agent any
    
    stages{
        stage ("checkout"){
            steps{
                git : ""
            }
        }
        stage("Docker Build"){
            steps{
                sh "docker build -t react-docker ."
            }
        }
        stage("Docker Run"){
            steps{
                sh "docker run -p 5173:5173 -v '$(pwd):/app' -v /app/node_modules react-docker"
        }
    }
}
}