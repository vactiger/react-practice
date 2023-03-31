// import bannerImage from './img/banner/banner-image.png';
import bannerImage from './img/banner/coding.jpg';
import Button from './Button';
import BannerImg from './BannerImg';

function SiteBanner() {
  return (
    <section className="site-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 site-title">
            <h3 className="title-text">Hey</h3>
            <h1 className="title-text text-uppercase">I am Akshay</h1>
            <h4 className="title-text text-uppercase">Senior Wordpress Developer</h4>
            <div className="site-buttons">
              <div className="d-flex flex-row flex-wrap">
                {/* 按鈕有二個屬性：內容文字 value、按鈕顏色 class */}
                <Button inputValue={['hire me', 'primary-button']} />
                <Button inputValue={['Get cv', 'secondary-button']} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 banner-image">
            <BannerImg bannerImage={bannerImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SiteBanner;