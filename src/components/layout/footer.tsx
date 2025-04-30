'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 mt-10">
            <div className="max-w-5xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                <div>
                    <h4 className="font-semibold mb-2">サービス</h4>
                    <ul className="space-y-1">
                        <li><Link href="/">ホーム</Link></li>
                        <li><Link href="/about">このサービスについて</Link></li>
                        <li><Link href="/copypastas">コピペ一覧</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">サポート</h4>
                    <ul className="space-y-1">
                        <li><Link href="/faq">よくある質問</Link></li>
                        <li><Link href="/contact">お問い合わせ</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">法的情報</h4>
                    <ul className="space-y-1">
                        <li><Link href="/terms">利用規約</Link></li>
                        <li><Link href="/privacy">プライバシーポリシー</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2">SNS</h4>
                    <ul className="space-y-1">
                        <li><a href="https://twitter.com" target="_blank">X（旧Twitter）</a></li>
                        <li><a href="https://github.com" target="_blank">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-xs text-gray-400 pb-4">
                © 2025 Fxxking English. All rights reserved.
            </div>
        </footer>
    );
}
