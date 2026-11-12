import '../styles/Sidebar.css';

interface SidebarProps {
  onSelectTab: (tab: string) => void;
}

export function Sidebar({ onSelectTab }: SidebarProps) {
  return (
    <aside className="sidebar">
      <button onClick={() => onSelectTab('Personal')}>Personal</button>
      <button onClick={() => onSelectTab('Inventario')}>Inventario</button>
      <button onClick={() => onSelectTab('Incidencias')}>Incidencias</button>
    </aside>
  );
}
