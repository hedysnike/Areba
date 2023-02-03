interface ButtonProps {
  className?: string;
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Buttons({ className, onChange, text, onClick }: ButtonProps) {
  return (
    <div>
      <button className="text-white bg-[#FF7600] pt-[6px] pb-[10px] text-sm px-4 shadow-md shadow-[#00000042] rounded" onClick={onClick}>
        <h1>{text}</h1>
      </button>
    </div>
  );
}
