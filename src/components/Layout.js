import Navigation from "./Navigation/Navigation"

import { Outlet } from "react-router-dom"
import { Suspense } from "react"

export default function Layout() {
    return (
        <>
           <header>
                <Navigation/>
            </header>
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <Outlet />
            </Suspense>
        </>
    )
}