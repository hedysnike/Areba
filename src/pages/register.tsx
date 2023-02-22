import { Layout } from "@/hooks/Layout";
import { MobileLayout } from "@/hooks/MLayout";
import { GetServerSideProps } from "next";
import { RegisterPage } from "@/components/registerpage";


export default function Profile({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <RegisterPage />
        </MobileLayout>
      ) : (
        <Layout>
          <RegisterPage />
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
