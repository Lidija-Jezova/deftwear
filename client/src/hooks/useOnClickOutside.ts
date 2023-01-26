import React from "react";

export const useOnClickOutside = (ref: any, callback: () => void) => {

    React.useEffect(() => {

        let handler = (e: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(e.target)) {
                callback()
            }
        }

        document.addEventListener('mousedown', handler)

        return () => document.removeEventListener('mousedown', handler)

    }, [ref, callback])
}
