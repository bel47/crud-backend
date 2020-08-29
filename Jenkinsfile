node {
  stage('SCM Checkout'){
    git 'https://github.com/bel47/crud-backend'
  }
  stage('Compile-Package'){
   cmd.exe /k ""C:\apache-maven-3.3.9\bin\mvn.exe" -f pom.xml & "exit %%ERRORLEVEL%%""
  }

}
