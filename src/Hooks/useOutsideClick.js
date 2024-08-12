import { useEffect } from "react";



export default function useOutsideCLick(ref, exceptionId, cb) {
    useEffect(() => {
        function handleOutsideClick(event) {
            if (ref.current && !ref.current.contains(event.target) && event.target.id !== exceptionId) {
                cb();
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [ref, exceptionId, cb]);
}