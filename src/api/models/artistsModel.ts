import { UUID } from 'crypto';

export interface Artist {
  id: UUID;
  name: string;
  origin: string;
  yearFounded: number;
  created_at: Date;
  last_updated: Date;
}

export const artists: Artist[] = [];
