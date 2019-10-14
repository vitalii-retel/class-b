pipeline {
    agent {
        docker {
            image 'node:10-alpine'
            args '-v /var/www/html:/target:rw'
        }
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '10'))
        skipStagesAfterUnstable()
        disableConcurrentBuilds()
        timeout(time: 3, unit: 'MINUTES')
    }
    environment {
        HOME = '.'
        CI = 'true'
    }
    stages {
        stage('Prepare') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Arch') {
            steps {
                zip zipFile: 'class-b-0.zip', dir: 'build', archive: false
                archiveArtifacts artifacts: 'class-b-*.zip', fingerprint: true
            }
        }
        stage('Deploy Local') {
            steps {
                sh 'rm -rf /target/*'
                sh 'cp -r build/* /target'
            }
        }
        stage('Deploy Public') {
            steps {
                sh 'npm run deploy'
            }
        }
        
    }
    post {
        cleanup {
            cleanWs()
        }
    }
}
