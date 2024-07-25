import SidebarOptions from '../components/Elements/SidebarOptions';
import Side from '../assets/svgs/SideNave';
import { useLocation } from 'react-router-dom';
import Svg from './Elements/Svg';
import { useState } from 'react';
const SideBar = () => {
const [showMenuOnMobile, setShowMenuOnMobile] = useState(false)
    const location = useLocation();
    const currentPathSegment = location.pathname.split('/')[2]; // Extract relevant path segment
    const sidebarData = [
        {
            text: `Profile settings`,
            id: 1,
            icon: <Side.ProfileSettings color={`${location.pathname.includes('/dashboard/profile') ? '#fff' : ''}`} />,
            navigate: "/dashboard/profile",
        },
        {
            text: `Wallet`,
            id: 2,
            icon: <Side.Wallet color={`${location.pathname.includes('/dashboard/wallet') ? '#fff' : ''}`} />,
            navigate: "/dashboard/wallet",
        },
        {
            text: `Stats`,
            id: 3,
            icon: <Side.Stats color={`${location.pathname.includes('/dashboard/stats') ? '#fff' : ''}`} />,
            navigate: "/dashboard/stats",
        },
        {
            text: `Refer and earn`,
            id: 4,
            icon: <Side.ReferAndEarn color={`${location.pathname.includes('-and-earn') ? '#fff' : ''}`} />,
            navigate: "/dashboard/refer-and-earn",
        },
        {
            text: `Promote your business`,
            id: 5,
            icon: <Side.PromoteYourBusiness color={`${location.pathname.includes('/promote-business') ? '#fff' : ''}`} />,
            navigate: "/dashboard/promote-business",
        },
        {
            text: `Affiliate`,
            id: 6,
            icon: <Side.Affiliate color={`${location.pathname.includes('/dashboard/affiliate') ? '#fff' : ''}`} />,
            navigate: "/dashboard/affiliate",
        },
        {
            text: `Testimonials`,
            id: 7,
            icon: <Side.Testimonials color={`${location.pathname.includes('/dashboard/testimonials') ? '#fff' : ''}`} />,
            navigate: "/dashboard/testimonials",
        },
        {
            text: `Rewards`,
            id: 6,
            icon: <Side.Affiliate color={`${location.pathname.includes('/dashboard/rewards') ? '#fff' : ''}`} />,
            navigate: "/dashboard/rewards",
        },
        {
            text: `FAQ’s`,
            id: 8,
            icon: <Side.FAQS color={`${location.pathname.includes('/dashboard/faqs') ? '#fff' : ''}`} />,
            navigate: "/dashboard/faqs",
        },
        {
            text: `Help & support`,
            id: 9,
            icon: <Side.HelpSupport color={`${location.pathname.includes('/dashboard/support') ? '#fff' : ''}`} />,
            navigate: "/dashboard/support",
        },
        {
            text: `Log out`,
            id: 10,
            icon: <Side.LogOut />,
            navigate: "/",
        },
    ];
    
    const pathSegment  = [
        {
            text: `Profile settings`,
            id: 1,
            icon: <Side.ProfileSettings/>,
            navigate: "/dashboard/profile",
        },
        {
            text: `Wallet`,
            id: 2,
            icon: <Side.Wallet/>,
            navigate: "/dashboard/wallet",
        },
        {
            text: `Stats`,
            id: 3,
            icon: <Side.Stats/>,
            navigate: "/dashboard/stats",
        },
        {
            text: `Refer and earn`,
            id: 4,
            icon: <Side.ReferAndEarn />,
            navigate: "/dashboard/refer-and-earn",
        },
        {
            text: `Promote your business`,
            id: 5,
            icon: <Side.PromoteYourBusiness />,
            navigate: "/dashboard/promote-business",
        },
        {
            text: `Affiliate`,
            id: 6,
            icon: <Side.Affiliate/>,
            navigate: "/dashboard/affiliate",
        },
        {
            text: `Testimonials`,
            id: 7,
            icon: <Side.Testimonials/>,
            navigate: "/dashboard/testimonials",
        },
        {
            text: `FAQ’s`,
            id: 8,
            icon: <Side.FAQS/>,
            navigate: "/dashboard/faqs",
        },
        {
            text: `Help & support`,
            id: 9,
            icon: <Side.HelpSupport/>,
            navigate: "/dashboard/support",
        },
        {
            text: `Log out`,
            id: 10,
            icon: <Side.LogOut />,
            navigate: "/",
        },
    ];

    const matchingSidebarItem = pathSegment.find(
        (item) => item.navigate.includes(`/${currentPathSegment}`) // Match based on path segment
    );

    // Handle cases where no matching item is found (optional)
    const { icon = <Side.Stats />, text = 'Content' } = matchingSidebarItem || {};




    return (
        <div className={`mdlarge:w-[20rem] w-full top-0 bg-white h-full block z-40`}>
            <div
                className={`pt-1 mdlarge:pb-5 flex flex-col gap-5 mdlarge:sticky relative top-0`}
            >
                <div className="rounded-xl p-3 space-y-5 shadow-[1px_1px_5px_1px_rgba(0,0,0,.1)]">
                    <div className="flex items-center gap-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREDjXSwEXU79Fsy0tmAffRPHhwz3fNHSelQ&usqp=CAU" alt="" className="w-12 h-12 object-cover rounded-full" />
                        <p className="font-semibold text-lg">Jack Smith</p>
                    </div>
                    <div className="p-3 rounded-lg mdlarge:hidden border cursor-pointer transition-all flex items-center justify-between gap-3 whitespace-nowrap" onClick={()=> setShowMenuOnMobile(!showMenuOnMobile)}>
                        <div className="flex items-center gap-3">
                            {icon}
                            <p className="text-sm">{text}</p>
                        </div>
                        <Svg.CshevronBottom className={`${showMenuOnMobile ? '-rotate-180' : 'rotate-0'} transition-all`} />
                    </div>
                </div>

                <div className={`divide-y max-h-[25rem] overflow-y-auto absolute mdlarge:static w-full  mdlarge:top-0 top-40 bg-white mdlarge:max-h-fit mdlarge:flex border rounded-xl shadow-[1px_1px_5px_1px_rgba(0,0,0,.1)] border-[#DEDEDE]  flex-col scroll-hidden-lg flex-1 ${showMenuOnMobile ? 'flex' : 'hidden' }`}>
                    {sidebarData
                        ?.map(({ navigate, id, text, icon }) => {
                            return (
                                <SidebarOptions
                                    key={id}
                                    text={text}
                                    navigate={navigate}
                                    setShowMenuOnMobile={setShowMenuOnMobile}
                                >
                                    {icon != "" ? icon : <Side.Stats />}
                                </SidebarOptions>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SideBar