const STATUS = ['Pendiente', 'Leyendo', 'Terminado']

export default function ReadingList({ items, onUpdate, onRemove }) {
    if (!items.length) {
        return <div className="card">Tu lista está vacía. Agrega libros desde los resultados de búsqueda.</div>
    }

    return (
        <div className="grid grid-cols-2">
            {items.map((item) => (
                <div className="card" key={item.id}>
                    <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                    <p className="small muted" style={{ marginTop: '-.25rem' }}>de {item.author} {item.year ? `· ${item.year}` : ''}</p>


                    <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', marginTop: '.5rem' }}>
                        <label className="small">Estado</label>
                        <select
                            value={item.status}
                            onChange={(e) => onUpdate(item.id, { status: e.target.value })}
                            aria-label={`Estado de lectura para ${item.title}`}
                        >
                            {STATUS.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <span className="badge">{item.status}</span>
                    </div>


                    <div style={{ marginTop: '.75rem' }}>
                        <label className="small" htmlFor={`notes-${item.id}`}>Notas personales</label>
                        <textarea
                            id={`notes-${item.id}`}
                            value={item.notes}
                            onChange={(e) => onUpdate(item.id, { notes: e.target.value })}
                            placeholder="Escribe tus notas aquí…"
                        />
                    </div>


                    <div style={{ display: 'flex', gap: '.5rem', marginTop: '.75rem' }}>
                        <button className="btn btn-danger" onClick={() => onRemove(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
