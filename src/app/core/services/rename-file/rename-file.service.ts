import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenameFileService {

  constructor() { }

  rename(file: File, name: string): any {
    const extension = this.ext(file.name);
    const nameFile = `${name}.${extension}`;
    Object.defineProperty(file, 'name', {
      writable: true,
      value: nameFile
    });
    return file;
  }

  ext(path: string): string {
    const idx = (~-path.lastIndexOf('.') >>> 0) + 2;
    return path.substr((path.lastIndexOf('/') - idx > -3 ? -1 >>> 0 : idx));
  }
}
