

function Heading({ title, size }: { title: string, size: string }) {
    return (
        <div>
            <h1 className={`about-hero__title ${size} font-semibold`}>{title}</h1>
        </div>
    )
}

export default Heading
