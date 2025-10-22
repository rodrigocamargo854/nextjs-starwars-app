import { getPlanetById } from "@/app/lib/api/starwars/api";
import { DetailsCard } from "@/components/DetailsCard/Index";

export const dynamic = "force-dynamic";

type Props = { params: { id: string } };

export default async function PlanetDetails({ params }: Props) {
  const planet = await getPlanetById(params.id);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-zinc-950">
      <DetailsCard planet={planet} />
    </main>
  );
}
