import { Cargos } from "./enum/cargos";

export default class Salario {

    protected salarioBase: number;

    constructor(salarioBase: number = 1000) {
        this.salarioBase = salarioBase;
    }

    calcular(cargo: Cargos) {
        switch (cargo){
            case Cargos.Estagiario:
                return this.salarioBase * 1.2;
            case Cargos.Junior:
                return this.salarioBase * 3;
            case Cargos.Pleno:
                return this.salarioBase * 5;
            case Cargos.Senior:
                return this.salarioBase * 7;
            default:
                return 0;
        }
    }
}