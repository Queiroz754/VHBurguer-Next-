import {api} from "./api";

export async function listarPorIdProduto(produtoId: number){
    try{
        const response = await api.get("LogProduto/produto/" + produtoId);
        return response.data;
    }catch(error: any) {
        throw new Error(error.response.data)
    }

}