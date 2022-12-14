// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
     switch(license) {
    case "MIT":
        license ="\n-![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
      break;
    case "Perl":
        license ="\n-![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)";

      break;
      case "SIL":
        license ="\n-![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)"
      break;
    default:
        license = "none.";
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch(license) {
        case "MIT":
            license =" (https://opensource.org/licenses/MIT)"
          break;
        case "Perl":
            license =" (https://opensource.org/licenses/Artistic-2.0)"
          break;
          case "SIL":
            license =" (https://opensource.org/licenses/OFL-1.1)"
          break;
        default:
            license = "";
      }
      return license;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license == "none"){
        return ""
    }else{
        return `## License\n
        ${license}` + renderLicenseBadge(license) + renderLicenseLink(license)+"\n";
    }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

-${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

-${data.instructions}

## Usage

-${data.usage}

## Credits

-${data.credits}

${renderLicenseSection(data.license)}

## Features

-${data.features}

## How to Contribute

-${data.contribute}

## Tests

-${data.test}

`;
}

module.exports = generateMarkdown;