import { Layout } from "@/hooks/Layout";
import { MobileLayout } from "@/hooks/MLayout";
import { GetServerSideProps } from "next";
import { AddPage } from "@/components/addpage";


export default function Login({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <AddPage />
        </MobileLayout>
      ) : (
        <Layout>
          <AddPage />
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
