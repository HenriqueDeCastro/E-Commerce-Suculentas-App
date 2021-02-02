import { Injectable } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Injectable({
  providedIn: 'root'
})
export class ImageCompressService {

  constructor(private imageCompress: NgxImageCompressService) { }

  async compressFile75(image, fileName): Promise<File> {
    const orientation = -1;
    let Image: File;

    return await this.imageCompress.compressFile(image, orientation, 75, 75).then(result =>
      {
        const imageBlob = this.ConvertBlob(result.split(',')[1]);
        return Image = new File([imageBlob], fileName, { type: 'image/jpeg' });
      });
  }

  async compressFile25(image, fileName): Promise<File> {
    const orientation = -1;
    let Image: File;

    return await this.imageCompress.compressFile(image, orientation, 25, 25).then(result =>
      {
        const imageBlob = this.ConvertBlob(result.split(',')[1]);
        return Image = new File([imageBlob], fileName, { type: 'image/jpeg' });
      });
  }

  ConvertBlob(image): Blob {
    const byteString = window.atob(image);
    const arrayBuffer = new Array(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      intArray[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([intArray], {type: 'image/jpeg'});
    return blob;
  }
}
