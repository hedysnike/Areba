interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Buttons({
  type = "button",
  className,
  onChange,
  text,
  onClick,
}: ButtonProps) {
  return (
    <div>
      <button
        type={type}
        className="text-white bg-[#FF7600] pt-[6px] pb-[10px] text-sm px-4 shadow-md shadow-[#00000042] rounded"
        onClick={onClick}
      >
        <h1>{text}</h1>
      </button>
    </div>
  );
}
