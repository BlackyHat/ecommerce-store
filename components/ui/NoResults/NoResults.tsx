import content from "@/data/common.json";

export const NoResults: React.FC = () => {
  const { noResult } = content;

  return (
    <div className="flex size-full items-center justify-center text-neutral-500">
      {noResult.label}
    </div>
  );
};
