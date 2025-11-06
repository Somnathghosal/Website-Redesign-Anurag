import { useEffect, useState } from "react";

// Tracks and displays total website visits using CountAPI (no backend required)
// Uses sessionStorage to prevent multiple increments within a single browser session
const VisitorCounter = () => {
    const [count, setCount] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const namespace = "ghosal-parg-site"; // change if you want a different namespace
        const key = "total-visits";

        const incrementOncePerSession = async () => {
            try {
                const hasVisitedThisSession = sessionStorage.getItem("visit-counted");
                const endpoint = hasVisitedThisSession
                    ? `https://countapi.xyz/get/${namespace}/${key}`
                    : `https://countapi.xyz/hit/${namespace}/${key}`;

                const response = await fetch(endpoint, { cache: "no-store" });
                if (!response.ok) throw new Error(`CountAPI error ${response.status}`);
                const data = await response.json();
                if (typeof data?.value === "number") {
                    setCount(data.value);
                } else {
                    throw new Error("Invalid response shape");
                }
                if (!hasVisitedThisSession) {
                    sessionStorage.setItem("visit-counted", "1");
                }
            } catch (e) {
                console.error("VisitorCounter failed:", e);
                setError("--");
            }
        };

        incrementOncePerSession();
    }, []);

    return (
        <div className="mt-4 text-center">
            <span className="text-sm text-blue-200">Visitors: </span>
            <span className="text-sm font-semibold text-white">
                {count !== null ? count.toLocaleString() : error ?? "..."}
            </span>
        </div>
    );
};

export default VisitorCounter;


