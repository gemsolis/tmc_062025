"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Title from "../title_sub/Title";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Alert from "@/components/forms/Alert";
import { animateFadeUp } from "@/data/animation";
import emailjs from "emailjs-com";

const Form = () => {
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
    <motion.div
      className="w-full section-bg flex flex-column gap-10 justify-center items-start p-10 max-md:p-6 rounded-lg my-10"
      {...animateFadeUp(0.2)}
    >
      <motion.div
        className="flex flex-col items-start max-md:items-center text-white p-10 max-md:p-0"
        {...animateFadeUp(0.5)}
      >
        <Title title="Get in Touch With Us" />
        <p className="text-lightGray text-center">
          Our team is ready to assist with all your security needs.
        </p>
      </motion.div>

      <motion.div className="w-[60%] max-md:w-[100%]" {...animateFadeUp(0.5)}>
        <form
          className="flex flex-col items-center space-y-4 text-white z-10"
          onSubmit={handleSubmit}
        >
          <label>Full Name/Company Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 p-2 bg-transparent w-full border border-slate-400 rounded-md shadow-sm focus:ring-lightRed focus:border-slate-400"
            placeholder="Full Name/Company Name"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            className="mt-1 p-2 bg-transparent w-full border border-slate-400 rounded-md shadow-sm focus:ring-lightRed focus:border-slate-400"
            placeholder="Email Address"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            pattern="[0-9]*"
            inputMode="numeric"
            name="phone_number"
            id="phone-number"
            className="mt-1 p-2 bg-transparent w-full border border-slate-400 rounded-md shadow-sm focus:ring-lightRed focus:border-slate-400"
            placeholder="Phone Number"
            required
          />

          <label>Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="mt-1 p-2 bg-transparent w-full border border-slate-400 rounded-md shadow-sm focus:ring-lightRed focus:border-slate-400"
            placeholder="Subject of your message"
          />

          <label>Message</label>
          <textarea
            name="message"
            id="message"
            rows="4"
            className="mt-1 p-2 resize-none h-[250px] bg-transparent w-full border border-slate-400 rounded-md shadow-sm focus:ring-lightRed focus:border-slate-400"
            placeholder="Write your message here"
            required
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
      </motion.div>
    </motion.div>
  );
};

export default Form;
