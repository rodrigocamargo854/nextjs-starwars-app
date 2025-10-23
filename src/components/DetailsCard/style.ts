"use client";
import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.section`
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  width: 100%;
  max-width: 560px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.05);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #18181b;
    border-color: #2d2d31;
    color: #e4e4e7;
  }
`;

export const Topbar = styled.div`
  height: 6px;
  background: linear-gradient(90deg, #1e40af, #3b82f6);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(90deg, #60a5fa, #93c5fd);
  }
`;

export const Body = styled.div`
  padding: 1.25rem 1.25rem 1rem;
`;

export const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 650;
  color: #1e3a8a;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: #93c5fd;
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  margin: 0.875rem 0 1rem;
  background: #eef2f7;

  @media (prefers-color-scheme: dark) {
    background: #2b2b30;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem 1rem;

  @media (min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Row = styled.p`
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #374151;

  @media (prefers-color-scheme: dark) {
    color: #a1a1aa;
  }
`;

export const Label = styled.span`
  display: inline-block;
  min-width: 120px;
  color: #6b7280;
  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

export const Value = styled.span`
  color: #111827;
  font-weight: 500;
  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0 1.25rem 1.25rem;
`;

export const BackLink = styled(Link)`
  font-size: 0.9rem;
  text-decoration: none;
  color: #1e40af;
  padding: 0.4rem 0.6rem;
  border-radius: 8px;
  transition: background 0.15s ease;

  &:hover {
    background: #f3f4f6;
  }

  @media (prefers-color-scheme: dark) {
    color: #93c5fd;
    &:hover {
      background: #232327;
    }
  }
`;



export const BackButton = styled.a`
  padding: 0.5rem 1.2rem;
  background-color: #4f46e5;
  color: white;
  border-radius: 8px;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background-color: #3730a3;
  }
`;
