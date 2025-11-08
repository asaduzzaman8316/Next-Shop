import Left from "./Left"
import Menu from "./Menu"
import Right from "./Right"


function Footer() {
    const company = [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Support Center",
        "Careers"
    ]
    const Account = [
        "Sign In",
        "View Cart",
        "My Wishlist",
        "Track My Order",
        "Help Ticket",
        "Shipping Details",
        "Compare products"
    ]
    const Corporate = [
        "Become a Vendor",
        "Affiliate Program",
        "Farm Business",
        "Farm Careers",
        "Our Suppliers",
        "Accessibility",
        "Promotions"
    ]
    const Popular = [
        "Milk & Flavoured Milk",
        "Butter and Margarine",
        "Eggs Substitutes",
        "Marmalades",
        "Sour Cream and Dips",
        "Tea & Kombucha",
        "Cheese"
    ]
    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 pb-12 mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    <div className="col-span-1">
                        <Left />
                    </div>

                    <div className="col-span-1">
                        <Menu title="Company" props={company} />
                    </div>

                    <div className="col-span-1">
                        <Menu title="Account" props={Account} />
                    </div>

                    <div className="col-span-1">
                        <Menu title="Corporate" props={Corporate} />
                    </div>

                    <div className="col-span-1">
                        <Menu title="Popular" props={Popular} />
                    </div>

                    <div className="col-span-1">
                        <Right />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
