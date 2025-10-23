"use client";

import * as S from "../Card/style";

type CardProps = {
  href: string;
  title: string;
  info: string[];
};

export function Card({ href, title, info }: CardProps) {
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
}
