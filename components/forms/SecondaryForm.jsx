"use client";

import { useState } from "react";
import Alert from "@/components/forms/Alert";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import emailjs from "emailjs-com";

const SecondaryForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    emailjs
      .sendForm(
        "service_9d4amlk", // Replace with your Service ID
        "template_hdue0vx", // Replace with your Template ID
        e.target,
        "0qhYP3HBc_ur0RjDp" // Replace with your User ID
      )
      .then(
        (result) => {
          setSuccessMessage("Message successfully sent!");
          setErrorMessage("");
          e.target.reset();
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
          setSuccessMessage("");
        }
      );

    setFormSubmitted(true);
  };
  return (
    <div>
      <form
        className="flex flex-col items-center space-y-4 text-white"
        onSubmit={handleSubmit}
      >
        <label>Full Name/Company Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="mt-1 p-2 bg-transparent w-full border border-bg-slate-400  rounded-md shadow-sm focus:ring-bg-slate-400 focus:border-bg-slate-400"
          placeholder="Full Name/Company Name"
        />

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="mt-1 p-2 bg-transparent w-full border border-bg-slate-400 rounded-md shadow-sm focus:ring-bg-slate-400 focus:border-bg-slate-400"
          placeholder="Email Address"
        />

        <label>Phone Number</label>
        <input
          type="tel"
          pattern="[0-9]*"
          inputMode="numeric"
          name="phone_number"
          id="phone-number"
          className="mt-1 p-2 bg-transparent w-full border border-bg-slate-400 rounded-md shadow-sm focus:ring-bg-slate-400 focus:border-bg-slate-400"
          placeholder="Phone Number"
        />

        <label>Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          className="mt-1 p-2 bg-transparent w-full border border-bg-slate-400 rounded-md shadow-sm focus:ring-bg-slate-400 focus:border-bg-slate-400"
          placeholder="Subject of your message"
        />

        <label>Message</label>
        <textarea
          name="message"
          id="message"
          rows="4"
          className="mt-1 p-2 resize-none h-[250px] bg-transparent w-full border border-bg-slate-400 rounded-md shadow-sm focus:ring-bg-slate-400 focus:border-bg-slate-400"
          placeholder="Write your message here"
        ></textarea>
        <div className="flex justify-between w-full">
          <div className="self-start">
            {formSubmitted && (
              <>
                {successMessage && (
                  <Alert
                    message={successMessage}
                    onClose={() => {
                      setFormSubmitted(false);
                      setSuccessMessage("");
                    }}
                    type="success"
                  />
                )}
                {errorMessage && (
                  <Alert
                    message={errorMessage}
                    onClose={() => {
                      setFormSubmitted(false);
                      setErrorMessage("");
                    }}
                    type="error"
                  />
                )}
              </>
            )}
          </div>
          <div className="self-end">
            <PrimaryButton title="Send Message" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SecondaryForm;
