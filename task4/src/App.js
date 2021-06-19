import "./styles.css";
import Navbar from "./components/Navbar";
import Boardrow from "./components/Boardrow";

import Header from "./components/Header";

function App() {
  return (
    <div id="app">
      <Navbar />
      <div className="content">
        <Header />
        <Boardrow key="0" />
        <Boardrow key="1" />

        {/* <Gridview class="grid-board" /> */}
      </div>
    </div>
  );
}

export default App;
