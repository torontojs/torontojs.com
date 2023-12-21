console.log("Volunteer data file loaded successfully")


fs = require 'fs'

# Function to generate Markdown content from the data
generateMarkdown = (volunteer_data) ->
  markdown = "### People Information\n\n"
  for person in volunteer_data
    markdown += "- Name: #{person.volunteer_data.contributors.name}, URL: #{person.volunteer_data.contributors.profileURL}\n"
  markdown

# Generate Markdown content from the data
generatedMarkdown = generateMarkdown(volunteer_data)

# Write the generated content to a file
fs.writeFileSync 'volunteersNew.md', generatedMarkdown

console.log 'Markdown file generated successfully'