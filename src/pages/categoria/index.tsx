import React, { useState } from "react";
import { cadastrarCategoria } from "../api/categoriaService";
import { toast } from "react-toastify";
import { error } from "console";


const[categoria, setCategoria] = useState<string>("");

const notificacao = (msg: any) => toast.success(msg);
const erro = (msg: string) => toast.error(msg);

async function cadastrar(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    try{
       await cadastrarCategoria(categoria);
       notificacao("Cadastro realizado com sucesso!");
    }
    catch(error: any){
        erro(error.message);
    }
}

 


<form action="" onSubmit={cadastrar}>
<input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
</form>