import Papa from "papaparse";

export default function parseCsv<T extends Record<string, any>>(
  csv: string
): T[] {
  const parsed = Papa.parse<T>(csv, {
    header: true, // Use the first row as headers
    skipEmptyLines: true,
  });

  if (parsed.errors.length > 0) {
    console.error("CSV parsing errors:", parsed.errors);
    return [];
  }
  const rows = parsed.data.filter((row) => row.eventDate);
  console.log(rows);
  return rows;
}
