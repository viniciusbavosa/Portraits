import { lazy, Suspense } from "react";
import Description from "~/layout/Description";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";
import Loading from "~/layout/Loading";
import Photos from "~/layout/Photos";
const MainContainer = lazy(() => import('~/layout/MainContainer'));


export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <MainContainer>
        <Header />
        <Description />
        <Photos />
        <Footer />
      </MainContainer>
    </Suspense>
  );
}