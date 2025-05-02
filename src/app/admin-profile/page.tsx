export default function Home() {
    const birthdate = new Date(2003, 9, 14)
    const nowDate = new Date();
    const check = (nowDate.getMonth() - birthdate.getMonth()) > 0 ? 0 : 1;
    const age = nowDate.getFullYear() - birthdate.getFullYear() - check;

    return (
        <div className="w-full p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Profile</h1>
            <h2 className="text-2xl font-bold mb-2">自己紹介</h2>
            <div className="mb-6 pl-2">

                <p>
                    こんちには！2003年生まれの{age}歳です。
                    <br />
                    普段はウェブエンジニアとして働いてます😬。<br />

                </p>
            </div>

            <h2 className="text-2xl font-bold mb-2">来歴</h2>
            <div className="mb-6 pl-2">

                <div className="flex">
                    <p className="w-22 ml-2 mb-6">
                        2019 / 4 / ~
                    </p>
                    <p>某私立高校 入学</p>
                </div>

                <div className="flex">
                    <p className="w-22 ml-2 mb-6">
                        2022 / 3 / ~
                    </p>
                    <p>宅浪→大失敗</p>
                </div>
                <div className="flex">
                    <p className="w-22 ml-2 mb-6">
                        2023 / 4 / ~
                    </p>
                    <p>専門学校 入学</p>
                </div>
                <div className="flex">
                    <p className="w-22 ml-2 mb-6">
                        2023 / 6 / ~
                    </p>
                    <p>アニメグッズ取扱店 アルバイト</p>
                </div>
                <div className="flex">
                    <p className="w-22 ml-2 mb-6">
                        2025 / 4 / ~
                    </p>
                    <p>SES企業 二日で退職</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-2">連絡先</h2>
            <div className="flex">

                <p>
                    <a href="https://x.com/zakomushoku" target="_blank" className="text-indigo-400">Twitter</a>

                </p>
            </div>
        </div>
    );
}
