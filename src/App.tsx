import React from "react";
import "./App.css";
import Cats from "./components/cats";


function App() {
  return (
    <div className="app">
      <header className="header">
        <div>
          <img src="/ZAANVAR_FINAL LOGO 2.svg" alt="ZAANVAR LOGO" />
        </div>
        <div className="menu-items">
          <div>Home</div>
          <div>Services</div>
          <div>Book a Vet</div>
          <div>Shopping</div>
          <div>About us</div>
        </div>
        <div>
          <button className="login-btn">LOG IN</button>
        </div>
      </header>
      <main className="path">
        Adoption / Home / <span className="my-posts">My posts </span>
      </main>
      <main className="main-content">
        <div className="buttons">
          <div className="buttons">
            <div>
              <button className="adopt-btn">Adopt</button>
            </div>
            <div>
              <button className="rehomed-btn">Rehomed</button>
            </div>
          </div>
          <div>
            <button className="add-post">+ Add post</button>
          </div>
        </div>
        <div className="cats">
          <Cats
            src={"/Mask group.svg"}
            title={"Rottweiler"}
            age={"2 Years 8 Months,"}
            area={"Female Ameerpet, Hyderabad (75 Miles)"}
          />
          <Cats
            src={"/Mask group (1).svg"}
            title={"Rottweiler"}
            age={"2 Years 8 Months,"}
            area={"Female Ameerpet, Hyderabad (75 Miles)"}
          />
          <Cats
            src={"/Mask group (2).svg"}
            title={"Rottweiler"}
            age={"2 Years 8 Months,"}
            area={"Female Ameerpet, Hyderabad (75 Miles)"}
          />
        </div>
        <div>2</div>
        <div>table</div>
      </main>
    </div>
  );
}

export default App;
