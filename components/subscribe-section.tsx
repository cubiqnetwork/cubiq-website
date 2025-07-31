"use client"

import { useState, useEffect } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"

// Add grecaptcha to the Window type
declare global {
    interface Window {
        grecaptcha: any
    }
}

const SITE_KEY = "6LcNAZQrAAAAAGADGu-W4-QmbBKActqhSmCKVYbu" // 🔁 Replace this

export function SubscribeSection() {
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    // ✅ Ensure script is loaded
    const [recaptchaReady, setRecaptchaReady] = useState(false)

    useEffect(() => {
        const checkReady = () => {
            if (window.grecaptcha) {
                window.grecaptcha.ready(() => setRecaptchaReady(true))
            } else {
                setTimeout(checkReady, 500)
            }
        }
        checkReady()
    }, [])

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setMessage("Please enter a valid email address.")
            return
        }

        if (!window.grecaptcha || !recaptchaReady) {
            setMessage("reCAPTCHA not loaded. Please try again in a moment.")
            return
        }

        setIsLoading(true)
        setMessage("")

        try {
            const token = await window.grecaptcha.execute(SITE_KEY, { action: "subscribe" })

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: "b3f2e4c8-b976-4fb2-8e8e-3829b4d05781", // 🔁 Replace
                    email,
                    subject: "New Cubiq subscriber",
                    from_name: "Cubiq Website",
                    captcha: token,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setMessage("Subscription successful! Thank you!")
                setEmail("")
            } else {
                throw new Error(result.message || "Something went wrong")
            }
        } catch (error: any) {
            setMessage(`Error subscribing. Please try again later. Details: ${error.message}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            {/* ✅ reCAPTCHA v3 script */}
            <Script
                src={`https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`}
                strategy="lazyOnload"
                onLoad={() => console.log("reCAPTCHA script loaded")}
            />

            <section className="py-16 px-6 bg-gray-900/50 border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center bg-overlay">
                    <h2 className="text-3xl font-bold mb-4 text-white">Join the Pre-Sale Whitelist</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Be among the first to access Cubiq Network's token pre-sale. Sign up to reserve your spot, receive exclusive early-bird benefits, and stay ahead with insider updates.
                    </p>
                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 justify-center">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full sm:w-64 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <Button
                            type="submit"
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                            disabled={isLoading}
                        >
                            {isLoading ? "Subscribing..." : "Subscribe"}
                        </Button>
                    </form>
                    {message && <p className="mt-2 text-gray-300">{message}</p>}
                </div>
            </section>
        </>
    )
}
