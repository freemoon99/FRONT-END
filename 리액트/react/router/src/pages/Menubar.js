import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "../css/reset.css";
import styles from "../css/styles.module.css";
import github from "../img/Github_black.png";
import velog from "../img/Velog_black.png";

const Menubar = () => {
  //Navigate 사용하기
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.body}>
      <ul className={styles.menubar}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#FF9E1B" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "#FF9E1B" : "",
              };
            }}
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <div className={styles.content}>
        <Outlet />
      </div>

      <button className={styles.goHome} onClick={goHome}>
        홈으로 돌아가기
      </button>

      <div className={styles.footer}>
        <p style={{ marginBottom: "10px" }}>Copyright 2022. KyuHyun</p>
      </div>
    </div>
  );
};

export default Menubar;
