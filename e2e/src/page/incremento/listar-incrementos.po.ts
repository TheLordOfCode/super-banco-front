import { by, element, ElementFinder, $, browser, ProtractorExpectedConditions, ExpectedConditions } from "protractor";

export class ListarIncrementos {
  until: ProtractorExpectedConditions;

  constructor() {
      this.until = ExpectedConditions;
  }
  private tablaIncrementos = element.all(by.className("even pointer"));
  private obtenerLinkEliminarIncremento = element.all(by.className("btn btn-outline-danger"));

  obtenerLinkCrearIncremento():ElementFinder {
    return $('#linkCrearIncremento');
  }

  obtenerLinkEditarIncremento():ElementFinder {
    return $('#linkEditarIncremento');
  }

  obtenerMensajeToast(): ElementFinder {
    return element(by.className('toast-message'));
  }

  async contarIncrementos() {
    return this.tablaIncrementos.count();
  }

  
  async clickBotonCrearIncremento() {
    await this.obtenerLinkCrearIncremento().click();
  }

  async clickBotonEditarIncrementoConidEspecifico() {
    await this.obtenerLinkEditarIncremento().click();
  }

  async clickBotonEliminarIncremento() {
    await this.obtenerLinkEliminarIncremento.last().click();
  }

  async esperarQueToastAparezca(): Promise<void> {
    return await this.esperarElementoAparezca(this.obtenerMensajeToast());
}

async esperarElementoAparezca(element: ElementFinder): Promise<void> {
  const id = await element.getId();
  return await browser.wait(
      this.until.presenceOf(element),
      5000,
      `El elemento ${id} esta tardando mucho en aparecer en el DOM`
  );
}


  async obtenerTextFromToast(): Promise<string> {
    return await this.obtenerMensajeToast().getText();
  }
}
