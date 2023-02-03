import { useEffect, useState } from "react";
import { ListeCategory } from "../components/Categories/ListeCategory";
import { getData } from "../utils/fetch";

function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        getData(setCategories, "https://api-production-6a5a.up.railway.app/category");
    }, []);

    return (
        <>
            <div className="site-section">
                <div className="container">
                    <h1 className="h1 mb-3 text-black">Categorie</h1>
                    <div className="row">
                        <ListeCategory liste={categories} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Categories;