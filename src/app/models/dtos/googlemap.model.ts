export class GoogleMapAddressDto {
  address_components: Array<GoogleMapAddressComponentDto>;
}

export class GoogleMapAddressComponentDto {
  long_name: string;
  short_name: string;
  types: Array<string>;
}
