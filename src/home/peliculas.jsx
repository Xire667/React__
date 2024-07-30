import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style_home.css';

const peliculasData = [
  {
    id: 1,
    titulo: 'La Casa de Papel',
    imagenUrl: 'https://fontmeme.com/images/la-casa-de-papel-font-1.jpg',
  },
  {
    id: 2,
    titulo: 'El Irlandés',
    imagenUrl: 'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABVmQxIvDlRlCp90i9OyKoBRvQdKckeTInJzyY3XectX47APTovMYT6CZucXtHyYzqNZkm7ACISOpBdACfyUQSjP2wABvTo4bRT2_.jpg?r=44e',
  },
  {
    id: 3,
    titulo: 'Bird Box',
    imagenUrl: 'https://neotraba.com/wp-content/uploads/2019/05/Bird-Box-imagen-promocional.jpg',
  },
  {
    id: 4,
    titulo: 'El Bromas',
    imagenUrl: 'https://m.media-amazon.com/images/S/pv-target-images/97da6d6bc6641ade91c5510f6539d10c46f3dbc367ba03718eb4db08ff968e3f.jpg',
  },
  {
    id: 5,
    titulo: 'Parasite',
    imagenUrl: 'https://www.heavenofhorror.com/wp-content/uploads/2024/04/parasyte-the-grey-netflix-series-review-1200x720.jpg',
  },
  {
    id: 6,
    titulo: '1917',
    imagenUrl: 'https://i.blogs.es/617452/1917-cartel/1366_2000.jpeg',
  },
  {
    id: 7,
    titulo: 'Once Upon a Time in Hollywood',
    imagenUrl: 'https://m.media-amazon.com/images/S/pv-target-images/66f0e96fb0c6d37ee7ec7919b57051b1541dd5f6c7d1db9fce3c888370961555.jpg',
  },
  {
    id: 8,
    titulo: 'Avengers: Endgame',
    imagenUrl: 'https://e.rpp-noticias.io/xlarge/2019/04/01/024302_772508.jpg',
  },
  {
    id: 9,
    titulo: 'Spider-Man: Far From Home',
    imagenUrl: 'https://ntvb.tmsimg.com/assets/p14569140_v_h10_ap.jpg?w=960&h=540',
  },
  {
    id: 10,
    titulo: 'Knives Out',
    imagenUrl: 'https://occ-0-114-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABWNS6JRCYkMTLf_tqtxEvwlQFjJdxq4E2iByOf6g0ulPFRB5V5fFmILGPKSGrUeeoW4YKcE8ISsIVEssaRvvaDLPRGANV8tqZh7J.jpg?r=312',
  },
  {
    id: 11,
    titulo: 'Django Unchained',
    imagenUrl: 'https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABR-HjYmJ_pyDf0Beq234Bnw9p5kMmTLnVc52y_DQ7nZ6MePqlJUCRP4jK6FxIZzols1a7P5imrmfJlLGdj_gqdJrcwVzDhKy5uw.jpg?r=27e',
  },
  {
    id: 12,
    titulo: 'Ford v Ferrari',
    imagenUrl: 'https://www.latercera.com/resizer/Q-HigzaiKCbjQENRjh6rxY3vCoc=/1200x630/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/NKQVS2VYYNGSJACU72WNSV6SXM.jpg',
  },
  {
    id: 13,
    titulo: 'Jumanji: The Next Level',
    imagenUrl: 'https://occ-0-114-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABZbftQYJLsozm5DPyGzog14Sti25S7xG_wNbYSVMs0w2bgom5KJQIYLgJxJyy2m5HOT_RsxiDtS3-t9_S-w35edlPOHvYuHiPdCI.jpg?r=1c8',
  },
  {
    id: 14,
    titulo: 'Toy Story 4',
    imagenUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/702FE7EC12664DF554BA168BC28E057B20057720FC5D7EAC69ABE907A37F43F8/scale?width=1200&aspectRatio=1.78&format=webp',

  },
  {
    id: 15,
    titulo: 'A Beautiful Day in the Neighborhood',
    imagenUrl: 'https://bradfordonavontowncouncil.gov.uk/wp-content/uploads/2023/01/AAAABb08QlEe2zEGeIO7IeU9KvIGCwwzq56tnxNaolubUpySSE8E-dMmi9nRseohO_TJB8bocbYgR0dXrC1QOYzWtPNSRPpn77h5OF-Q.jpg',
  },
  {
    id: 16,
    titulo: 'The Farewell',
    imagenUrl: 'https://laboratoriodespoilers.wordpress.com/wp-content/uploads/2020/01/captura-de-pantalla-2020-01-24-a-las-9.27.24-a.m..png',
  },
  {
    id: 17,
    titulo: 'Jojo Rabbit',
    imagenUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/99104D64A90FBB4FA0758B0C690EB4EF14863C6DE92AB876A34BACD9EB0B04AE/scale?width=1200&aspectRatio=1.78&format=webp',
  },
  {
    id: 18,
    titulo: 'The Lighthouse',
    imagenUrl: 'https://www.espectaculosdeaca.com.ar/wp-content/uploads/2020/05/The-Lighthouse-2019-Rese%C3%B1a-de-pel%C3%ADcula-Screen-Rant-780x405-1-800x500_c.jpg',

  },
  {
    id: 19,
    titulo: 'Midway',
    imagenUrl: 'https://occ-0-116-114.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABU_2895m97v-aKz8p00ByhYZch7u1Q-fP0E74N1MB4-67RrdbBkKZMynEy6ep97apNUsmo0VTwHmqRKVjMzD9wN4l3NIBcL_5vQ.jpg?r=920',
  },
  {
    id: 20,
    titulo: 'Maleficent: Mistress of Evil',
    imagenUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AFA6319127B5150A87EBAFF4D05BE5DE10244778420F5B87323704B4EA68285E/scale?width=1200&aspectRatio=1.78&format=webp',
  },
];

const Pelicula = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = peliculasData.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container_home">
      <div className="navigation">
        <h2 className="logo_home">Suiza Flix</h2>
        <ul className="nav_home">
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/pelis">Películas</Link></li>
          <li><Link to="/milista">Mi lista</Link></li>
          <li><Link to="/añadidos">Añadidos Recientemente</Link></li>
        </ul>
        <div className="search_box">
          <i className="fa fa-search"></i>
          <input
            type="text"
            placeholder="Buscar película..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div>
        {filteredMovies.length > 0 ? (
          <></>
        ) : (
          <div className="no_results_message">
            {searchTerm ? `La película que busca no está disponible o no existe.` : 'Escribe algo para buscar películas'}
          </div>
        )}
      </div>
      <div className="recomenda">
        <h2>Películas Disponibles</h2>
        <div className="movie-grid">
          {filteredMovies.map((pelicula) => (
            <Link key={pelicula.id} to={`/pelis/${pelicula.id}`} className="movie-link">
              <div className="movie-item">
                <img
                  src={pelicula.imagenUrl}
                  alt={pelicula.titulo}
                />
                <div className="movie-title">{pelicula.titulo}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pelicula;

