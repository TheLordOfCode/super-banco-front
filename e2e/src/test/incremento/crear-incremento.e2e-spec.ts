import { HeaderPage } from "../../page/header/header.po";
import { FormularioRegistroIncremento } from "../../page/incremento/formulario-registro-incremento.po";
import { ListarIncrementos } from "../../page/incremento/listar-incrementos.po";

describe("Crear Incremento", () => {
  let header: HeaderPage;
  let listarIncrementos: ListarIncrementos;
  let crearIncremento: FormularioRegistroIncremento;
  const FECHA_INICIO = '05/10/2020';
  const FECHA_FIN = '05/15/2020';
  const MONTO_INICIAL = 60000;
  const EL_INCREMENTO_HA_SIDO_CREADO = "Incremento guardado, el monto final es: 129457.50000000001";


  beforeEach(() => {

    header = new HeaderPage();
    crearIncremento = new FormularioRegistroIncremento();
    listarIncrementos = new ListarIncrementos();
  });

  it("Deberia crear un calculo de Incremento", async () => {
  //arrange
    await header.navigateTo();
    await header.clickBotonNavBarConsultarIncrementos();
    await listarIncrementos.clickBotonCrearIncremento();
    await crearIncremento.clickInputFechaInicio();
    await crearIncremento.setInputFechaInicio(FECHA_INICIO);
   
    await crearIncremento.clickInputFechaFin();
    await crearIncremento.setInputFechaFin(FECHA_FIN);
    
    await crearIncremento.clickInputMontoInicial();
    await crearIncremento.setInputMontoInicial(MONTO_INICIAL);
  
    //act
    await crearIncremento.clickBotonGuardarIncremento();
    await crearIncremento.esperarQueToastAparezca();

    //assert
    const mensaje = await crearIncremento.obtenerTextFromToast();
    expect(mensaje).toEqual(EL_INCREMENTO_HA_SIDO_CREADO);
  });

});
