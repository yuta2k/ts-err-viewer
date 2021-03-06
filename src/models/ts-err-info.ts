export type TsErrPIDInfoCountPropType = 'total' | 'drop' | 'scramble';

export interface TsErrPIDInfo {
  pid: number;
  name: string | null;
  total: number;
  drop: number;
  scramble: number;
}

export interface TsErrInfo {
  fileName: string;
  rawText: string;
  pids: TsErrPIDInfo[];
}
