"use client"
import { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

interface Pet {
  id: number;
  name: string;
  owner: string;
  image: string; // Assuming each pet has an image URL
}

export default function PetTable() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(`/api/get-all-pets?timestamp=${timestamp}`, {next :{revalidate : 5} } );
        const data = await response.json();
        setPets(data.pets.rows);
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
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="max-w-screen-2xl px-8 grid gap-4 grid-cols-12">
        {pets.map((pet) => (
          <Card key={pet.id} isFooterBlurred className="col-span-12 sm:col-span-4">
            <Image
              removeWrapper
              alt={`${pet.name} image`}
              className="w-full h-[300px] object-cover"
              src={pet.name} // Assuming pet.image is the URL to the pet's image
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Pet ID: {pet.id}</p>
              </div>
              <a className="text-tiny" color="primary"   href={pet.owner}>
                Download
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
