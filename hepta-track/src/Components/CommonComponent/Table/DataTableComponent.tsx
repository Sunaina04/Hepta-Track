import React from 'react'
import { DataTableProps } from '../../../Type/Components/TableTypes'
import { Column } from 'primereact/column'
import DataTableButton from './DataTableButton'
import { DataTable } from 'primereact/datatable'

const DataTableComponent: React.FC<DataTableProps> = ({
  data = [],
  scrollable = true,
  columns,
  tableStyle = undefined,
  header,
  actionButtons,
  onRowClick,
  style,
  emptyMessage = ' ',
  selectionMode,
  onSelectionChange,
  selection,
  dataKey,
}) => {
  const buttonBody = (rowData: any) => {
    return (
      <div className="flex gap-4">
        {actionButtons?.buttons?.map((b, index) => (
          <DataTableButton
            {...b}
            key={index}
            data-testid="custom-element"
            onClick={() => {
              b.onClick && b.onClick(rowData)
            }}
          />
        ))}
      </div>
    )
  }

  const getRowClassName = (rowData: any) => {
    return {
      'p-highlight': selection && selection.id === rowData.id,
    }
  }

  return (
    <div>
      <DataTable
        value={data}
        selectionMode={selectionMode}
        selection={selection}
        onSelectionChange={onSelectionChange}
        metaKeySelection={true}
        dataKey={dataKey}
        tableStyle={tableStyle}
        scrollable={scrollable}
        header={header}
        emptyMessage={emptyMessage}
        onRowClick={onRowClick}
        rowClassName={getRowClassName}>
        {columns?.map((d: any) => (
          <Column
            key={d.id}
            headerStyle={d.style}
            field={d.id}
            header={<span onClick={d?.onHeaderClick}>{d.label}</span>}
            body={d.body}
            style={style}
            sortable={d.sortable}
          />
        ))}
        {actionButtons && (
          <Column
            header={actionButtons.header}
            body={buttonBody}
            style={actionButtons.style}
            headerStyle={actionButtons.headerStyle}
          />
        )}
      </DataTable>
    </div>
  )
}

export default DataTableComponent