export interface IPackageShipping {
  from: {
    postal_code: string;
  };
  to: {
    postal_code: string
  };
  package: {
    height: number,
    width: number,
    length: number,
    weight: number
  };
  services: string;
}
