import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

// Import all images
import product1 from './images/product/1.png';
import product2 from './images/product/2.png';
import product3 from './images/product/3.png';
import product4 from './images/product/4.png';

import suntekLogo from './images/suntek.png';

// Import field images for usage areas slider
import tarimImage from './images/fields/tarim.png';
import hayvancilikImage from './images/fields/hayvancilik.png';
import kapaliImage from './images/fields/kapali.png';
import gidaImage from './images/fields/gida.png';

// Import slider images
import slider1 from './images/slider/1.png';
import slider2 from './images/slider/2.png';
import slider3 from './images/slider/3.png';
import slider4 from './images/slider/4.png';
import slider5 from './images/slider/5.png';

const translations = {
  tr: {
    nav: [
      { to: '/anasayfa', label: 'Ana Sayfa' },
      { to: '/urun', label: 'Teknolojimiz' },
      { to: '/kullanim-alanlari', label: 'Kullanım Alanları' },
      { to: '/hakkimizda', label: 'Hakkımızda' },
      { to: '/sss', label: 'SSS' },
      { to: '/iletisim', label: 'İletişim' },
    ],
    sloganMain: 'GREENSY',
    sloganSubtitle: 'Gelecek Bize Emanet',
    tanitim: 'Toprağa, Havaya ve Yaşama Hayat Veren Dönüşüm Teknolojisi',
    incele: 'İncele',
  },
  en: {
    nav: [
      { to: '/anasayfa', label: 'Home' },
      { to: '/urun', label: 'Our Technology' },
      { to: '/kullanim-alanlari', label: 'Areas of Use' },
      { to: '/hakkimizda', label: 'About' },
      { to: '/sss', label: 'FAQ' },
      { to: '/iletisim', label: 'Contact' },
    ],
    sloganMain: 'GREENSY',
    sloganSubtitle: 'The Future is Entrusted to Us',
    tanitim: 'Transformation Technology Giving Life to Soil, Air and Life',
    incele: 'Explore',
  }
};

const AnaSayfa = ({ lang, translations }) => (
  <div className="anasayfa-hero">
    <video
      className="anasayfa-video"
      src="https://videos.pexels.com/video-files/5170597/5170597-hd_1920_1080_24fps.mp4"
      autoPlay
      loop
      muted
      playsInline
      poster="https://images.pexels.com/videos/2491282/free-video-2491282.jpg"
    />
    <div className="anasayfa-gradient"></div>
    <div className="anasayfa-overlay anasayfa-overlay--centered">
      <h1 className="anasayfa-slogan-v2">
        <span className="slogan-main">{translations[lang].sloganMain}</span>
      </h1>
      <div className="anasayfa-subtitle">
        {translations[lang].sloganSubtitle}
      </div>
      <div className="anasayfa-tanitim-v2">
        {translations[lang].tanitim}
      </div>
      <Link to="/urun" className="anasayfa-incele-btn-v2">
        {translations[lang].incele}
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </Link>
    </div>
  </div>
);

const Urun = ({ lang }) => {
  const [currentSliderSlide, setCurrentSliderSlide] = useState(0);
  const sliderRef = useRef(null);

  const sliderImages = [slider1, slider2, slider3, slider4, slider5];

  const goToSliderSlide = (slideIndex) => {
    setCurrentSliderSlide(slideIndex);
    if (sliderRef.current) {
      const track = sliderRef.current.querySelector('.slider-track');
      if (track) {
        track.style.transform = `translateX(-${slideIndex * 20}%)`;
      }
    }
  };

  const nextSliderSlide = () => {
    const nextSlide = (currentSliderSlide + 1) % sliderImages.length;
    goToSliderSlide(nextSlide);
  };

  const prevSliderSlide = () => {
    const prevSlide = (currentSliderSlide - 1 + sliderImages.length) % sliderImages.length;
    goToSliderSlide(prevSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSliderSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSliderSlide]);

  return (
  <div className="urun-page">

    {/* Hero Section */}
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">GREENSY</span>
            <span className="title-subtitle">{lang === 'tr' ? 'Negatif İyon Jeneratörü' : 'Negative Ion Generator'}</span>
          </h1>
          <p className="hero-description">
            {lang === 'tr' 
              ? 'Toprağa, Havaya ve Yaşama Hayat Veren Dönüşüm Teknolojisi'
              : 'Transformation Technology Giving Life to Soil, Air and Life'
            }
          </p>
        </div>
        <div className="hero-visual">
          <div className="product-showcase">
            <img src={product1} alt="GREENSY" className="product-image" />
          </div>
        </div>
      </div>
    </section>



    {/* Introduction Section */}
    <section className="intro-section">
      <div className="container">
        <div className="intro-content">
          <div className="intro-header">
            <div className="intro-icon"></div>
            <h2 className="section-title">
              {lang === 'tr' ? 'Doğadan İlham Alan Güç' : 'Power Inspired by Nature'}
            </h2>
            <div className="intro-divider"></div>
          </div>
          
          <p className="intro-text">
            {lang === 'tr' 
              ? 'Hiç doğanın kendi dengesini nasıl koruduğunu düşündünüz mü?'
              : 'Have you ever wondered how nature maintains its own balance?'
            }
          </p>
          
          <div className="nature-elements">
            <div className="nature-element">
              <div className="element-icon">🌲</div>
              <div className="element-content">
                <h3>{lang === 'tr' ? 'Orman Havası' : 'Forest Air'}</h3>
                <p>{lang === 'tr' ? 'Neden bu kadar ferah gelir?' : 'Why does it feel so refreshing?'}</p>
              </div>
            </div>
            <div className="nature-element">
              <div className="element-icon">⚡</div>
              <div className="element-content">
                <h3>{lang === 'tr' ? 'Fırtına Sonrası' : 'After Storm'}</h3>
                <p>{lang === 'tr' ? 'Hava neden daha temiz hissedilir?' : 'Why does the air feel cleaner?'}</p>
              </div>
            </div>
            <div className="nature-element">
              <div className="element-icon">💧</div>
              <div className="element-content">
                <h3>{lang === 'tr' ? 'Şelale Havası' : 'Waterfall Air'}</h3>
                <p>{lang === 'tr' ? 'Neden daha enerjik ve canlandırıcıdır?' : 'Why is it more energetic and invigorating?'}</p>
              </div>
            </div>
          </div>
          
          <div className="reveal-box">
            <div className="reveal-content">
              <p>
                {lang === 'tr' 
                  ? 'Bu soruların yanıtı negatif iyonlarda saklıdır.'
                  : 'The answer to these questions lies in negative ions.'
                }
              </p>
              <p>
                {lang === 'tr' 
                  ? 'Ve biz, doğanın bu arındırıcı gücünü şimdi size GREENSY ile sunuyoruz.'
                  : 'And we now offer you this purifying power of nature with GREENSY.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* What is GREENSY */}
    <section className="what-section">
      <div className="container">
        <div className="what-content">
          <div className="what-text">
            <h2 className="section-title">
              {lang === 'tr' ? '💡 GREENSY Nedir?' : '💡 What is GREENSY?'}
            </h2>
            <p className="what-description">
              {lang === 'tr' 
                ? 'GREENSY, doğadaki şelale, fırtına, orman gibi ortamlarda doğal olarak oluşan negatif iyonları, soğuk plazma teknolojisi ile kontrollü biçimde ortama yayan yenilikçi bir çözümdür.'
                : 'GREENSY is an innovative solution that naturally generates negative ions in environments like waterfalls, storms, and forests, and distributes them into the environment in a controlled manner using cold plasma technology.'
              }
            </p>
            <div className="emphasis-box">
              <p>{lang === 'tr' ? 'Ama o sadece bir cihaz değil;' : 'But it\'s not just a device;'}</p>
              <p>
                {lang === 'tr' 
                  ? 'GREENSY, toprağı canlandıran, bitkileri güçlendiren, hayvanları rahatlatan ve havayı temizleyen bütünsel bir ekosistem teknolojisidir.'
                  : 'GREENSY is a holistic ecosystem technology that revitalizes soil, strengthens plants, relaxes animals, and purifies air.'
                }
              </p>
            </div>
          </div>
          <div className="what-visual">
            <img src={product2} alt="GREENSY Technology" className="tech-image" />
            <div className="tech-overlay">
              <div className="tech-spec">
                <span className="spec-label">{lang === 'tr' ? 'Teknoloji' : 'Technology'}</span>
                <span className="spec-value">{lang === 'tr' ? 'Soğuk Plazma' : 'Cold Plasma'}</span>
              </div>
              <div className="tech-spec">
                <span className="spec-label">{lang === 'tr' ? 'Güvenlik' : 'Safety'}</span>
                <span className="spec-value">{lang === 'tr' ? 'CE Sertifikalı' : 'CE Certified'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="benefits-section">
      <div className="container">
        <h2 className="section-title">
          {lang === 'tr' ? 'GREENSY\'nin Faydaları' : 'Benefits of GREENSY'}
        </h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <div className="benefit-icon">🌱</div>
            <h3>{lang === 'tr' ? 'Tarımda GREENSY\'nin Katkıları' : 'GREENSY\'s Contributions to Agriculture'}</h3>
            <ul className="benefit-list">
              <li>{lang === 'tr' ? 'Daha az kimyasal kullanımıyla doğal üretim' : 'Natural production with less chemical use'}</li>
              <li>{lang === 'tr' ? 'Güçlü kök gelişimi, hızlı çimlenme' : 'Strong root development, rapid germination'}</li>
              <li>{lang === 'tr' ? 'Daha canlı yapraklar ve yüksek verim' : 'More vibrant leaves and high yield'}</li>
              <li>{lang === 'tr' ? 'Kimyasal kalıntı içermeyen sağlıklı ürünler' : 'Healthy products without chemical residues'}</li>
            </ul>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🐔</div>
            <h3>{lang === 'tr' ? 'Hayvancılıkta Sağladığı Avantajlar' : 'Advantages in Livestock Farming'}</h3>
            <ul className="benefit-list">
              <li>{lang === 'tr' ? 'Amonyak (NH₃) ve karbon dioksit (CO₂) seviyelerinde düşüş' : 'Reduction in ammonia (NH₃) and carbon dioxide (CO₂) levels'}</li>
              <li>{lang === 'tr' ? 'Hayvanlarda stresin azalması, bağışıklık sisteminin güçlenmesi' : 'Reduced stress in animals, strengthened immune system'}</li>
              <li>{lang === 'tr' ? 'Solunum kalitesinin artması, ölüm oranlarının düşmesi' : 'Improved respiratory quality, reduced mortality rates'}</li>
              <li>{lang === 'tr' ? 'Et ve süt kalitesinde gözle görülür iyileşme' : 'Visible improvement in meat and milk quality'}</li>
            </ul>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">👪</div>
            <h3>{lang === 'tr' ? 'Ev ve Kapalı Alanlarda Kullanımı' : 'Use in Homes and Indoor Spaces'}</h3>
            <ul className="benefit-list">
              <li>{lang === 'tr' ? 'Havadaki toz, bakteri, alerjen ve kötü kokuların azaltılması' : 'Reduction of dust, bacteria, allergens and bad odors in the air'}</li>
              <li>{lang === 'tr' ? 'Daha temiz ve taze bir solunum ortamı' : 'Cleaner and fresher breathing environment'}</li>
              <li>{lang === 'tr' ? 'Zihinsel rahatlama ve odaklanmada artış' : 'Increased mental relaxation and focus'}</li>
              <li>{lang === 'tr' ? 'Kimyasal içermeyen, doğal hava kalitesi' : 'Chemical-free, natural air quality'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* How it Works */}
    <section className="how-section">
      <div className="container">
        <div className="how-content">
                      <h2 className="section-title">
              {lang === 'tr' ? 'Nasıl Çalışır?' : 'How Does It Work?'}
            </h2>
          
          <div className="how-process">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>{lang === 'tr' ? 'İyonizasyon Süreci' : 'Ionization Process'}</h3>
                <p>
                  {lang === 'tr' 
                    ? 'GREENSY, havadaki oksijen moleküllerine düşük akımlı, yüksek voltajlı bir elektrik alan uygular.'
                    : 'GREENSY applies a low-current, high-voltage electric field to oxygen molecules in the air.'
                  }
                </p>

              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>{lang === 'tr' ? 'Negatif İyon Üretimi' : 'Negative Ion Production'}</h3>
                <p>
                  {lang === 'tr' 
                    ? 'Bu işlem sonucunda negatif iyonlar (O⁻, OH⁻ vb.) oluşur.'
                    : 'As a result of this process, negative ions (O⁻, OH⁻, etc.) are formed.'
                  }
                </p>

              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>{lang === 'tr' ? 'Ortama Yayılım' : 'Environmental Distribution'}</h3>
                <p>
                  {lang === 'tr' 
                    ? 'Üretilen iyonlar ortama yayılır ve zararlı gazlarla etkileşime girerek havayı arındırır.'
                    : 'The produced ions spread into the environment and interact with harmful gases to purify the air.'
                  }
                </p>

              </div>
            </div>
          </div>
          
          <div className="how-visual">
            <img src={product3} alt="GREENSY Working Principle" className="how-image" />
            <div className="how-overlay">
              <div className="tech-info">
                <div className="tech-item">
                  <span className="tech-label">{lang === 'tr' ? 'Teknoloji' : 'Technology'}</span>
                  <span className="tech-value">{lang === 'tr' ? 'Soğuk Plazma' : 'Cold Plasma'}</span>
                </div>
                <div className="tech-item">
                  <span className="tech-label">{lang === 'tr' ? 'Güvenlik' : 'Safety'}</span>
                  <span className="tech-value">{lang === 'tr' ? 'CE Sertifikalı' : 'CE Certified'}</span>
                </div>
                <div className="tech-item">
                  <span className="tech-label">{lang === 'tr' ? 'Verimlilik' : 'Efficiency'}</span>
                  <span className="tech-value">{lang === 'tr' ? '%99.9' : '99.9%'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Safety & Sustainability */}
    <section className="safety-section">
      <div className="container">
        <div className="safety-grid">
          <div className="safety-card">
            <div className="card-header">
              <div className="card-icon">⚙️</div>
              <h3>{lang === 'tr' ? 'Teknoloji ve Güvenlik' : 'Technology and Safety'}</h3>
            </div>
            <ul className="safety-list">
              <li>🔬 {lang === 'tr' ? 'Soğuk plazma iyonizasyon teknolojisi' : 'Cold plasma ionization technology'}</li>
              <li>🛡️ {lang === 'tr' ? 'CE sertifikalı, test edilmiş ve güvenli' : 'CE certified, tested and safe'}</li>
              <li>❌ {lang === 'tr' ? 'Ozon üretmez, kimyasal salınım yapmaz' : 'Does not produce ozone, does not emit chemicals'}</li>
              <li>👨‍👩‍👧‍👦 {lang === 'tr' ? 'İnsan, hayvan ve bitki sağlığına %100 uyumludur' : '100% compatible with human, animal and plant health'}</li>
            </ul>
          </div>
          <div className="sustainability-card">
            <div className="card-header">
              <div className="card-icon">♻️</div>
              <h3>{lang === 'tr' ? 'Sürdürülebilir Bir Gelecek İçin' : 'For a Sustainable Future'}</h3>
            </div>
            <ul className="sustainability-list">
              <li>{lang === 'tr' ? 'Toprakta toksik birikimi azaltır' : 'Reduces toxic accumulation in soil'}</li>
              <li>{lang === 'tr' ? 'Tarımsal kaynaklı su ve hava kirliliğini düşürür' : 'Reduces agricultural water and air pollution'}</li>
              <li>{lang === 'tr' ? 'Karbon ayak izini küçültür' : 'Reduces carbon footprint'}</li>
              <li>{lang === 'tr' ? 'Kimyasal bağımlılığı azaltır, doğanın dengesini destekler' : 'Reduces chemical dependency, supports nature\'s balance'}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="cta-section">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-text">
            <h2 className="cta-title" style={{fontFamily: "'Birthstone', cursive", fontStyle: 'normal', fontWeight: '400'}}>{lang === 'tr' ? 'Gelecek Bize Emanet' : 'The Future is Entrusted to Us'}</h2>
            <p className="cta-description">
              {lang === 'tr' 
                ? 'GREENSY, sadece bugünün değil; yarının da sağlıklı, verimli ve çevre dostu üretim modeli için geliştirilmiştir.'
                : 'GREENSY is developed not only for today but also for tomorrow\'s healthy, efficient and environmentally friendly production model.'
              }
            </p>
            <p className="cta-subdescription">
              {lang === 'tr' 
                ? 'Eğer doğayla uyumlu, sürdürülebilir ve yenilikçi bir çözüm arıyorsanız, GREENSY doğru adrestir.'
                : 'If you are looking for a nature-compatible, sustainable and innovative solution, GREENSY is the right address.'
              }
            </p>
          </div>
          <div className="cta-visual">
            <img src={product4} alt="GREENSY Future" className="future-image" />
          </div>
        </div>
      </div>
    </section>

    {/* Gallery Section */}
    <section className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="gallery-title">{lang === 'tr' ? 'Seramızdan Görüntüler' : 'Images from Our Factory'}</h2>
        </div>
        <div className="slider-container" ref={sliderRef}>
          <div className="slider-wrapper">
            <div className="slider-track">
              {sliderImages.map((image, index) => (
                <div key={index} className="slider-slide">
                  <img src={image} alt={`GREENSY Gallery ${index + 1}`} />
                </div>
              ))}
            </div>
            <button 
              className="slider-arrow slider-arrow-left" 
              onClick={prevSliderSlide}
              aria-label="Previous slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              className="slider-arrow slider-arrow-right" 
              onClick={nextSliderSlide}
              aria-label="Next slide"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="slider-dots">
            {sliderImages.map((_, index) => (
              <span 
                key={index}
                className={`dot ${currentSliderSlide === index ? 'active' : ''}`}
                onClick={() => goToSliderSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>


  </div>
  );
};
const KullanimAlanlari = ({ lang }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Content data for each slide
  const slideContent = {
    tr: [
      {
        title: "Tarım",
        subtitle: "Sürdürülebilir Tarım Teknolojisi",
        description: "GREENSY, modern tarımda devrim yaratıyor. Negatif iyon teknolojisi ile bitkilerin doğal bağışıklık sistemini güçlendirir, kimyasal kullanımını minimize eder ve verimliliği artırır.",
        image: tarimImage
      },
      {
        title: "Hayvancılık", 
        subtitle: "Hayvan Sağlığı ve Verimlilik",
        description: "Kapalı hayvancılık tesislerinde GREENSY, amonyak ve karbon dioksit gibi zararlı gazları nötralize ederek hayvan sağlığını korur ve üretim verimliliğini artırır.",
        image: hayvancilikImage
      },
      {
        title: "Kapalı Alanlar",
        subtitle: "Doğal Hava Kalitesi",
        description: "Kentsel ve kapalı ortamlarda GREENSY, orman havasının ferahlığını günlük yaşama getirir. Alerjenleri, tozu ve zararlı mikroorganizmaları nötralize eder.",
        image: kapaliImage
      },
      {
        title: "Gıda Endüstrisi",
        subtitle: "Hijyen ve Güvenlik",
        description: "Gıda üretim ortamlarında hava kalitesi kritik öneme sahiptir. GREENSY hijyeni destekler, kontaminasyon riskini azaltır ve raf ömrünü doğal olarak uzatır.",
        image: gidaImage
      }
    ],
    en: [
      {
        title: "Agriculture",
        subtitle: "Sustainable Agriculture Technology", 
        description: "GREENSY is revolutionizing modern agriculture. With negative ion technology, it strengthens plants' natural immune systems, minimizes chemical use, and increases productivity.",
        image: tarimImage
      },
      {
        title: "Livestock",
        subtitle: "Animal Health and Productivity",
        description: "In enclosed livestock facilities, GREENSY neutralizes harmful gases such as ammonia and carbon dioxide, protecting animal health and increasing production efficiency.",
        image: hayvancilikImage
      },
      {
        title: "Indoor Spaces",
        subtitle: "Natural Air Quality",
        description: "In urban and indoor environments, GREENSY brings the freshness of forest air into everyday life. It neutralizes allergens, dust, and harmful microorganisms.",
        image: kapaliImage
      },
      {
        title: "Food Industry",
        subtitle: "Hygiene and Safety",
        description: "Air quality is critical in food production environments. GREENSY supports hygiene, reduces contamination risk, and extends shelf life naturally.",
        image: gidaImage
      }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      const track = sliderRef.current.querySelector('.slider-track');
      if (track) {
        track.style.transform = `translateX(-${currentSlide * 25}%)`;
      }
    }
  }, [currentSlide]);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const currentContent = slideContent[lang][currentSlide];

  return (
    <div className="areas-page">
      {/* Main Content Section */}
      <section className="areas-main-section">
        <div className="container">
          <div className="areas-main-content">
            {/* Left Side - Text Content */}
            <div className="areas-text-content">
              <div className="content-card">
                <h2 className="content-title">{currentContent.title}</h2>
                <h3 className="content-subtitle">{currentContent.subtitle}</h3>
                <p className="content-description">{currentContent.description}</p>
              </div>
            </div>

            {/* Right Side - Slider */}
            <div className="areas-slider-container">
              <div className="slider-wrapper">
                <div className="slider-container" ref={sliderRef}>
                  <button 
                    className="slider-arrow slider-arrow-left" 
                    onClick={() => goToSlide((currentSlide - 1 + 4) % 4)}
                    aria-label="Previous slide"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <div className="slider-track">
                    {slideContent[lang].map((slide, index) => (
                      <div key={index} className="slider-slide">
                        <img src={slide.image} alt={slide.title} />
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    className="slider-arrow slider-arrow-right" 
                    onClick={() => goToSlide((currentSlide + 1) % 4)}
                    aria-label="Next slide"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                
                <div className="slider-dots">
                  {slideContent[lang].map((_, index) => (
                    <span 
                      key={index}
                      className={`dot ${currentSlide === index ? 'active' : ''}`} 
                      onClick={() => goToSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const Hakkimizda = ({ lang }) => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <h1 className="about-hero-title">
              {lang === 'tr' ? (
                <>
                  <span className="green-text">Bilim ve Doğayı</span>
                  <br />
                  <span className="white-text">Buluşturan Güç</span>
                </>
              ) : (
                <>
                  <span className="green-text">The Power That</span>
                  <br />
                  <span className="white-text">Unites Science and Nature</span>
                </>
              )}
            </h1>
            <p className="about-hero-description">
              {lang === 'tr' 
                ? 'Sun-Tek Ekoloji, doğanın gücünü bilimle birleştirerek sürdürülebilir bir gelecek için çalışır. GREENSY teknolojimiz, negatif iyonların doğal arındırıcı etkisini modern yaşamın her alanına taşır.'
                : 'Sun-Tek Ecology works for a sustainable future by combining the power of nature with science. Our GREENSY technology brings the natural purifying effect of negative ions to every area of modern life.'
              }
            </p>
          </div>
          <div className="about-hero-visual">
            <img src={suntekLogo} alt="Sun-Tek Logo" className="suntek-logo" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <h2 className="section-title">
              {lang === 'tr' ? 'Hikayemiz' : 'Our Story'}
            </h2>
            
            <div className="story-text">
              <p>
                {lang === 'tr' 
                  ? 'Sun-Tek Ekoloji, doğanın kendi dengesini nasıl koruduğu sorusundan yola çıkarak kuruldu. Orman havasının ferahlığı, fırtına sonrası temizliği ve şelale havasının canlandırıcı etkisinin ardındaki bilimi araştırdık.'
                  : 'Sun-Tek Ecology was founded based on the question of how nature maintains its own balance. We researched the science behind the freshness of forest air, the cleanliness after storms, and the invigorating effect of waterfall air.'
                }
              </p>
              <p>
                {lang === 'tr' 
                  ? 'Bu araştırmalar bizi negatif iyonların gücüne götürdü. Doğanın bu arındırıcı gücünü modern teknolojiyle birleştirerek GREENSY\'yi geliştirdik.'
                  : 'This research led us to the power of negative ions. We developed GREENSY by combining this purifying power of nature with modern technology.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="about-purpose">
        <div className="container">
          <div className="purpose-content">
            <h2 className="section-title">
              {lang === 'tr' ? 'Amacımız' : 'Our Purpose'}
            </h2>
            
            <div className="purpose-intro">
              <p>
                {lang === 'tr' 
                  ? 'Günümüzde karşılaştığımız çevresel zorluklar, doğal çözümler gerektiriyor. GREENSY, bu zorluklara karşı doğanın kendi yöntemlerini kullanarak çözüm sunuyor.'
                  : 'The environmental challenges we face today require natural solutions. GREENSY offers solutions to these challenges using nature\'s own methods.'
                }
              </p>
            </div>
            
            <div className="challenges-grid">
              <div className="challenge-item">
                <div className="challenge-icon">🌾</div>
                <h3>{lang === 'tr' ? 'Tarımsal Verimlilik' : 'Agricultural Productivity'}</h3>
              </div>
              <div className="challenge-item">
                <div className="challenge-icon">🏭</div>
                <h3>{lang === 'tr' ? 'Hava Kalitesi' : 'Air Quality'}</h3>
              </div>
              <div className="challenge-item">
                <div className="challenge-icon">🐄</div>
                <h3>{lang === 'tr' ? 'Hayvan Sağlığı' : 'Animal Health'}</h3>
              </div>
              <div className="challenge-item">
                <div className="challenge-icon">🏠</div>
                <h3>{lang === 'tr' ? 'Yaşam Kalitesi' : 'Quality of Life'}</h3>
              </div>
            </div>
            
            <p className="purpose-conclusion">
              {lang === 'tr' 
                ? 'GREENSY, bu alanlarda doğal ve etkili çözümler sunarak, hem çevresel hem de ekonomik sürdürülebilirliği destekler.'
                : 'GREENSY supports both environmental and economic sustainability by offering natural and effective solutions in these areas.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="container">
          <div className="values-content">
            <h2 className="section-title">
              {lang === 'tr' ? 'Değerlerimiz' : 'Our Values'}
            </h2>
            
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">🔬</div>
                <h3>{lang === 'tr' ? 'Bilimsel Yaklaşım' : 'Scientific Approach'}</h3>
              </div>
              <div className="value-item">
                <div className="value-icon">🌱</div>
                <h3>{lang === 'tr' ? 'Sürdürülebilirlik' : 'Sustainability'}</h3>
              </div>
              <div className="value-item">
                <div className="value-icon">🤝</div>
                <h3>{lang === 'tr' ? 'Güvenilirlik' : 'Reliability'}</h3>
              </div>
              <div className="value-item">
                <div className="value-icon">💡</div>
                <h3>{lang === 'tr' ? 'İnovasyon' : 'Innovation'}</h3>
              </div>
            </div>
            
            <p className="values-conclusion">
              {lang === 'tr' 
                ? 'Bu değerler, her kararımızın ve her ürünümüzün temelini oluşturur. Müşterilerimizin güvenini kazanmak ve sürdürülebilir bir gelecek için çalışmak en önemli önceliğimizdir.'
                : 'These values form the foundation of every decision we make and every product we create. Gaining our customers\' trust and working for a sustainable future is our top priority.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-mission-vision">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h2 className="section-title">
                {lang === 'tr' ? 'Misyonumuz' : 'Our Mission'}
              </h2>
              <p className="mission-text">
                {lang === 'tr'
                  ? 'Doğanın arındırıcı gücünü modern teknolojiyle birleştirerek, insanların ve doğanın uyum içinde yaşayabileceği temiz ve sağlıklı ortamlar yaratmak.'
                  : 'To create clean and healthy environments where people and nature can live in harmony by combining nature\'s purifying power with modern technology.'
                }
              </p>
              <ul className="mission-list">
                <li>{lang === 'tr' ? 'Negatif iyon teknolojisini geliştirmek' : 'Develop negative ion technology'}</li>
                <li>{lang === 'tr' ? 'Sürdürülebilir çözümler sunmak' : 'Provide sustainable solutions'}</li>
                <li>{lang === 'tr' ? 'Yaşam kalitesini artırmak' : 'Improve quality of life'}</li>
              </ul>
            </div>
            
            <div className="vision-card">
              <h2 className="section-title">
                {lang === 'tr' ? 'Vizyonumuz' : 'Our Vision'}
              </h2>
              <p className="vision-text">
                {lang === 'tr'
                  ? 'GREENSY teknolojisini dünya çapında tanınan, güvenilir ve etkili bir çözüm haline getirerek, doğa dostu yaşamın standart haline gelmesine öncülük etmek.'
                  : 'To lead the way in making eco-friendly living the standard by making GREENSY technology a globally recognized, reliable, and effective solution.'
                }
              </p>
              <ul className="mission-list">
                <li>{lang === 'tr' ? 'Global bir marka olmak' : 'Become a global brand'}</li>
                <li>{lang === 'tr' ? 'Teknoloji liderliği sağlamak' : 'Provide technology leadership'}</li>
                <li>{lang === 'tr' ? 'Çevresel etkiyi maksimize etmek' : 'Maximize environmental impact'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const SSS = ({ lang }) => {
  const faqData = {
    tr: [
      {
        question: "1. GREENSY nedir ve nasıl çalışır?",
        answer: "GREENSY, doğadaki negatif iyonları taklit eden bir negatif iyon jeneratörüdür. Soğuk plazma teknolojisiyle havadaki oksijen moleküllerini iyonize eder ve negatif iyonları ortama kontrollü şekilde salar. Bu iyonlar, zararlı gazları (örneğin amonyak, CO₂), tozları ve mikroorganizmaları etkisiz hale getirerek hava kalitesini artırır, bitki gelişimini destekler, hayvan sağlığını iyileştirir."
      },
      {
        question: "2. Tarımda GREENSY ne işe yarar?",
        answer: "GREENSY sayesinde: Bitkilerin bağışıklığı artar, kimyasal gübre ve pestisit ihtiyacı azalır, toprak mikroorganizmaları aktive olur, verimlilik artarken, kalıntı riski sıfırlanır. Özellikle seralarda ve açık alan tarımında güvenle kullanılabilir."
      },
      {
        question: "3. Hayvancılıkta nasıl bir katkı sağlar?",
        answer: "GREENSY, ahır ve kümes gibi kapalı ortamlardaki amonyak (NH₃) ve karbon dioksit (CO₂) oranını düşürerek: Hayvanlarda stresi ve hastalık riskini azaltır, solunumu ve genel sağlık durumunu iyileştirir, et ve süt kalitesini artırır, ölüm oranlarını düşürür. Ayrıca çalışanlar için daha sağlıklı bir ortam sunar."
      },
      {
        question: "4. GREENSY evde ya da kapalı alanlarda kullanılabilir mi?",
        answer: "Evet. GREENSY, evler, ofisler, okullar, kreşler, sağlık merkezleri gibi ortamlarda: Havadaki toz, polen, alerjen, virüs ve bakterileri azaltır, kimyasal madde kullanmadan hava kalitesini artırır, zihinsel rahatlama ve odaklanmaya katkı sağlar. Bu yönüyle doğayı iç mekânlara taşır."
      },
      {
        question: "5. Ozon üretir mi? İnsanlar ve hayvanlar için güvenli mi?",
        answer: "Hayır. GREENSY ozon üretmez ve hiçbir toksik gaz salmaz. Soğuk plazma teknolojisiyle çalışır ve CE sertifikalıdır. İnsan, hayvan ve bitkiler için tamamen güvenli ve test edilmiştir."
      },
      {
        question: "6. Cihaz sürekli mi çalışmalı?",
        answer: "Kullanım alanına göre farklı modlar mümkündür: Tarım ve hayvancılık uygulamalarında sürekli çalışması önerilir, ev ve ofis gibi alanlarda zamanlayıcılı çalıştırma da mümkündür."
      },
      {
        question: "7. GREENSY'nin bakımı zor mu?",
        answer: "Hayır. GREENSY, karmaşık filtre değişimi gerektirmez. Sadece periyodik temizlik ve teknik kontrol ile uzun ömürlü ve verimli çalışır."
      },
      {
        question: "8. Enerji tüketimi nasıldır?",
        answer: "GREENSY, düşük watt tüketimine sahip enerji verimli bir sistemdir. Uzun süreli çalışmalarda bile elektrik tüketimi oldukça ekonomiktir."
      },
      {
        question: "9. Daha fazla bilgi almak ve iletişime geçmek için ne yapmalıyım?",
        answer: "GREENSY hakkında daha fazla bilgi almak, teknik destek talep etmek veya sipariş vermek için bizimle iletişime geçebilirsiniz. 📩 Lütfen bilgi almak için e-posta gönderin: 👉 info@suntekekoloji.com Destek ekibimiz size en kısa sürede dönüş sağlayacaktır."
      }
    ],
    en: [
      {
        question: "1. What is GREENSY and how does it work?",
        answer: "GREENSY is a negative ion generator that mimics negative ions found in nature. It ionizes oxygen molecules in the air using cold plasma technology and releases negative ions into the environment in a controlled manner. These ions neutralize harmful gases (such as ammonia, CO₂), dust, and microorganisms, improving air quality, supporting plant growth, and improving animal health."
      },
      {
        question: "2. What does GREENSY do in agriculture?",
        answer: "Thanks to GREENSY: Plant immunity increases, the need for chemical fertilizers and pesticides decreases, soil microorganisms become active, productivity increases while residue risk is eliminated. It can be safely used especially in greenhouses and open field agriculture."
      },
      {
        question: "3. What contribution does it make in livestock farming?",
        answer: "GREENSY reduces ammonia (NH₃) and carbon dioxide (CO₂) levels in closed environments such as barns and poultry houses: It reduces stress and disease risk in animals, improves respiration and general health, increases meat and milk quality, reduces mortality rates. It also provides a healthier environment for workers."
      },
      {
        question: "4. Can GREENSY be used at home or in closed areas?",
        answer: "Yes. GREENSY in environments such as homes, offices, schools, kindergartens, health centers: Reduces dust, pollen, allergens, viruses, and bacteria in the air, improves air quality without using chemicals, contributes to mental relaxation and focus. In this way, it brings nature indoors."
      },
      {
        question: "5. Does it produce ozone? Is it safe for humans and animals?",
        answer: "No. GREENSY does not produce ozone and does not emit any toxic gases. It works with cold plasma technology and is CE certified. It is completely safe and tested for humans, animals, and plants."
      },
      {
        question: "6. Should the device run continuously?",
        answer: "Different modes are possible depending on the area of use: Continuous operation is recommended in agriculture and livestock applications, timed operation is also possible in areas such as homes and offices."
      },
      {
        question: "7. Is GREENSY maintenance difficult?",
        answer: "No. GREENSY does not require complex filter changes. It works efficiently and long-lasting with only periodic cleaning and technical inspection."
      },
      {
        question: "8. How is energy consumption?",
        answer: "GREENSY is an energy-efficient system with low watt consumption. Even in long-term operations, electricity consumption is quite economical."
      },
      {
        question: "9. What should I do to get more information and contact?",
        answer: "You can contact us to get more information about GREENSY, request technical support, or place an order. 📩 Please send an email for information: 👉 info@suntekekoloji.com Our support team will get back to you as soon as possible."
      }
    ]
  };

  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="sss-page">
      <div className="sss-hero">
        <div className="sss-hero-content">
          <h1 className="sss-title-main">
            {lang === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
          </h1>
          <p className="sss-hero-description">
            {lang === 'tr' 
              ? 'GREENSY teknolojisi hakkında merak ettiğiniz her şeyi burada bulabilirsiniz.'
              : 'Find everything you\'re curious about GREENSY technology here.'
            }
          </p>
        </div>
      </div>

      <div className="sss-content">
        <div className="faq-container">
          {faqData[lang].map((item, index) => (
            <div key={index} className={`faq-item ${openItems.includes(index) ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleItem(index)}>
                <h3>{item.question}</h3>
                <div className="faq-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
};
const Blog = () => <div className="page-content">Blog</div>;

const Iletisim = ({ lang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);

  // Form validasyon mesajlarını Türkçe yap
  useEffect(() => {
    if (lang === 'tr') {
      const inputs = document.querySelectorAll('input, textarea');
      inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
          e.preventDefault();
          if (input.validity.valueMissing) {
            input.setCustomValidity('Bu alan zorunludur');
          } else if (input.validity.typeMismatch) {
            if (input.type === 'email') {
              input.setCustomValidity('Geçerli bir e-posta adresi giriniz');
            } else {
              input.setCustomValidity('Geçerli bir değer giriniz');
            }
          } else {
            input.setCustomValidity('');
          }
        });
        
        input.addEventListener('input', function() {
          input.setCustomValidity('');
        });
      });
    }
  }, [lang]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Manuel validasyon
    const errors = [];
    if (!formData.subject.trim()) {
      errors.push(lang === 'tr' ? 'Konu alanı zorunludur' : 'Subject field is required');
    }
    if (!formData.message.trim()) {
      errors.push(lang === 'tr' ? 'Mesaj alanı zorunludur' : 'Message field is required');
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push(lang === 'tr' ? 'Geçerli bir e-posta adresi giriniz' : 'Please enter a valid email address');
    }
    
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Email uygulamasını açmak için mailto linki oluştur
      const emailSubject = encodeURIComponent(formData.subject);
      const emailBody = encodeURIComponent(
        `${formData.message}\n\n---\nGönderen: ${formData.name || 'Anonim'}\nE-posta: ${formData.email || 'Belirtilmemiş'}\nTelefon: ${formData.phone || 'Belirtilmemiş'}`
      );
      
      const mailtoLink = `mailto:info@suntekekoloji.com?subject=${emailSubject}&body=${emailBody}`;
      
      // Email uygulamasını aç
      window.open(mailtoLink, '_blank');
      
      // Başarılı gönderim simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email uygulaması açma hatası:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="iletisim-page">
      <div className="iletisim-content">
        {/* Contact Form */}
        <section className="iletisim-form-section">
          <div className="iletisim-form-container">
            <div className="iletisim-form">
                            <h2>{lang === 'tr' ? 'Mesaj Gönder' : 'Send Message'}</h2>
              
              {validationErrors.length > 0 && (
                <div className="error-message">
                  <div className="error-icon">⚠️</div>
                  <div>
                    {validationErrors.map((error, index) => (
                      <p key={index}>{error}</p>
                    ))}
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="error-message">
                  <div className="error-icon">❌</div>
                  <p>{lang === 'tr' ? 'Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred while sending the message. Please try again.'}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{lang === 'tr' ? 'Ad Soyad' : 'Full Name'}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={lang === 'tr' ? 'Adınız ve soyadınız' : 'Your full name'}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">{lang === 'tr' ? 'E-posta' : 'Email'}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={lang === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">{lang === 'tr' ? 'Telefon' : 'Phone'}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={lang === 'tr' ? '+90 (5XX) XXX XX XX' : '+90 (5XX) XXX XX XX'}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">{lang === 'tr' ? 'Konu *' : 'Subject *'}</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={lang === 'tr' ? 'Mesajınızın konusu' : 'Subject of your message'}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">{lang === 'tr' ? 'Mesaj *' : 'Message *'}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder={lang === 'tr' ? 'Mesajınızı buraya yazın...' : 'Write your message here...'}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      <span>{lang === 'tr' ? 'Gönderiliyor...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{lang === 'tr' ? 'Gönder' : 'Send'}</span>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

function App() {
  const [lang, setLang] = useState('tr');

  const translations = {
    tr: {
      nav: {
        'Ana Sayfa': 'Ana Sayfa',
        'Teknolojimiz': 'Teknolojimiz',
        'Kullanım Alanları': 'Kullanım Alanları',
        'Hakkımızda': 'Hakkımızda',
        'SSS': 'SSS',
        'İletişim': 'İletişim'
      },
      sloganMain: 'GREENSY',
      sloganSubtitle: 'Gelecek Bize Emanet',
      tanitim: 'doğadan ilham alarak geliştirilen, negatif iyon teknolojisiyle tarımda, hayvancılıkta ve yaşam alanlarında devrim yaratan bir dönüşüm teknolojisidir.',
      incele: 'İncele'
    },
    en: {
      nav: {
        'Ana Sayfa': 'Home',
        'Teknolojimiz': 'Our Technology',
        'Kullanım Alanları': 'Areas of Use',
        'Hakkımızda': 'About Us',
        'SSS': 'FAQ',
        'İletişim': 'Contact'
      },
      sloganMain: 'GREENSY',
      sloganSubtitle: 'The Future is Entrusted to Us',
      tanitim: 'is a transformation technology developed with inspiration from nature, creating a revolution in agriculture, livestock, and living spaces with negative ion technology.',
      incele: 'Explore'
    }
  };

  return (
    <div className="App">
    <Router>
        <Navbar lang={lang} setLang={setLang} translations={translations} />
        <Routes>
          <Route path="/" element={<AnaSayfa lang={lang} translations={translations} />} />
          <Route path="/urun" element={<Urun lang={lang} />} />
          <Route path="/kullanim-alanlari" element={<KullanimAlanlari lang={lang} />} />
          <Route path="/hakkimizda" element={<Hakkimizda lang={lang} />} />
          <Route path="/sss" element={<SSS lang={lang} />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/iletisim" element={<Iletisim lang={lang} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
