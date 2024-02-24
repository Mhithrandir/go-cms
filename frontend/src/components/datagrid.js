function DataGrid({table}) {
    if(table === undefined) return <span>No data</span>

    return (<table className="table table-bordered align-middle table-hover table-striped">
        <thead className="table-primary">
            <tr>
                {table.Columns && table.Columns.map((c, index) => { return <th key={c.Name + "." + index} scope="col">{c.Label}</th> })}
                {table.ActionButtons && <th scope="col"></th> }
            </tr>
        </thead>
        <tbody className="table-group-divider">
            {table.Rows && table.Rows.map((r, index) => {
                return <tr key={r.id + "." + index} className={r.className ? r.className : ''} onClick={() => table.selectedRow !== undefined ? table.selectedRow(r) : ''}>
                    {table.Columns.map((c) => {
                        return c.Template ? c.Template(r[c.Name], r.id + "." + c.Name) : <td key={r.id + "." + c.Name}>{r[c.Name]}</td>
                    })}
                    {table.ActionButtons && <td>
                        <div className="btn-group" role="group" aria-label="Action buttons">
                            {table.ActionButtons.map((b) => {
                                return <button
                                    key={b.Label}
                                    style={{ minWidth: '60px', whiteSpace: 'nowrap' }}
                                    type="button"
                                    className={b.className}
                                    onClick={ () => b.onClick !== undefined ? b.onClick(r) : false }>
                                        {b.Label}
                                </button> })}
                        </div>
                    </td>}
                </tr>
            })}
        </tbody>
    </table>);
}

export default DataGrid;