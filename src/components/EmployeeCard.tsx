interface EmployeeCardProps {
  nombre: string;
  correo: string;
  ciudad: string;
}

export function EmployeeCard({ nombre, correo, ciudad }: EmployeeCardProps) {
  return (
    <div className="card">
      <h3>{nombre}</h3>
      <p>Correo: {correo}</p>
      <p>Ciudad: {ciudad}</p>
    </div>
  );
}
