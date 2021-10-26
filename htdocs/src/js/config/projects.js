const projects = [
  {
    id: 'bin2dec',
    name: 'Bin2Dec',
    description: {
      en: 'Convert a binary string to a decimal number.',
      fr: 'Convertit un nombre binaire en un nombre décimal.',
    },
    path: './projects/js-small-apps/bin2dec/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/bin2dec',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/bin2dec',
      },
    ],
    technologies: ['Vanilla Javascript'],
  },
  {
    id: 'budget-app',
    name: 'Budget App',
    description: {
      en: 'By selecting a language in the initialization form, only the currency is converted (the app is not translated). Also, no data is saved on page reload.',
      fr: "En sélectionnant une langue dans le formulaire d'initialisation, seul le format des nombres change (l'application n'est pas traduite). Aucune donnée n'est conservée après rechargement de la page.",
    },
    path: './projects/js-small-apps/budget-app/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/budget-app',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/budget-app',
      },
    ],
    technologies: ['Vanilla Javascript'],
  },
  {
    id: 'calculator',
    name: 'Calculator',
    description: {
      en: 'A basic calculator.',
      fr: 'Une simple calculette.',
    },
    path: './projects/js-small-apps/calculator/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/calculator',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/calculator',
      },
    ],
    technologies: ['Vanilla Javascript'],
  },
  {
    id: 'clock',
    name: 'Clock',
    description: {
      en: 'What time is it? You can have the current hour in three formats: an analogic clock, a numeric display or a text.',
      fr: "Quelle heure est-il ? Vous pouvez voir l'heure actuelle dans trois formats : une horloge analogique, un affichage numérique et sous forme de texte.",
    },
    path: './projects/js-small-apps/clock/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/clock',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/clock',
      },
    ],
    technologies: ['Vanilla Javascript', 'SVG'],
  },
  {
    id: 'css-border-previewer',
    name: 'CSS Border Previewer',
    description: {
      en: 'Play with CSS borders (style, width, radius). Then, you can copy the generated code if the preview suits you.',
      fr: "Jouez avec les bordures CSS (style, largeur, radius). Puis, vous pouvez copier le code généré si l'aperçu vous satisfait.",
    },
    path: './projects/js-small-apps/css-border-previewer/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/css-border-previewer',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/css-border-previewer',
      },
    ],
    technologies: ['Vanilla Javascript'],
  },
  {
    id: 'rps-game',
    name: 'Rock Paper Scissors',
    description: {
      en: 'A basic implementation of the game. Try to beat your friend or the computer.',
      fr: "Une implémentation du jeu. Essayez de battre votre ami ou l'ordinateur.",
    },
    path: './projects/js-small-apps/rock-paper-scissors/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/rock-paper-scissors',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/rock-paper-scissors',
      },
    ],
    technologies: ['Vanilla Javascript'],
  },
];

export default projects;
