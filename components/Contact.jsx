import React, { useState } from "react";
import Head from "next/head";

import fetch from "node-fetch";

const Status = {
  Submit: "Submit",
  Success: "Success",
  Error: "Error",
  Warning: "Warning",
};

const Contact = (props) => {
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState(null);

  const [status, setStatus] = useState(Status.Submit);

  return (
    <form className={props.className} netlify>
      <input
        className="col-span-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-10 mb-4"
        type="text"
        placeholder="Email"
        onChange={(event) => setContact(event.target.value)}
      />

      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none h-24 mb-5"
        placeholder="Contattami per qualsiasi cosa!"
        onChange={(event) => setMessage(event.target.value)}
      />

      {status == Status.Submit && (
        <button
          className="xs:w-full sm:w-64 shadow bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5"

        >
          Submit your request &nbsp;📱
        </button>
      )}

      {status == Status.Success && (
        <button
          className="xs:w-full sm:w-64 shadow bg-green-500 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5"
          onClick={(event) => event.preventDefault()}
        >
          Message sent! &nbsp;✔
        </button>
      )}

      {status == Status.Error && (
        <button
          className="xs:w-full sm:w-64 shadow bg-red-500 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5"
          onClick={(event) => event.preventDefault()}
        >
          Try again later... &nbsp;❌
        </button>
      )}

      {status == Status.Warning && (
        <button
          className="xs:w-full sm:w-64 shadow bg-yellow-500 text-white py-2 px-4 rounded focus:outline-none font-semibold h-10 mr-5"
          onClick={(event) => event.preventDefault()}
        >
          Fill in all the information &nbsp;⚠️
        </button>
      )}
    </form>
  );
};

export default Contact;