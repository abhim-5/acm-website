import MagneticEffect from './MagneticEffect';
import './MenuToggle.css';

interface MenuToggleProps {
  onClick?: () => void;
  className?: string;
  id?: string;
}

export default function MenuToggle({ onClick, className, id }: MenuToggleProps) {
  return (
    <MagneticEffect divId="magneto" textId="magnetoText">
      <div onClick={onClick} className={`fixed right-7 top-7 z-20 ${className}`} id={id}>
        <div
          id="magneto"
          className="flex-center size-14 cursor-pointer rounded-full bg-flax-smoke-300 brightness-90 ease-in-out lg:size-[4.5rem]"
        >
          <span
            className="w-[100%] text-center before:bg-flax-smoke-700 after:bg-flax-smoke-700"
            id="magnetoText"
          ></span>
        </div>
      </div>
    </MagneticEffect>
  );
}
