

function CheckBox({h1, cl1, cl2, cl3, cnt1, cnt2,cnt3}:{h1:string, cl1:string, cl2:string, cl3:string, cnt1:number, cnt2:number, cnt3:number}) {
    return (
        <>
            <h1 className='font-semibold text-sm'>{h1}</h1>
            <div>
                <input type="checkbox" name={cl1} id={cl1} />
                <label className='text-gray-500 pl-4'  htmlFor={cl1}>{cl1}({cnt1})</label>
                <br/>
                <input type="checkbox" name={cl2} id={cl2} />
                <label className='text-gray-500 pl-4'  htmlFor={cl2}>{cl2}({cnt2})</label>
                <br/>
                <input type="checkbox" name={cl3} id={cl3} />
                <label className='text-gray-500 pl-4'  htmlFor={cl3}>{cl3}({cnt3})</label>
            </div>
        </>
    )
}

export default CheckBox
