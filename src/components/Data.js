import Footer from "./Footer";
import {
  FaBullhorn,
  FaExclamationTriangle,
  FaFile,
  FaPlusCircle,
} from "react-icons/fa";
import "./Data.css";
import Header from "./Header";
import React, { useEffect, useState } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
import CircularProgressBar from "../components/CircularProgressBar";
const Data = () => {
  return (
    <div className="body">
      <Header />
      <div className="container">
        <div
          className="card-container"
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h3>Post Summary</h3>{" "}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "27%",
                margin: "20px",
              }}
            >
              <div style={{ margin: "10px" }}>
                <h7 className="card-title" style={{ color: "darkblue" }}>
                  <button
                    style={{
                      border: "none",
                      // cursor: pointer;
                      color: "darkblue",
                      padding: "10px",
                      backgroundColor: "#e6efff",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  >
                    <FaFile size={20} color="darkblue" />
                  </button>
                  Article <FaPlusCircle color="#8498c4" />
                </h7>
                <h4>600</h4>
              </div>
              <div>
                <CircularProgressBar percentage={60} />
              </div>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "27%",
                margin: "20px",
              }}
            >
              <div style={{ margin: "10px" }}>
                <h7 className="card-title" style={{ color: "darkblue" }}>
                  <button
                    style={{
                      border: "none",
                      // cursor: pointer;
                      color: "darkblue",
                      padding: "10px",
                      backgroundColor: "#e6efff",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  >
                    <FaExclamationTriangle size={20} />
                  </button>
                  Alert <FaPlusCircle color="#8498c4" />
                </h7>
                <h4>100</h4>
              </div>
              <CircularProgressBar percentage={10} />
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                maxWidth: "27%",
                margin: "20px",
              }}
            >
              {" "}
              <div style={{ margin: "10px" }}>
                <h7 className="card-title" style={{ color: "darkblue" }}>
                  <button
                    style={{
                      border: "none",
                      // cursor: pointer;
                      color: "darkblue",
                      padding: "10px",
                      backgroundColor: "#e6efff",
                      borderRadius: "5px",
                      marginRight: "10px",
                    }}
                  >
                    <FaBullhorn size={20} />
                  </button>
                  Announcement <FaPlusCircle color="#8498c4" />
                </h7>
                <h4>300</h4>
              </div>
              <CircularProgressBar percentage={30} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "darkblue", height: "10px" }} />

      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand"></a>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
        <div className="main" style={{ backgroundColor: "white" }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Content Type</th>
                <th scope="col">Author</th>
                <th scope="col">Status</th>
                <th scope="col">Priority</th>
                <th scope="col">Updated</th>
                <th scope="col">Action </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Lorem</th>
                <td>Alert</td>
                <td>John</td>
                <td style={{ backgroundColor: "lightgreen", color: "green" }}>
                  Published
                </td>

                <td>high</td>
                <td>10/9/22 - 19:43</td>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Reject</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem</th>
                <td>Alert</td>
                <td>John</td>
                <td style={{ backgroundColor: "#FFCCCC", color: "red" }}>
                  Rejected
                </td>

                <td>Low</td>
                <td>10/9/22 - 19:43</td>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Reject</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem ipsum</th>
                <td>Alert</td>
                <td>John</td>
                <td style={{ backgroundColor: "lightgreen", color: "green" }}>
                  Published
                </td>

                <td>Medium</td>
                <td>10/9/22 - 19:43</td>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Reject</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem ipsum</th>
                <td>Anouncment</td>
                <td>John</td>
                <td style={{}}>Pending</td>

                <td>Low</td>
                <td>10/9/22 - 19:43</td>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Reject</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem ipsum</th>
                <td>Alert</td>

                <td>John</td>
                <td style={{ backgroundColor: " #FFCCCC", color: "red" }}>
                  Published
                </td>
                <td>High</td>
                <td>10/9/22 - 19:43</td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option
                    selected
                    style={{ backgroundColor: "lightgray", border: "box" }}
                  >
                    Reject
                  </option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem ipsum</th>
                <td>Anouncment</td>
                <td>John</td>
                <td style={{ color: " #FFA500", backgroundColor: "#FFE5CC" }}>
                  Expired
                </td>
                <td>High</td>
                <td>10/9/22 - 19:43</td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Reject</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem ipsum</th>
                <td>Alert</td>
                <td>John</td>
                <td style={{ backgroundColor: "#FFCCCC", color: "red" }}>
                  Rejected
                </td>

                <td>Low</td>
                <td>10/9/22 - 19:43</td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Reject</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem ipsum</th>
                <td>Alert</td>
                <td>John</td>
                <td style={{ color: " #FFA500", backgroundColor: "#FFE5CC" }}>
                  Expired
                </td>
                <td>High</td>
                <td>10/9/22 - 19:43</td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Reject</option>
                </select>
              </tr>
              <tr>
                <th scope="row">Lorem ipsum</th>
                <td>Anouncment</td>
                <td>John</td>
                <td style={{ backgroundColor: "lightgreen", color: "green" }}>
                  published
                </td>

                <td>Medium</td>
                <td>10/9/22 - 19:43</td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Reject</option>
                </select>
              </tr>
            </tbody>
          </table>
          <div
            className="pagination"
            style={{
              // backgroundColor: "darkblue",
              alignItems: "center",
              paddingLeft: "40px",
              justifyContent: "center",
            }}
          >
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <h1 style={{ backgroundColor: "darkblue" }}>i</h1>
      <Footer />
    </div>
  );
};

export default Data;
