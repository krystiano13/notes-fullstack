import type { FunctionComponent } from "preact";

import "./Modal.css";

interface ModalProps {
  shown: boolean;
  mode: string;
  hideModal: () => void;
}

const Modal: FunctionComponent<ModalProps> = ({ shown, mode, hideModal }) => {
  return (
    <div
      class={
        shown
          ? "ModalWrapper d-flex justify-content-center align-items-center"
          : "hidden ModalWrapper d-flex justify-content-center align-items-center"
      }
    >
      <form class="PanelModal d-flex flex-column align-items-center justify-content-center">
        <input type="text" placeholder="title" name="title" />
        <textarea placeholder="content" name="content"></textarea>
        <div class="PanelModalButtons">
          <button id="submit" type="submit">
            {mode === "add" ? "Add" : "Edit"}
          </button>
          {mode !== "add" && (
            <button id="delete" type="button">
              Delete
            </button>
          )}
          <button onClick={hideModal} id="cancel" type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export { Modal };
