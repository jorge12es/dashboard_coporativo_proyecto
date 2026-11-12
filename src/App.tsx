import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { EmployeeCard } from './components/EmployeeCard';
import { InventarioCard } from './components/InventarioCard';
import { IncidenciaCard } from './components/IncidenciaCard';
import './styles/App.css';

export function App() {
  const [seccion, setSeccion] = useState('Personal');

  const [datos, setDatos] = useState<any[]>([]);

  const [cargando, setCargando] = useState(false);

  // terminoBusqueda guarda lo que el usuario escribe en el campo de búsqueda.
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  // Esta función carga los datos correspondientes a la pestaña que recibe.
  const cargarDatos = async (tab: string) => {
    setSeccion(tab);
    setCargando(true);
    setTerminoBusqueda('');

    try {
      let url = '';
      if (tab === 'Personal') url = 'https://jsonplaceholder.typicode.com/users';
      if (tab === 'Inventario') url = 'https://fakestoreapi.com/products?limit=6';
      if (tab === 'Incidencias') url = 'https://jsonplaceholder.typicode.com/todos?_limit=8';

      const respuesta = await fetch(url);

      const json = await respuesta.json();

      setDatos(json);
    } catch (error) {

      console.error('Error al obtener datos', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatos('Personal');
  }, []);

  const empleadosFiltrados = datos.filter((emp) =>
    emp.name?.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  return (
    <div className="app-container">
      {/* Cabecera y barra lateral */}
      <Header />
      <div className="main-layout">

        <Sidebar onSelectTab={cargarDatos} />

        <main className="content">
          {/* El título h2 cambia según la pestaña seleccionada. */}
          <h2>{seccion}</h2>

          {/* Personal */}
          {seccion === 'Personal' && (
            <input
              type="text"
              placeholder="Buscar empleado por nombre..."
              value={terminoBusqueda}
              onChange={(e) => setTerminoBusqueda(e.target.value)}
              style={{ marginBottom: '15px', padding: '8px', width: '300px', display: 'block' }}
            />
          )}

          {/* Mensaje de espera en caso este cargando sea true*/}
          {cargando && <p>Cargando datos del servidor…</p>}

          {!cargando && (
            <div className={seccion === 'Inventario' ? 'inventario-grid' : 'lista-tarjetas'}>
              {/* Se reciben datos de la API */}
              {seccion === 'Personal' &&
                empleadosFiltrados.map((emp) => (
                  <EmployeeCard
                    key={emp.id}
                    nombre={emp.name}
                    correo={emp.email}
                    ciudad={emp.address?.city}
                  />
                ))}

              {/* Se usa map para recorrer datos. */}
              {seccion === 'Inventario' &&
                datos.map((item) => (
                  <InventarioCard
                    key={item.id}
                    titulo={item.title}
                    precio={item.price}
                    imagen={item.image}
                  />
                ))}

              {/* Aca tambien se usa map */}
              {seccion === 'Incidencias' &&
                datos.map((incidencia) => (
                  <IncidenciaCard
                    key={incidencia.id}
                    titulo={incidencia.title}
                    completada={incidencia.completed}
                  />
                ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
