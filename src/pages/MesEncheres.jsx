import { useEffect, useState } from "react";
import { ListProducts } from "../components/Products/ListProducts";
import { useCheckConnected } from "../hooks/UseCheckConnected";
import { getData } from "../utils/fetch";
import { getProfil } from "../utils/util";

function MesEncheres() {
    useCheckConnected();
    const profil = getProfil();
    const clientId = profil?.client.id;
    const [encheres, setEncheres] = useState([])
    const [balance, setBalance] = useState();
    

    useEffect(()=>{
        getData(setEncheres, "https://api-production-6a5a.up.railway.app/client/"+clientId+"/auction-state");
        getData(setBalance, "https://api-production-6a5a.up.railway.app/client/"+clientId+"/balance");
    }, []);
    
    console.log(encheres)

    return (
        <>
            <div className="site-section">
                <div className="container">
                <h1 className="h1 mb-3 text-black">Votre profil</h1>
                <h5 className="h5 mb-3 text-black">Nom: {profil?.client.firstName}</h5>
                <h5 className="h5 mb-3 text-black">Prenom: {profil?.client.lastName}</h5>
                <h5 className="h5 mb-3 text-black">Votre solde actuel: {balance?.amount.toLocaleString(undefined, {maximumFractionDigits:2})} Ariary</h5>
                <h1 className="h1 mb-3 text-black">Mes enchères</h1>
                    <div className="row">
                        <ListProducts liste={encheres} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default MesEncheres;