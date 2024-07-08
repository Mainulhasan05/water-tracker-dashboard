import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "../../utils/axiosInstance";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const JoinMess = () => {
  const router = useRouter();
  const [userObj, setUserObj] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const token = Cookies.get("temp_token");
  //   if (!token) {
  //     toast("Please Login First");
  //     router.push("/login");
  //   }
  // }, []);
  const handleChange = (e) => {
    setUserObj({
      ...userObj,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post("/api/mess/createMess", userObj, {
      headers: {
        Authorization: `${Cookies.get("temp_token")}`,
      },
    });
    if (res.data.status) {
      toast.success(res.data.message);
      console.log(res.data.data);
      // Cookies.set('mess_token',res.data.data.token)
      // setTimeout(() => {
      //   router.push('/')
      // }, 2000);
    } else {
      toast.error(res.data.message);
    }
    setLoading(false);
  };
  return (
    <div>
      <main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <div className="d-flex justify-content-center py-4">
                    <a
                      href="index.html"
                      className="logo d-flex align-items-center w-auto"
                    >
                      <img src="assets/img/logo.png" alt="" />
                      <span className="d-none d-lg-block">NiceAdmin</span>
                    </a>
                  </div>

                  <div className="card mb-3">
                    <div className="card-body">
                      <div className="pt-4 pb-2">
                        <h5 className="card-title text-center pb-0 fs-4">
                          Join a Mess to Get Access in{" "}
                        </h5>
                        <p className="text-center small">
                          Ask your Mess Manager to provide the secret key
                        </p>
                      </div>

                      <form className="row g-3 needs-validation" novalidate>
                        <div className="col-12">
                          <label for="yourUsername" className="form-label">
                            Mess Name
                          </label>
                          <div className="input-group has-validation">
                            {/* <span className="input-group-text" id="inputGroupPrepend">@</span> */}
                            <input
                              onChange={handleChange}
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Bachelor point"
                              required
                            />
                            <div className="invalid-feedback">
                              Please enter your mess name.
                            </div>
                          </div>
                        </div>

                        <div className="col-12">
                          <button
                            onClick={handleSubmit}
                            className="btn btn-primary w-100"
                            type="submit"
                          >
                            Create Mess
                          </button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">
                            You have a joining key?{" "}
                            <Link href="/join-mess">Join Mess</Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default JoinMess;
