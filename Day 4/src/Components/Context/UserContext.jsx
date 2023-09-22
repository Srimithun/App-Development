import { createContext } from "react";

const UserContext = createContext();

export const useUser = () => {

    return useContext(UserContext);
}
const UserProvider = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    
}
