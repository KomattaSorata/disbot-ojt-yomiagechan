exports.run = (client, message, args) => {
  if (!message.guild.voiceConnection) {
    message.channel.send({
      embed: {
        color: 15158332,
        description: "私、ボイチャに居ないよ！？",
      },
    });
  }

  // Get the user's voiceChannel (if he is in one)
  let userVoiceChannel = message.member.voiceChannel;

  // Return from the code if the user isn't in a voiceChannel
  if (!userVoiceChannel) {
    message.channel.send({
      embed: {
        color: 15158332,
        description:
          "どこー？(；ω；)マスターの居るチャンネル見つからないよ。。。\n",
      },
    });
  }

  // Get the client's voiceConnection
  let clientVoiceConnection = message.guild.voiceConnection;

  // Compare the voiceChannels
  if (userVoiceChannel === clientVoiceConnection.channel) {
    // The client and user are in the same voiceChannel, the client can disconnect
    clientVoiceConnection.disconnect();
    message.channel.send({
      embed: {
        color: 3447003,
        description: "またねー！",
      },
    });
  } else {
    // The client and user are NOT in the same voiceChannel
    message.channel.send({
      embed: {
        color: 15158332,
        description:
          "こらー！いたずらは良くないよ！ちゃんと同じチャンネルにいるときにコマンド使ってね！",
      },
    });
  }
};
