"use client";
import { useEffect, useState } from "react";
import { Card, CardFooter, Image, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

interface Pet {
  id: number;
  url: string;
  dowloadurl: string;
  extension: string;
}

export default function PetTable() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch(`/api/get-all-pets`, {
          method: 'POST',
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

  const handleCardClick = (pet: Pet) => {
    console.log("Card clicked:", pet); // Debugging log
    setSelectedPet(pet);
    onOpen();
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center  ">
      <div className="max-w-screen-2xl px-8 grid gap-4 grid-cols-12">
        {pets.map((pet) => (
          <Card 
            key={pet.id} 
            isFooterBlurred 
            className="col-span-12 sm:col-span-4 shadow-sm border-t-1" 
            isPressable 
            onPress={() => handleCardClick(pet)}
          >
            {pet.extension === 'application/pdf' ? (
              <embed
                src={pet.url}
                type="application/pdf"
                className="w-full h-[300px] object-cover"
                aria-label={`${pet.url} PDF`}
              />
            ) : (
              <Image
                removeWrapper
                alt={`${pet.url} image`}
                className="w-full h-[300px] object-cover"
                src={pet.url}
              />
            )}
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <a className="text-tiny" color="primary" href={pet.dowloadurl} target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        className="w-full h-full"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent className="w-full h-full">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {selectedPet?.extension === 'application/pdf' ? 'PDF Preview' : 'Image Preview'}
              </ModalHeader>
              <ModalBody className="flex-1 flex justify-center items-center">
                {selectedPet?.extension === 'application/pdf' ? (
                  <embed
                    src={selectedPet.url}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    aria-label={`${selectedPet.url} PDF`}
                  />
                ) : (
                  <Image
                    removeWrapper
                    alt={`${selectedPet?.url} image`}
                    src={selectedPet?.url}
                    className="w-full h-auto object-cover"
                  />
                )}
              </ModalBody>
              <ModalFooter className="absolute bottom-0 w-full flex justify-between">
                <a
                  className="text-tiny"
                  color="primary"
                  href={selectedPet?.dowloadurl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
