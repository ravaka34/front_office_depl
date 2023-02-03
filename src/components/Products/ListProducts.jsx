import { CustomCard } from "../card/CustomCard";

export const ListProducts = (props)=>{
    const produits = props.liste;
    return(
        <>
            {produits?.map((produit)=> {
                return (
                    <div className="col-md-4 mb-3">
                        <CustomCard key={produit.id} data={produit} />
                    </div>
                )
            })}
        </>
    )
}