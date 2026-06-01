export const getEditorialPhrase = (slug, city_name, temp) => {
  const dictionary = {
    cloud: {
      title: `A névoa persistente sobre a capital paulista`,
      desc: `Uma manhã marcada por um manto cinzento e umidade elevada. A temperatura estaciona nos ${temp}°C, enquanto o vento sopra discretamente entre os edifícios.`,
    },
    rain: {
      title: `A chuva constante banha a capital paulista`,
      desc: `Guarda-chuvas a postos para um dia de precipitações contínuas. A temperatura se mantém nos ${temp}°C sob o céu fechado.`,
    },
    clear_day: {
      title: `O sol radiante ilumina a capital paulista`,
      desc: `Céu aberto e clima agradável marcam a paisagem urbana hoje. Os termômetros registram ${temp}°C em um dia convidativo.`,
    },
    cloudly_day: {
      title: `As nuvens dançam sobre a capital paulista`,
      desc: `O sol brinca de esconde-esconde em um dia predominantemente nublado, mantendo a temperatura amena na casa dos ${temp}°C.`,
    },
  };

  const defaultTitle = `O clima sobre a cidade de ${city_name}`;

  const result = dictionary[slug] || {
    title: defaultTitle,
    desc: `Condições meteorológicas variadas marcam o dia. A temperatura atual é de ${temp}°C.`,
  };

  if (city_name.toLowerCase() !== 'são paulo') {
    result.title = result.title.replace('a capital paulista', `a cidade de ${city_name}`);
  }

  return result;
};

export const translateMoonPhase = (phase) => {
  const phases = {
    new: 'Lua Nova',
    waxing_crescent: 'Lua Crescente',
    first_quarter: 'Quarto Crescente',
    waxing_gibbous: 'Gibosa Crescente',
    full: 'Lua Cheia',
    waning_gibbous: 'Gibosa Minguante',
    last_quarter: 'Quarto Minguante',
    waning_crescent: 'Lua Minguante',
  };
  return phases[phase] || phase;
};
