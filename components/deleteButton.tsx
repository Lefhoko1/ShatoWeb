 
import { button } from "@nextui-org/theme";
import { useRouter } from "next/navigation";
import { useState } from "react";
export function DeleteButton({url}: { url: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);

        try {
            await fetch('/api/file' +
                encodeURIComponent(url), {
                method: "DELETE",
                
                headers: {
                    "Content-Type" : "application/json",
                },
            });
            router.refresh();
        }
        catch (e) {
            console.error(e);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="bg-red-500 text-white p-2 rounded w-full hover:bg-red-600 "
            disabled={isLoading}
        >
            {isLoading ? "Deleting..." : "Delete"}
        </button>
    )
};
