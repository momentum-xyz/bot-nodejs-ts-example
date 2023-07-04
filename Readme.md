# Odyssey Momentum.xyz Bot SDK Example

This is an example of how to use the [Odyssey Momentum.xyz Bot SDK](https://github.com/momentum-xyz/bot-sdk-nodejs) to create a bot that can connect to Odyssey platform as user/guest.

## Prerequisites

### Nodejs

You need to have [Node.js](https://nodejs.org/en/) version 20 (or higher) installed on your machine.

### Github npm package repository

For now the SDK packages are only hosted on Github npm package repository.
To use this you need to [authenticate](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages).
Read the Github documentation, create PAT and:

```shell
npm login --scope=@momentum-xyz --auth-type=legacy --registry=https://npm.pkg.github.com
```

## Installation

Export this repository, replace `my-cool-bot` with the name of your bot project:

```bash
git export https://github.com/momentum-xyz/bot-nodejs-ts-example.git my-cool-bot
```

Install dependencies:

```bash
cd my-cool-bot
npm install
```

## Development

Open the project in your favorite IDE and start editing the `src/index.ts` file.

Change the `worldId` constant to the world id that your bot needs to connect to.

Make sure to read the docs on [Odyssey Momentum.xyz Bot SDK](https://github.com/momentum-xyz/bot-sdk-nodejs), see also the examples

## Running

Run the bot:

```bash
npm start
```

### Connecting as User

By default the bot connects to tte world as Guest.

If you want to connect as User, you need to provide the private key of the user account - you can [retrive the account private key in MetaMask](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key) then set it as environment variable:

```bash
export BOT_SDK_PRIVATE_KEY=...
```

Then stop the bot if it's running and run it again.

**NOTE** that only one connection for given user is allowed - make sure you don't have more than one bot instance with same account or the UI Client opened in the web browser.
