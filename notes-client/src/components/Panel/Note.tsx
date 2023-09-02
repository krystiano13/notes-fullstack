import { FunctionComponent } from "preact";

interface NoteProps {
  title: string;
  content: string;
  showModal: () => void
}

const Note: FunctionComponent<NoteProps> = ({ title, content, showModal }) => {
  return (
    <div onClick={showModal} class="Note">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export { Note };
