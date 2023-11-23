import React from 'react';

// Example real data
const realArticleData = {
    date: ["31", "Dec"],
    title: "The Greatest Greenhouse Built in Spain in One Unit",
    subtitle: "Indoor & Vertical Farming, Supply Chain | Greenhouses",
    description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.",
    subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.",
    img: "https://www.agritechtomorrow.com/images/articles/th/14701.jpg",
    payload: { articleId: 2 },
    articleID: "2"
};

const Article5 = () => {
  const { date, title, subtitle, description, subdescription, img, payload, articleID } = realArticleData;

  return (
    <div style={styles.container}>
      <div style={styles.date}>
        {date[0]} {date[1]}
      </div>
      <h1 style={styles.title}>{title}</h1>
      <h2 style={styles.subtitle}>{subtitle}</h2>
      <img src={img} alt={title} style={styles.image} />
      <p style={styles.description}>While a team meeting to coordinate the day's work is ending, we get ready to go into the new greenhouse with our disinfected clothes. At the greenhouse entrance we meet Jacqueline Looije, who quickly leads us into the greenhouse. We are already aware of its large dimensions because it is hard to keep up with her and we are short of breath. 

There, she tells us why the originally Dutch company Looiije Aguilas decided to set up a company in Spain in the 90s, and their goals for the coming years.

Looije Aguilas is member of O.P. Looije, a grower company established in 2010 who has decided to grow tomato in Spain. "Our main goal is to cultivate a good quality tomato during 12 months per year. O.P. Looije has a strategic plan until 2026. For this reason, one of its members, Looije Aguilas, bought ground of 27 hectares to build complex phases of greenhouses since 2019, also Novagric has done these projects. " Says Jacqueline, the general director of Looije Aguilas. 

In 2022, the tomato producer has decided to build a new greenhouse module in Murcia of 7.3 hectares in one single unit, which is the largest greenhouse built in Spain in recent years. 

Looije and Novagric managers are planning the project to start planting the 3rd of August. “We expect to increase production from 21-22 to 27 kg per square meter with this new greenhouse”. 

These companies have been working together for more than ten years and they are strongly aligned with technical optimization to get high yields with the best quality. 

Juan Pardo, technical project manager at Novagric, tells us that they are in the final stage of this third project. We have designed a new technological greenhouse to meet their needs, where solar radiation is a priority to achieve high yield and quality in hydroponics cherry tomato cultivation.

 

Competitiveness of the Spanish Greenhouses
Spain is one of the largest greenhouse tomato producing countries. Currently, the Spanish greenhouse industry is at a higher level of productivity, the demand for more modern, large scale greenhouses has resulted in a high degree of competitiveness.   

“Looije Aguilas is originally a Dutch company, 24 years ago we decided to go to the south of Spain because at that time, in the 90s, there was lack of light in winter in Holland to produce tomato” explains Jacqueline. 

In Spain it is not common to build a greenhouse of 7.3 hectares in one module, but Jacqueline lists its advantages: It is more efficiency because I only need one organization to manage the greenhouse. Also, I only need to do the settings for the climate for one greenhouse. If I had three, I’d need three climate systems. 

Juan explains the several improvements carried out: “We have designed a lightweight structure painted in white so that it can reflect the sun's radiation and with different screens and double ventilation systems. This large volume enables efficient passive climate control and a more uniform climate in the greenhouse. 



Final stage of the project

Thanks to this, the people work more comfortable, need less maintenance and thanks to the cultivation gutters, productivity is higher and there are fewer problems with pests and diseases.

 

Quality & Growth all year round 
They are cultivating three tomato cherry varieties throughout the year: round cherry, baby plum and mini kumato. 

After six months harvesting the start was great «The production is 5-10% more than we have expected thanks to the good climate created in this greenhouse» says Jacqueline, even though they reached temperatures of 41 degrees in summer and low temperatures in winter. 

At the end of this conversation, Jacqueline emphasizes that they are happy with this greenhouse. We need to say that the quality is really good and homogeneous. We planted on time as Novagric met the project deadlines and they were always available to answer all our questions. Thanks to this new installation, Looije is improving the quality standards of the final product that consumers buy in the supermarket.

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
export default Article5;
