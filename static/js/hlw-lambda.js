import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import '../css/styles.css'
import { Auth } from "aws-amplify";

// Configure Amplify in index file or root file
Amplify.configure({
    Auth: {
        region: awsExports.REGION,
        userPoolId: awsExports.USER_POOL_ID,
        userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID
    }
})
console.log(new Date().toLocaleTimeString(),Auth);
//(await Auth.currentSession()).getIdToken().getJwtToken()

function App() {
    return (
        <Authenticator>
          {({ signOut, user }) => (
              <div>
                <div className='testclass'>
                  <h2>Hey Man styles.css</h2>
                </div>
                <p>Welcome {user.username}</p>
                <button onClick={signOut}>Sign out</button>
              </div>
          )}
        </Authenticator>
    );
  }
  
  export default App;