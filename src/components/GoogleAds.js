const GoogleAds = (props) => {
  const componentDidMount = () => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  };

  return (
    <ins
      className='adsbygoogle'
      style='display:block'
      data-ad-client='ca-pub-1121608664947904'
      data-ad-slot={props.slot} //1678976509
      data-ad-format='auto'
      data-full-width-responsive='true'
    ></ins>
  );
};

export default GoogleAds;
