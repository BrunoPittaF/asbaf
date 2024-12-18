import React from 'react';
import { Icon } from '../Icon/Icon';

import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src="/images/logo.png" alt="ASBAF" />
          <p>
            A Associação Baiana dos Auditores Fazendários é uma empresa sem fins lucrativos que trata
            exclusivamente dos interesses dos Auditores Fazendários Municipais, buscando viabilizar
            oportunidades profissionais, juntamente com a integração dos seus associados, oferecendo um espaço
            aberto para debates, reuniões, descanso e lazer.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.buttons}>
            <img src={Icon['instagram']} alt="instagram" />
            <img src={Icon['facebook']} alt="facebook" />
            <img src={Icon['twitter']} alt="twitter" />
          </div>
          <p>Endereço:</p>
          <address>
            Rua do Tira Chapéu, 06, Condomínio Edifício Nossa Senhora da Ajuda 7º Andar, Salas 701/702 -
            Centro, Salvador - BA, 40020-060
          </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
