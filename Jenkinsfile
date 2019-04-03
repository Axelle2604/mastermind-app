pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout(scm)
            }
        }
        stage("Test Build"){
            steps {
                script {
                    docker.build("axelle/mastermind")
                } 
            }
        }
        stage("Test Image"){
            steps {
                script {
                    sh("docker run axelle/mastermind npm run test -- --coverage")
                }
            }
        }
        stage("Deploy"){
            input {
                message "Should we push image?"
                ok "Yes, of course."
            }
            steps {
                script {
                    sh("echo Heyyyy")
                }
            }
        }
        stage("Push image in DockerHub"){
            steps {
                script {
                    docker.withRegistry("https://registry.hub.docker.com", "b0d9501c-f36a-44c1-a821-5c14cacb1778"){
                       def image =  docker.build("axelle2604/mastermind:B${BUILD_NUMBER}", "-f ./Dockerfile .")
                       image.push("B${BUILD_NUMBER}")
                   }
                }
            }
        }
    }
}