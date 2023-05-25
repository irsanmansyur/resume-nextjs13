type ErrorInputProps = {
  error?: string | null;
};
export function InputErrorMessage({ error }: ErrorInputProps) {
  if (!error) <></>;
  return <div className="text-red-500 text-xs  whitespace-nowrap">{error}</div>;
}
