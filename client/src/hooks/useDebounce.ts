import React from "react";

export const useDebounce = (callback: (...args: any) => void, delay?: number) => {
    const timer = React.useRef<ReturnType<typeof setTimeout> | null>()

    const debouncedCallback = React.useCallback((...args: any) => {

        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay || 500)

    }, [callback, delay])

    return debouncedCallback
}