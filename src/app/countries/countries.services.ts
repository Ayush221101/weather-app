import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countriesApiUrl = 'https://countriesnow.space/api/v0.1/countries';

  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get(this.countriesApiUrl);
  }

  getCountryDetails(countryCode: string): Observable<any> {
    const countryDetailsApiUrl = `https://countriesnow.space/api/v0.1/countries/info?country=${countryCode}`;
    return this.http.get(countryDetailsApiUrl);
  }
}
