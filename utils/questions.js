const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?',
    validate: (title) => {
      if (title) true
      return 'Please provide a title for your README.'
    }
  },
  {
    type: 'input',
    name: 'author',
    message: 'Enter your full name.',
    validate: (author) => {
      if (author) true
      return 'Please provide your name.'
    }
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Explain the what, why, and how of your project.',
    validate: (description) => {
      if (description) true
      return 'Please write up the what, why, and how for your project.'
    }
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Provide the instructions to install your app.',
    validate: (installation) => {
      if (installation) return
      return 'Please provide instructions for installation.'
    }
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Give examples and instructions on how to use your app.',
    validate: (usage) => {
      if (usage) return
      return 'Please give examples and instructions.'
    }
  },
  {
    type: 'confirm',
    name: 'hasCollab',
    message: 'Do you have collaborators to credit?',
    default: false,
  },
  {
    type: 'input',
    name: 'collab',
    message: 'List your collaborators if any, with their Github profiles. List like so: name, link, name, link, etc',
    when: (answers) => {
      return answers.hasCollab !== false;
    },
    validate: (collab) => {
      if (collab) {
        if (collab.length % 2 === 0) return
        return "You're missing either a name or link to that individual."
      }
      return 'List your collaborators separated by a comma.'
    }
  },
  {
    type: 'confirm',
    name: 'hasThirdParty',
    message: 'Did you use third party resources?',
    default: false,
  },
  {
    type: 'input',
    name: 'thirdParty',
    message: 'List any third party assets and their links. List any tutorials too. List like so: Asset, link, Asset. link, etc',
    when: (answers) => {
      return answers.hasCollab !== false
    },
    validate: (thirdParty) => {
      if (thirdParty) {
        if (thirdParty % 2 === 0) return
        return "You're missing either a name or a link to that asset."
      }
      return 'List the third party assets you use and the link to that asset.'
    }
  },
  {
    type:'input',
    name:'tech',
    message: "List the technology used in the project, separated by commas.",
    validate: (tech) => {
      if(tech) true
      return 'Please provide the technology used in this project.'
    }
  },
  {
    type: 'list',
    name: 'licenses',
    message: "Choose which license you're using:",
    choices: ['MIT license', 'GPL'],
    default: questions[0],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Provide your github username',
    validate: (username) => {
      if(username) true
      return 'Please provide your github username.'
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project.',
    choices: [
      {
				name: 'MIT',
				value: 'mit',
			},
			{
				name: 'GNU GPLv3',
				value: 'gpl-3.0',
			},
			{
				name: 'GNU AGPLv3',
				value: 'agpl-3.0',
			},
			{
				name: 'GNU LGPLv3',
				value: 'lgpl-3.0',
			},
			{
				name: 'APACHE 2.0',
				value: 'apache-2.0',
			},
			{
				name: 'Mozilla Public 2.0',
				value: 'mpl-2.0',
			},
			{
				name: 'The Unlicense',
				value: 'unlicense',
			},
			{
				name: 'Boost Software 1.0 ',
				value: 'bsl-1.0',
			},
    ]
  }
];

module.exports = questions;
