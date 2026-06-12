import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  private apiUrl = 'https://localhost:7030/api/assets';

  constructor(private http: HttpClient) { }

  getAllAssets() {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAssetById(id: string) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateAsset(id: string, asset: any) {
    return this.http.put(`${this.apiUrl}/${id}`, asset);
  }

  deleteAsset(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  createAsset(asset: any) {
    return this.http.post(this.apiUrl, asset);
  }
}