import {api} from "./api";

interface ProdutoFormulario{
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[]
}

type ProdutoListagem = {
    nome: string,
    descricao: string,
    preco: string,
    imagem: File | null,
    categoriasId: number[],
    imagemUrl: string,
    statusProduto: boolean

}

export async function cadastrarProduto(dados: ProdutoFormulario){
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);
        if(dados.imagem){
            formData.append("imagem", dados.imagem);
        }
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.post("Produto", formData);

    }catch(error: any){
        throw new Error(error.response.data);
    }
}

export async function listarProduto (){
    try{
        const response = await api.get("Produto");
        
        const produtosAtivos = response.data.filter(
            (produto: ProdutoListagem) => produto.statusProduto === true
        );
        const produtos = produtosAtivos.map((produto : ProdutoListagem) => ({
            ...produto,
            imagemUrl: `${api.defaults.baseURL}${produto.imagemUrl}`
        }))

        return produtos; 

    }catch(error: any){
        throw new Error(error.response.data);
    }

}

export async function listarPorId(id: number){
    try{
        const response = await api.get("Produto/" + id);

        const produtos ={ 
        ...response.data,
            imagemUrl: `${api.defaults.baseURL}${response.data.imagemUrl}`
        };

        return produtos;
    }catch(error: any) {
        throw new Error(error.response.data)
    }
}


export async function excluirProduto(produtoId: number) {
    try{
        await api.delete("Produto/" + produtoId)
    }catch(error: any){
        throw new Error(error.response.data)
    }
} 

export async function editarProduto(produtoId:number, dados: ProdutoFormulario) {
    try{
        const formData = new FormData();

        formData.append("nome", dados.nome);
        formData.append("preco", dados.preco);
        formData.append("descricao", dados.descricao);
        if(dados.imagem){
            formData.append("imagem", dados.imagem);
        }
        dados.categoriasId.forEach((id) => {
            formData.append("categoriaIds", id.toString());
        })

        await api.put("Produto/" + produtoId, formData) 

    }catch(error: any){
        throw new Error(error.response.data)
    }

    
}