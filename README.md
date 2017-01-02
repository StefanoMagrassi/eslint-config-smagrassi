# eslint-config-nexxa [![Build Status](https://travis-ci.org/Nexxa/eslint-config-nexxa.svg?branch=master)](https://travis-ci.org/Nexxa/eslint-config-nexxa)

Personal ESLint extensible and sharable configuration.

## Usage

Install the configuration as a npm package:

```sh
npm install --save-dev eslint-config-nexxa
```

and then add it as extension in your ESLint configuration file:

```javascript

// for example in your .eslinrc

{
  "extends": "nexxa"
}

```

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

## Rules

The configuration already extends the default `eslint:recommended` rules.

Package specific rules can be found in `/rules` folder.
