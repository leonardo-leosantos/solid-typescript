import Colaborador from "./Colaborador"
import Salario from "./Salario"

export default class Relatio {
    
    constructor(
        private colaboradores: Colaborador[],
        private salario: Salario
    ){}
    
    gerarJSON() {
        let relatorio = this.colaboradores.map((colaborador) => {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: this.salario.calcular(colaborador.cargo),
            })
        })
        return JSON.stringify(relatorio)
    };
}