import { ChevronDown } from "lucide-react";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  title: string;
  items: DropdownItem[];
};

export default function Dropdown({ title, items }: DropdownProps) {
  return (
    <div className="group relative w-fit">
      {/* Botão */}
      <button
        className="
          relative
          flex
          items-center
          gap-3
          overflow-hidden
          rounded-2xl
          px-9
          py-3
          transition-all
          duration-500
          before:absolute
          before:inset-0
          before:origin-left
          before:scale-x-0
          before:bg-blue-600
          before:transition-transform
          before:duration-500
          hover:rounded-b-none
          hover:text-white
          hover:before:scale-x-100
        "
      >
        <span className="relative z-10">{title}</span>

        <ChevronDown
          size={16}
          className="
            relative
            z-10
            transition-all
            duration-500
            group-hover:rotate-180
            group-hover:text-white
          "
        />
      </button>

      {/* Menu */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-full
          z-20
          flex
          w-full
          translate-y-[-12px]
          flex-col
          overflow-hidden
          rounded-b-2xl
          border
          border-gray-300
          bg-white
          opacity-0
          invisible
          transition-all
          duration-500
          group-hover:pointer-events-auto
          group-hover:visible
          group-hover:translate-y-0
          group-hover:opacity-100
          group-hover:border-blue-600
        "
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="
              relative
              overflow-hidden
              px-6
              py-3
              text-center
              transition-colors
              duration-500

              before:absolute
              before:inset-0
              before:-z-10
              before:origin-left
              before:scale-x-0
              before:bg-blue-600
              before:transition-transform
              before:duration-500

              hover:text-white
              hover:before:scale-x-100
            "
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}