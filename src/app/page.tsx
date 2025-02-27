import {ModeToggle} from "@/components/ModeToggle";
import {fetchDogs} from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const dogs = await fetchDogs();

  console.log(dogs);

  return (
    <div className="grid grid-rows-[10fr_2fr] min-h-screen">
      <main>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {dogs.map((dog, i) => (
            <div key={i} className="aspect-square rounded-xl bg-muted/50">
              <Image src={dog.image_url} alt={`A dog named ${dog.name}`} width={400} height={400} />
              <h2>{dog.name}</h2>
            </div>
          ))}
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <ModeToggle />
      </footer>
    </div>
  );
}
