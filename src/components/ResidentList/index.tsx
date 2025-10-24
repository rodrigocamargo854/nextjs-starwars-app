"use client";

import { Resident } from "@/app/lib/api/types";
import * as S from "../ResidentList/styles";
import { useMemo } from "react";

export function ResidentsList({ residents }: { residents: Resident[] }) {
  const content = useMemo(() => {
    if (!residents.length) return <S.Empty>No natives found.</S.Empty>;

    return (
      <S.Box>
        <S.Header>Residents</S.Header>
        <S.List>
          {residents.map((r, i) => (
            <S.Item key={i}>
              <S.Name>{r.name}</S.Name>
              <S.Meta>Hair color: <strong>{r.hairColor}</strong></S.Meta>
              <S.Meta>Eye color: <strong>{r.eyeColor}</strong></S.Meta>
              <S.Meta>Gender: <strong>{r.gender}</strong></S.Meta>

              <S.Subtitle>Species</S.Subtitle>
              {r.species.length ? (
                <S.Bullets>
                  {r.species.map((s, j) => <li key={j}>{s}</li>)}
                </S.Bullets>
              ) : (
                <S.Muted>Not informed</S.Muted>
              )}

              <S.Subtitle>Vehicles</S.Subtitle>
              {r.vehicles.length ? (
                <S.Bullets>
                  {r.vehicles.map((v, k) => (
                    <li key={k}>{v.name} — {v.model}</li>
                  ))}
                </S.Bullets>
              ) : (
                <S.Muted>None</S.Muted>
              )}
            </S.Item>
          ))}
        </S.List>
      </S.Box>
    );
  }, [residents]);

  return content;
}
