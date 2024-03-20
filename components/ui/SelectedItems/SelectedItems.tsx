import { SelectItem } from "@/components/ui";

import { SelectedItemsProps } from "./types";

export const SelectedItems: React.FC<SelectedItemsProps> = ({ options }) =>
  options.map((option) => {
    if (typeof option === "string") {
      return (
        <SelectItem
          key={option}
          value={option.toUpperCase()}
          className="capitalize"
        >
          {option.toLowerCase()}
        </SelectItem>
      );
    } else {
      return (
        <SelectItem key={option.id} value={option.id} className="capitalize">
          {option.label || option.name}
        </SelectItem>
      );
    }
  });
