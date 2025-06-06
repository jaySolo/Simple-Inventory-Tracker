import { DataSource } from "ng2-smart-table/lib/lib/data-source/data-source";
import { Observable } from "rxjs";

export interface Currency {
    code: string;
    name: string;
    symbol: string | null;
    description: string | null;
}


export abstract class CurrenciesData {
  abstract get gridDataSource(): DataSource;
  abstract listAll(): Observable<{ total: number, items: Currency[] }>;
  abstract list(pageNumber: number, pageSize: number, query?: string): Observable<{ total: number, items: Currency[] }>;
  abstract get(code: string): Observable<Currency>;
  abstract create(Vendor: Currency): Observable<Currency>;
  abstract update(Vendor: Currency): Observable<Currency>;
  abstract delete(code: string): Observable<any>;
}