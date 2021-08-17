const fs = require('fs');

function licenseShield(data) {
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.projectName}

    ## Description
    ${data.description}

    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contributing] (#contributing)
    * [Tests] (#tests)
    * [GitHub](#github)
    * [Questions] (#questions)
    

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Credits
    ${data.credits}

    ## License


    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}
  `;
}

module.exports = generateMarkdown;
