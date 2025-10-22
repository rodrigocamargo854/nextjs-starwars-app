"use client";
import * as S from "../../components/DetailsCard/style";

type PlanetDetailsCardProps = {
  planet: {
    name: string;
    climate: string;
    terrain: string;
    population: string;
    diameter?: string;
    gravity?: string;
  };
};

export function DetailsCard({ planet }: { planet: any }) {
  return (
    <S.Wrapper>
      <S.Topbar />
      <S.Body>
        <S.Title>{planet.name}</S.Title>
        <S.Divider />
        <S.Grid>
          <S.Row><S.Label>Clima:</S.Label> <S.Value>{planet.climate}</S.Value></S.Row>
          <S.Row><S.Label>Terreno:</S.Label> <S.Value>{planet.terrain}</S.Value></S.Row>
          <S.Row><S.Label>População:</S.Label> <S.Value>{planet.population}</S.Value></S.Row>
          {planet.diameter && (
            <S.Row><S.Label>Diâmetro:</S.Label> <S.Value>{planet.diameter}</S.Value></S.Row>
          )}
          {planet.gravity && (
            <S.Row><S.Label>Gravidade:</S.Label> <S.Value>{planet.gravity}</S.Value></S.Row>
          )}
        </S.Grid>
      </S.Body>
      <S.Actions>
        <S.BackLink href="/">Voltar</S.BackLink>
      </S.Actions>
    </S.Wrapper>
  );
}
