interface InventarioCardProps {
  titulo: string;
  precio: number;
  imagen: string;
}

export function InventarioCard({ titulo, precio, imagen }: InventarioCardProps) {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} className="card-img" />
      <h4>{titulo}</h4>
      <p>Precio: ${precio}</p>

      {precio > 50 && <span className="etiqueta-alto-valor">Activo de Alto Valor</span>}
    </div>
  );
}
