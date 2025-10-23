"use client";
import styled from "styled-components";
import Link from "next/link";

export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
  border-radius: 1rem;
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
  border: 1px solid rgba(99, 102, 241, 0.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  text-decoration: none;
  color: inherit;
  transition: all 0.25s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(99, 102, 241, 0.15);
    background: linear-gradient(to bottom, #eef2ff, #ffffff);
  }

  @media (prefers-color-scheme: dark) {
    background: linear-gradient(to bottom, #18181b, #1f1f23);
    border-color: rgba(129, 140, 248, 0.25);

    &:hover {
      background: linear-gradient(to bottom, #27272a, #1f1f23);
      box-shadow: 0 8px 18px rgba(129, 140, 248, 0.25);
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #4f46e5;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: #a5b4fc;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  li {
    font-size: 0.9rem;
    color: #374151;

    strong {
      color: #111827;
    }

    @media (prefers-color-scheme: dark) {
      color: #a1a1aa;
      strong {
        color: #e4e4e7;
      }
    }
  }
`;
