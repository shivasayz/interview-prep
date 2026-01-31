import { useState } from "react";
import "./App.css";

/* 
name, email, city, state, country
*/

function App() {
  const [userInfo, setUserInfo] = useState([]);
  const [count, setCount] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserInfo = async (noOfPeople) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://randomuser.me/api/?results=${noOfPeople}&nat=in`,
      );
      const result = await res.json();
      setUserInfo(result.results);
    } catch (err) {
      console.log("error while fetching user data", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = () => {
    fetchUserInfo(count);
  };

  const handleClear = () => {
    setUserInfo([]);
  };

  return (
    <>
      <h1>Data fetching from public API</h1>
      <input
        placeholder="Enter any number"
        style={{ width: "180px", padding: "4x" }}
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={!count}>
        GO
      </button>

      <button onClick={handleClear}>clear</button>

      <div>
        {isLoading ? (
          <div style={{ paddingTop: "18px" }}>Loading....</div>
        ) : (
          <div>
            {userInfo.map((user, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #444",
                  padding: "12px",
                  marginBottom: "12px",
                  borderRadius: "8px",
                  display: "flex",
                  gap: "12px",
                  maxWidth: "400px",
                }}
              >
                <img
                  src={user.picture.medium}
                  alt="user"
                  style={{ borderRadius: "50%", padding: "20px" }}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div>
                    <b>Name:</b> {user.name.first} {user.name.last}
                  </div>
                  <div>
                    <b>Email:</b> {user.email}
                  </div>
                  <div>
                    <b>City:</b> {user.location.city}
                  </div>
                  <div>
                    <b>State:</b> {user.location.state}
                  </div>
                  <div>
                    <b>Country:</b> {user.location.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
