pipeline {
    agent any

    parameters {
        choice(
            name: 'TAG',
            choices: ['@Regression', '@Web', '@API'],
            description: 'Select test suite'
        )
    }

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh "npx playwright test --grep ${params.TAG}"
            }
        }
    }
}