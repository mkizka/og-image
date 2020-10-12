export type FileType = 'png' | 'jpeg';
export type Theme = 'black' | 'white';

export interface ParsedRequest {
    fileType: FileType;
    text: string;
    theme: Theme;
    md: boolean;
    fontSize: string;
    background?: string;
}
