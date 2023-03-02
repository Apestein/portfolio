"use client"
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Lottie from "lottie-react"
import emailLottie from "../../public/email.json"

export default function Contact() {
  const lottie = useRef<any>()
  const form = useRef<any>()
  function sendEmail(e: any) {
    e.preventDefault()
    document.getElementById("lottie")?.classList.toggle("hidden")
    lottie.current.goToAndPlay(0, true)

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
    form.current.reset()
  }

  function hideLottie() {
    document.getElementById("lottie")?.classList.toggle("hidden")
  }

  function copyEmailToClipBoard() {
    navigator.clipboard.writeText("lucledo@protonmail.com")
    alert("Copied email to clipboard: lucledo@protonmail.com")
  }

  return (
    <section className="my-10 flex items-center justify-around text-sm md:text-base">
      <Lottie
        className="fixed top-1/2 left-1/2 hidden h-auto w-1/2 -translate-y-1/2 -translate-x-1/2"
        id="lottie"
        lottieRef={lottie}
        animationData={emailLottie}
        autoplay={false}
        loop={false}
        onComplete={hideLottie}
      />
      <i className="flex flex-col gap-5">
        <FaLinkedin
          className="cursor-pointer text-3xl"
          onClick={() =>
            window.open("https://www.linkedin.com/in/luc-ledo", "_blank")
          }
        />
        <FaGithub
          className="cursor-pointer text-3xl"
          onClick={() => window.open("https://github.com/Apestein", "_blank")}
        />
        <FaEnvelope
          className="cursor-pointer text-3xl"
          onClick={copyEmailToClipBoard}
        />
      </i>
      <form
        className="flex w-3/4 flex-col gap-3 self-center dark:text-black md:w-1/2 "
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
          className="h-24 px-2 outline outline-1 outline-black "
          required
          name="message"
          placeholder="Send me an email by writing your message here"
        />
        <button className="active:gradient-border group w-24 rounded-md border border-transparent bg-neutral-700 p-1 text-base font-bold text-white md:text-xl">
          <span className="group-hover:rainbow-text">Send</span>
        </button>
      </form>
    </section>
  )
}
