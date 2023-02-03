import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Filtre from "../components/Filtre";
import { ListProducts } from "../components/Products/ListProducts";
import { getData } from "../utils/fetch";

function ListeEnchere() {
    const location = useLocation();
    const categoryId = location.state.id;
    const [category, setCategory] = useState([]);
    const [encheres, setEncheres] = useState([])

    useEffect(()=>{
        getData(setEncheres, "https://api-production-6a5a.up.railway.app/auction-state/category/"+categoryId);
        getData(setCategory, "https://api-production-6a5a.up.railway.app/category/"+categoryId);
    }, []);
    
    console.log(encheres)

    return (
        <>
            <div className="site-section">
                <div className="container">
                    <h1 className="h1 mb-3 text-black">{category?.name}</h1>
                    <div class="row">
                        <Filtre setData = {setEncheres} category = {categoryId} />
                    </div>
                    <br />
                    <div className="row">
                        <ListProducts liste={encheres} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListeEnchere;