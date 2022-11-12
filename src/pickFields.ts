/// <reference path="./types.d.ts" />

type Fields<T, V = void> = readonly (keyof (T & V))[] | AllFields;
type VirtualFields<T, V = void> = {[k in keyof V]: (T) => SpreadsheetCell} | Record<string, never>;

interface PickFieldsBaseArgs<T, V = void> {
  fields: Fields<T, V>;
  virtualFields?: VirtualFields<T, V>;
}

function pickFields_<T, V = void>(args: { row: T; } & PickFieldsBaseArgs<T, V>): SpreadsheetRow;
function pickFields_<T, V = void>(args: { rows: T[]; } & PickFieldsBaseArgs<T, V>): SpreadsheetRow[];
function pickFields_<T, V = void>(
  args: PickFieldsBaseArgs<T, V> & ({ row: T; } | { rows: T[]; })
): SpreadsheetRow | SpreadsheetRow[];
function pickFields_<T, V = void>(
  args: PickFieldsBaseArgs<T, V> & ({ row: T; } | { rows: T[]; })
): SpreadsheetRow | SpreadsheetRow[] {
  const { fields, virtualFields = [] } = args;

  function processRow_(row) {
    // we use '*' as shorthand that we want to return everything - that means
    // all keys provided by the API and all virtual values (sorted for consistency)
    const fieldsToResolve = fields === '*' 
      ? Object.keys(row).concat(Object.keys(virtualFields)).sort() 
      : fields;
    return fieldsToResolve.map((field) => 
      field in virtualFields ? virtualFields[field] : row[field]
    );
  }

  return 'rows' in args ? args.rows.map(processRow_) : processRow_(args.row);
}
