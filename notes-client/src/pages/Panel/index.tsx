import { useState } from "@preact/compat";
import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Taskbar } from "../../components/Panel/Taskbar";
import { Note } from "../../components/Panel/Note";

import "./Panel.min.css";

const Panel = () => {
  const [user, setUser] = useState<string>("Default User");
  const [notes, setNotes] = useState([]);
  const location = useLocation();

  const getNotes = async (user_id) => {
    await fetch(`http://127.0.0.1:8000/api/getNotes/${user_id}`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  };

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    location.route("/");
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(localStorage.getItem("username"));
    } else {
      location.route("/");
    }
    getNotes(localStorage.getItem("user_id"));
    console.log(notes);
  }, []);

  return (
    <section class="Panel">
      <Taskbar logout={logout} username={user} />
      <div class="Notes_Container">
        {notes.map((item) => (
          <Note key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
};

export { Panel };
