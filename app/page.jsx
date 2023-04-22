"use client"
import { useContext, useEffect } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link';
import { GlobalState } from '../context/state'

import HomePage from '@/components/HomePage'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard';

import { getSession } from "next-auth/react";
import { isAuthenticated } from '@/utils/isAuthenticated';

const inter = Inter({ subsets: ['latin'] })

// const code = new URLSearchParams(window.location.search).get("code")

export default function Home() {
  const { authenticated, setAuthenticated } = useContext(GlobalState)
  // return code ? <Dashboard code={code} /> : <Login />

  useEffect(() => {
    async function checkAuth() {
      const session = await getSession();
      console.log('Session: ', session)
      if (session) {
        const response = await isAuthenticated(session)
        console.log('Authenticated: ', response)
        if (response) {
          setAuthenticated(true)
        } else {
          return {
            redirect: {
              destination: "/login",
              permanent: false,
            },
          };
        }
      }
    }
    checkAuth()

  }, [])

  return (
    <div className="page">
      {authenticated ? <HomePage /> : <Login />}
    </div>
  )

}


