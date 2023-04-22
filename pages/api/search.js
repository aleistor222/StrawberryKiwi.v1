// import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
  // const query = req.query?.q;
  const query = req.search

  const session = await getServerSession(req, res)
  console.log("SESSION", session.user)
  // return
  const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&market=from_token&type=album,track,artist,playlist&limit=50`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    }
  )
  const searchResults = await response.json()
  console.log(searchResults)
  return
  res.status(200).json(searchResults);
}