const fs = require('fs');


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
* [Contributing](#contributing)
* [Tests](#tests)
* [GitHub](#github)
* [Questions](#questions)


## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
This project is under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## GitHub
GitHub username: ${data.userName}</br>
GitHub repository: [${data.link}](${data.link})

## Questions
Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
