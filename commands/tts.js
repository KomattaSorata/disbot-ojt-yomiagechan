exports.run = (client, message, args) => {
  if (!message.guild.voiceConnection) {
    message.channel.send({
      embed: {
        color: 15158332,
        description: "私、ボイチャに居ないよ！？",
      },
    });
  }
};
