import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Users.module.css";

const Users = props => {
  const avatars = [
    "user",
    "user-tie",
    "user-astronaut",
    "user-ninja",
    "user-secret",
    "user-nurse",
    "user-md",
    "user-injured",
    "user-graduate"
  ];

  const users = [...props.users];
  users.sort((a, b) => {
    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
  });

  const getAvatar = () =>
    avatars[Math.round(Math.random() * (avatars.length - 1))];
  const userList = users.map(user => {
    return (
      <li key={"user-id-" + user.id} className={styles.app_user}>
        <div className={styles.avatar}>
          <FontAwesomeIcon icon={getAvatar()} size="2x" />
        </div>
        <div className={styles.infos}>
          <h5>{user.name}</h5>
          <small>{user.email}</small>
        </div>
      </li>
    );
  });

  return <ul className={styles.app_users}>{userList}</ul>;
};

export default Users;
