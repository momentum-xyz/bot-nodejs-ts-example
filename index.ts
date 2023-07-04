import {
  Bot,
  BotConfig,
  getAuthTokenWithPrivateKey,
} from '@momentum-xyz/bot-sdk';

// TODO change worldId to your world id!
const worldId = '00000000-0000-8000-8000-000000000005';

// Set private key from environment variable if you want to connect as User, otherwise connect as Guest
const privateKey = process.env['BOT_SDK_PRIVATE_KEY'];

const config: BotConfig = {
  worldId,

  onUserAdded: (user) => {
    console.log('User added!', user);

    // go closer to the joined user
    const { position, rotation } = user.transform;
    bot.moveUser({
      position: {
        x: position.x + rotation.x * 0.5,
        y: position.y + rotation.y * 0.5,
        z: position.z + rotation.z * 0.5,
      },
      rotation,
    });

    // send high five after 1 second
    setTimeout(() => {
      bot.sendHighFive(user.id, `~~ High5 Bot ~~`);
    }, 1000);
  },

  onHighFive: (userId, message) => {
    console.log('Received High five!', userId, message);
  },

  // uncomment these if needed, check the docs for more
  // onConnected: (userId) => {
  //   console.log('Connected, my user ID:', userId);
  // },
  // onDisconnected: () => {
  //   console.log('Disconnected!');
  // },
  // onJoinedWorld: (data) => {
  //   console.log('Joined world!', data);
  // },
};

const bot = new Bot(config);

if (privateKey) {
  console.log('Private key passed. Get the auth token...');
  getAuthTokenWithPrivateKey(privateKey)
    .then((token) => {
      console.log('Connect with auth token...', token);
      bot.connect(token);
    })
    .catch((err) => {
      console.error('Failed to get auth token', err);
      process.exit(1);
    });
} else {
  console.log('No private key passed. Connect as guest...');
  bot.connect();
}

// Read the docs on https://github.com/momentum-xyz/bot-sdk-nodejs/tree/main/example
// Get more examples on https://github.com/momentum-xyz/bot-sdk-nodejs
