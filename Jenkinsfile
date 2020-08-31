node {
  stage ('SCM Checkout') {
   
    git 'https://github.com/bel47/crud-backend'
  }
  stage('Compile Package'){
      def mvnHome = tool name: 'maven-3.6.3', type: 'maven'
      
    bat "{$mvnHome}/mvn package"


  }
}
