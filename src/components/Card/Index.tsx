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
      <S.Info>
        {info.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </S.Info>
    </S.CardWrapper>
  );
}
