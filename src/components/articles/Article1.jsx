import React from 'react';

// Example real data
const realArticleData = {
  date: ["31", "Dec"],
  title: "Singapore-based Hydroponics Company Launches Turnkey Commercial Farming Solution",
  subtitle: " Indoor & Vertical Farming, Supply Chain | Greenhouses",
  description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.",
  subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.",
  img: "https://www.agritechtomorrow.com/images/upload/images/Aerospring.jpg",
  payload: { articleId: 1 },
  articleID: "1"
};

const Article1 = () => {
  const { date, title, subtitle, description, subdescription, img, payload, articleID } = realArticleData;

  return (
    <div style={styles.container}>
      <div style={styles.date}>
        {date[0]} {date[1]}
      </div>
      <h1 style={styles.title}>{title}</h1>
      <h2 style={styles.subtitle}>{subtitle}</h2>
      <img src={img} alt={title} style={styles.image} />
      <p style={styles.description}>Aerospring Hydroponics, an eight-year-old Singapore-based company, has today announced it is launching into commercial farming. Aerospring’s patented, aeroponic, vertical systems can deliver up to 10 times more produce than a conventional farm of the same size due to the vertical nature of the systems. In addition, the Aerospring aeroponic growing process produces up to 30% greater yields, 3 times faster compared to traditional farming methods, while using 90% less water.

“Since the inception of our business, we have been focused on helping individuals and families learn to live more sustainably, growing their own food at home, and taking back control of what they eat. Our systems have revolutionized growing fresh, often pesticide-free produce, and now we are offering our products to commercial farms.” says Thorben Linneberg, Co-Founder and CEO.

 

Aerospring Hydroponics manufactures patented, high-quality, vertical hydroponic systems that make having a high-yielding home garden easy, no matter where you live. Aerospring believes year-round home gardening is an achievable vision for us all.

 

Engineered for efficiency and sustainability, Aerospring systems are an answer to the modern challenges of commercial farming, ensuring higher yields, reduced water consumption, and sustainable produce. Aerospring aims to revolutionize commercial farming by offering cutting-edge solutions tailored for scalable agriculture.

 

In the commercial farm setting, Aerospring systems use up to 90% less water, grow 3 times faster, and grow 10 times more produce than more traditional farming methods. Aerospring Hydroponic systems leverage low-pressure aeroponic technology. Aeroponics is the process of suspending plants roots in a closed environment while irrigating them with nutrient enriched water. This innovative method results in faster growth, healthier plants, and bigger yields — all while using fewer resources. Aerospring Hydroponic farms are easy to manage and maintain, easy to clean, and deliver efficiencies for the commercial farmer.

 

“Accessible sustainability is what our business is all about,” says Mark Newton, COO Aerospring. “Bringing Aerospring’s technology to the commercial farm industry is game-changing. Commercial farmers can dramatically increase their output in the same physical space, while applying fewer resources, thus increasing profitability.”

 

Aerospring has sold over 4,000 of its patented hydroponic systems globally, and has an online support community of over 2,500 active Aerospring gardeners. Over the past few years Aerospring has launched a corporate services business, allowing corporates to farm in their offi ce space for the benefi t of their staff . Aerospring systems are in over 300 schools globally, and also on over 200 shipping vessels, helping vessel crews grow fresh produce onboard.

 <br />

“Our systems bring scalability to the modern farm,” says Thorben. “The Aerospring system is modular and can be built to various heights. As such, the application of Aerospring systems allows the commercial farm to customise the capacity of each vertical pole to meet their yield targets. In addition, it is so easy to set-up, clean and maintain, it really brings tremendous effi ciency to the farm, while also delivering very high yields.”

 

What started as a hobby and a desire to grow tomatoes on their apartment balcony in Singapore blossomed into a love of gardening - and for an interest in creating a sustainable food source at home. “We wanted all the nutrients that come from eating food harvested that day”, says Nadine Keller, Co-Founder. “We had concerns about pesticides and where our produce was coming from. We also knew that these concerns were very real for many people - no matter where they live.


These factors, and a natural interest in problem-solving, inspired us to develop our own hydroponic system with the aim of growing our own food at home.”

 

Aerospring is currently the hydroponic market leader in Singapore, selling its patented hydroponic systems, as well as hydroponic accessories and seedlings. The United States is currently its largest consumer market, accounting for 70% of its annual revenue. In addition to consumer sales, Aerospring has seen strong growth in sales from corporates, shipping vessels and schools over the past two years.

 

Aerospring Hydroponics’ goal is to provide the best hydroponic growing experience possible. “Our mission as a small, hands-on company is to empower people to take back control over their food - to reconnect with it and truly experience the joy of growing their own food, right at home,” says Thorben. “Given the challenges in the world today, including food safety, food security and sustainability, we believe there is a need to grow our food closer to home. Whatever our food situation, we must start thinking about how and where our food comes from - and we need to inspire the next generation to live a more sustainable life. We are ourselves growers and urban farmers, and we want to pass on our positive experiences to our customers worldwide.”

</p>
      {/* Additional content or features based on your requirements */}
    </div>
  );
};

const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      background: '#fff',
    },
    date: {
      fontSize: '14px',
      color: '#666',
    },
    title: {
      fontSize: '32px',
      marginBottom: '10px',
      color: '#333',
    },
    subtitle: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#555',
    },
    image: {
      width: '100%',
      borderRadius: '8px',
      marginBottom: '20px',
    },
    description: {
      fontSize: '16px',
      marginBottom: '10px',
      color: '#444',
    },
    subdescription: {
      fontSize: '14px',
      marginBottom: '20px',
      color: '#666',
    },
    articleId: {
      fontSize: '14px',
      color: '#888',
    },
  };
export default Article1;
