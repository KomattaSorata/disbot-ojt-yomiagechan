exports.run = (client, message, args) => {
  const vchannel = message.member.voice.channel;
  if (!vchannel) {
    message.channel.send({
      embed: {
        color: 15158332,
        description:
          "どこー？(；ω；)マスターの居るチャンネル見つからないよ。。。\n",
      },
    });
  } else {
    vchannel.join().then(
      message.channel.send({
        embed: {
          color: 3066993,
          description:
            "来ました！使い終わったら`!e leave`で教えてね！（退室するから）",
        },
      })
    );
  }
};
