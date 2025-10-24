"use client";

import React from "react";
import { CardProps } from "@/app/lib/api/types";
import * as S from "../Card/style";

export const Card = React.memo(function Card({ href, title, info }: CardProps) {
  return (
    <S.CardWrapper href={href}>
      <S.Title>{title}</S.Title>
      <S.InfoList>
        {info.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </S.InfoList>
    </S.CardWrapper>
  );
});
