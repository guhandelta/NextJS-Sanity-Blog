import Toggle from "react-toggle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ThemeToggle = ({onChange}) => {
    return (
        <label>
            <Toggle 
                className="day-night-toggle" 
                icons={{
                    checked: <FontAwesomeIcon inverse icon="sun" />,
                    unchecked: <FontAwesomeIcon inverse icon="moon" />,
                }}  
                onChange={onChange}  
            />
            {/* inverse => inverses the colors of the icons and bg */}
        </label>
    )
}

export default ThemeToggle
