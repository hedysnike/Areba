import { GetServerSideProps } from "next";
import { MobileIndex } from "@/components/mobilecomponents/mobileindex";
import { DesktopIndex } from "@/components/desktopcomponents/desktopIndex";
import { Layout } from "@/hooks/Layout";
import { MobileLayout } from "@/hooks/MLayout";

export default function Home({ isMobile }: { isMobile: boolean }) {
  console.log(isMobile);

  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <MobileIndex />
        </MobileLayout>
      ) : (
        <Layout>
          <DesktopIndex />
        </Layout>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const isMobile = context.req.headers["user-agent"]?.includes("Mobile");
  console.log(isMobile);

  return {
    props: {
      isMobile,
    },
  };
};
