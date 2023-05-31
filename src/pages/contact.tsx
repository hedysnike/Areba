import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
    return (
      <div className="h-auto min-h-screen text-black">
        <h1 className="flex items-center justify-center mt-40 text-xl">დაგვიკავშირდით ელ-ფოსტაზე: <span className="inline-block text-[#FF7600]" >info@areba.ge</span></h1>
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