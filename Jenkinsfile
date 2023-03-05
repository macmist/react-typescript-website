node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def myContainer = docker.image('cypress/included:9.4.1')
     myContainer.pull()
     myContainer.inside  {
       sh 'npm install'
       sh 'npm test'
       sh 'npm run cy:test'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
       def app = docker.build("macmist/react-app:${commit_id}", '.').push()
     }
   }
}
