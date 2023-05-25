import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <Link href='/'>Home</Link>
        <Link href='/about'>About Us</Link>
        <Link href='/contact'>Contact Us</Link>
    </nav>
  )
}
