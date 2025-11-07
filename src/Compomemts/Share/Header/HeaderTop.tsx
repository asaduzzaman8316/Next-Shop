import { NavLink } from "react-router";


function HeaderTop() {
    const data = [
        {
            name: "About Us",
            nav: '/about'
        },
        {
            name: "My Account",
            nav: '/my-account'
        },
        {
            name: "Wishilist",
            nav: '/wishilist'
        },
        {
            name: "Order Tracking",
            nav: '/order-tracking'
        }

    ];

    return (
        <div className="border-b border-gray-300">
            <div className="flex justify-between items-center py-1 2xl:container lg:w-[80%] mx-auto">
                <div className="space-x-3">
                    {
                        data.map((item, idx) => (
                            <NavLink
                                className={`${idx === 0 ? 'border-none' : 'border-l'} pl-3 border-gray-300 text-gray-600 text-sm`}
                                key={idx} to={item.nav}>{item.name}</NavLink>
                        ))
                    }
                </div>
                <div>
                    <p className="text-sm text-gray-600">Supper Value Deals - Save more with coupons
                    </p>
                </div>
                <div className="text-sm flex items-center gap-5  text-gray-600">
                    <p className="border-r border-r-gray-300 pr-3">Need help! Call Us: <span className="text-green-500 font-semibold">+880 160839202</span></p>
                    <p className="border-r border-r-gray-300 pr-3">English <i className="fas fa-angle-down"></i></p>
                    <p>USD <i className="fas fa-angle-down"></i></p>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
