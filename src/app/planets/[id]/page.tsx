import { getPlanetById } from "@/app/lib/api/starwars/api";
import { DetailsCard } from "@/components/DetailsCard/Index";

export const dynamic = "force-dynamic";

type Props = { params: { id: string } };

export default async function PlanetDetails({ params }: Props) {
  const planet = await getPlanetById(params.id);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-900">
      <DetailsCard planet={planet} />
    </main>
  );
}
