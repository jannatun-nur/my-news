import { useEffect, useState } from "react";
import Card from "./Cards";


const Category = () => {

    const [ category , setCategory ] = useState([])

    useEffect( ()=>{
        fetch('latest.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])

    return (
        <div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
                {
                    category.map(categorys =><Card  key={categorys} categorys={categorys}> </Card>)
                }
             </div>
        </div>
    );
};

export default Category;