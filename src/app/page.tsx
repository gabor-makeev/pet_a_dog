import {ModeToggle} from "@/components/ModeToggle";
import {fetchDogs} from "@/lib/data";
import Image from "next/image";
import {Card, CardTitle} from "@/components/ui/card";

export default async function Home() {
  const dogs = await fetchDogs();

  console.log(dogs);

  return (
    <div className="grid grid-rows-[10fr_2fr] min-h-screen">
      <main>
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {dogs.map((dog, i) => (
            <Card key={i} className={"flex flex-col justify-center items-center"}>
              <Image src={dog.image_url} alt={`A dog named ${dog.name}`} width={400} height={400} />
              <CardTitle className={"capitalize my-2"}>{dog.name}</CardTitle>
            </Card>
          ))}
        </div>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
        <ModeToggle />
      </footer>
    </div>
  );
}
