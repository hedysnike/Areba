import { MobileProfile } from "@/components/mobileprofile";
import { ProfilePage } from "@/components/profilepage";
import { Layout } from "@/hooks/Layout";
import { MobileLayout } from "@/hooks/MLayout";
import { GetServerSideProps } from "next";


export default function Login({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      {isMobile ? (
        <MobileLayout>
          <MobileProfile />
        </MobileLayout>
      ) : (
        <Layout>
          <ProfilePage />
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
