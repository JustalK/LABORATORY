import React from "react";
import Modal from "./Modal"

const GrandChildren = ({ parent, active }) => {
  return (
    <div>
      <span>The modal has been coded inside the component GrandChildren inside the component limited by size Children. But the modal breakout from the Children css limitation with a portal</span>
      { active ?
      (<Modal parent={parent}>
        <div className="modal_000027">
          <span>Modal</span>
        </div>
      </Modal>) : null}
    </div>
  );
}

export default GrandChildren;
