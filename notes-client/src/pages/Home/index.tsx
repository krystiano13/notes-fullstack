import { Fragment } from "preact/jsx-runtime";
import { useState } from "@preact/compat";
import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";
import { Account } from "../../components/Home/Account";
import backgroundMin from "../../assets/images/background-min.webp";

import "./Home.min.css";

export function Home() {
  const [login, setLogin] = useState<boolean>(false);
  const location = useLocation();

  const switchLoginMode = (value: boolean) => {
    setLogin(value);
  };

  useEffect(() => {
    if (localStorage.getItem("username"))
      location.route("/panel");
  }, []);

  return (
    <Fragment>
      <section class={"Home d-flex justify-content-end"}>
        <div class={"HomeBackground position-fixed"}>
          <img
            class={"BackgroundImage"}
            src={backgroundMin}
            alt="wallpaper with lots of notes"
          />
        </div>
        <Account loginMode={login} switchLoginMode={switchLoginMode} />
      </section>
    </Fragment>
  );
}
