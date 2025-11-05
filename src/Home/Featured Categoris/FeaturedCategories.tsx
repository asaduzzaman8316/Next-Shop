import CategoriesCard from "./CategoriesCard"
import FeaturedCategoriesTop from "./FeaturedCategoriesTop"

function FeaturedCategories() {
    return (
        <div className="2xl:container mx-auto lg:w-[80%] py-16">
            <FeaturedCategoriesTop />
            <CategoriesCard />


        </div>
    )
}

export default FeaturedCategories
