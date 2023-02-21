import { Layout } from "@/hooks/Layout";
import { MobileLayout } from "@/hooks/MLayout";
import { LoginPage } from "@/components/login";
import { GetServerSideProps } from "next";


export default function Login({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <LoginPage />
        </MobileLayout>
      ) : (
        <Layout>
          <LoginPage />
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
