'use client';

import { useState } from 'react';

export default function CopypastaForm() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [japaneseTranslation, setJapaneseTranslation] = useState('');
    const [explanation, setExplanation] = useState('');
    const [slangs, setSlangs] = useState('');
    const [res, setRes] = useState('');

    const handleSubmit = async () => {
        const japanseseLine = japaneseTranslation.split('\n');

        const lines = text
            .split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map((line, index) =>
                [line, japanseseLine[index]]);



        const slangArray = slangs
            .split('\n')
            .map(line => {
                const [word, meaning, category] = line.split(',');
                return { word, meaning, category };
            });

        const body = {
            title: title || 'No Title',
            lines,
            explanation: explanation || '',
            slangs: slangArray,
        };

        const response = await fetch('/api/insertCopypasta', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const result = await response.json();
        if (response.ok) {
            setRes('✅ 登録成功！');
        } else {
            setRes(`❌ エラー: ${result.error}`);
        }
    };

    return (
        <div>
            <h1 className="text-xl font-bold mb-4">新しいコピペを追加</h1>

            <div className="mb-4">
                <label className="block font-semibold mb-2">タイトル</label>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="コピペのタイトルを入力"
                />
            </div>

            <div className="mb-4">
                <label className="block font-semibold mb-2">原文</label>
                <textarea
                    value={text}
                    onChange={e => setText(e.target.value)}
                    rows={10}
                    className="w-full border rounded p-2 font-mono"
                    placeholder="1行ずつコピペを入力"
                />
            </div>

            <div className="mb-4">
                <label className="block font-semibold mb-2">日本語訳</label>
                <textarea
                    value={japaneseTranslation}
                    onChange={e => setJapaneseTranslation(e.target.value)}
                    rows={10}
                    className="w-full border rounded p-2"
                    placeholder="日本語訳を入力（任意）"
                />
            </div>

            <div className="mb-4">
                <label className="block font-semibold mb-2">解説</label>
                <textarea
                    value={explanation}
                    onChange={e => setExplanation(e.target.value)}
                    rows={6}
                    className="w-full border rounded p-2"
                    placeholder="解説を入力（任意）"
                />
            </div>

            <div className="mb-4">
                <label className="block font-semibold mb-2">スラング/単語まとめ (例: word, meaning, category)</label>
                <textarea
                    value={slangs}
                    onChange={e => setSlangs(e.target.value)}
                    rows={6}
                    className="w-full border rounded p-2"
                    placeholder="スラングの単語を1行ずつ入力（カンマ区切り）"
                />
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                登録する
            </button>

            {res && <p className="mt-4">{res}</p>}
        </div>
    );
}
