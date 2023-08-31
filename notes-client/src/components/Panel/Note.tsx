import { FunctionComponent } from "preact";

interface NoteProps {
  title: string;
  content: string;
}

const Note: FunctionComponent<NoteProps> = ({ title, content }) => {
  return (
    <div class="Note">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export { Note };
