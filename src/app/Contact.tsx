"use client"

import {useState, useRef, ChangeEvent, FormEvent} from "react"

import emailjs from "@emailjs/browser"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)

	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [phone, setPhone] = useState<string>('')
	const [message, setMessage] = useState<string>('')
	const [active, setActive] = useState<Boolean>(true)
	const [error, setError] = useState<string>()
	const [success, setSuccess] = useState<Boolean>()

  function handleName(e: ChangeEvent<HTMLInputElement>) {
		setName(e.target.value)
	}

	function handleEmail(e: ChangeEvent<HTMLInputElement>) {
		setEmail(e.target.value)
	}

	function handlePhone(e: ChangeEvent<HTMLInputElement>) {
		setPhone(e.target.value)
	}

	function handleMessage(e: ChangeEvent<HTMLTextAreaElement>) {
		setMessage(e.target.value)
	}

  function validateForm() {
		let isValid = true;

		if (!name || !email || !phone || !message) {
		  setError('Please fill out all fields.');
		  isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(email)) {
		  setError('Please enter a valid email address.');
		  isValid = false;
		}

		return isValid;
	  }

    function sendMail(e: FormEvent<HTMLFormElement>) {
      console.log('aa')
      setActive(false)
  
      e.preventDefault()
  
      if (!validateForm()) {
        return
      }
  
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID || '', process.env.NEXT_PUBLIC_TEMPLATE_ID || '', form.current || '', process.env.NEXT_PUBLIC_PUBLIC_KEY).then(result => {
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        showSuccess()
        setActive(true)
      }).catch(error => {
        setError(error.message)
        setActive(true)
      })
    }

    function showSuccess() {
      setSuccess(true)
  
      setTimeout(() => {
        setSuccess(false)
      }, 4000);
    }


  return (
    <section id="contact" className='flex items-center flex-col-reverse  gap-24 p-8 py-12 sm:py-0 sm:p-0 sm:pr-24'>
      <div className='flex flex-col'>
        <div className='hidden sm:block relative w-[200] h-[360]'>
          <video className='relative object-cover w-full h-full z-10' src={'./videos/first esport center in Rwanda!! funky monkey arcade_1.mp4'} autoPlay muted />
          <div className='absolute top-4 left-4 z-0 bg-primary w-full h-full'></div>
        </div>

        <div className='flex flex-wrap sm:grid sm:grid-cols-[1fr_1fr_1fr] gap-8 sm:gap-0 sm:gap-x-16 sm:gap-y-4 pl-8 mt-12 text-white'>
          <div>
            <h2 className='font-text font-bold'>ADDRESS</h2>
            <p className='text-text'>KN 3 Rd, Kigali</p>
          </div>

          <div>
            <h2 className='font-text font-bold'>PHONE</h2>
            <p className='text-text'>+250 784 674 639</p>
          </div>

          <div>
            <h2 className='font-text font-bold'>E-MAIL</h2>
            <p className='text-text'>team@funkymonkeyarcade.com</p>
          </div>

          <div>
            <h2 className='font-text font-bold'>OPENING HOURS</h2>
            <p className='text-text'>14:00 - 02:00</p>
          </div>
        </div>

      </div>

      {/* <div className='flex flex-col gap-8'>
        <h2 className='font-title font-bold text-white text-4xl sm:textvw-[40] lineheight-[8] sm:lineheight-[16]'>GET IN TOUCH</h2>
        <form className='flex flex-col gap-8' ref={form} onSubmit={sendMail}>
          <input onChange={handleName} value={name} className='w-full h-8 px-4 py-6 border-b-2 border-b-text bg-transparent text-text' type="text" name="name" placeholder='Full name' />
          <input onChange={handleEmail} value={email} className='w-full h-8 px-4 py-6 border-b-2 border-b-text bg-transparent text-text' type="email" name="email" placeholder='E-mail' />
          <input onChange={handlePhone} value={phone} className='w-full h-8 px-4 py-6 border-b-2 border-b-text bg-transparent text-text' type="phone" name="phone" placeholder='Phone number' />
          <textarea onChange={handleMessage} value={message} className='w-full h-40 px-4 py-6 border-b-2 border-b-text bg-transparent text-text' name="message" placeholder='Message' />
          <button type="submit" disabled={!active} className="flex items-center justify-center self-end w-max bg-primary clip-button-b py-4 px-4 gap-4 text-white">
            <img className="vh-[20]" src="./icons/contact.svg" alt="contact us" />
            SEND MESSAGE
          </button>
        </form>
      </div>

      {success &&
				<div className="fixed z-50 flex justify-center m-auto bottom-0 w-full p-4 bg-black bg-opacity-80 rounded-lg">
					<h1 className="text-2xl text-green-600 font-LogikBold">Message successfully sent</h1>
				</div>
			}

			{error &&
				<div className="fixed z-50 flex justify-center m-auto bottom-0 w-full p-4 bg-black bg-opacity-80 rounded-lg">
					<h1 className="text-2xl text-primary font-LogikBold">{error}</h1>
				</div>
			} */}
    </section>
  );
}
