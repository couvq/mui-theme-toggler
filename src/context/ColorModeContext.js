import { createContext, useState } from "react";

const ColorModeContext = createContext();

export const ColorModeProvider = ({children}) => {
    const [colorMode, setColorMode] = useState('light');
    

    return (
        <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
            {children}
        </ColorModeContext.Provider>
    )
}

export default ColorModeContext;