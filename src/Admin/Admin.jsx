import React from "react";
import Modals from "./Modals";
import FormAdmin from "./FormAdmin";
import Table from "./Table";

export default function Admin(){
    const nameButton = "Ajouter un Admin"
    const tr = ["email" , "password"]
    
    return(
        <div>
            <Modals  nameButton={nameButton}>
                <FormAdmin/>
            </Modals>
            <Table tr={tr}/>
        </div>
    )
}