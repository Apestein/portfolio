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
    <section className="flex items-center justify-around">
      <article className="flex flex-col gap-5">
        <FaLinkedin className="text-3xl" />
        <FaGithub className="text-3xl" />
        <FaEnvelope className="text-3xl" />
      </article>
      <form
        className="flex w-1/2 flex-col gap-3 self-center rounded-md p-3 text-black outline outline-1 outline-amber-500"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className="px-2 focus:outline-none"
          required
          type="text"
          name="user_name"
          placeholder="Name"
        />
        <input
          className="px-2 focus:outline-none"
          required
          type="email"
          name="user_email"
          placeholder="Email"
        />
        <textarea
          className="px-2 focus:outline-none"
          required
          name="message"
          placeholder="Message"
        />
        <input className="bg-amber-500 text-white" type="submit" value="Send" />
      </form>
    </section>
  )
}
