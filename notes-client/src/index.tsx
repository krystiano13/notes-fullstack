import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";
import { useEffect } from "preact/hooks";

import { Home } from "./pages/Home/index.jsx";
import { Panel } from "./pages/Panel/index.jsx";
import { NotFound } from "./pages/_404.jsx";

import AOS from "aos";

import "./styles/base.css";
import "./styles/layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'aos/dist/aos.css';

export function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <LocationProvider>
      <main>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/panel" component={Panel} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
