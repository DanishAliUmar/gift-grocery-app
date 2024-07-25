import { Outlet, useLocation } from 'react-router-dom';
import StatsContent from './StatsContent';
const Stats = ({ popupType, setPopupType, isPopupOpen, setIsPopupOpen }) => {
    const location = useLocation(); // Get current URL path

    // Check if the path includes "/claim-form"
    const isClaimFormPath = location.pathname.includes('/claim-form');

    return (
        <>

            {isClaimFormPath ? (
                <Outlet />
            ) : (
                <StatsContent popupType={popupType} setPopupType={setPopupType} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
            )}
        </>
    )
}

export default Stats