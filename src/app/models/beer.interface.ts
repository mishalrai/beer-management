interface Volume {
  value: number;
  unit: string;
}

interface BoilVolume {
  value: number;
  unit: string;
}

interface Method {
  [key: string]: {
    temp: Volume;
    duration: number;
  };
}

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: Volume;
  boil_volume: BoilVolume;
  method: Method;
  ingredients: {
    [key: string]: {
      name: string;
      amount: Volume;
    };
  };
  food_pairing: Array<string>;
  brewers_tips: string;
  contributed_by: string;
}
