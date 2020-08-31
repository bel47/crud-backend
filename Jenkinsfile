node {
  stage ('SCM Checkout') {
   
    git 'https://github.com/bel47/crud-backend'
  }
  stage('Compile Package'){
      def mvnHome = tool name: 'maven', type: 'maven'
    bat "${mvnHome}/bin/mvn clean package"


  }
}
