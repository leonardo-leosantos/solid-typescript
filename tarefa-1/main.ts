import Colaborador from "./Colaborador";
import Relatorio from "./Relatorio";
import Salario from "./Salario";
import GestaoColaborador from "./GestaoColaborador";
import { Cargos } from "./enum/cargos";
import Pagamento from "./Pagamento";

const gestaoColaborador = new GestaoColaborador();
const salario = new Salario();
const relatorio = new Relatorio(gestaoColaborador.colaboradores, salario);
const pagamento = new Pagamento(salario);

const colaborador1 = new Colaborador("José", Cargos.Estagiario);
const colaborador2 = new Colaborador("Maria", Cargos.Junior);
const colaborador3 = new Colaborador("João", Cargos.Pleno);

gestaoColaborador.contratarColaborador(colaborador1);
gestaoColaborador.contratarColaborador(colaborador2);
gestaoColaborador.contratarColaborador(colaborador3);

console.log(relatorio.gerarJSON());

console.log(colaborador1);
pagamento.pagaColaborador(colaborador1);
console.log(colaborador1);