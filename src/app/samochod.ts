export class Samochod {

  public marka: string;
  public model: string;
  public rok?: number;

  constructor(marka: string, model: string, rok?: number) {
    this.marka = marka;
    this.model = model;
    this.rok = rok;
};

  public properties(): string {
    return ("Marka: " + this.marka + ", Model: " + this.model + ", Rok: " + this.rok + " r.");
  };

}
