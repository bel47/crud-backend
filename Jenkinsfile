node {
  stage ('SCM Checkout') {
   
    git 'https://github.com/bel47/crud-backend'
  }
  stage('Compile Package'){
      def mvnHome = tool name: 'maven-3.6.3', type: 'maven'
      
    bat "C:\Program Files\apache-maven-3.2.3\bin"


  }
}
