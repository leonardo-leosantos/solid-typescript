import Colaborador from "./Colaborador";
import Salario from "./Salario";

export default class Pagamento {

    constructor(private servicoSalario: Salario) { }

    pagaColaborador(colaborador: Colaborador) {
        const salarioColaborador = this.servicoSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    }
}