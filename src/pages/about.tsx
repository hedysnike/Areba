import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
    return (
      <div className="w-3/4 h-auto min-h-screen ml-auto mr-auto text-black">
        <div>
          <h1 className="text-3xl my-11">ჩვენს შესახებ</h1>
          <div className="text-[#333333] text-sm">
            <span className="inline-block font-bold"> „არება“</span>
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


  export async function getStaticProps({ locale }: { locale: any }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ["common", "footer"])),
      },
    };
  }