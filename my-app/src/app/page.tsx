"use client"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.main
     className=' h-screen flex flex-col justify-center items-center'
     initial={{ opacity: 0, scale: 1 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 1 }}>
      <h1>SPECIALIZED IN ELIGIBILITY AUTOMATION</h1>
      <h2>Building custom solutions using <div className='underline'>Oracle's Intelligent Advisor</div> platform.</h2>
      <button>SEND MESSAGE</button>
      <button>LEARN MORE</button>
    </motion.main>
  )
}
