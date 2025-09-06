"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
export default function Page() {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const submit = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-type", "application/json")
        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        })
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }
        fetch("/api/generate", requestOptions)
            .then(response => response.json()) // <-- FIXED: you wrote request.json() by mistake
            .then((result) => {
                setgenerated(`http://localhost:3000/${shorturl}`);
                seturl("");
                setshorturl("");
                alert(result.message);
            })

    }
    return (
        <div className="my-10 bg-purple-200 mx-30 rounded-lg p-3">
            <h1 className="flex justify-center items-center p-3 font-bold text-2xl">URL Shortener</h1>
            <div className="flex flex-col gap-3 items-center justify-center">
                <input type="text" value={url} placeholder="enter Your URL name" className="border border-black w-1/2 rounded-lg p-1 focus:outline focus:outline-purple-900" onChange={e => { seturl(e.target.value) }} />
                <input type="text" value={shorturl} placeholder="enter your short url" className="border border-black w-1/2 rounded-lg p-2 focus:outline focus:outline-purple-900" onChange={e => { setshorturl(e.target.value) }} />
                <button className="bg-purple-500 rounded-lg p-3" onClick={submit}>Submit</button>
            </div>
            {generated && <>
                <span>Your Link</span>
                <code><Link target="_blank" href={generated}>{generated}</Link></code>
            </>
            }
        </div>
    )
}
