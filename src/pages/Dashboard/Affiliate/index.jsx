import { useState } from "react"
import ActivateAccount from "./ActivateAccount"
import Activated from "./Activated"


const Affiliate = () => {
    const [IsActivateAccount, setIsActivateAccount] = useState(false)
    return (
        IsActivateAccount ?
            <Activated />
            :
            <ActivateAccount setIsActivateAccount={setIsActivateAccount} />
    )
}

export default Affiliate