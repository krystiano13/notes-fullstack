import { useState } from "@preact/compat";
import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Taskbar } from "../../components/Panel/Taskbar";
import { Note } from "../../components/Panel/Note";

import './Panel.min.css';

const Panel = () => {
  const [user, setUser] = useState<string>("Default User");
  const [user_id, setUser_id] = useState();
  const [notes, setNotes] = useState([]);
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("user_id");
    location.route("/");
  }

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(localStorage.getItem("username"));
      setUser_id(localStorage.getItem("user_id"));
    }
    else {
      location.route('/');
    }
  },[]);

  return (
    <section class="Panel">
      <Taskbar logout={logout} username={user} />
      <div class="Notes_Container">

      </div>
    </section>
  );
};

export { Panel };
