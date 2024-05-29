import Head from 'next/head';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>YouTube Clone</title>
      <meta name="description" content="YouTube Clone created with Next.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <img src="logo.png" alt="Logo" className={styles.logo} />
      </div>
      <input type="text" className={styles.searchBar} placeholder="Pesquisar" />
      <button className={styles.registerButton}>Cadastrar</button>
    </header>



    <aside className={styles.sidebar}>
      <div className={styles.logoWrapper}>
        <Image src="/youtube-logo.png" alt="YouTube Logo" width={100} height={50} />
      </div>
      <button className={styles.sidebarItem}>
        <Image src="/home-icon.png" alt="Início" width={24} height={24} />
        <span>Início</span>
      </button>
      <button className={styles.sidebarItem}>
        <Image src="/shorts-icon.png" alt="Você" width={24} height={24} />
        <span>Você</span>
      </button>
      <button className={styles.sidebarItem}>
        <Image src="/subscriptions-icon.png" alt="Canal" width={24} height={24} />
        <span>Canal</span>
      </button>
      <button className={styles.sidebarItem}>
        <Image src="/subscriptions-icon.png" alt="Histórico" width={24} height={24} />
        <span>Histórico</span>
      </button>
      <button className={styles.sidebarItem}>
        <Image src="/subscriptions-icon.png" alt="Meus Vídeos" width={24} height={24} />
        <span>Meus Vídeos</span>
      </button>
    </aside>
    <main className={styles.mainContent}>
      <div className={styles.videoGrid}>
        {videoData.map((video, index) => (
          <div className={styles.videoCard} key={index}>
            <Image src={video.thumbnail} alt={video.title} width={320} height={180} />
            <div className={styles.videoInfo}>
              <p className={styles.videoTitle}>{video.title}</p>
              <p className={styles.videoChannel}>{video.channel}</p>
              <p className={styles.videoViews}>{video.views}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);
}

const videoData = [
{
  thumbnail: '/curso-thumbnail.jpg',
  title: 'Cursos Online Grátis de Todas as Áreas...',
  channel: 'Prime Cursos do Brasil',
  views: 'Patrocinado'
},
{
  thumbnail: '/masha-thumbnail.jpg',
  title: 'Masha e o Urso 🐻🌟 Novo Episódio 2022...',
  channel: 'Masha e o Urso',
  views: '69 mi de visualizações • há 1 ano'
},
{
  thumbnail: '/cake-thumbnail.jpg',
  title: 'Miniature Rainbow Chocolate Cake...',
  channel: 'Baking Yummy',
  views: '756 mil visualizações • há 2 semanas'
},
{
  thumbnail: '/pica-pau-thumbnail.jpg',
  title: 'Pica-Pau Não Consegue Ficar Confortável...',
  channel: 'Pica-Pau em Português',
  views: '312 mil visualizações • há 2 semanas'
},
{
  thumbnail: '/pink-panther-thumbnail.jpg',
  title: 'Pink Panther Toots His Horn On The Trumpet...',
  channel: 'Pink Panther',
  views: ''
},
{
  thumbnail: '/tom-jerry-thumbnail.jpg',
  title: 'Tom & Jerry em Português | Brasil | Um Pouco...',
  channel: 'WB Kids',
  views: ''
},
{
  thumbnail: '/shaun-sheep-thumbnail.jpg',
  title: '1 HOUR Compilation | Episodes 11-20...',
  channel: 'Shaun the Sheep',
  views: ''
},
{
  thumbnail: '/truck-thumbnail.jpg',
  title: 'Monte a Sua Rampage',
  channel: 'Rampage com 272 cv de Potência...',
  views: ''
},
{
  thumbnail: '/car-thumbnail.jpg',
  title: 'Desempenho Extremo',
  channel: 'Velocidade Máxima Automóveis',
  views: '1.2M views'
},
{
  thumbnail: '/bike-thumbnail.jpg',
  title: 'A Nova Era das Bicicletas',
  channel: 'Bikes e Trilhas',
  views: '850K views'
},
{
  thumbnail: '/gadget-thumbnail.jpg',
  title: 'Os Melhores Gadgets de 2024',
  channel: 'Tech Review Brasil',
  views: '500K views'
},
{
  thumbnail: '/recipe-thumbnail.jpg',
  title: 'Receitas Fáceis para o Dia a Dia',
  channel: 'Cozinha Simples',
  views: '2M views'
},
{
  thumbnail: '/travel-thumbnail.jpg',
  title: 'Descubra as Maravilhas da Ásia',
  channel: 'Exploradores do Mundo',
  views: '750K views'
},
{
  thumbnail: '/fitness-thumbnail.jpg',
  title: 'Treino Intenso em Casa',
  channel: 'Fitness em Casa',
  views: '1.5M views'
},
{
  thumbnail: '/music-thumbnail.jpg',
  title: 'Top Hits de 2024',
  channel: 'Música do Momento',
  views: '3M views'
},
{
  thumbnail: '/game-thumbnail.jpg',
  title: 'Jogos Mais Esperados do Ano',
  channel: 'Gamers de Plantão',
  views: '1.8M views'
},
{
  thumbnail: '/fashion-thumbnail.jpg',
  title: 'Tendências de Moda 2024',
  channel: 'Estilo e Elegância',
  views: '900K views'
},
{
  thumbnail: '/movie-thumbnail.jpg',
  title: 'Os Filmes Mais Aguardados',
  channel: 'CineMania',
  views: '2.2M views'
},
{
  thumbnail: '/science-thumbnail.jpg',
  title: 'Descobertas Científicas Recentes',
  channel: 'Ciência Hoje',
  views: '650K views'
},
{
  thumbnail: '/diy-thumbnail.jpg',
  title: 'Projetos DIY para sua Casa',
  channel: 'Faça Você Mesmo',
  views: '1.1M views'
},
{
  thumbnail: '/pet-thumbnail.jpg',
  title: 'Cuidados Essenciais para seu Pet',
  channel: 'Mundo Animal',
  views: '720K views'
},
{
  thumbnail: '/finance-thumbnail.jpg',
  title: 'Dicas de Investimento 2024',
  channel: 'Finanças Inteligentes',
  views: '530K views'
},
{
  thumbnail: '/history-thumbnail.jpg',
  title: 'Eventos Históricos Importantes',
  channel: 'História Viva',
  views: '470K views'
}

];

{/* <div className={styles.container}>
      <div className={styles.menu}>
      <aside className={styles.sidebar}>
        <button className={styles.sidebarItem}>
           <Image src="/home-icon.png" alt="Início" width={24} height={24} /> 
        <span>Início</span>
        </button>
        <button className={styles.sidebarItem}>
        <Image src="/subscriptions-icon.png" alt="Inscrições" width={24} height={24} /> 
       <span>Inscrições</span>
       </button>
      </aside>
       </div>
        <div className={styles.right}></div>
    </div>  */}