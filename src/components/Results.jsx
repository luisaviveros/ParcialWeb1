import BookCard from "./bookcard"

export default function ResultsList({ results, onAdd, inListIds, status }) {
if (status.loading) {
return <div className="card">Cargando resultados…</div>
}
if (status.error) {
return <div className="card"> Error: {status.error}</div>
}
if (!results || results.length === 0) {
return <div className="card">No hay resultados. Intenta con otro término.</div>
}
return (
<div className="grid grid-cols-3">
{results.map((doc) => (
<BookCard
key={doc.key}
book={doc}
onAdd={onAdd}
inList={inListIds.has(doc.key)}
/>
))}
</div>
)
}
