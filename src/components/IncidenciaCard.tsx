interface IncidenciaCardProps {
  titulo: string;
  completada: boolean;
}

export function IncidenciaCard({ titulo, completada }: IncidenciaCardProps) {
  return (
    <div className={`card ${completada ? 'resuelta' : 'pendiente'}`}>
      <h4>{titulo}</h4>

      <p>Estado: {completada ? 'Resuelta' : 'Pendiente'}</p>
    </div>
  );
}
