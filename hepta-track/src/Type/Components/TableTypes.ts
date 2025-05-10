import { ColumnBodyOptions, ColumnHeaderOptions } from "primereact/column";
import { DataTableRowClickEvent, DataTableSelectionSingleChangeEvent, DataTableStateEvent } from "primereact/datatable";
import { PaginatorTemplate } from "primereact/paginator";
import { textColors } from "../../Components/Utils/Properties";
 
export type TableBodyType =
  | React.ReactNode
  | ((data?: any, options?: ColumnBodyOptions) => React.ReactNode);

export interface TableColumnProps {
  className?: string;
  id: string;
  label?: String;
  style?: React.CSSProperties | undefined;
  body?: TableBodyType;
}

export interface DataTableProps {
  data?: any[];
  rows?: number | undefined;
  first?: number | undefined;
  totalRecords?: number | undefined;
  paginator?: boolean;
  onPage?(event: DataTableStateEvent): void;
  paginatorTemplate?: PaginatorTemplate | undefined;
  scrollable?: boolean;
  columns?: TableColumnProps[];
  // columnsStyle?: React.CSSProperties | undefined;
  tableStyle?: React.CSSProperties | undefined;
  style?: React.CSSProperties | undefined;
  header?: any;
  actionButtons?: ActionButtonColumnProps;
  onRowClick?: (event: DataTableRowClickEvent) => void;
  rowStyle?: (rowData: any) => React.CSSProperties;
  selectedRow?: (event: DataTableRowClickEvent) => void;
  rowClassName?: (event: DataTableRowClickEvent) => void;
  selectionMode?: 'single' | 'radiobutton';
  selection?: any[number];
  metaKeySelection?: boolean | undefined;
  onSelectionChange?(event: DataTableSelectionSingleChangeEvent<any>): void;
  dataKey?: string;
  multiple?: boolean;
  emptyMessage?: string | React.ReactNode | ((frozen: boolean) => React.ReactNode) | undefined;
  rowsPerPageOptions?: any[];
  sortable?: boolean;
}

export interface ButtonProps {
  underline?: boolean;
  color?: keyof typeof textColors;
  padding?: string;
  filled?: boolean;
  disabled?: boolean;
  hidden?: boolean;
  onClick?: (data?: any) => void;
  label: string;
  fontWeight?: number;
  style?: React.CSSProperties | undefined;
}

export interface ActionButtonColumnProps {
  headerStyle: React.CSSProperties | undefined;
  header?: React.ReactNode | ((options: ColumnHeaderOptions) => React.ReactNode);
  buttons?: ButtonProps[];
  style?: React.CSSProperties | undefined;
  onRowClick?: (event: DataTableRowClickEvent) => void;
}
