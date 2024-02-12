import { CloseButton } from "@/app/ui/buttons";
import { Logo } from "@/app/ui/logo";

export function Menu({ handleClick }) {
  return (
    <section className="w-full p-12 flex items-center justify-center absolute right-0 top-0 z-10 overflow-hidden">
      <div className="w-full min-h-screen px-[4.5rem] py-12 bg-gray-900 rounded-[35px]">
        <div className="flex justify-between mt-8">
          <Logo />
          <CloseButton handleClick={handleClick} />
        </div>
      </div>
    </section>
  );
}
