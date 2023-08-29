import { useState } from "@preact/compat";
import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";

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
    <section>
      <h1>Hello { user }</h1>
      <button onClick={logout}>Log Out</button>
    </section>
  );
};

export { Panel };
