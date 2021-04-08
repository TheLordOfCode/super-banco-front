import { HeaderPage } from "../../page/header/header.po";
import { ListarIncrementos } from "../../page/incremento/listar-incrementos.po";

describe("Listar incrementos", () => {
  let header: HeaderPage;
  let listarIncrementos: ListarIncrementos;

  beforeEach(() => {
    header = new HeaderPage();
    listarIncrementos = new ListarIncrementos();
  });

  it("Deberia listar incrementos", async () => {
    //arrange
    await header.navigateTo();
    //act
    await header.clickBotonNavBarConsultarIncrementos();
    //assert
    const total = await listarIncrementos.contarIncrementos();
    expect(total).toBeGreaterThan(0);
  
  });

});
