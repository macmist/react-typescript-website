node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def myContainer = docker.image('node')
     myContainer.pull()
     myContainer.inside  {
       sh 'CYPRESS_CACHE_FOLDER=./tmp/Cypress npm install --only=dev'
       sh 'npm test'
       sh 'CYPRESS_CACHE_FOLDER=./tmp/Cypress npm run cy:test'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
       def app = docker.build("macmist/react-app:${commit_id}", '.').push()
     }
   }
}
