const DiscordBanner = (props) => {
  const { width, height } = props;
  return (
    <iframe
      src='https://discord.com/widget?id=552902435929194500&theme=dark'
      width={width}
      height={height}
      allowtransparency='true'
      frameborder='0'
      sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
    ></iframe>
  );
};

export default DiscordBanner;
