import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user, history]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    //
  };

  return (
    <div
      className="container col-6 offset-col-3 mt-5 pt-5"
      style={{ minHeight: "100vh" }}
    >
      {loading ? (
        <h4 className="mb-4">Loading ...</h4>
      ) : (
        <h4 className="mb-4">Forgot Password</h4>
      )}

      <form onSubmit={submitHandler}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Type Your E-mail"
          autoFocus
        />
        <button
          type="submit"
          className="btn btn-light shadow-lg mt-3"
          disabled={!email}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
