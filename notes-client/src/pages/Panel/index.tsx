import { useState } from "@preact/compat";
import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Taskbar } from "../../components/Panel/Taskbar";

import './Panel.min.css';

const Panel = () => {
  const [user, setUser] = useState<string>("Default User");
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("username");
    location.route("/");
  }

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUser(localStorage.getItem("username"));
    }
    else {
      location.route('/');
    }
  },[]);

  return (
    <section class="Panel">
      <Taskbar logout={logout} username={user} />
    </section>
  );
};

export { Panel };
