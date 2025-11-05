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
        <div >
            <div className="2xl:container lg:w-[80%] pb-16 mx-auto mt-16 grid grid-cols-6 gap-3">
                <Left />
                <Menu title="Company" props={company} />
                <Menu title="Account" props={Account} />
                <Menu title="Corporate" props={Corporate} />
                <Menu title="Popular" props={Popular} />
                <Right />
            </div>
        </div>
    )
}

export default Footer
