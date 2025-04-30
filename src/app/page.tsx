'use client';

import Link from 'next/link';


export default function Home() {


  return (
    <div>

      <div className="min-h-screen bg-white text-gray-800">
        {/* ヒーロー */}
        <section className="bg-gray-100 py-20 text-center">
          <div className='mb-4'>
            <h1 className="text-4xl font-bold ">💀CursEnglish💀</h1>
            <div className='-mt-1'>
              <small className='text-gray-500'>Cursed×English</small>
            </div>
          </div>
          <p className="text-lg mx-auto">
            海外の終わってるコピペで、英語が読めるようになるサービス。
          </p>

          {/* CTA */}
          <Link href="/copypasta" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            コピペ一覧
          </Link>
        </section>

        {/* 特徴 */}
        <section className=" mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2 className="text-xl font-semibold mb-2">英語原文＆日本語訳</h2>
            <p>1行ごとに日本語ルビが振ってあるので読みやすい😬</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">単語・スラング解説</h2>
            <p>FワードやSワードだけ煽りを身に着けよう🤏🏻</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">らくらく投稿卍</h2>
            <p>気に入ったコピペを自分でも投稿できるよ♪</p>
          </div>
        </section>

        <section className='text-center py-16'>
          <p>過激な表現がありますので、利用規約をご一読ください。</p>
          <Link href={"/terms"} className='bg-blue-500 p-4 rounded-lg mt-2 inline-block'>
            利用規約を読む
          </Link>
        </section>

        <section className='flex justify-center'>
          <div>

            <div className='w-full bg-gray-100 h-fit text-center py-2 '>
              <h2 className='text-xl font-semibold my-2'>おすすめサイト</h2>
              <a href="https://www.4chan.org/" className='text-blue-500  hover:text-blue-800  '>4Chan(すべての元凶)</a><br />
              <a href="https://knowyourmeme.com/" className='text-blue-500  hover:text-blue-800  '>Know Your Meme</a><br />
              <a href="https://www.reddit.com/r/memes/" className='text-blue-500  hover:text-blue-800  '>Reddit(ミーム)</a><br />
              <a href="https://www.reddit.com/r/dankmemes/" className='text-blue-500  hover:text-blue-800  '>Reddit(ダークミーム)</a><br />

            </div>
          </div>

        </section>


      </div>


    </div>
  );
}
