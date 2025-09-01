export default function BookCard({ book, onAdd, inList }) {
const title = book.title || 'Sin título'
const author = (book.author_name && book.author_name[0]) || 'Autor desconocido'
const year = book.first_publish_year ? String(book.first_publish_year) : '—'


return (
<div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
<div>
<h3 style={{ margin: 0 }}>{title}</h3>
<p className="small" style={{ margin: 0 }}>de {author} {year !== '—' && <span className="badge" style={{ marginLeft: '.5rem' }}>Año: {year}</span>}</p>
</div>
<div style={{ display: 'flex', gap: '.5rem', marginTop: '.25rem' }}>
<button
className="btn btn-secondary"
onClick={() => onAdd(book)}
disabled={inList}
aria-disabled={inList}
>{inList ? 'Ya en la lista' : 'Agregar a Lista'}</button>
</div>
</div>
)
}