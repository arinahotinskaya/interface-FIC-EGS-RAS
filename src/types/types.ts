// IGS Station Data Types
export interface IGSReceiver {
  Name?: string;
  SatelliteSystem?: string;
  SerialNumber?: string;
  FirmwareVersion?: string;
  ElevCutoff?: string;
  DateInstalled?: string;
}

export interface IGSAntenna {
  Name?: string;
  Radome?: string;
  SerialNumber?: string;
  ARP?: string;
  MarkerUp?: string;
  MarkerNorth?: string;
  MarkerEast?: string;
  DateInstalled?: string;
}

export interface IGSClock {
  Type?: string;
  InputFrequency?: string;
  EffectiveDates?: string;
}

export interface IGSStation {
  X?: number;
  Y?: number;
  Z?: number;
  Latitude?: string;
  Longitude?: string;
  Height?: string;
  Receiver?: IGSReceiver;
  Antenna?: IGSAntenna;
  Clock?: IGSClock;
}