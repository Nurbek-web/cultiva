import React from 'react';

// Example real data
const realArticleData = {
  date: ["31", "Dec"],
  title: "A Greenhouse Project in Almeria Reaches Unprecedented Dimensions",
  subtitle: "Indoor & Vertical Farming | Greenhouses",
  description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.",
  subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.",
  img: "https://www.agritechtomorrow.com/images/upload/images/image7(1).jpg",
  payload: { articleId: 1 },
  articleID: "1"
};

const Article3 = () => {
  const { date, title, subtitle, description, subdescription, img, payload, articleID } = realArticleData;

  return (
    <div style={styles.container}>
      <div style={styles.date}>
        {date[0]} {date[1]}
      </div>
      <h1 style={styles.title}>{title}</h1>
      <h2 style={styles.subtitle}>{subtitle}</h2>
      <img src={img} alt={title} style={styles.image} />
      <p style={styles.description}>Novagric, a leader in advanced agricultural solutions, has carried out an innovative protected agriculture project in Almeria in close collaboration with Romenatur, marking a milestone in the industry in the region.



The main goal is to improve both the production and quality of Palermo peppers and cucumbers in a controlled environment to achieve higher yields throughout the year.

‘At the moment, there are no specific varieties of Palermo specific for summer, so with this high-tech structure we can grow it. We are looking for stability in winter, seeking light and controlling all the environmental variants", says Juan Miguel Romera, director and grower at Romenatur.

Un hombre parado en un jardínDescripción generada automáticamente

Juan Miguel Romera, Romenatur’s director (grower company). 

The project is being carried out on a farm near Almerimar where greenhouses have been constructed in two modules: one of 17,000 square meters and the other of 13 hectares.

During the development of this project, Novagric has faced several challenges, such as the installation of an unusual infrastructure in the area, the adaptation to the terrain, and the climatic conditions of strong winds in Almeria.

‘People are amazed. We're talking about the first project being carried out in Almeria with these dimensions,’ says one of the people in charge of the project assembly, surprised.

For this, we have designed a reinforced greenhouse with a height above the known to accommodate a greater volume of air, and we have installed technologies for precise control of parameters such as radiation, temperature, humidity and luminosity inside the greenhouse with vertical flow fans and screens, as well as fertigation and hydroponic irrigation systems that contribute to a 30% increase in productivity, says Juan Pardo, Novagric's technical manager in this project. 

Imagen que contiene hombre, parado, montar a caballo, grandeDescripción generada automáticamente

Reinforced greenhouse interior equipped to grow Palermo peppers

Although this is the first time Juan Miguel has worked on a high-tech farm, he has received advice on how to manage it efficiently and he is really enthusiastic about the benefits. ‘In addition to improving production and quality, we also hope to optimize farm management in all aspects.’

Imagen que contiene invernadero, verde, edificio, tablaDescripción generada automáticamente

Juan Miguel (Romenatur) along with Lucas Herrador (Novagric) inside the greenhouse for cucumber cultivation

Lucas Herrador, sales manager of the project at Novagric, experienced the first beginnings of the plant's development in this new structure: We controlled all the parameters from the beginning to be able to reach the conclusion of what we had in mind, which was productivity and quality. This will result in the real amortization of the project and the illusion that the customer had. Thanks to the effort and dedication of the team, we have achieved a high-tech farm that has exceeded the customer's expectations.

Mano de una planta con hojas verdesDescripción generada automáticamente con confianza media  Un jardín con plantas verdes

Descripción generada automáticamente

Palermo pepper and cucumber crops in multitunnel greenhouse

The horticultural producer is very satisfied with the results of the project, which he says he could not have achieved in any other way. This facility has allowed to maintain optimal growing conditions with a temperature difference of up to three or four degrees from to the outside, without losing light. Yields are expected to double, going from 8 to 18 kilos in palermo peppers, without compromising the quality of the product.

‘With that we are going to achieve by having a stable production during the 12 months of the year. With the other type of traditional structure, Raspa y amagado type Almeria, we could not reach it. With this structure we can reach the market with sufficient quality and stability,’ concludes Juan Miguel. 

Imagen que contiene exterior, tren, hombre, verde

Descripción generada automáticamente Vista de cerca de un puente

Descripción generada automáticamente

Interior of two high-tech greenhouse modules developed by Novagric

Novagric is proud of its contribution to the agricultural industry in Almeria and hopes that this project will inspire future initiatives in the area. 

The close collaboration with the farmer and his success is what drives us to continue working to provide solutions that improve their work and, above all, to get things right, says Lucas Herrador, Novagric's commercial manager for this project, with great emotion. 

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
export default Article3;
