import { Medico } from "./medico";
import { Paciente } from "../types/paciente";
import { statusConsulta } from "../types/statusConsulta";
export interface Consulta {
    id: number;
    medico: Medico;
    paciente: Paciente;
    data: Date;
    valor: number;
    status: statusConsulta;
    observacoes?: string;
};