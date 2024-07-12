import { title } from "@/components/primitives";
import PetTable from "@/components/PetTable";
import { siteConfig } from "@/config/site";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-8 md:py-10">
      <h1 className={title()}>Blog</h1>
      <p>{siteConfig.blogIntro}</p>
      <div className="w-full max-w-screen-xl px-4 py-6">
        <PetTable />
      </div>
    </div>
  );
}
