import {ModeToggle} from "@/components/ModeToggle";
import {DogsSection} from "@/components/ui/DogsSection/DogsSection";
import {fetchDogs} from "@/lib/data";

export default async function Home() {
  const dogs = await fetchDogs();

  return (
    <div className="grid grid-rows-[10fr_2fr] min-h-screen">
      <main>
        <DogsSection dogs={dogs} />
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <ModeToggle />
      </footer>
    </div>
  );
}
