
const questions = [

    {
        question: "テケテケテケですか？",
        answer: "フンフーン！！！（拍手喝采）"

    },
    {
        question: "正直質問ありませんよね？",
        answer: "はい。"

    }
]


export default function Home() {

    return (
        <div className="w-full">
            <h1 className="text-3xl font-bold mb-6">よくある質問</h1>

            {questions.map((question, index) => (
                <div key={index} className="my-6">

                    <h2 className="text-2xl font-bold mb-2">Q.{question.question}</h2>
                    <div className="flex">
                        <p>A.</p>
                        <p className="">{question.answer} </p>
                    </div>
                </div>


            ))}



        </div>
    );
}
