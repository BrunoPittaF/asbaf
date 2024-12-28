import React from 'react';

import styles from './style.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';

const Notice: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <img className={styles.mainImage} src="/images/nota-de-esclarecimento.jpg" alt="main-img" />
          <h1>Nota de esclarecimento</h1>
          <h2>A ASBAF exibe uma nota de esclarecimento</h2>
          <div className={styles.row}>
            <span>06/05/2024</span>
            <div className={styles.buttons}>
              <a href="">
                <img src="/images/WhatsApp.png" alt="whatsapp" />
              </a>
            </div>
          </div>

          <div className={styles.content}>
            <p>
              Foi com perplexidade que a ASBAF tomou conhecimento, na última quinta (02/05/2024), da
              divulgação de informações falsas a respeito da categoria dos Auditores Fazendários, através de
              postagens e veiculação de mensagens, completamente distorcidas, na mídia.
            </p>

            <p>
              Inicialmente cabe esclarecer que a categoria dos Auditores Fazendários integra o Grupo Fisco,
              conforme preconiza a Lei 6.149/02, constituindo cargo de nível superior desde sua origem,
              devidamente consolidado, composto em lei por 140 servidores, todos aprovados em concurso
              público, com atribuições complexas, específicas da Administração Tributária e essenciais ao
              devido funcionamento da arrecadação municipal, consoante preconiza o art. 37, XXII, da CF/88.
            </p>

            <p>
              Assim como acontece em outros Fiscos do Brasil, a Sefaz Salvador conta com 2 cargos de nível
              superior (Auditor Fazendário e Auditor Fiscal), cada qual com suas atribuições específicas e
              complementares, não existindo qualquer hierarquia entre os mesmos, não havendo portanto que se
              falar em suposta ascensão funcional em nenhuma hipótese.
            </p>

            <p>
              Além disso, a alteração legislativa citada não transformou o cargo (como cita equivocadamente a
              mensagem propagada), mas apenas promoveu mera alteração de nomenclatura, sem quaisquer efeitos
              remuneratórios, não acarretando nenhum aumento de despesa ou impacto financeiro para o
              Município, repita-se, por se tratar de cargo específico já integrante do Grupo Fisco, com
              atribuições próprias já definidas.
            </p>

            <p>
              Em verdade, o que ocorreu foi a uniformização da denominação do cargo efetivo de acordo com a
              nomenclatura costumeiramente aplicada aos demais cargos de nível superior integrantes do Grupo
              Fisco, visando à simplificação e à modernização do serviço público, seguindo, inclusive, os
              ditames da Reforma Tributária recentemente aprovada.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Notice;
