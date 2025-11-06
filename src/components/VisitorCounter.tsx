import { useEffect, useRef, useState } from "react";
import { Eye } from "lucide-react";

const ANIMATION_DURATION_MS = 800;

// Combines a per-device animated counter (localStorage) with a global badge.
const VisitorCounter = () => {
    // Per-device (this browser) count with animation
    const [visitCount, setVisitCount] = useState<number>(0); // retained for potential future use
    const [displayedCount, setDisplayedCount] = useState<number>(0);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        try {
            const key = "site_visit_count";
            const stored = localStorage.getItem(key);
            const current = stored ? parseInt(stored, 10) || 0 : 0;
            const next = current + 1;
            localStorage.setItem(key, String(next));
            setVisitCount(next);

            const start = performance.now();
            const from = current;
            const to = next;
            const step = (time: number) => {
                const elapsed = time - start;
                const t = Math.min(1, elapsed / ANIMATION_DURATION_MS);
                const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
                const value = Math.round(from + (to - from) * eased);
                setDisplayedCount(value);
                if (t < 1) {
                    animationRef.current = requestAnimationFrame(step);
                }
            };
            animationRef.current = requestAnimationFrame(step);
        } catch {
            setVisitCount(1);
            setDisplayedCount(1);
        }
        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
        };
    }, []);

    // Global badge (no JS API calls)
    // const badgeUrl = useMemo(() => {
    //     const origin = typeof window !== "undefined" ? window.location.origin : "https://example.com";
    //     return `https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=${encodeURIComponent(
    //         origin
    //     )}&count_bg=%236AA6F8&title_bg=%23587DB2&title=Visitors&edge_flat=false`;
    // }, []);

    return (
        <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 text-blue-100">
                <Eye className="h-4 w-4" />
                <span className="text-sm">Visitors:</span>
                <span className="text-sm font-semibold text-white" title={`Device visits: ${visitCount}`}>
                    {displayedCount.toLocaleString()}
                </span>
            </div>
            <div className="mt-2">
                {/* <img
                    src={badgeUrl}
                    alt="Visitor count"
                    className="inline-block align-middle opacity-90"
                    style={{ height: 18 }}
                /> */}
            </div>
        </div>
    );
};

export default VisitorCounter;


