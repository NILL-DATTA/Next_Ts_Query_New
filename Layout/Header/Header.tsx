import { logout } from "@/Toolkit/authSlice";
import Link from "next/link";
import React from "react";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const cookie = new Cookies();
  let token = cookie.get("token");

  // const Remove_log = (): void => {
  //   dispatch(logout());
  // };
  return (
    <>
      <div
        className="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2"></small>
              <small>123 Street, New York, USA</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2"></small>
              <small>+012 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href=""
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-0"
                href=""
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0 text-primary">
            <i className="far fa-hospital me-3"></i>Klinik
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/" className="dropdown-item">
              Home
            </Link>

            <Link href="/cms/create" className="dropdown-item">
              Create
            </Link>
            <Link href="/cms/product_List" className="dropdown-item">
              product list
            </Link>

            {/* {token ? ( */}
            {/* <Link
                href="/Auth/Login"
                onClick={Remove_log}
                className="dropdown-item"
              >
                Logout
              </Link> */}
            {/* ) : ( */}
            <Link href="/Auth/Login" className="dropdown-item">
              Login
            </Link>
            {/* )} */}

            <Link href="/Auth/Registration" className="dropdown-item">
              Register
            </Link>
          </div>
          <a
            href=""
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Appointment<i className="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
