export const getLevel = (exp: number) => {
  if (exp >= 10000) {
    let countExp = exp - 10000;
    let level = 0;
    let expForLevel = 1500;
    while (countExp > expForLevel) {
      level++;
      countExp -= expForLevel;
      expForLevel += 500;
    }
    return {
      level: level + 10,
      progressLevel: (countExp / expForLevel) * 100,
      expForLevel,
      currentHpLevel: countExp,
    };
  } else {
    const currentHpLevel = exp % 1000;
    return {
      level: Math.floor(exp / 1000) + 1,
      progressLevel: currentHpLevel / 10,
      expForLevel: 1000,
      currentHpLevel: currentHpLevel,
    };
  }
};
