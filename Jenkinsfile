node {
  stage('SCM Checkout'){
    git 'https://github.com/bel47/crud-backend'
  }
  stage('Compile-Package'){
    sh 'mvn package'
  }

}
