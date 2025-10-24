"use client";
import styled from "styled-components";

export const Box = styled.section`
  width: 100%;
  max-width: 880px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  background: #fff;
  padding: 16px;
  margin: 0 auto;

  @media (prefers-color-scheme: dark) {
    background: #18181b;
    border-color: #2b2b30;
    color: #e4e4e7;
  }
`;

export const Header = styled.h2`
  margin: 0 0 12px 0;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.3;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr; 
    gap: 14px;
  }
`;

export const Item = styled.li`
  border: 1px solid #eef2f7;
  border-radius: 10px;
  padding: 12px;

  @media (prefers-color-scheme: dark) {
    border-color: #2b2b30;
  }
`;

export const Name = styled.div`
  font-weight: 600;
  margin: 0 0 4px 0;
  font-size: 0.98rem;
`;

export const Meta = styled.div`
  font-size: 0.92rem;
  color: #374151;
  line-height: 1.4;

  strong { color: #111827; font-weight: 600; }

  @media (prefers-color-scheme: dark) {
    color: #a1a1aa;
    strong { color: #e5e7eb; }
  }
`;

export const Subtitle = styled.div`
  margin-top: 8px;
  font-weight: 600;
  font-size: 0.94rem;
`;

export const Bullets = styled.ul`
  margin: 6px 0 2px 16px;
  padding: 0;
  list-style: disc;
  color: #374151;

  li {
    font-size: 0.92rem;
    line-height: 1.35;
  }

  @media (prefers-color-scheme: dark) {
    color: #a1a1aa;
  }
`;

export const Muted = styled.div`
  color: #6b7280;
  font-size: 0.9rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

export const Empty = styled.div`
  width: 100%;
  max-width: 880px;
  color: #6b7280;
  font-size: 0.95rem;
  margin: 0 auto;
`;
