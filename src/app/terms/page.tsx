'use client';

import Link from 'next/link';

export default function TermsPage() {
    return (
        <div>
            <div className='max-w-3xl'>
                <h1 className="text-3xl font-bold mb-4">利用規約</h1>
                <hr className='my-2' />
                <p className="mb-4">
                    本サービスは、ネット上に存在する絶対に教材に載せられないような<strong>下品・攻撃的・過激なコピペ</strong>やスラングを共有することを目的とした、文化アーカイブ／エンタメコンテンツです。
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">1. ”表現の自由”と”ユーモア”</h2>
                <p className="mb-4">
                    本サービスには<strong>汚い言葉・暴力的表現・煽り・誹謗中傷</strong>が含まれます。
                    これはそれらの言葉や価値観を支持・推奨するものではなく、<strong>インターネット文化の一側面として楽しむ</strong>ために掲載しています。<br /><br />
                    <strong className=''>
                        ブラックジョークを楽しむことを是としたサービスですが、以下の話題については禁止とします。
                    </strong>
                    <li>特定の戦争、紛争に関する内容</li>
                    <li>自然災害を茶化すような内容</li>
                    <li>人種や性的少数派への差別や揶揄</li>
                    <li>自傷・自殺・精神疾患の揶揄</li>
                    <li>テロ行為・犯罪行為の美化</li>
                    <li>実在する個人・団体への攻撃</li>
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">2. 実害・悪用の禁止</h2>
                <p className="mb-4">
                    掲載されている内容を基に、<strong>特定の個人や団体に対する攻撃・嫌がらせ・誹謗中傷・差別・脅迫などに利用する行為は禁止</strong>です。<br />
                    なお、それに準ずる内容のコピペを投稿することも原則禁止します。投稿する場合は伏字や誰かわからないように心がけてください。<br />
                    もし上記に反する書き込みを発見した場合、投稿を削除させていただきます。<br />
                    「楽しむ」ことと「人を傷つける」ことは全く別です。<br />
                    ブラックジョークやレスバトルを<strong>外側から</strong>眺めて笑う、当事者にならないようそれくらいの距離感を守ってください。
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-2">3. 免責事項</h2>
                <p className="mb-4">
                    本サービスのコンテンツ利用により発生したいかなるトラブル・損害について、運営は一切責任を負いません。<br />
                    利用者はあくまで<strong>自己責任で</strong>楽しんでください。<br />
                    最後までお読みいただきありがとうございました。
                </p>

                <div className="mt-8 text-center">
                    <Link href="/" className="text-blue-500 hover:text-blue-700">
                        ホームに戻る
                    </Link>
                </div>
            </div>
        </div>
    );
}
