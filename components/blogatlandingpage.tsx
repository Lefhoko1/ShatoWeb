import { useEffect, useState } from "react";
import { Card, CardFooter, Image } from "@nextui-org/react";

interface Pet {
  id: number;
  url: string;
  dowloadurl: string;
  extension: string; // Assuming each pet has an image URL
}

export default function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('/api/get-all-pets', {
          method: 'POST',
          cache: 'no-store'
        });
        const data = await response.json();
        setPets(data.images);
      } catch (error) {
        console.error("Failed to fetch pets", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-1 px-8">
      {pets.slice(-3).map((pet) => ( // Displaying the last three pets
        <Card key={pet.id} isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-4">
          <Image
            removeWrapper
            alt={`${pet.url} image`}
            className="z-0 w-full h-full object-cover"
            src={pet.url} // Assuming pet.image is the URL to the pet's image
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <a 
              className="text-tiny text-blue-500 hover:text-blue-700 underline hover:no-underline transition duration-200 ease-in-out"
              href={pet.dowloadurl}>
              Download
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
