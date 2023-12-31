import { useState } from "@preact/compat";
import { useEffect, useRef } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Taskbar } from "../../components/Panel/Taskbar";
import { Note } from "../../components/Panel/Note";
import Macy from "macy";
import { Modal } from "../../components/Panel/Modal";

import "./Panel.min.css";

const Panel = () => {
  const [user, setUser] = useState<string>("Default User");
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("add");
  const [target, setTarget] = useState<string>();
  const location = useLocation();
  const container = useRef(null);
  const macy = useRef();

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
    console.log(localStorage.getItem("user_id"));
  }, []);

  useEffect(() => {
    macy.current = Macy({
      container: container.current,
      columns: 6,
      margin: {
        x: 10,
        y: 0
      },
      breakAt: {
        1200: 5,
        992: 1
      },
    });
  }, [notes]);

  return (
    <section class="Panel">
      <Taskbar
        showModal={() => {
          setMode("add");
          setModal(true);
        }}
        logout={logout}
        username={user}
      />
      <Modal target={target} hideModal={() => setModal(false)} mode={mode} shown={modal} />
      <div ref={container} class="Notes_Container">
        {notes.map((item) => (
          <Note
            key={item.id}
            title={item.title}
            content={item.content}
            showModal={() => {
              setTarget(item.id);
              setMode("edit");
              setModal(true);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export { Panel };
