pipeline {
    agent any

    parameters {
        string(
            name: 'TAG',
            defaultValue: '@Regression',
            description: 'Run tests by tag'
        )
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/arthisakthivel5-bot/playwright-automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh "npx playwright test --grep ${params.TAG}"
            }
        }

    }
}