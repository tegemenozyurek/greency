import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

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
    sloganHighlight: 'Negatif İyon Jeneratörü',
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
    sloganHighlight: 'Negative Ion Generator',
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
        <span className="slogan-main">{translations[lang].sloganMain}</span> <br />
        <span className="slogan-highlight">{translations[lang].sloganHighlight}</span>
      </h1>
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

const Urun = ({ lang }) => (
  <div className="urun-page">
    {/* Floating Info Button */}
    <div className="floating-info-button">
      <a href={lang === 'tr' 
        ? "mailto:info@sunteknoloji.com?subject=GREENSY Hakkında Bilgi&body=Merhaba,%0D%0A%0D%0AGREENSY teknolojisi hakkında detaylı bilgi almak istiyorum.%0D%0A%0D%0ATeşekkürler."
        : "mailto:info@sunteknoloji.com?subject=Information About GREENSY&body=Hello,%0D%0A%0D%0AI would like to get detailed information about GREENSY technology.%0D%0A%0D%0AThank you."
      } className="info-btn">
        <span className="info-btn-text">{lang === 'tr' ? 'Bilgi Al' : 'Get Info'}</span>
        <svg className="info-btn-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>

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
            <img src={require('./images/product/1.png')} alt="GREENSY" className="product-image" />
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
            <img src={require('./images/product/2.png')} alt="GREENSY Technology" className="tech-image" />
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
            <img src={require('./images/product/3.png')} alt="GREENSY Working Principle" className="how-image" />
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
            <h2 className="cta-title">{lang === 'tr' ? 'Gelecek Bize Emanet' : 'The Future is Entrusted to Us'}</h2>
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
            <img src={require('./images/product/4.png')} alt="GREENSY Future" className="future-image" />
          </div>
        </div>
      </div>
    </section>
  </div>
);
const KullanimAlanlari = ({ lang }) => (
  <div className="areas-page">
    {/* Hero Section */}
    <section className="areas-hero">
      <div className="areas-hero-content">
        <div className="areas-hero-text">
          <h1 className="areas-hero-title">
            <span className="areas-title-main">
              {lang === 'tr' ? 'Kullanım Alanları' : 'Areas of Use'}
            </span>
            <span className="areas-title-subtitle">
              {lang === 'tr' ? 'Bilim Sürdürülebilirlikle Buluşuyor' : 'Where Science Meets Sustainability'}
            </span>
          </h1>
          <p className="areas-hero-description">
            {lang === 'tr' 
              ? 'GREENSY Negatif İyon Jeneratörü, doğal iyonizasyon teknolojisini çeşitli ortamlara sunmak için tasarlanmıştır—hava kalitesini iyileştirir, biyolojik dengeyi destekler ve sektörler arası verimliliği artırır.'
              : 'GREENSY Negative Ion Generator is designed to deliver natural ionization technology to a variety of environments—improving air quality, supporting biological balance, and enhancing productivity across sectors.'
            }
          </p>
        </div>

      </div>
    </section>

    {/* Areas Grid */}
    <section className="areas-grid-section">
      <div className="container">
        <div className="areas-grid">
          {/* Agriculture */}
          <div className="area-card agriculture-card">
            <div className="area-card-header">
              <div className="area-icon">🌿</div>
              <h3 className="area-title">
                {lang === 'tr' ? 'Tarım' : 'Agriculture'}
              </h3>
            </div>
            <p className="area-description">
              {lang === 'tr' 
                ? 'GREENSY, çiftçilerin kimyasal girdiyi azaltmasına yardımcı olurken bitki sağlığını ve toprak canlılığını iyileştirir.'
                : 'GREENSY helps farmers reduce chemical input while improving plant health and soil vitality.'
              }
            </p>
            <ul className="area-benefits">
              <li>{lang === 'tr' ? 'Bitki bağışıklığını ve kök gelişimini uyarır' : 'Stimulates plant immunity and root growth'}</li>
              <li>{lang === 'tr' ? 'Kimyasal gübre ve pestisit ihtiyacını azaltır' : 'Reduces the need for chemical fertilizers and pesticides'}</li>
              <li>{lang === 'tr' ? 'Faydalı toprak mikroorganizmalarını aktifleştirir' : 'Activates beneficial soil microorganisms'}</li>
              <li>{lang === 'tr' ? 'Çimlenme oranlarını ve meyve kalitesini iyileştirir' : 'Improves germination rates and fruit quality'}</li>
              <li>{lang === 'tr' ? 'Sürdürülebilir şekilde genel verimi artırır' : 'Increases overall yield in a sustainable way'}</li>
            </ul>
            <div className="area-applications">
              <h4>{lang === 'tr' ? '✅ Uygulamalar:' : '✅ Applications:'}</h4>
              <div className="application-tags">
                <span className="tag">{lang === 'tr' ? 'Yüksek teknoloji seraları' : 'High-tech greenhouses'}</span>
                <span className="tag">{lang === 'tr' ? 'Organik çiftlikler' : 'Organic farms'}</span>
                <span className="tag">{lang === 'tr' ? 'Toprak iyileştirme programları' : 'Soil recovery programs'}</span>
                <span className="tag">{lang === 'tr' ? 'Açık alan sebze ve meyve üretimi' : 'Open-field vegetable and fruit production'}</span>
              </div>
            </div>
          </div>

          {/* Livestock */}
          <div className="area-card livestock-card">
            <div className="area-card-header">
              <div className="area-icon">🐄</div>
              <h3 className="area-title">
                {lang === 'tr' ? 'Hayvancılık' : 'Livestock'}
              </h3>
            </div>
            <p className="area-description">
              {lang === 'tr' 
                ? 'GREENSY, amonyak (NH₃) ve karbon dioksit (CO₂) gibi zararlı gazları nötralize ederek kapalı hayvancılık tesislerindeki hava kalitesini iyileştirir.'
                : 'GREENSY improves air quality in enclosed livestock facilities by neutralizing harmful gases such as ammonia (NH₃) and carbon dioxide (CO₂).'
              }
            </p>
            <ul className="area-benefits">
              <li>{lang === 'tr' ? 'Hayvan stresini ve solunum sorunlarını azaltır' : 'Reduces animal stress and respiratory issues'}</li>
              <li>{lang === 'tr' ? 'Ölüm oranlarını ve enfeksiyon risklerini düşürür' : 'Lowers mortality rates and infection risks'}</li>
              <li>{lang === 'tr' ? 'Büyüme performansını ve yem dönüşümünü artırır' : 'Enhances growth performance and feed conversion'}</li>
              <li>{lang === 'tr' ? 'Et ve süt kalitesini iyileştirir' : 'Improves meat and milk quality'}</li>
              <li>{lang === 'tr' ? 'Ortamdaki çalışanların sağlığını korur' : 'Protects the health of workers in the environment'}</li>
            </ul>
            <div className="area-applications">
              <h4>{lang === 'tr' ? '✅ Uygulamalar:' : '✅ Applications:'}</h4>
              <div className="application-tags">
                <span className="tag">{lang === 'tr' ? 'Kümes çiftlikleri' : 'Poultry farms'}</span>
                <span className="tag">{lang === 'tr' ? 'İnek ahırları' : 'Cow barns'}</span>
                <span className="tag">{lang === 'tr' ? 'Domuz çiftlikleri' : 'Pig farms'}</span>
                <span className="tag">{lang === 'tr' ? 'Kapalı üretim birimleri' : 'Indoor breeding units'}</span>
                <span className="tag">{lang === 'tr' ? 'Yoğun hayvancılık işletmeleri' : 'Intensive livestock operations'}</span>
              </div>
            </div>
          </div>

          {/* Indoor Spaces */}
          <div className="area-card indoor-card">
            <div className="area-card-header">
              <div className="area-icon">🏠</div>
              <h3 className="area-title">
                {lang === 'tr' ? 'Kapalı Alanlar' : 'Indoor Spaces'}
              </h3>
            </div>
            <p className="area-description">
              {lang === 'tr' 
                ? 'Kentsel ve kapalı ortamlarda, GREENSY orman havasının ferahlığını günlük yaşama getirir.'
                : 'In urban and indoor environments, GREENSY brings the freshness of forest air into everyday life.'
              }
            </p>
            <ul className="area-benefits">
              <li>{lang === 'tr' ? 'Alerjenleri, tozu, bakterileri ve virüsleri nötralize eder' : 'Neutralizes allergens, dust, bacteria, and viruses'}</li>
              <li>{lang === 'tr' ? 'Temizlik ürünleri veya elektroniklerden kaynaklanan iç mekan hava kirliliğini azaltır' : 'Reduces indoor air pollution from cleaning products or electronics'}</li>
              <li>{lang === 'tr' ? 'Zihinsel rahatlama ve konsantrasyonu destekler' : 'Promotes mental relaxation and concentration'}</li>
              <li>{lang === 'tr' ? 'Kimyasal olmadan genel solunum konforunu artırır' : 'Enhances overall respiratory comfort without chemicals'}</li>
            </ul>
            <div className="area-applications">
              <h4>{lang === 'tr' ? '✅ Uygulamalar:' : '✅ Applications:'}</h4>
              <div className="application-tags">
                <span className="tag">{lang === 'tr' ? 'Evler ve apartmanlar' : 'Homes and apartments'}</span>
                <span className="tag">{lang === 'tr' ? 'Ofisler ve ortak çalışma alanları' : 'Offices and coworking spaces'}</span>
                <span className="tag">{lang === 'tr' ? 'Okullar ve kreşler' : 'Schools and nurseries'}</span>
                <span className="tag">{lang === 'tr' ? 'Sağlık merkezleri' : 'Healthcare centers'}</span>
                <span className="tag">{lang === 'tr' ? 'Sağlık ve yoga stüdyoları' : 'Wellness and yoga studios'}</span>
              </div>
            </div>
          </div>

          {/* Food Industry */}
          <div className="area-card food-card">
            <div className="area-card-header">
              <div className="area-icon">🏭</div>
              <h3 className="area-title">
                {lang === 'tr' ? 'Gıda Endüstrisi' : 'Food Industry'}
              </h3>
            </div>
            <p className="area-description">
              {lang === 'tr' 
                ? 'Hava kalitesi gıda üretim ortamlarında kritik öneme sahiptir. GREENSY hijyeni destekler, kontaminasyon riskini azaltır ve raf ömrünü doğal olarak uzatır.'
                : 'Air quality is critical in food production environments. GREENSY supports hygiene, reduces contamination risk, and extends shelf life naturally.'
              }
            </p>
            <ul className="area-benefits">
              <li>{lang === 'tr' ? 'Havadaki mikrobiyal yükü minimize eder' : 'Minimizes airborne microbial load'}</li>
              <li>{lang === 'tr' ? 'Temiz üretim havasının korunmasına yardımcı olur' : 'Helps maintain clean production air'}</li>
              <li>{lang === 'tr' ? 'Gıda güvenliği için düzenleyici uyumluluğu destekler' : 'Supports regulatory compliance for food safety'}</li>
              <li>{lang === 'tr' ? 'Kimyasal dezenfektanlara olan bağımlılığı azaltır' : 'Reduces reliance on chemical disinfectants'}</li>
            </ul>
            <div className="area-applications">
              <h4>{lang === 'tr' ? '✅ Uygulamalar:' : '✅ Applications:'}</h4>
              <div className="application-tags">
                <span className="tag">{lang === 'tr' ? 'Gıda paketleme hatları' : 'Food packaging lines'}</span>
                <span className="tag">{lang === 'tr' ? 'Soğuk depolama odaları' : 'Cold storage rooms'}</span>
                <span className="tag">{lang === 'tr' ? 'Taze ürün tesisleri' : 'Fresh produce facilities'}</span>
                <span className="tag">{lang === 'tr' ? 'Hasat sonrası işleme alanları' : 'Post-harvest handling areas'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
);
const Hakkimizda = ({ lang }) => {
  return (
    <div className="about-page-new">
      {/* Hero Section with Parallax */}
      <section className="about-hero-new">
        <div className="hero-background">
          <div className="hero-particles"></div>
          <div className="hero-gradient"></div>
        </div>
        <div className="hero-content-new">
          <div className="hero-text-new">
            <h1 className="hero-title-new">
              <span className="title-line-1">{lang === 'tr' ? 'Bilim ve Doğayı' : 'Science and Nature'}</span>
              <span className="title-line-2">{lang === 'tr' ? 'Buluşturan Güç' : 'United by Power'}</span>
            </h1>
            <p className="hero-description-new">
              {lang === 'tr' 
                ? 'Sun-Tek Ekoloji, doğanın gücünü bilimle birleştirerek sürdürülebilir bir gelecek için çalışır. GREENSY teknolojimiz, negatif iyonların doğal arındırıcı etkisini modern yaşamın her alanına taşır.'
                : 'Sun-Tek Ecology works for a sustainable future by combining the power of nature with science. Our GREENSY technology brings the natural purifying effect of negative ions to every area of modern life.'
              }
            </p>
          </div>
          <div className="hero-visual-new">
            <div className="logo-container">
              <img src={require('./images/suntek.png')} alt="Sun-Tek Logo" className="suntek-logo-new" />
              <div className="logo-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="about-mission-new">
        <div className="container-new">
          <div className="mission-cards">
            <div className="mission-card-new">
              <div className="card-icon-new">🎯</div>
              <h3>{lang === 'tr' ? 'Misyonumuz' : 'Our Mission'}</h3>
              <p>
                {lang === 'tr'
                  ? 'Doğanın arındırıcı gücünü modern teknolojiyle birleştirerek, insanların ve doğanın uyum içinde yaşayabileceği temiz ve sağlıklı ortamlar yaratmak.'
                  : 'To create clean and healthy environments where people and nature can live in harmony by combining nature\'s purifying power with modern technology.'
                }
              </p>
              <ul className="mission-list-new">
                <li>{lang === 'tr' ? 'Negatif iyon teknolojisini geliştirmek' : 'Develop negative ion technology'}</li>
                <li>{lang === 'tr' ? 'Sürdürülebilir çözümler sunmak' : 'Provide sustainable solutions'}</li>
                <li>{lang === 'tr' ? 'Yaşam kalitesini artırmak' : 'Improve quality of life'}</li>
              </ul>
            </div>
            
            <div className="vision-card-new">
              <div className="card-icon-new">🔮</div>
              <h3>{lang === 'tr' ? 'Vizyonumuz' : 'Our Vision'}</h3>
              <p>
                {lang === 'tr'
                  ? 'GREENSY teknolojisini dünya çapında tanınan, güvenilir ve etkili bir çözüm haline getirerek, doğa dostu yaşamın standart haline gelmesine öncülük etmek.'
                  : 'To lead the way in making eco-friendly living the standard by making GREENSY technology a globally recognized, reliable, and effective solution.'
                }
              </p>
              <ul className="vision-list-new">
                <li>{lang === 'tr' ? 'Global bir marka olmak' : 'Become a global brand'}</li>
                <li>{lang === 'tr' ? 'Teknoloji liderliği sağlamak' : 'Provide technology leadership'}</li>
                <li>{lang === 'tr' ? 'Çevresel etkiyi maksimize etmek' : 'Maximize environmental impact'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values-new">
        <div className="container-new">
          <div className="section-header-new">
            <h2 className="section-title-new">
              <span className="title-accent">{lang === 'tr' ? 'Değerlerimiz' : 'Our Values'}</span>
            </h2>
            <div className="title-underline"></div>
          </div>
          
          <div className="values-grid-new">
            <div className="value-card-new">
              <div className="value-icon-new">🔬</div>
              <h3>{lang === 'tr' ? 'Bilimsel Yaklaşım' : 'Scientific Approach'}</h3>
              <p>
                {lang === 'tr'
                  ? 'Her çözümümüz bilimsel araştırma ve test süreçlerinden geçer. Kanıta dayalı yaklaşımımız, güvenilir ve etkili sonuçlar sağlar.'
                  : 'Every solution we offer goes through scientific research and testing processes. Our evidence-based approach ensures reliable and effective results.'
                }
              </p>
            </div>
            
            <div className="value-card-new">
              <div className="value-icon-new">🌱</div>
              <h3>{lang === 'tr' ? 'Sürdürülebilirlik' : 'Sustainability'}</h3>
              <p>
                {lang === 'tr'
                  ? 'Gelecek nesiller için yaşanabilir bir dünya bırakmayı hedefliyoruz. Çevresel sorumluluk, her kararımızın merkezinde yer alır.'
                  : 'We aim to leave a livable world for future generations. Environmental responsibility is at the center of every decision we make.'
                }
              </p>
            </div>
            
            <div className="value-card-new">
              <div className="value-icon-new">🤝</div>
              <h3>{lang === 'tr' ? 'Güvenilirlik' : 'Reliability'}</h3>
              <p>
                {lang === 'tr'
                  ? 'Müşterilerimizin güvenini kazanmak ve korumak en önemli önceliğimiz. Şeffaflık ve dürüstlük, iş modelimizin temelidir.'
                  : 'Gaining and maintaining our customers\' trust is our top priority. Transparency and integrity are the foundation of our business model.'
                }
              </p>
            </div>
            
            <div className="value-card-new">
              <div className="value-icon-new">💡</div>
              <h3>{lang === 'tr' ? 'İnovasyon' : 'Innovation'}</h3>
              <p>
                {lang === 'tr'
                  ? 'Sürekli gelişim ve yenilikçi çözümler üretmeye odaklanıyoruz. Teknolojik ilerleme, sürdürülebilir geleceğin anahtarıdır.'
                  : 'We focus on continuous improvement and producing innovative solutions. Technological advancement is the key to a sustainable future.'
                }
              </p>
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
    company: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const errors = [];
    
    if (!formData.subject.trim()) {
      errors.push(lang === 'tr' ? 'Konu gereklidir' : 'Subject is required');
    }
    
    if (!formData.message.trim()) {
      errors.push(lang === 'tr' ? 'Mesaj gereklidir' : 'Message is required');
    }
    
    // Optional email validation - only validate if email is provided
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.push(lang === 'tr' ? 'Geçerli bir e-posta adresi giriniz' : 'Please enter a valid email address');
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: errors.join(', ')
      });
      return;
    }

    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      // Send email using mailto as fallback
      const emailBody = `
Ad Soyad: ${formData.name}
E-posta: ${formData.email}
Telefon: ${formData.phone}
Şirket: ${formData.company}
Konu: ${formData.subject}

Mesaj:
${formData.message}
      `;
      
      const mailtoLink = `mailto:info@sunteknoloji.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoLink, '_blank');
      
      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        error: null
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: lang === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyiniz.' : 'An error occurred. Please try again.'
      });
    }
  };

  return (
    <div className="iletisim-page">
      <div className="iletisim-content">
        <div className="iletisim-form-container">
          <div className="iletisim-form">
            <h2>{lang === 'tr' ? 'Bizimle İletişime Geçin' : 'Contact Us'}</h2>
            
            {formStatus.isSubmitted && (
              <div className="form-success">
                <p>{lang === 'tr' ? 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.' : 'Your message has been sent successfully! We will get back to you soon.'}</p>
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-error">
                <p>{formStatus.error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{lang === 'tr' ? 'Ad Soyad' : 'Full Name'}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={formStatus.isSubmitting}
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
                  disabled={formStatus.isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">{lang === 'tr' ? 'Telefon' : 'Phone'}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={formStatus.isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="company">{lang === 'tr' ? 'Şirket' : 'Company'}</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={formStatus.isSubmitting}
                />
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="subject">{lang === 'tr' ? 'Konu *' : 'Subject *'}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={formStatus.isSubmitting}
                />
              </div>
              
              <div className="form-group full-width">
                <label htmlFor="message">{lang === 'tr' ? 'Mesaj *' : 'Message *'}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  disabled={formStatus.isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={formStatus.isSubmitting}
              >
                <span>
                  {formStatus.isSubmitting 
                    ? (lang === 'tr' ? 'Gönderiliyor...' : 'Sending...') 
                    : (lang === 'tr' ? 'Gönder' : 'Send')
                  }
                </span>
                {!formStatus.isSubmitting && (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
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
      sloganMain: 'Gelecek Bize Emanet',
      sloganHighlight: 'Greensy',
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
      sloganMain: 'The Future is Entrusted to Us',
      sloganHighlight: 'Greensy',
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
