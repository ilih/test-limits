import { Limit } from './limit';
import { Range } from './range';

export interface LimitsData {
  line: Range;
  limits: Limit[];
}
