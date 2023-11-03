pipeline {
    agent any
 tools {
        nodejs "Nodejs" // Use the name you configured in step 2
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/nandy18/Parking_Pe'
            }
        }

        stage('Build and Test') {
            steps {
                //tool name: 'Nodejs', type: 'nodejs'
       //         sh "${npmhome}/bin/npm install"          // Install project dependencies
         //       sh "${npmhome}/bin/npm run build"        // Build the React project
           //     sh  "${npmhome}/bin/npm test"             // Run tests if applicable
       sh 'npm install'          // Install project dependencies
                sh 'npm run build'        // Build the React project
                sh  'npm test'             // Run tests if applicable
            }
        }
    }
}
