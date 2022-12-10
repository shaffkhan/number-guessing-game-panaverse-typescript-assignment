step 1 

open folder in vs code 

step 2

create ts.config , using tsc --init

step 3 

create js.config , using npm init -y

step 4 

in ts.config file , change:

target : "ES2022"
module : "NodeNext"
moduleResolution : "NodeNext"

in js.config file :
"name": "number-guess-game-assignment-panaverse",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "bin": "",


step 5 

create index.ts
in terminal , install npm i chalk chalk-animation inquirer

step 6

add inquirer , chalk and chalk-animation types using:
 npm i -D @types/inquirer ,
 using npm i -D @types/chalk ,
 using npm i -D @types/chalk-animation


step 7 
write shebang #!/usr/bin/env node 
import all libraries e.g chalk etc


after writing all the logic step 8 to publish your npx
important !!! you must have the account on npm first !!!
open cmd and write following commands 
npm login
then login to npm by entering the credential
then run npm publish
after that in json.config file , give bin:"./index.js"
and also update the version , version : "1.1.0"

now as we have updated the version so now delete the package-lock.json file and also delete node module folder
now run npm install for updated versions and node modules
