/// <reference path="./types.d.ts" />

function pickFields_<
  T extends object, 
  V extends object,
>({
  row,
  fields,
  virtualFields = {},
}: {
  row: T;
  fields: readonly (keyof (T & V))[] | AllFields;
  virtualFields?: {[k in keyof V]: (T) => SpreadsheetCell} | Record<string, never>;
}): SpreadsheetRow {
  const fieldsToResolve = fields === '*' ? Object.keys(row).concat(Object.keys(virtualFields)).sort() : fields;
  return fieldsToResolve.map((field) => field in virtualFields ? virtualFields[field] : row[field]);
}
