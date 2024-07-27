const DestinationBg = () => {
  return (
    <style>{`
            body {
        background-size: cover;
        background-position: bottom center;
        background-image: url(assets/destination/background-destination-mobile.jpg);
      }
      @media (min-width: 35.001rem) {
        body {
          background-position: center center;
          background-image: url(assets/destination/background-destination-tablet.jpg);
        }
      }
      @media (min-width: 45em) {
        body {
          background-image: url(assets/destination/background-destination-desktop.jpg);
        }
      }
.underline-indicators > .active{
  border-color: transparent;
}
.underline-indicators > .active:hover,
.underline-indicators > .active:focus{
  border-color: hsl(var(--clr-white) / 0.5);
}
.primary-navigation > li:nth-child(2){
  border-color: hsl(var(--clr-white));
}
      `}</style>
  );
};
export default DestinationBg;
