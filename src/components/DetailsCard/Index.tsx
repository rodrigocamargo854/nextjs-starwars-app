"use client";

import Link from "next/link";
import * as S from "../DetailsCard/style";
import { PlanetDetails } from "@/app/lib/api/types";



export default function DetailsCard({ planet }: { planet: PlanetDetails }) {
  return (
    <S.Wrapper>
      <S.Topbar />
      <S.Body>
        <S.Title>{planet.name}</S.Title>
        <S.Divider />
        <S.Grid>
          <S.Row><S.Label>Rotation period:</S.Label> <S.Value>{planet.rotation_period}</S.Value></S.Row>
          <S.Row><S.Label>Orbital period:</S.Label>  <S.Value>{planet.orbital_period}</S.Value></S.Row>
          <S.Row><S.Label>Diameter:</S.Label>         <S.Value>{planet.diameter}</S.Value></S.Row>
          <S.Row><S.Label>Climate:</S.Label>            <S.Value>{planet.climate}</S.Value></S.Row>
          <S.Row><S.Label>Gravity:</S.Label>        <S.Value>{planet.gravity}</S.Value></S.Row>
          <S.Row><S.Label>Terrain:</S.Label>          <S.Value>{planet.terrain}</S.Value></S.Row>
          <S.Row><S.Label>Population:</S.Label>        <S.Value>{planet.population}</S.Value></S.Row>
        </S.Grid>
      </S.Body>

            <S.Actions>
        <Link href="/" passHref>
          <S.BackButton>← Back to Planets</S.BackButton>
        </Link>
      </S.Actions>
    </S.Wrapper>
  );
}
