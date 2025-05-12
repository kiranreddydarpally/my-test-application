import React from "react";
import Path from "../helpers/path";
import { useNavigate } from "react-router-dom";
import "./add-post.css";

const AddPost = () => {
  const naviogate = useNavigate();
  return (
    <div>
      <nav className="nav">
        <p
          onClick={() => {
            naviogate("/home");
          }}
        >
          &#x2190;
        </p>
        <p>Add Rehomed a pet</p>
      </nav>
      <Path path="Home/Rehomed" currentPath="/Start" />
    </div>
  );
};

export default AddPost;
