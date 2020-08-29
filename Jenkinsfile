node ("windows") {
  stage ('Build') {

    git 'https://github.com/bel47/crud-backend'

    withMaven(...) {

      bat "mvn clean install"

    } // withMaven will discover the generated Maven artifacts, JUnit Surefire & FailSafe reports and FindBugs reports
  }
}
