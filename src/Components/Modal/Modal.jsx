import React from "react";
import FlagImage from "../../Assets/Component 27 – 1.png";
import ModalImage from "../../Assets/modal.png";
import "../../App.css";
function Modal() {
  return (
    <div>
      <img
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        src={FlagImage}
      ></img>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ marginTop: "20px", padding: "50px" }}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body ">
              <div className="text-end">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <br></br>
              <br></br>

              <div className="text-center">
                <div
                  style={{
                    paddingBottom: "8px",
                    marginTop: "-40px",
                    marginLeft: "30px",
                  }}
                >
                  <img src={ModalImage}></img>
                </div>
                <h4
                  className="text_darkblue fw-bold"
                  style={{ fontSize: "1.2rem" }}
                >
                  Why is this inappropriate ?
                </h4>
                <p
                  className="text_black lh-base"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    padding: "0 15px",
                  }}
                >
                  Please select a reason and submit. Our team will review this
                  and let you know if the conent doesn't meet community
                  standards!
                </p>
              </div>

              <div
                className="text-center"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <select
                  class="form-select text-center border_solid bluegreen_border"
                  aria-label="Default select example"
                  style={{ width: "70%", border: "2px solid green !important" }}
                >
                  <option selected>Select a reason</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>

              <div
                class=" text-center d-flex"
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  className="btn btn-danger bg_red"
                  style={{ width: "120px", fontSize: "0.9rem" }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn fw-bold bg_white"
                  data-bs-dismiss="modal"
                  style={{ fontSize: "0.8rem" }}
                >
                  Don't report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
