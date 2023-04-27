import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#050A30] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/28678e16-e129-4d67-8161-de3df054d7b9"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#7EC8E3] text-[#ccd6f6]">
            Contact
          </p>
          <p className="text-[#ccd6f6] text-2xl py-6">
            Please use the form below or reach me at AusBaxley@gmail.com
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="my-4 p-2 bg-[#ccd6f6]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#7EC8E3] font-bold border-2 border-[#7EC8E3] hover:bg-[#7EC8E3] hover:text-[#000C66] hover:border-[#0000FF] px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
