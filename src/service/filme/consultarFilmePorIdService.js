import { consultarFilmesPorId } from "../../repository/filmeRepository.js";
import { validarFilmeUnico } from "../../validation/filme/filmeValidation.js";

export default async function consultarFilmePorIdService(id) {
  let registros = await consultarFilmesPorId(id);
  validarFilmeUnico(registros);
  let filme = registros[0];
  return filme;
}