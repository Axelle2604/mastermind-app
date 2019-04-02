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
    }
}