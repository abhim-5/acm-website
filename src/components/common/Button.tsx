import { gotoSection } from '@/functions';
import './Button.css';

interface ButtonProps {
  label: string;
  url?: string;
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

export default function Button({ label, url, className, onClick }: ButtonProps) {
  const Component = url ? 'a' : 'button';

  return (
    <Component
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        } else if (url) {
          e.preventDefault();
          gotoSection(url);
        }
      }}
      id="button"
      className={`leading-base group pointer-events-auto relative h-full max-w-full transform-none overflow-clip rounded-full bg-flax-smoke-950 px-5 py-2 text-[1rem] font-semibold uppercase tracking-normal text-flax-smoke-100 sm:text-sm ${className}`}
      href={url}
    >
      <span
        className="ease-expo flex-center absolute bottom-0 left-0 z-10 my-auto size-full w-full will-change-auto translate-y-full text-nowrap rounded-t-[15rem] bg-flax-smoke-500 font-fancy transition-all duration-700 group-hover:translate-y-0 group-hover:rounded-none"
      >
        {label}
      </span>

      <span className="relative z-20 overflow-hidden flex-center h-full w-full">
        <span className="ease-expo transition-all duration-700 group-hover:-translate-y-full flex-center text-nowrap font-fancy">
          {label}
        </span>
        <span className="ease-expo absolute top-0 left-0 transition-all duration-700 translate-y-full group-hover:translate-y-0 flex-center text-nowrap font-fancy text-flax-smoke-200 w-full h-full">
          {label}
        </span>
      </span>

    </Component>
  );
}
