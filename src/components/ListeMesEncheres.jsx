import { useEffect, useState } from "react";
import { Auction } from "../components/Auction/Auction";

function ListeMesEncheres() {
    const clientId = 1;
    const [encheres, setEncheres] = useState([]);

    useEffect(()=>{
        fetch("https://api-production-6a5a.up.railway.app/client/"+clientId+"/auction")
        .then((encheres)=>encheres.json())
        .then((liste)=>setEncheres(liste.data))
    }, []);
    
    console.log(encheres)

    return(
        <div className="site-section">
            <div className="container">
                <div className="row col-md-12">
                <h1>{encheres[0]?.client?.firstname} {encheres[0]?.client?.lastName}</h1>
                    <div className="d-flex mt-3" >
                        {encheres.map((enchere)=> <Auction key={enchere.id} data={enchere} />)}
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default ListeMesEncheres;