"use client";

import { supabase } from '@/utils/supabase';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use, useEffect, useState } from 'react';

export type Slang = {
    word: string;            // スラング単語
    meaning: string;         // 日本語訳（罵倒語ならそのニュアンス）
    category: "insult" | "military" | "internet" | "sexual" | "misc";
};

export type CopypastaItem = {
    id: string;              // UUID or URL slug
    title: string;           // タイトル（例："Navy SEAL Copypasta"）
    lines: [string, string][]; // [オリジナル, 翻訳] のペア（行ごとの翻訳）
    slangs: Slang[];         // スラング一覧
    explanation: string;     // 解説（文法・背景など）
    createdAt?: string;      // ISO timestamp
    updatedAt?: string;      // 更新日時
};


type Props = {
    params: Promise<{ id: string }>;
};

export default function CopypastaDetailPage({ params }: Props) {
    const [isJapaneseVisible, setIsJapaneseVisible] = useState(true);
    const [articleData, setArticleData] = useState<CopypastaItem | null>(null);
    const { id } = use(params); // ← ここで unwrap する

    useEffect(() => {
        async function fetchArticle() {
            const { data, error } = await supabase
                .from('copypasta_items')
                .select('*')
                .eq('id', id)
                .single();

            if (error || !data) {
                notFound(); // throwするのでそれ以上は走らない
            }
            setArticleData(data);
        }
        fetchArticle();
    }, [id]);

    if (!articleData) {
        return (
            <div className='h-[50vh] flex items-center justify-center' >
                <div className='text-center font-bold text-2xl'>
                    <img src="/images/dog.png"
                        className='h-40 animate-pulse'
                        alt="doge" />
                    <p>Now Loading...</p>
                </div>
            </div >

        );
    }

    return (
        <div>


            <h1 className="text-3xl font-bold mb-6">{articleData.title}</h1>

            <div className="p-4 bg-gray-100 h-90 overflow-y-scroll">
                {articleData.lines.map((line: [string, string], idx: number) => (
                    <div key={idx} className="py-2 rounded">
                        <p className="font-semibold">{line[0]}</p>
                        <p className={`${isJapaneseVisible ? "" : "hidden"} text-gray-600`}>
                            {line[1]}
                        </p>
                    </div>
                ))}
            </div>
            <div className='text-end'>

                <button onClick={() => { setIsJapaneseVisible(!isJapaneseVisible) }}>{isJapaneseVisible ? "日本語を隠す" : "日本語を表示"}</button>
            </div>

            {articleData.explanation && (
                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">解説</h2>
                    <p className="text-gray-700">{articleData.explanation}</p>
                </section>
            )}

            <div className="mt-8 text-center">
                <Link href="/copypasta" className="text-blue-500 hover:text-blue-700">
                    一覧に戻る
                </Link>
            </div>
        </div>
    );
}
