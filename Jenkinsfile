node {
  stage ('SCM Checkout') {
   
    git 'https://github.com/bel47/crud-backend'
  }
  stage('Compile Package'){
      def mvnHome = tool name: 'C:\\apache-maven-3.6.3\\bin', type: 'maven'
    bat "${mvnHome}/mvn clean package"


  }
}
