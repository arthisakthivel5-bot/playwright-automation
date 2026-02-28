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

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                sh "npm run ${params.Script}"
            }
        }

    }
}