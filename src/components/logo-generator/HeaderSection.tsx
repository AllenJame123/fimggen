
const HeaderSection = () => {
  return (
    <div className="text-center space-y-3 mb-8">
      <h1 className="text-4xl font-bold tracking-tight">Free Logo Generator - Create Logo Without Design Skills</h1>
      <p className="text-xl text-muted-foreground">
        AI logo generator that creates high resolution logos instantly. No watermark, completely free. Our online logo creator makes professional logos in seconds.
      </p>
      <p className="text-base text-muted-foreground">
        Advanced AI creates unique logos. Our logo maker free tool generates professional designs for your business or project.
      </p>
      
      {/* Add schema.org structured data for logo generator */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Free Logo Generator",
          "description": "Create professional logos instantly with our AI-powered logo generator. No watermark, high resolution downloads.",
          "applicationCategory": "DesignApplication",
          "operatingSystem": "Web browser",
          "offers": {
            "@type": "Offer",
            "price": "0"
          }
        })
      }} />
    </div>
  );
};

export default HeaderSection;
