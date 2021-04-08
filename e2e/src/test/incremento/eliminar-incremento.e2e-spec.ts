import { HeaderPage } from "../../page/header/header.po";
import { ListarIncrementos } from "../../page/incremento/listar-incrementos.po";

describe("Eliminar Incremento", () => {
  let header: HeaderPage;
  
  let listarIncrementos: ListarIncrementos;
  const EL_INCREMENTO_HA_SIDO_ELIMINADO = "El calculo de incremento ha sido eliminado";

  beforeEach(() => {
    header = new HeaderPage();
    listarIncrementos = new ListarIncrementos();
  });

  it("Deberia eliminar un incremento", async () => {
    //arrange
    await header.navigateTo();
    //act
    await header.clickBotonNavBarConsultarIncrementos();
    await listarIncrementos.clickBotonEliminarIncremento();
    await listarIncrementos.esperarQueToastAparezca();
    //assert
    
    const alerta = await listarIncrementos.obtenerTextFromToast();
    expect(alerta).toEqual(EL_INCREMENTO_HA_SIDO_ELIMINADO);
    
  });
});
