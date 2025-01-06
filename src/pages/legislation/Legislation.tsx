import React from 'react';
import styles from './styles.module.scss';
import { useParams } from 'react-router-dom';

interface ILaw {
  name: string;
  paragraph: string;
  link: string;
}

const Legislation: React.FC = () => {
  const { id } = useParams();
  const positionLaw = Number(id);
  const listLaw: ILaw[] = [
    {
      name: 'Lei ordinaria 6149, 2002',
      paragraph:
        'Esta Lei institui o Plano de Cargos e Vencimentos dos Servidores da Administração Direta, Autarquias e Fundações Públicas da Prefeitura Municipal do Salvador. Parágrafo Único. Os dispositivos deste Plano de Cargos e Vencimentos não se aplicam aos servidores do Grupo Magistério, do Grupo Profissionais da Saúde e do Grupo Procuradoria, por estarem submetidos a legislação específica. As Tabelas de Vencimentos dos cargos efetivos compreendidos pelo Plano de Cargos e Vencimentos dos Servidores da Administração Direta, Autárquica e Fundacional da Prefeitura Municipal de Salvador, instituído pela Lei nº 8.629, de 14 de julho de 2014, e pelo Plano de Cargos e Vencimentos dos Profissionais de Saúde da Prefeitura Municipal de Salvador, instituído pela Lei nº 7.867, de 12 de julho de 2010, passam a vigorar de acordo com os Anexos I e II desta Lei, a partir de 1º de maio de 2024.',
      link: 'https://files-bruno-dev.s3.us-east-2.amazonaws.com/files/Lei-ordinaria-6149-2002-Salvador-BA-consolidada-[14-07-2014].pdf',
    },
    {
      name: 'Lei ordinaria 8629, 2014',
      paragraph:
        'Esta Lei institui o Plano de Cargos e Vencimentos dos Servidores da Administração Direta, das Autarquias e Fundações Públicas do Poder Executivo do Município de Salvador, sob o regime jurídico estatutário previsto na Lei Complementar nº 1, de 15 de março de 1991, e alterações posteriores. Parágrafo Único - Os dispositivos deste Plano de Cargos e Vencimentos não se aplicam aos servidores do Grupo Magistério Público Municipal, do Grupo Profissionais de Saúde e do Grupo Procuradoria, por estarem submetidos à legislação específica. O Plano de Cargos e Vencimentos, instituído por esta Lei, tem por objetivo a valorização do servidor através da equidade de oportunidades de desenvolvimento profissional, associando a evolução funcional a um sistema permanente de capacitação e avaliação, como forma de melhorar a gestão pública, a eficiência, a eficácia e a qualidade dos serviços prestados à população, fundamentadas nos princípios e diretrizes de:',
      link: 'https://files-bruno-dev.s3.us-east-2.amazonaws.com/files/Lei-ordinaria-8629-2014-Salvador-BA-consolidada-[15-08-2024].pdf',
    },
    {
      name: 'Lei complementar 80, 2022',
      paragraph:
        'Os valores dos vencimentos dos cargos efetivos integrantes do Magistério Público ficam reajustados em 6% (seis por cento), na forma do Anexo I desta Lei. Os valores dos vencimentos dos cargos de Analista de Planejamento, Infraestrutura e Obras Públicas e Fiscal de Serviços Municipais, fixados nas tabelas de vencimento constantes do Anexo IV da Lei nº 8.629, de 14 de julho de 2014, ficam reajustados em 6% (seis por cento), na forma do Anexo II desta Lei. Os valores dos vencimentos dos cargos de provimento efetivo do Grupo Fisco ficam reajustados em 6% (seis por cento), na forma do Anexo III desta Lei',
      link: 'https://files-bruno-dev.s3.us-east-2.amazonaws.com/files/Lei-complementar-80-2022-Salvador-BA-consolidada-%5B01-11-2022%5D.pdf',
    },
    {
      name: 'Lei ordinaria 9808, 2024',
      paragraph:
        'Os valores dos vencimentos dos cargos de provimento efetivo da Administração Direta, Autárquica e Fundacional do Poder Executivo Municipal ficam reajustados em 4% (quatro por cento), a partir de 1º de maio de 2024. Parágrafo único. Ficam excluídos do disposto no caput deste artigo os valores dos vencimentos do cargo de provimento efetivo do Grupo Magistério, Agentes de Trânsito, Agentes de Trânsito e Transporte e Procurador do Município. As Tabelas de Vencimentos dos cargos efetivos compreendidos pelo Plano de Cargos e Vencimentos dos Servidores da Administração Direta, Autárquica e Fundacional da Prefeitura Municipal de Salvador, instituído pela Lei nº 8.629, de 14 de julho de 2014, e pelo Plano de Cargos e Vencimentos dos Profissionais de Saúde da Prefeitura Municipal de Salvador, instituído pela Lei nº 7.867, de 12 de julho de 2010, passam a vigorar de acordo com os Anexos I e II desta Lei, a partir de 1º de maio de 2024.',
      link: 'https://files-bruno-dev.s3.us-east-2.amazonaws.com/files/Lei-ordinaria-9808-2024-Salvador-BA.pdf',
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h2>Legislação</h2>

        <p>{listLaw[positionLaw].paragraph}</p>
        <p>
          Para acessar a lei completa
          <a href={listLaw[positionLaw].link}> clique aqui</a>
        </p>
      </div>
    </main>
  );
};

export default Legislation;
