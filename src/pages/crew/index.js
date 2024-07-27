import CrewBg from "./style";

const Crew = () => {
  const keyDownLeft = 37;
  const keyDownRight = 39;
  let tabFocus = 0;
  const showContent = (parent, content) => {
    parent.querySelector(`#${content}`).classList.remove("hidden");
  };
  const changeTabFocus = (e) => {
    const tabList = document.querySelector('[role="tablist"]');
    const tabs = tabList.querySelectorAll('[role="tab"]');
    // change the tabindex of the current tab to -1
    if (e.keyCode === keyDownLeft || e.keyCode === keyDownRight) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === keyDownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
      } else if (e.keyCode === keyDownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }
    }
    // change the tabindex of the next tab to 0
    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  };

  const tabClick = () => {
    const tabList = document.querySelector('[role="tablist"]');
    const tabs = tabList.querySelectorAll('[role="tab"]');
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        const targetTab = e.target;
        const targetPanel = targetTab.getAttribute("aria-controls");
        const targetImage = targetTab.getAttribute("data-image");

        const tabContainer = targetTab.parentNode;
        const mainContainer = tabContainer.parentNode;

        tabContainer
          .querySelector("[aria-selected='true']")
          .setAttribute("aria-selected", false);

        targetTab.setAttribute("aria-selected", true);

        mainContainer.querySelectorAll("[role='tabpanel']").forEach((panel) => {
          panel.classList.add("hidden");
        });

        showContent(mainContainer, targetPanel);
        showContent(mainContainer, targetImage);
      });
    });
  };

  return (
    <>
      <CrewBg />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>

        <div
          className="dot-indicators flex"
          role="tablist"
          aria-label="crew member list"
          onKeyDown={changeTabFocus}
          onMouseUp={tabClick}
        >
          <button
            aria-selected="true"
            role="tab"
            tabIndex={0}
            aria-controls="commander-tab"
            data-image="commander-image"
          >
            <span className="sr-only">The commander</span>
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="specialist-tab"
            data-image="specialist-image"
          >
            <span className="sr-only">The mission specialist</span>
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="pilot-tab"
            data-image="pilot-image"
          >
            <span className="sr-only">The pilot</span>
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="engineer-tab"
            data-image="engineer-image"
          >
            <span className="sr-only">The crew engineer</span>
          </button>
        </div>

        <article className="crew-info flow" id="commander-tab" role="tabpanel">
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Commander
            </h2>
            <p className="uppercase ff-serif fs-700">Douglas Hurley</p>
          </header>
          <p className="text-light">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>

        <article
          className="hidden crew-info flow"
          id="specialist-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Mission Specialist
            </h2>
            <p className="uppercase ff-serif fs-700">Mark Shuttleworth</p>
          </header>
          <p className="text-light">
            Mark Richard Shuttleworth is the founder and CEO of Canonical, the
            company behind the Linux-based Ubuntu operating system. Shuttleworth
            became the first South African to travel to space as a space
            tourist.
          </p>
        </article>

        <article
          className="hidden crew-info flow"
          id="pilot-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Pilot
            </h2>
            <p className="uppercase ff-serif fs-700">Victor Glover</p>
          </header>
          <p className="text-light">
            Pilot on the first operational flight of the SpaceX Crew Dragon to
            the International Space Station. Glover is a commander in the U.S.
            Navy where he pilots an F/A-18.He was a crew member of Expedition
            64, and served as a station systems flight engineer.
          </p>
        </article>

        <article
          className="hidden crew-info flow"
          id="engineer-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2
              className="uppercase ff-serif fs-600"
              style={{ color: "hsl(var(--clr-white) / 0.5)" }}
            >
              Flight Engineer
            </h2>
            <p className="uppercase ff-serif fs-700">Anousheh Ansari</p>
          </header>
          <p className="text-light">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.
          </p>
        </article>
        {/*
        
        Pictures
        
        */}
        <picture id="commander-image" role="tabpanel">
          <source
            srcSet="assets/crew/image-douglas-hurley.webp"
            type="image/webp"
          />
          <img
            src="assets/crew/image-douglas-hurley.png"
            alt="Douglas Hurley"
          />
        </picture>
        <picture id="specialist-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/crew/image-mark-shuttleworth.webp"
            type="image/webp"
          />
          <img
            src="assets/crew/image-mark-shuttleworth.png"
            alt="Mark Shuttleworth"
          />
        </picture>
        <picture id="pilot-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/crew/image-victor-glover.webp"
            type="image/webp"
          />
          <img src="assets/crew/image-victor-glover.png" alt="Victor Glover" />
        </picture>
        <picture id="engineer-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/crew/image-anousheh-ansari.webp"
            type="image/webp"
          />
          <img
            src="assets/crew/image-anousheh-ansari.png"
            alt="Anousheh Ansari"
          />
        </picture>
      </main>
    </>
  );
};
export default Crew;
