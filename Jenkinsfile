node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def myContainer = docker.image('cypress/base:16.13.0')
     myContainer.pull()
     myContainer.inside  {
       sh 'npm install'
       sh 'npm test'
       sh 'cypress install'
       sh 'npm run cy:test'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
       def app = docker.build("macmist/react-app:${commit_id}", '.').push()
     }
   }
}
