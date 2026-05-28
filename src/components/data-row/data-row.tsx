import { formatarPreco } from "@/utils/formatacao";

type dados = {
  dataAlteracao: string,
  nomeAnterior: string,
  precoAnterior: number
}

const DataRow = ({dataAlteracao,nomeAnterior,precoAnterior} : dados) => {
  return (
    <tr>
      <td>{dataAlteracao}</td>
      <td>{nomeAnterior}</td>
      <td>{formatarPreco(precoAnterior)}</td>
    </tr>
  )
}

export default DataRow;