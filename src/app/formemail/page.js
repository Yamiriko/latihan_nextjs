"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Formemail() {
  const router = useRouter()
  const hendelKembali = () => {
    router.back();
  }

  const [inputEmail, setInputEmail] = useState("");
  const [inputPengirim, setInputPengirim] = useState("");
  const [inputPesannya, setInputPesannya] = useState("");
  const [submitData, setSubmitData] = useState({
    inputEmail: "",
    inputPengirim: "",
    inputPesannya: "",
  });

  const hendelSubmit = (e) => {
    e.preventDefault();
    console.log(`Email Pengirim : ${inputEmail}`);
    console.log(`Nama Pengirim : ${inputPengirim}`);
    console.log(`Pesan Pengirim : ${inputPesannya}`);
    setSubmitData({
      inputEmail: inputEmail,
      inputPengirim: inputPengirim,
      inputPesannya: inputPesannya,
    });
  };

  function ResetForm() {
    setInputEmail("");
    setInputPengirim("");
    setInputPesannya("");
    setSubmitData({ inputEmail: "", inputPengirim: "", inputPesannya: "" });
  }

  return (
    <>
      <div className="container my-5 animate__animated animate__fadeIn">
        <div className="main-section shadow p-4">
          <div className="section-title mt-4 mb-4">Form Email</div>
          <div className="row">
            <div className="col-md-12">
              <div className="card rounded-4 mb-4">
                <form id="form_input" onSubmit={hendelSubmit}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-2">
                          <label className="form-label" htmlFor="inputEmail">
                            Alamat Email Pengirim
                          </label>
                          <input
                            id="inputEmail"
                            name="inputEmail"
                            type="email"
                            className="form-control"
                            autoComplete="off"
                            autoFocus
                            required
                            value={inputEmail}
                            onChange={(e) => setInputEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="inputPengirim">
                            Nama Pengirim
                          </label>
                          <input
                            id="inputPengirim"
                            name="inputPengirim"
                            type="text"
                            className="form-control"
                            autoComplete="off"
                            required
                            value={inputPengirim}
                            onChange={(e) => setInputPengirim(e.target.value)}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="inputPesannya">
                            Pesan
                          </label>
                          <textarea
                            id="inputPesannya"
                            name="inputPesannya"
                            rows={5}
                            className="form-control"
                            required
                            value={inputPesannya}
                            onChange={(e) => setInputPesannya(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <button
                      id="btn_submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>{" "}
                    <button
                      id="btn_submit"
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => ResetForm()}
                    >
                      Reset
                    </button>
                    {" "}
                    <button
                      id="btn_kembali"
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={hendelKembali}
                    >
                      Kembali
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {submitData.inputEmail &&
            submitData.inputPengirim &&
            submitData.inputPesannya && (
              <div className="row">
                <div className="col-md-12">
                  <div className="card rounded-4 mb-4">
                    <div className="card-body">
                      <h3>Data yang disubmit :</h3>
                      <p>Email Pengirim : {submitData.inputEmail}</p>
                      <p>Nama Pengirim : {submitData.inputPengirim}</p>
                      <p>Pesan Pengirim : {submitData.inputPesannya}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
}
