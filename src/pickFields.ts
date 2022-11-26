/// <reference path="./types.d.ts" />

type Fields<T, V = void> = readonly (keyof (T & V))[] | string | AllFields;
type VirtualFields<T, V = void> = {[k in keyof V]: (T) => SpreadsheetCell} | Record<string, never>;

interface PickFieldsBaseArgs<T, V = void> {
  fields: Fields<T, V>;
  virtualFields?: VirtualFields<T, V>;
}

function getFieldsToResolve_<T, V>({ 
  fields, 
  virtualFields,
  firstRow,
}: PickFieldsBaseArgs<T, V> & { firstRow: T }): readonly (string | number | symbol)[] {
  // we use '*' as shorthand that we want to return everything - that means
  // all keys provided by the API and all virtual values (sorted for consistency)
  if (fields === '*') {
    return Object.keys(firstRow).concat(Object.keys(virtualFields)).sort();
  } else if (typeof fields === 'string' || fields instanceof String) {
    // it must be a string, so split it on comma since that doesn't hurt
    return fields.split(/\s*,\s*/);
  } else {
    // the user already supplied a range of fields
    return fields;
  }
}

function pickFields_<T, V = void>(
  args: PickFieldsBaseArgs<T, V> & ({ row: T; } | { rows: T[]; })
): SpreadsheetRow[] {
  const { fields, virtualFields = {} } = args;
  const firstRow = 'rows' in args ? args.rows[0] : args.row;
  if (firstRow == null) {
    return [[]];
  }

  const fieldsToResolve = getFieldsToResolve_({ 
    fields, 
    virtualFields,
    firstRow,
  });

  function processRow_(row) {
    return fieldsToResolve.map((field) => {
      if (field in virtualFields) { 
        return virtualFields[field](row);
      } else if (field in row) {
        return row[field];
      } else {
        throw new Error(`Invalid field: ${field.toString()}`);
      }
    });
  }

  return 'rows' in args 
    ? args.rows.map(processRow_) 
    : [processRow_(args.row)];
}
