import { deletarFilme } from "../../repository/filmeRepository.js";

export default async function deletarFilmeService(id) {
  let linhasDeletadas = await deletarFilme(id);

  if(linhasDeletadas == 0) throw new Error("Nenhum filme foi deletado");  
}