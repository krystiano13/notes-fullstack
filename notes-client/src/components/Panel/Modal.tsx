import type { FunctionComponent } from "preact";

import "./Modal.css";

interface ModalProps {
  shown: boolean;
}

const Modal: FunctionComponent<ModalProps> = ({ shown }) => {
  return (
    <div
      class={
        shown
          ? "ModalWrapper d-flex justify-content-center align-items-center"
          : "hidden ModalWrapper d-flex justify-content-center align-items-center"
      }
    >
      <form class="PanelModal">
        <input type="text" placeholder="title" name="title" />
        <textarea placeholder="content" name="content"></textarea>
        <div class="PanelModalButtons">
          <button type="submit">Edit</button>
          <button type="button">Delete</button>
        </div>
      </form>
    </div>
  );
};

export { Modal };
