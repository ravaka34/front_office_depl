import { Card } from "./Card";

export const ListeCategory = (props)=>{
    const categories = props.liste;

    return(
        <>
            {categories?.map((category)=> {
                return (
                    <div className="col-md-4 mb-3">
                        <Card key={category.id} data={category} />
                    </div>
                )
            })}
        </>
    )
}