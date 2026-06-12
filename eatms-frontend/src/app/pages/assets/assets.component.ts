import { Component } from '@angular/core';
import { AssetService } from 'src/app/services/asset.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  assets: any[] = [];

  constructor(
    private assetService: AssetService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.assetService.getAllAssets().subscribe(data => {
      this.assets = data;
      console.log(data);
    });
  }

  editAsset(id: number) {
    this.router.navigate(['/edit-asset', id]);
  }

  deleteAsset(id: string) {

    if (!confirm('Are you sure you want to delete this asset?')) {
      return;
    }
  
    this.assetService.deleteAsset(id).subscribe({
      next: () => {
        alert('Asset deleted successfully');
      },
      error: (error) => {
        console.log(error);
      }
    });
  
  }
}
