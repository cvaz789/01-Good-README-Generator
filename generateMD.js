function generateMarkdown(data) {
    return `
    ## Project ${data.userid}
    Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:
  `
  ;
  }
  module.exports = generateMarkdown;