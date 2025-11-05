
import CategoryCards from './CategoryCards'

function Category() {
    return (
        <>
            <div className='border-gray-200 p-4 shadow-xl border rounded-md '>
                <h1 className='text-2xl peer relative font-[quicksand] font-bold text-gray-700 border-b border-b-gray-300 pb-4'>Category</h1>
                <div className='peer-absolute w-[25%] bottom-0.5  h-0.5 bg-green-500'></div>

                <div className='pt-5 space-y-4'>
                    <CategoryCards title='Millks & Dairies' count={30} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-1.svg' />
                    <CategoryCards title='Clothing' count={35} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-2.svg' />
                    <CategoryCards title='Pet Foods' count={60} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-3.svg' />
                    <CategoryCards title='Baking meterial' count={98} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-4.svg' />
                    <CategoryCards title='Fresh Fruit' count={50} src='https://nest-frontend-v6.vercel.app/assets/imgs/theme/icons/category-5.svg' />
                </div>
            </div>
        </>
    )
}

export default Category
