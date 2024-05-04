import { Button } from "bootstrap";
import "../components/Home.css";
import Footer from "./Footer";

// Header.js

import React from "react";
import {
  FaSave,
  FaCog,
  FaBookmark,
  FaRegBookmark,
  FaExclamationTriangle,
  FaDotCircle,
  FaGgCircle,
  FaCircle,
  FaBullhorn,
  FaFile,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="all">
      <div className="header">
        <div>
          <h1 className="heading">Quick Cast</h1>
          <h6>Stay Informed Instantly</h6>
        </div>
        {/* <h6>Stay Informed Instantly</h6> */}
        <div className="button-container">
          <button className="icon-button">
            <FaRegBookmark size={20} />
          </button>
          <button className="icon-button">
            <FaCog size={20} />
          </button>
        </div>
      </div>

      <div className="para">
        <div
          style={{
            display: "flex",
            height: "60px",
          }}
        >
          {/* <FontAwesomeIcon icon="fa-regular fa-triangle-exclamation" /> */}
          <button
            style={{
              border: "none",
              // cursor: pointer;
              color: "darkblue",
              margin: "0 10px",
              padding: "15px",
              backgroundColor: "#e6efff",
              borderRadius: "5px",
            }}
          >
            <FaExclamationTriangle size={30} />
          </button>
          <h4
            style={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            lorem200 ipsum dolar lorem
            <FaCircle
              size={10}
              style={{
                margin: "10px",
                color: "darkblue",
              }}
            />
            200 ipsum dolar lorem200 ipsum dolar lorem200 ipsum dolar{" "}
          </h4>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "60%",
          margin: "30px 0",
        }}
      >
        <div
          className="para"
          style={{
            // display:'flex',
            padding: "15px",
            minWidth: "65%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
              height: "15%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
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
                <FaFile size={30} color="darkblue" />
              </button>
              <h3>Articles</h3>
            </div>
            <div>
              {/* <!-- Large button groups (default and split) --> */}
              <div class="btn-group">
                <button
                  class="btn btn-secondary  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    color: "white",
                    backgroundColor: "darkblue",
                    borderRadius: "50px",
                    padding: "10px 40px",
                    borderWidth: 0,
                  }}
                >
                  All
                </button>
                <ul class="dropdown-menu">
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "10px",
                backgroundColor: "#bd0e68",
                margin: "0 10px",
                borderRadius: "5px",
              }}
            />

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>
                  Business daily{" "}
                  <FaCircle
                    size={10}
                    style={{
                      margin: "10px",
                      color: "darkblue",
                    }}
                  />{" "}
                  2 hours
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>
                    Lorem Ipsum is simply dummy text of the printing <br /> and
                    typesetting industry.
                  </h4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg"
                  style={{
                    // color:'white',
                    // backgroundColor:'darkblue',
                    borderRadius: "50px",
                    padding: "20 40px",
                    // borderWidth:0,
                    margin: "0 10px",
                    fontSize: 12,
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <hr />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "10px",
                backgroundColor: "#3ea8c7",
                margin: "0 10px",
                borderRadius: "5px",
              }}
            />

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>
                  Business daily{" "}
                  <FaCircle
                    size={10}
                    style={{
                      margin: "10px",
                      color: "darkblue",
                    }}
                  />{" "}
                  2 hours
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>
                    Lorem Ipsum is simply dummy text of the printing <br /> and
                    typesetting industry.
                  </h4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg"
                  style={{
                    // color:'white',
                    // backgroundColor:'darkblue',
                    borderRadius: "50px",
                    padding: "20 40px",
                    // borderWidth:0,
                    margin: "0 10px",
                    fontSize: 12,
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "10px",
                backgroundColor: "#e3ca53",
                margin: "0 10px",
                borderRadius: "5px",
              }}
            />

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div>
                  Business daily{" "}
                  <FaCircle
                    size={10}
                    style={{
                      margin: "10px",
                      color: "darkblue",
                    }}
                  />{" "}
                  2 hours
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>
                    Lorem Ipsum is simply dummy text of the printing <br /> and
                    typesetting industry.
                  </h4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <button
                  type="button"
                  class="btn btn-outline-secondary btn-lg"
                  style={{
                    // color:'white',
                    // backgroundColor:'darkblue',
                    borderRadius: "50px",
                    padding: "20 40px",
                    // borderWidth:0,
                    margin: "0 10px",
                    fontSize: 12,
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              class="btn btn-primary btn-lg"
              style={{
                color: "white",
                backgroundColor: "darkblue",
                borderRadius: "50px",
                padding: "20 40px",
                borderWidth: 0,
              }}
            >
              View All
            </button>
          </div>
        </div>

        <div
          style={{
            maxWidth: "30%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            className="para"
            style={{
              display: "flex",
              padding: "15px",
            }}
          >
            <div>
              <button
                style={{
                  border: "none",
                  // cursor: pointer;
                  color: "darkblue",
                  margin: "0 10px",
                  padding: "15px",
                  backgroundColor: "#e6efff",
                  borderRadius: "5px",
                }}
              >
                <FaExclamationTriangle size={30} />
              </button>
            </div>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              text ever since the 1500s printing and typesetting....
            </div>
          </div>
          <div
            className="para"
            style={{
              display: "flex",
              padding: "15px",
            }}
          >
            <button
              style={{
                border: "none",
                // cursor: pointer;
                color: "darkblue",
                margin: "0 10px",
                padding: "15px",
                backgroundColor: "#e6efff",
                borderRadius: "5px",
              }}
            >
              <FaExclamationTriangle size={30} />
            </button>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              text ever since the 1500s printing and typesetting....
            </div>
          </div>
          <div
            className="para"
            style={{
              display: "flex",
              padding: "15px",
            }}
          >
            <button
              style={{
                border: "none",
                // cursor: pointer;
                color: "darkblue",
                margin: "0 10px",
                padding: "15px",
                backgroundColor: "#e6efff",
                borderRadius: "5px",
              }}
            >
              <FaExclamationTriangle size={30} />
            </button>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              text ever since the 1500s printing and typesetting....
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
