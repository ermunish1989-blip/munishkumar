import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";

export const AnimatedCounter = ({ value, duration = 2, delay = 0, suffix = "" }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    const spring = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: duration * 1000,
    });

    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (inView && !hasAnimated) {
            setTimeout(() => {
                spring.set(value);
                setHasAnimated(true);
            }, delay * 1000);
        }
    }, [inView, spring, value, delay, hasAnimated]);

    useEffect(() => {
        return spring.onChange((latest) => {
            setDisplay(Math.floor(latest).toString());
        });
    }, [spring]);

    return (
        <span ref={ref}>
            {display}{suffix}
        </span>
    );
};
