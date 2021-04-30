import React from "react";
import delt from "../../Assets/Group 3654.png";

import ModalImage from "../../Assets/delmodalimg.png";
import "../../App.css";
function DeleteProbModal(props) {
  // console.log(props)
  return (
    <div>
      <img
        className="dlt_img"
        data-bs-toggle="modal"
        data-bs-target="#exampleModaldel"
        src={delt}
      ></img>

      <div
        class="modal fade"
        id="exampleModaldel"
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
                  {props.name}
                </h4>
                <p
                  className="text_black lh-base"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: "500",
                    padding: "0 15px",
                  }}
                >
                  {props.para}
                </p>
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
                  onClick={props.func}
                  data-bs-dismiss="modal"
                >
                  Yes Delete
                </button>
                <button
                  type="button"
                  className="btn fw-bold bg_white"
                  data-bs-dismiss="modal"
                  style={{ fontSize: "0.8rem" }}
                  onClick={props.func}
                >
                  No, don't delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteProbModal;
