import React from "react"
import Link from "next/link"
import { signIn } from "next-auth/react";


const AUTH_URL =
    "https://accounts.spotify.com/authorize?client_id=b2131f96c5db4c49a56428854b77aef2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    const handleLogin = () => {
        signIn("spotify", { callbackUrl: "http://localhost:3000" });
      };
    return (
        <div className="page">
            {/* <Link href={AUTH_URL}> */}
                <button className="button" onClick={handleLogin}>
                    Login With Spotify
                </button>
            {/* </Link> */}
        </div>
    )
}