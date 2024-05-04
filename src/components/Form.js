// Form.js
import React from "react";
import "../components/Form.css";
import Footer from "../components/Footer";
import Header from "./Header";
const Form = () => {
  return (
    <div>
      <Header />
      <div className="form-container">
        <div className="left-section">
          {/* <h2>Left Section</h2> */}

          <div className="left-content">
            <p
              style={{
                backgroundColor: "white",
                color: "darkblue",
                fontWeight: "bold",
              }}
            >
              Making the World a better place
            </p>

            <div style={{ backgroundColor: "darkblue" }}>i</div>
            <div className="form-groupLeft">
              <label htmlFor="textarea1" style={{ fontWeight: "bold" }}>
                Text{" "}
              </label>
              <textarea
                id="textarea1"
                className="form-control"
                rows={5}
                cols={5}
              />
            </div>
            <div className="form-groupLeft">
              <label htmlFor="textarea2" style={{ fontWeight: "bold" }}>
                Summary
              </label>
              <textarea
                id="textarea2"
                className="form-control"
                rows={5}
                cols={5}
              />
            </div>
            <div className="form-groupLeft">
              <label htmlFor="file1" style={{ fontWeight: "bold" }}>
                Featured Image
              </label>
              <input
                type="file"
                id="file1"
                className="form-control-file"
                style={{ border: "dotted" }}
              />
            </div>
            <div className="form-groupLeft">
              <label htmlFor="file2" style={{ fontWeight: "bold" }}>
                Attachment
              </label>
              <input
                type="file"
                id="file2"
                className="form-control-file"
                style={{ border: "dotted" }}
              />
            </div>
            <div className="form-groupLeft">
              <label htmlFor="input1" style={{ fontWeight: "bold" }}>
                External Link
              </label>
              <input
                type="text"
                placeholder="type"
                id="input1"
                className="form-control"
              />
            </div>
            <div className="form-groupLeft">
              <label htmlFor="input2" style={{ fontWeight: "bold" }}>
                Source
              </label>
              <input
                type="text"
                id="input2"
                className="form-control"
                placeholder="type"
              />
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="right-content">
            <div className="form-groupUpper">
              <button
                type="button"
                class="btn btn-outline-light"
                style={{ fontWeight: "bold" }}
              >
                Preview
              </button>
              <select class="form-select" aria-label="Default select example">
                <option selected> Save </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="date1" style={{ fontWeight: "bold" }}>
                Author
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected style={{ fontWeight: "bold" }}>
                  Select
                </option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date1">Publish Date</label>
              <input type="date" id="date1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="date2">Expiry Date</label>
              <input type="date" id="date2" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="date1">Author</label>
              <select class="form-select" aria-label="Default select example">
                <option selected> Select </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date1">Author</label>
              <select class="form-select" aria-label="Default select example">
                <option selected> Select </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date1">Author</label>
              <select class="form-select" aria-label="Default select example">
                <option selected> Select </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date1">Author</label>
              <select class="form-select" aria-label="Default select example">
                <option selected> Select </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Form;
