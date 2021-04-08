import { browser, by, element, ElementFinder, $ } from "protractor";

export class HeaderPage {
  private botonConsultar = element(by.id("consultarIncrementosNav"));
  private botonRegistrar = element(by.id("registrarIncrementoNav"));

  obtenerBotonConsultarIncremento(): ElementFinder {
    return $('#consultarIncrementosNav');
  }

  obtenerBotonRegistrarIncremento(): ElementFinder {
    return $('#registrarIncrementoNav');
  }

  async clickBotonNavBarConsultarIncrementos() {
    await this.obtenerBotonConsultarIncremento().click();
  }

  async clickBotonNavBarRegistrarIncremento() {
    await this. obtenerBotonRegistrarIncremento().click();
  }
  
  navigateTo(urlIncremento = 'incrementos'): Promise<any> {
    return browser.get(`${browser.baseUrl}${urlIncremento}`) as Promise<any>;
  }
}
