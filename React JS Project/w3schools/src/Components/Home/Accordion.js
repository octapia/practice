import React, { useState } from "react";
import './accordionTabs.css';

function Accordion() {
  return (
    <div className="accordion__container">
      {/* Accordion */}
      <h2>Accordion</h2>
      <Acc
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta quibusdam excepturi rem sequi quis saepe sint fuga. Quo quis molestiae aliquid iste"
        heading="Section 1"
      />
      <Acc
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta quibusdam excepturi rem sequi quis saepe sint fuga. Quo quis molestiae aliquid iste"
        heading="Section 2"
      />
      <Acc
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dicta quibusdam excepturi rem sequi quis saepe sint fuga. Quo quis molestiae aliquid iste"
        heading="Section 3"
      />

      {/* End */}
    </div>
  );
}

const Acc = ({ heading, text }) => {
  const [active, setactive] = useState(false);
  const getText = () => {
      setactive(!active);
      let panel = document.activeElement.nextSibling;
      panel.style.maxHeight = panel.style.maxHeight ? null: panel.scrollHeight + 'px'

  }
  return (
    <>
      <button
        className={`accordion ${active ? "active__acc" : ""}`}
        onClick={getText}
      >
        {heading}
      </button>
      <div className="panel">
        <p>{text}</p>
      </div>
    </>
  );
};

export default Accordion;
