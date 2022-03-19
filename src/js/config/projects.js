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
      en: 'A basic calculator. Decimal part is limited to 3 digits. The first part is limited to 8 digits. If the result does not respect these limits, you will see an error.',
      fr: 'Une simple calculette. La partie décimale est limitée à 3 chiffres. La première partie est limitée à 8 chiffres. Si le résultat ne respecte pas ces limites, vous verrez une erreur.',
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
      fr: "Quelle heure est-il ? Vous pouvez voir l'heure actuelle dans trois formats différents : une horloge analogique, un affichage numérique et sous forme de texte.",
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
    id: 'color-cycle',
    name: 'Color cycle',
    description: {
      en: 'Play with hexadecimal colors. Set a color, then choose one or more increment values and start the preview.',
      fr: "Jouez avec les couleurs hexadécimales. Définissez une couleur, puis choisissez une ou plusieurs valeurs d'incrémentation et démarrez l'aperçu.",
    },
    path: './projects/js-small-apps/color-cycle/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/color-cycle',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/color-cycle',
      },
    ],
    technologies: ['Vanilla Javascript'],
  },
  {
    id: 'css-border-previewer',
    name: 'CSS Border Previewer',
    description: {
      en: 'Play with CSS borders (style, width, radius). Then, you can copy the generated code if the preview suits you.',
      fr: "Jouez avec les bordures CSS (style, largeur, radius). Ensuite, vous pouvez copier le code généré si l'aperçu vous satisfait.",
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
    id: 'meme-generator',
    name: 'Meme Generator',
    description: {
      en: 'Choose a random image, set one or more texts then position them. Your meme is ready!',
      fr: 'Choisissez une image aléatoire, définissez un ou plusieurs textes et positionnez-les. Votre meme est prêt !',
    },
    path: './projects/react-small-apps/apps/meme-generator/build/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/react-small-apps/tree/main/apps/meme-generator',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/react-small-apps/-/tree/main/apps/meme-generator',
      },
    ],
    technologies: ['React', 'Fetch'],
  },
  {
    id: 'notebook',
    name: 'Notebook',
    description: {
      en: 'Create as many pages as you want and fill them. You can define a title and a body. Then you can easily navigate between your pages with the nav.',
      fr: 'Créez autant de pages que vous le souhaitez et remplissez-les. Vous pouvez définir un titre et un corps de texte. Ensuite, vous pouvez facilement naviguer entre vos pages grâce à la navigation.',
    },
    path: './projects/react-small-apps/apps/notebook/build/',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/react-small-apps/tree/main/apps/notebook',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/react-small-apps/-/tree/main/apps/notebook',
      },
    ],
    technologies: ['React', 'React router'],
  },
  {
    id: 'recipe',
    name: 'Recipes',
    description: {
      en: 'Create your recipes list. Edit existing recipes and/or search for new recipes.',
      fr: 'Créez votre liste de recettes. Éditez les recettes existantes et/ou chercher de nouvelles recettes à ajouter.',
    },
    path: './projects/angular-small-apps/apps/recipes/dist/recipes/',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/angular-small-apps/tree/main/apps/recipes',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/angular-small-apps/-/tree/main/apps/recipes',
      },
    ],
    technologies: ['Angular', 'Typescript'],
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
  {
    id: 'todos',
    name: 'Todos',
    description: {
      en: 'You can add, remove or mark as done your todos. For each todos, you can add some details in addition to the title.\n\nLogin: demo@email.com\nPassword: demo',
      fr: 'Vous pouvez ajouter, supprimer ou marquer comme fait vos "todo". Pour chaque "todo", vous pouvez ajouter des détails en plus du titre.\n\nLogin : demo@email.com\nMot de passe : demo',
    },
    path: './projects/react-small-apps/apps/todos/build/',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/react-small-apps/tree/main/apps/todos',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/react-small-apps/-/tree/main/apps/todos',
      },
    ],
    technologies: ['React', 'React router', 'Redux'],
  },
  {
    id: 'typing',
    name: 'Typing',
    description: {
      en: 'You can practice to type as quickly and accurately as possible a random list of words. Three dictionaries are available.\n\nLogin: demo\nPassword: demo',
      fr: 'Vous pouvez vous entrainer à taper le plus rapidement une liste de mots générées alétatoirement. Trois dictionnaires sont disponibles.\n\nLogin : demo\nMot de passe : demo',
    },
    path: './projects/vue-small-apps/apps/typing/dist/',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/vue-small-apps/tree/main/apps/typing',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/vue-small-apps/-/tree/main/apps/typing',
      },
    ],
    technologies: ['Vue', 'Vue router'],
  },
  {
    id: 'users-list',
    name: 'Users list',
    description: {
      en: 'You can see a list of username. By clicking on it, the next column display information about the selected user.',
      fr: "Vous pouvez voir une liste de noms d'utilisateur. En cliquant sur l'un d'eux, la colonne suivante affiche les informations à propos de cet utilisateur.",
    },
    path: './projects/js-small-apps/users-list/index.html',
    repo: [
      {
        name: 'Github',
        url: 'https://github.com/ArmandPhilippot/js-small-apps/tree/main/users-list',
      },
      {
        name: 'Gitlab',
        url: 'https://gitlab.com/ArmandPhilippot/js-small-apps/-/tree/main/users-list',
      },
    ],
    technologies: ['Vanilla Javascript', 'Fetch'],
  },
];

export default projects;
