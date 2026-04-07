'use client';
import { CARD_COLORS } from '@/data/cardData';
import type { FlatCard, TopicCard, SubCard } from '@/types';

function DifficultyDots({ level, max = 5 }: { level: number; max?: number }) {
  return <span className="tracking-wider">{'●'.repeat(level)}{'○'.repeat(max - level)}</span>;
}

interface CardBackProps {
  card: FlatCard;
  checkStates: Record<number, boolean>;
  onCheck: (i: number) => void;
  onOpenActivity?: () => void;
  hasResponse?: boolean;
}

export default function CardBack({ card, checkStates, onCheck, onOpenActivity, hasResponse }: CardBackProps) {
  const color = CARD_COLORS[card.parentId].bg;
  const isTopic = card.type === 'topic';
  const data = card.data;

  return (
    <div className="w-full h-full flex flex-col p-5 bg-white rounded-2xl border border-gray-200 shadow-lg overflow-auto" onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs font-bold text-gray-500">카드번호 {data.id}</span>
        <span className="text-[11px] text-gray-400">난이도 <DifficultyDots level={data.difficulty} /></span>
      </div>
      <div className="w-full h-px mb-3" style={{ background: color }} />
      {isTopic ? (
        <>
          <h3 className="text-base font-black text-gray-900 mb-0.5">개념 및 중요성</h3>
          <p className="text-[11px] font-extrabold text-gray-400 mb-2.5">Overview & Why It Matters</p>
          <p className="text-[13px] leading-relaxed text-gray-700 mb-4">{(data as TopicCard).overview}</p>
          <h3 className="tex
