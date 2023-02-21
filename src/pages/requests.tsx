import { RequestsPage } from "@/components/requestspage";
import { Layout } from "@/hooks/Layout";
import { MobileLayout } from "@/hooks/MLayout";
import { GetServerSideProps } from "next";

export default function Requests({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <RequestsPage />
        </MobileLayout>
      ) : (
        <Layout>
          <RequestsPage />
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
