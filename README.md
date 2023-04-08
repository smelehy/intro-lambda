# intro-lambda
Proof of concept for AWS serverless

set up directory on C drive C:\my-directory
open debian window on windows subsystem

install pip:
  - sudo apt-get install pip

install package dependencies
  - pip install --target ./packages packagename

create a lambda deployment package
  - cd packages
  - sudo apt-get install zip 
  - zip -r ../deployment-package.zip .
  - cd ..
  - zip deployment-package.zip lambda_function.py  (python file name has to be 'lambda_function.py')

