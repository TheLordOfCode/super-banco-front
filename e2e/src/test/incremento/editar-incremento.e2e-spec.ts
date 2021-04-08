import { browser } from "protractor";
import { HeaderPage } from "../../page/header/header.po";
import { FormularioRegistroIncremento } from "../../page/incremento/formulario-registro-incremento.po";
import { ListarIncrementos } from "../../page/incremento/listar-incrementos.po";

describe("Editar Incremento", () => {
  let header: HeaderPage;
  let editarIncremento: FormularioRegistroIncremento;
  let listarIncrementos: ListarIncrementos;

  const FECHA_INICIO = '05/10/2020';
  const FECHA_FIN = '05/20/2020';
  const MONTO_INICIAL = 77000;
  const EL_INCREMENTO_HA_SIDO_ACTUALIZADO = "Incremento Actualizado, el monto final es: 182514.689328125";

  beforeEach(() => {
    header = new HeaderPage();
    editarIncremento = new FormularioRegistroIncremento();
    listarIncrementos = new ListarIncrementos();
  });

  it("Deberia editar Incremento", async () => {
  //arrange
  await header.clickBotonNavBarConsultarIncrementos();
  await listarIncrementos.clickBotonEditarIncrementoConidEspecifico();
  await editarIncremento.clickInputFechaInicio();
  await editarIncremento.limpiarInputFechaInicio();
  await editarIncremento.setInputFechaInicio(FECHA_INICIO);
  await editarIncremento.clickInputFechaFin();
  await editarIncremento.limpiarInputFechaFin();
  await editarIncremento.setInputFechaFin(FECHA_FIN);
  await editarIncremento.clickInputMontoInicial();
  await editarIncremento.limpiarInputMontoInicial();
  await editarIncremento.setInputMontoInicial(MONTO_INICIAL);
    //act
  await editarIncremento.clickBotonGuardarIncremento();
  await editarIncremento.esperarQueToastAparezca();

    //assert
  const alerta = await editarIncremento.obtenerTextFromToast();

  expect(alerta).toEqual(EL_INCREMENTO_HA_SIDO_ACTUALIZADO);
   
  });

 
});
