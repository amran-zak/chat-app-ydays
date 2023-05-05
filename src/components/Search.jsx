import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { AuthContext } from "../services/auth.services";
import { ChatContext } from "../services/chat.services";

const Search = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", ">=", username),
      where("displayName", "<=", username + "\uf8ff")
    );

    try {
      const querySnapshot = await getDocs(q);
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    } catch (err) {
      setErr(true);
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div
      className="search"
      style={{
        padding: "10px",
        height: "calc(100% - 160px)",
        overflowY: "scroll",
      }}
    >
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      {err && <span>Utilisateur introuvable!</span>}
      {users.map((user) => (
        <div
          className="userChat"
          key={user.uid}
          onClick={() => handleSelect(user)}
        >
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
