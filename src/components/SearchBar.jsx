
import { useState } from 'react'


export default function SearchBar({ onSearch }) {
const [q, setQ] = useState('')


function submit(e) {
e.preventDefault()
const query = q.trim()
if (query) onSearch(query)
}


return (
<form onSubmit={submit} className="card" role="search" aria-label="Buscar libros">
<div style={{ display: 'flex', gap: '.5rem' }}>
<input
className="input"
value={q}
onChange={(e) => setQ(e.target.value)}
placeholder="Busca por título, autor, ISBN..."
aria-label="Término de búsqueda"
/>
<button className="btn btn-primary" type="submit">Buscar</button>
</div>
<p className="small muted" style={{ marginTop: '.5rem' }}>
Fuente: Open Library (máx. 10 resultados por búsqueda)
</p>
</form>
)
}
