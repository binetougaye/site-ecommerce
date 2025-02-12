import Modals from "./Modals";
import FormProduit from "./FormProduit";
import Table from "./Table";

export default function Produit(){
    const nameButton = "Ajouer un Produit"
    const tr = ["name" , "description" , "Price" , "Image"]
    
    return(<div>
        <Modals  nameButton={nameButton}>
          <FormProduit />
        </Modals>
        <Table tr={tr}/>
     </div>
    )
}
