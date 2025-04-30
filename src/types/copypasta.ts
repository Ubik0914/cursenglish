export type Slang = {
    word: string;            // スラング単語
    meaning: string;         // 日本語訳（罵倒語ならそのニュアンス）
    category: "insult" | "military" | "internet" | "sexual" | "misc";
};

// 型設計: [オリジナル文, 翻訳文] のペアを1つの配列として保存
export type CopypastaItem = {
    id: string;              // UUID or URL slug
    title: string;           // タイトル（例："Navy SEAL Copypasta"）
    lines: [string, string][]; // [オリジナル, 翻訳] のペア（行ごとの翻訳）
    slangs: Slang[];         // スラング一覧
    explanation: string;     // 解説（文法・背景など）
    createdAt?: string;      // ISO timestamp
    updatedAt?: string;      // 更新日時
};
