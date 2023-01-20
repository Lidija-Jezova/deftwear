import React from 'react';

export const useDisableBodyScroll = (open: boolean) => {
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [open])
};