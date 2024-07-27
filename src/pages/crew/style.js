const CrewBg = () => {
  return (
    <style>{`
            body {
        background-size: cover;
        background-position: bottom center;
        background-image: url(assets/crew/background-crew-mobile.jpg);
      }
      @media (min-width: 35rem) {
        body {
          background-position: center center;
          background-image: url(assets/crew/background-crew-tablet.jpg);
        }
      }
      @media (min-width: 45em) {
        body {
          background-image: url(assets/crew/background-crew-desktop.jpg);
        }
      }
      .underline-indicators > .active{
      border-color: transparent;
    }
    .underline-indicators > .active:hover,
    .underline-indicators > .active:focus{
      border-color: hsl(var(--clr-white) / 0.5);
    }
    .primary-navigation > li:nth-child(3){
      border-color: hsl(var(--clr-white));
    }
      `}</style>
  );
};
export default CrewBg;
