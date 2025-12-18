
export enum OperaType {
  DIPINTO = 'DIPINTO',
  CERAMICA = 'CERAMICA',
  TERRACOTTA = 'TERRACOTTA'
}

export interface Opera {
  id: number;
  title: string;
  description: string;
  type: OperaType;
  basePrice: number;
  imageUrl: string;
  dimensions: string;
}

export interface ParticipationStep {
  number: number;
  text: string;
}
