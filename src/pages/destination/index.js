import DestinationBg from "./style";

const Destination = () => {
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
      <DestinationBg />
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <picture id="moon-image" role="tabpanel">
          <source
            srcSet="assets/destination/image-moon.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-moon.png" alt="the moon" />
        </picture>
        <picture id="mars-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/destination/image-mars.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-mars.png" alt="the planet mars" />
        </picture>
        <picture id="europa-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/destination/image-europa.webp"
            type="image/webp"
          />
          <img
            src="assets/destination/image-europa.png"
            alt="the planet europa"
          />
        </picture>
        <picture id="titan-image" role="tabpanel" className="hidden">
          <source
            srcSet="assets/destination/image-titan.webp"
            type="image/webp"
          />
          <img src="assets/destination/image-titan.png" alt="the moon titan" />
        </picture>

        <div
          className="tab-list underline-indicators flex"
          role="tablist"
          aria-label="destination list"
          onKeyDown={changeTabFocus}
          onMouseUp={tabClick}
        >
          <button
            aria-selected="true"
            role="tab"
            tabIndex={0}
            aria-controls="moon-tab"
            data-image="moon-image"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Moon
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="mars-tab"
            data-image="mars-image"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Mars
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="europa-tab"
            data-image="europa-image"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Europa
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="titan-tab"
            data-image="titan-image"
            className="uppercase text-light ff-sans-cond fs-300 letter-spacing-2"
          >
            Titan
          </button>
        </div>

        <article
          id="moon-tab"
          role="tabpanel"
          className="destination-info flow"
        >
          <h2 className="uppercase text-white fs-800 ff-serif">Moon</h2>
          <p className="text-light">
            See our planet as you've never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you're there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Avg. distance
              </h3>
              <p className="uppercase ff-serif fs-500">384,400 km</p>
            </div>
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Est. travel time
              </h3>
              <p className="uppercase ff-serif fs-500">3 days</p>
            </div>
          </div>
        </article>

        <article
          id="mars-tab"
          role="tabpanel"
          className="hidden destination-info flow"
        >
          <h2 className="uppercase text-white fs-800 ff-serif">Mars</h2>
          <p className="text-light">
            Don't forget to pack your hiking boots. You'll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It's two and a half times the size of Everest!
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Avg. distance
              </h3>
              <p className="uppercase ff-serif fs-500">225 mil. km</p>
            </div>
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Est. travel time
              </h3>
              <p className="uppercase ff-serif fs-500">9 months</p>
            </div>
          </div>
        </article>

        <article
          id="europa-tab"
          role="tabpanel"
          className="hidden destination-info flow"
        >
          <h2 className="uppercase text-white fs-800 ff-serif">Europa</h2>
          <p className="text-light">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover's dream. With an icy surface, it's perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Avg. distance
              </h3>
              <p className="uppercase ff-serif fs-500">628 mil. km</p>
            </div>
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Est. travel time
              </h3>
              <p className="uppercase ff-serif fs-500">3 years</p>
            </div>
          </div>
        </article>

        <article
          id="titan-tab"
          role="tabpanel"
          className="hidden destination-info flow"
        >
          <h2 className="uppercase text-white fs-800 ff-serif">Titan</h2>
          <p className="text-light">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <div className="destination-meta flex">
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Avg. distance
              </h3>
              <p className="uppercase ff-serif fs-500">1.6 bil. km</p>
            </div>
            <div>
              <h3 className="uppercase ff-sans-cond text-light fs-200 letter-spacing-3">
                Est. travel time
              </h3>
              <p className="uppercase ff-serif fs-500">7 years</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};
export default Destination;
