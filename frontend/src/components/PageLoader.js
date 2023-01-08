import React from "react";
import styles from "../styles/PageLoader.module.css";

export const PageLoader = () => {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";

  return (
    <div className={styles.loader}>
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
};
