import TechBg from "./style";

const Technology = () => {
  const keyDownLeft = 37;
  const keyDownRight = 39;
  const keyDownUp = 38;
  const keyDownDown = 40;
  let tabFocus = 0;
  // const showContent = (parent, content) => {
  //   parent.querySelector(`#${content}`).classList.remove("hidden");
  // };
  const showContent = (parent, content) => {
    const element = parent.querySelector(`#${content}`);
    if (element) {
      element.classList.remove("hidden");
    }
  };
  const changeTabFocus = (e) => {
    const tabList = document.querySelector('[role="tablist"]');
    const tabs = tabList.querySelectorAll('[role="tab"]');
    // change the tabindex of the current tab to -1
    if (
      e.keyCode === keyDownLeft ||
      e.keyCode === keyDownRight ||
      e.keyCode === keyDownUp ||
      e.keyCode === keyDownDown
    ) {
      tabs[tabFocus].setAttribute("tabindex", -1);
      if (e.keyCode === keyDownRight || e.keyCode === keyDownDown) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
      } else if (e.keyCode === keyDownLeft || e.keyCode === keyDownUp) {
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
        const imageDiv = mainContainer.querySelector(".tech-img");

        // tabContainer
        //   .querySelector("[aria-selected='true']")
        //   .setAttribute("aria-selected", false);
        const selectedElement = tabContainer.querySelector(
          "[aria-selected='true']"
        );
        if (selectedElement) {
          selectedElement.setAttribute("aria-selected", false);
        }
        targetTab.setAttribute("aria-selected", true);

        mainContainer.querySelectorAll("[role='tabpanel']").forEach((panel) => {
          panel.classList.add("hidden");
        });

        showContent(mainContainer, targetPanel);
        if (targetImage === "vehicle-image") {
          imageDiv.classList.add("vehicle-img");
          imageDiv.classList.remove("spaceport-img", "capsule-img");
        } else if (targetImage === "spaceport-image") {
          imageDiv.classList.add("spaceport-img");
          imageDiv.classList.remove("vehicle-img", "capsule-img");
        } else if (targetImage === "capsule-image") {
          imageDiv.classList.remove("vehicle-img", "spaceport-img");
          imageDiv.classList.add("capsule-img");
        }
      });
    });
  };
  return (
    <>
      <TechBg />
      <main
        id="main"
        className="grid-container grid-container--technology flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">03</span> Space launch 101
        </h1>
        <div className="tech-img vehicle-img"></div>
        <div
          className="numbered-indicators ff-serif fs-600 flex"
          role="tablist"
          aria-label="technology list"
          onKeyDown={changeTabFocus}
          onMouseUp={tabClick}
        >
          <button
            aria-selected="true"
            role="tab"
            tabIndex={0}
            aria-controls="vehicle-tab"
            data-image="vehicle-image"
          >
            <span>1</span>
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="spaceport-tab"
            data-image="spaceport-image"
          >
            <span>2</span>
          </button>
          <button
            aria-selected="false"
            role="tab"
            tabIndex={-1}
            aria-controls="capsule-tab"
            data-image="capsule-image"
          >
            <span>3</span>
          </button>
        </div>

        {/* Articles */}

        <article
          className="technology-info flow"
          id="vehicle-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2 className="uppercase letter-spacing-2 text-light ff-sans-cond fs-400">
              The terminology...
            </h2>
            <p className="uppercase ff-serif fs-700">Launch vehicle</p>
          </header>
          <p className="text-light">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </article>

        <article
          className="hidden technology-info flow"
          id="spaceport-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2 className="uppercase letter-spacing-2 text-light ff-sans-cond fs-400">
              The terminology...
            </h2>
            <p className="uppercase ff-serif fs-700">Spaceport</p>
          </header>
          <p className="text-light">
            A spaceport or cosmodrome is a site for launching (or receiving)
            spacecraft, by analogy to the seaport for ships or airport for
            aircraft. Based in the famous Cape Canaveral, our spaceport is
            ideally situated to take advantage of the Earth’s rotation for
            launch.
          </p>
        </article>

        <article
          className="hidden technology-info flow"
          id="capsule-tab"
          role="tabpanel"
        >
          <header className="flow">
            <h2 className="uppercase letter-spacing-2 text-light ff-sans-cond fs-400">
              The terminology...
            </h2>
            <p className="uppercase ff-serif fs-700">Space capsule</p>
          </header>
          <p className="text-light">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings. Our
            capsule is where you'll spend your time during the flight. It
            includes a space gym, cinema, and plenty of other activities to keep
            you entertained.
          </p>
        </article>
      </main>
    </>
  );
};
export default Technology;
