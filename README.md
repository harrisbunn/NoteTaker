# NoteTaker

This is a simple command-line based notes application built with Node.js using the yargs library for command parsing.

## Features
Add a Note: Save a new note with a title and body.
Remove a Note: Delete a note by specifying its title.
List Notes: View a list of all saved notes.
Read a Note: Read a specific note by its title.

## Installation
Clone the repository to your local machine.
-git clone <repository-url>

Navigate to the project directory.
-cd <project-directory>

Install the required dependencies:
-npm install

## Usage
To interact with the application, you can use the following commands:

# Add a Note:
node app.js add --title="Your Note Title" --body="Your Note Body"

--title: The title of the note (required).
--body: The body/content of the note (required).

# Remove a Note:
node app.js remove --title="Your Note Title"

--title: The title of the note to remove (required).

# List All Notes:
node app.js list


# Read a Note:
node app.js read --title="Your Note Title"
--title: The title of the note to remove (required).
