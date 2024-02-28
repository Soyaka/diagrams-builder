"use client"

import React, { useEffect } from 'react'
import Header from './_components/Header'
import Hero from './_components/Hero'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
function page() {
  const {user}= useKindeBrowserClient()
  useEffect(()=>{
    console.log("user:", user)


  },[user])
  return (
    <div>
      <Header/>

      <Hero/>

    </div>
  )
}

export default page