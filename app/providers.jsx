'use client';
import { SessionProvider } from "next-auth/react"
import GlobalContext from "../context/state"

export default function Providers({ children, session}) {
    console.log('Session: ', session)
    return (
        <GlobalContext>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </GlobalContext>
    );
}