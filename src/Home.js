import { useEffect, useState } from "react";
import "./index.css";

function Home() {
  const [requestArray, SetRequestArray] = useState([]);

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const nameChanged = (event) => {
    setName(event.target.value);
  };

  const emailChanged = (event) => {
    setEmail(event.target.value);
  };

  const SubmitEvent = (event) => {
    event.preventDefault();
    SetRequestArray((past) => [...past, { name: name, email: email }]);
    setEmail("");
    setName("");
  };

  return (
    <>
      <div className="home">
        <form>
          <label htmlFor="nameInput">First name:</label>
          <br></br>
          <input
            type="text"
            name="name"
            id="nameInput"
            placeholder="Enter Your Name"
            value={name}
            onChange={nameChanged}
          ></input>
          <br></br>
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your Email"
            onChange={emailChanged}
          ></input>
          <br></br>
          <input
            type="submit"
            value="Get All products List"
            onClick={SubmitEvent}
          ></input>
        </form>
      </div>
      <div>
        {requestArray.length == 0 ? "" : <p>History Of Requests</p>}
        {requestArray.length == 0
          ? ""
          : requestArray.map((request, key) => (
              <p key={key}>
                Name :{request.name} and Email: {request.email}
              </p>
            ))}
      </div>
    </>
  );
}

export default Home;
