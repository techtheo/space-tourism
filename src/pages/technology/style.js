const TechBg = () => {
  return (
    <style>{`
            body {
        background-size: cover;
        background-position: bottom center;
        background-image: url(assets/technology/background-technology-mobile.jpg);
      }
      @media (min-width: 35rem) {
        body {
          background-position: center center;
          background-image: url(assets/technology/background-technology-tablet.jpg);
        }
      }
      @media (min-width: 45em) {
        body {
          background-image: url(assets/technology/background-technology-desktop.jpg);
        }
      }

      .underline-indicators > .active{
      border-color: transparent;
    }
    .underline-indicators > .active:hover,
    .underline-indicators > .active:focus{
      border-color: hsl(var(--clr-white) / 0.5);
    }
    .primary-navigation > li:nth-child(4){
      border-color: hsl(var(--clr-white));
    }
      `}</style>
  );
};
export default TechBg;
