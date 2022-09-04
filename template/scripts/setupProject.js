const { execSync } = require('child_process');
const fs = require('fs');

const dotenv = require('dotenv');


const { ENV, MAPBOX_DOWNLOADS_TOKEN, APPCENTER_SECRET } = dotenv.config().parsed;
const env = ENV.toLowerCase();
const isWin32 = process.platform === 'win32';



// STEP 1
console.log('\n\n STEP 1 - Apply patches for node_modules using patch-package lib');
console.log(execSync('npx patch-package ', { encoding: 'utf8' }));


// STEP 2
console.log('\n\n STEP 2 - Apply .env file to native iOS/Android platforms');
console.log(execSync('yarn rnuc .env', { encoding: 'utf8' }));


// // STEP 3
// console.log('\n\n STEP 3 - Set hooks from ./hook folder in git (thats allow to share project git hooks between developers)');
// console.log(execSync('git config core.hooksPath hooks', { encoding: 'utf8' }));


// STEP 4
console.log('\n\n STEP 4 - Set correct Firebase config based on ENV variable form .env config');
fs.copyFileSync(
  `${process.cwd()}/ios/GoogleService-Info-${env}.plist`,
  `${process.cwd()}/ios/GoogleService-Info.plist`
);
console.log(`Copy ios/GoogleService-Info-${env}.plist to ios/GoogleService-Info.plist`);
fs.copyFileSync(
  `${process.cwd()}/android/app/google-services-${env}.json`,
  `${process.cwd()}/android/app/google-services.json`
);
console.log(`Copy android/app/google-services-${env}.json to android/app/google-services.json`);


// STEP 5
if (!isWin32 && env === 'dev') {
  console.log('\n\n STEP 5 - Install pod modules (mac platform only)');
  console.log(execSync('cd ios && pod install && cd ..', { encoding: 'utf8' }));
}


// FINAL
console.log('\n\n\x1b[42m', 'Postinstall setup successfully done\x1b[0m');
