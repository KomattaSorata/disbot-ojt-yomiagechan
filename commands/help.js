exports.run = (client, message, args) => {
  message.channel.send({
    embed: {
      color: 3447003,
      description:
        "先にボイスチャンネルに入ってください。そして`!e join`にしたらえらいボットがあなたが居るチャンネルに参加します。\nそして、`!e [読み上げにしたいメッセージ]`にするとボットが読み上げします。",
    },
  });
};
