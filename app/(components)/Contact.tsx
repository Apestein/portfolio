"use client"
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  const form = useRef<any>()
  const sendEmail = (e: any) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_usopb14",
        "template_mm3qbok",
        form.current,
        "0RUrHOtu4dvdHQ_Ii"
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <section className="my-10 flex items-center justify-around text-sm md:text-base">
      <i className="flex flex-col gap-5">
        <FaLinkedin className="text-3xl" />
        <FaGithub className="text-3xl" />
        <FaEnvelope className="text-3xl" />
      </i>
      <form
        className="flex w-1/2 flex-col gap-3 self-center dark:text-black "
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="px-2 outline outline-1 outline-black "
          required
          type="text"
          name="user_name"
          placeholder="Name"
        />
        <input
          className="px-2 outline outline-1 outline-black "
          required
          type="email"
          name="user_email"
          placeholder="Email"
        />
        <textarea
          className="px-2 outline outline-1 outline-black "
          required
          name="message"
          placeholder="Send me an email by writing your message here"
        />
        <button className="active:gradient-border group w-24 rounded-md border  border-transparent bg-neutral-700 p-1 text-xl font-bold text-white">
          <span className="hover:rainbow-text">Send</span>
        </button>
      </form>
    </section>
  )
}
