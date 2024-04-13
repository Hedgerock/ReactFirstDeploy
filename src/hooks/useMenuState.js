import { useState } from "react";

export const useMenuState = () => {
    const [burgerMenuIsOpen, setburgerMenuIsOpen] = useState(false);

    function burgerMenuHandler(...args) {
        setburgerMenuIsOpen(prev => !prev)
        args.forEach(item => {
            if (typeof item === 'function') {
                item(false)
            }
        })
    }

    return { burgerMenuIsOpen, setburgerMenuIsOpen, burgerMenuHandler }
}
