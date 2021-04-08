import { by, element, ElementFinder, $, browser, ProtractorExpectedConditions, ExpectedConditions } from "protractor";

export class FormularioRegistroIncremento {
  
  until: ProtractorExpectedConditions;

  constructor() {
      this.until = ExpectedConditions;
  }

  
  obtenerBotonGuardar(): ElementFinder {
    return $('#guardar');
  }

  obtenerInputFechaInicio():ElementFinder {
    return $('#fechaInicio');
  }

  obtenerInputFechaFin():ElementFinder {
    return $('#fechaFin');
  }

  obtenerInputMontoInicial():ElementFinder {
    return $('#montoInicial');
  }

    obtenerMensajeToast(): ElementFinder {
      return element(by.className('toast-message'));
    }


  async clickInputFechaInicio() {
    await this.obtenerInputFechaInicio().click();
  }

  async clickInputFechaFin() {
    await this.obtenerInputFechaFin().click();
  }
  async clickInputMontoInicial() {
    await this.obtenerInputMontoInicial().click();
  }
  
  async setInputFechaInicio(fechaInicio: string) {
    await this.obtenerInputFechaInicio().clear();
    await this.obtenerInputFechaInicio().sendKeys(fechaInicio);
  }
  async setInputFechaFin(fechaFin: string) {
    await this.obtenerInputFechaFin().clear();
    await this.obtenerInputFechaFin().sendKeys(fechaFin);
  }
  async setInputMontoInicial(montoInicial: number) {
    await this.obtenerInputMontoInicial().sendKeys(montoInicial);
  }
 
  async limpiarInputFechaInicio() {
    await this.obtenerInputFechaInicio().clear();
  }

  async limpiarInputFechaFin() {
    await this.obtenerInputFechaFin().clear();
  }

  async limpiarInputMontoInicial() {
    await this.obtenerInputMontoInicial().clear();
  }
 
  async clickBotonGuardarIncremento() {
    await this.obtenerBotonGuardar().click();
  }

  async obtenerTextFromToast(): Promise<string> {
    return await this.obtenerMensajeToast().getText();
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

}
