"use client";
import styled from "styled-components";
import Link from "next/link";

export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  color: #111;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: #f9fafb;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  }

  @media (prefers-color-scheme: dark) {
    background: #18181b;
    border-color: #2d2d31;
    color: #e4e4e7;

    &:hover {
      background: #202024;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e40af;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #93c5fd;
  }
`;

export const Info = styled.div`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #4b5563;

  @media (prefers-color-scheme: dark) {
    color: #a1a1aa;
  }
`;
