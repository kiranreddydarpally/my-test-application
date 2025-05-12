import React from "react";
import Cats from "../helpers/cats";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
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
          <div className="two-buttons">
            <div>
              <button className="adopt-btn">Adopt</button>
            </div>
            <div>
              <button className="rehomed-btn">Rehomed</button>
            </div>
          </div>
          <div>
            <button
              className="add-post"
              onClick={() => {
                navigate("/add-post");
              }}
            >
              + Add post
            </button>
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
        <div>Matched Profiles</div>
        <div className="table">
          <table style={{ width: "100%" }}>
            <tr>
              <th>Full Name</th>
              <th>Pet Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Ranjith Soma</td>
              <td>Simba</td>
              <td>Yellareddy road Ameerpet, Hyderabad</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Ranjith Soma</td>
              <td>Simba</td>
              <td>Yellareddy road Ameerpet, Hyderabad</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Ranjith Soma</td>
              <td>Simba</td>
              <td>Yellareddy road Ameerpet, Hyderabad</td>
              <td>80%</td>
            </tr>
            <tr>
              <td>Ranjith Soma</td>
              <td>Simba</td>
              <td>Yellareddy road Ameerpet, Hyderabad</td>
              <td>80%</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Home;
