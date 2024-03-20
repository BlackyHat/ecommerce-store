export interface ImageUploadProps {
  disabled?: boolean;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
  onTop?: (value: string) => void;
  value: string[];
}
