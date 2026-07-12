import Tarjeta from './components/Tarjeta.jsx'

const personas = [
  {
    nombre: 'Ana Ramírez',
    profesion: 'Desarrolladora Frontend',
    imagen: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    descripcion:
      'Apasionada por crear interfaces accesibles y experiencias de usuario memorables usando React y CSS moderno.',
  },
  {
    nombre: 'Carlos Medina',
    profesion: 'Diseñador UX/UI',
    imagen: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    descripcion:
      'Combina diseño centrado en el usuario con prototipado rápido. Cree que un buen diseño no se nota.',
  },
  {
    nombre: 'Lucía Torres',
    profesion: 'Desarrolladora Backend',
    imagen: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucia',
    descripcion:
      'Especialista en Node.js y bases de datos. Le encanta optimizar consultas y diseñar APIs limpias.',
  },
]

function App() {
  return (
    <main className="pagina">
      <h1 className="pagina__titulo">Tarjetas de presentación</h1>
      <section className="grilla">
        {personas.map((persona) => (
          <Tarjeta
            key={persona.nombre}
            nombre={persona.nombre}
            profesion={persona.profesion}
            imagen={persona.imagen}
            descripcion={persona.descripcion}
          />
        ))}
      </section>
    </main>
  )
}

export default App