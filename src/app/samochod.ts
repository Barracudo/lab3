export class Samochod {

  public marka: String;
  public model: String;
  public rok?: number;

  constructor(marka, model, rok){
    marka = this.marka;
    model = this.model;
    rok = this.rok;

}

  public properties(){
    return ("Marka : " + this.marka + " ,Model : " + this.model + " .Rok : " + this.rok);
  }

 }
