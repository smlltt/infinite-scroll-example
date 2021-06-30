import UnsplashImage from "./Components/UnsplashImage";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import UnsplashApi from "./UnsplashApi";
import { useEffect, useState } from "react";
import { ImgsWrapper, ContentWrapper } from "./styles";
import InfiniteScroll from "react-infinite-scroll-component";

export default function App() {
  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetchImgs();
  }, []);

  const fetchImgs = async () => {
    const newImgs = await UnsplashApi.getPhotos();
    setImgs([...imgs, ...newImgs.data]);
  };

  const mappedImgs = imgs.map((img, index) => (
    <UnsplashImage url={img.urls.thumb} key={index} />
  ));

  return (
    <div className="App">
      <Header />
      <InfiniteScroll
        dataLength={imgs.length}
        next={fetchImgs}
        hasMore={true}
        loader={<Loader />}
      >
        <ContentWrapper>
          <ImgsWrapper>{mappedImgs}</ImgsWrapper>
        </ContentWrapper>
      </InfiniteScroll>
    </div>
  );
}
