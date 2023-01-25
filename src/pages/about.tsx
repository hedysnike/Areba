import { Layout } from "@/hooks/Layout";

export default function About() {
    return (
      <div className="min-h-screen h-auto text-black mr-auto ml-auto w-3/4">
        <div>
          <h1 className="my-11 text-3xl">ჩვენს შესახებ</h1>
          <div className="text-[#333333] text-sm">
            <span className="font-bold inline-block"> „არება“</span>
              წარმოადგენს საინფორმაციო და დამხმარე ვებ-პორტალს, რომლის უმთავრესი მიზანია ავტო მომსახურების გარემოს
              გაუმჯობესება. დინამიური განვითარების უზრუნველსაყოფად, ჩვენი გუნდი აერთიანებს სამ კომპონენტს:
          </div>
          <ul className="text-[#333333] my-4 list-disc text-xs">
            <li>რეალურ ფასს;</li>
            <li>ხარისხს;</li>
            <li>პროცესის გამჭვირვალეობას;</li>
          </ul>
          <span className="text-[#333333] text-sm">
            ჩვენი პირველი ნაბიჯი საქართველოს ბაზარზე წარმოადგენს „სპეციალისტის“ მომსახურებას, რომლის მიზანია ხელი შეუწყოს
            ხელოსანს და მომხმარებელს საუკეთესო გადაწყვეტილების მიღებაში, რასაც ნათლად გამოხატავს ჩვენი სლოგანი{" "}
            <span className="inline-block font-bold text-black">«ჩვენი დრო თქვენი სარგებელია“.</span>
          </span>
        </div>
      </div>
    );
  }

About.Layout = Layout;