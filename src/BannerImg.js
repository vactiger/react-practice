
function BannerImg(props) {
  // 傳入 bannerImage 作為圖片的 src
  const { bannerImage } = props;
  // console.log(bannerImage);

  return (
    <img src={bannerImage} alt="banner-img" className="img-fluid" />
  );
}

export default BannerImg;