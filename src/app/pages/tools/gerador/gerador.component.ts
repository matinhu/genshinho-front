import { Component, OnInit } from '@angular/core';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-gerador',
  templateUrl: './gerador.component.html',
  styleUrls: ['./gerador.component.scss'],
})
export class GeradorComponent implements OnInit {
  public previewSrc: string = null;

  public selectedFiles: FileList;

  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  public setPreviewFromFile(file: File) {
    let reader = new FileReader();

    reader.onloadend = (e: any) => {
      this.previewSrc = e.target.result;
    };

    reader.readAsArrayBuffer(file);
  }

  upload_() {
    if (this.selectedFiles) {
      const file = this.selectedFiles.item(0);
      this.uploadService.uploadFile(file);
    }
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
}
