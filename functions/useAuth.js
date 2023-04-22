import { useState, useEffect } from 'react';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(() => {
        const fetchAuth = async () => {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code: code
                })
            })
            const data = await response.json();
            setAccessToken(data.accessToken);
            setRefreshToken(data.refreshToken);
            setExpiresIn(data.expiresIn);
        }
        fetchAuth()
    }, [code])
}