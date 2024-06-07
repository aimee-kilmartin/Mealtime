export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('method').del()
  await knex('method').insert([
    {
      id: 1,
      method:
        '	Drain and pat the tofu dry with kitchen paper. Cut into cubes, wrap in more kitchen paper, and place a heavy board over the top. Leave to drain for 15 mins.	',
      note: ' ',
    },
    {
      id: 2,
      method:
        '	Mix the cornflour, chilli flakes and ground peppercorns together in a bowl with a pinch of salt, then add the drained tofu. Toss well to coat.	',
      note: ' ',
    },
    {
      id: 3,
      method:
        '	Heat half the vegetable oil in a large non-stick frying pan over a high heat, and fry the tofu pieces for 5-6 mins until golden all over. Scoop out of the pan, and leave to drain on kitchen paper.	',
      note: ' ',
    },
    {
      id: 4,
      method:
        '	Add the remaining oil to the pan and stir-fry the spring onions and beans for 3-4 mins until tender and lightly golden. Pour a kettle of boiling water over the noodles in a sieve to loosen. Drain well, then tip into the pan. Fry for a few minutes until piping hot. Add the sesame oil and sesame seeds, and sizzle for a few seconds. Splash in the soy sauce, rice vinegar, then add the tofu. Toss well, then serve in bowls with a pinch of sesame seeds on top and more soy sauce on the side.	',
      note: ' ',
    },
    {
      id: 5,
      method:
        '	Bring a large pan of water to the boil and cook the pasta following pack instructions, adding the broccoli florets to the pan for the final 4 mins. Drain and set aside.	',
      note: ' ',
    },
    {
      id: 6,
      method:
        '	Meanwhile, make the sauce. Heat the oil in a large pan and cook the onion for 5 mins to soften, then stir in the garlic and cook for 1 min more. Stir in the ham, cream and mustard, then bring to the boil. Add the pasta and broccoli, then stir in the cheese, coating everything in the sauce.	',
      note: ' ',
    },
    {
      id: 7,
      method:
        '	Warm the chickpeas in a microwave or frying pan in their liquid. Drain and reserve the liquid. Tip half the chickpeas into a small food processor with 1 tbsp oil, the lemon juice and a splash of the liquid from the tin and whizz to a paste. Season.	',
      note: ' ',
    },
    {
      id: 8,
      method:
        '	Put the chorizo in a small frying pan and cook over a low heat until it starts to release its oils, then turn up the heat and continue cooking until the chorizo starts to crisp. Add the remaining chickpeas and stir for a couple of mins. Stir in the kale and cook until it wilts.	',
      note: ' ',
    },
    {
      id: 9,
      method:
        '	Spoon the warm hummus into a bowl and tip the chorizo, chickpeas and kale on top. Drizzle over the remaining oil, season well and serve with flatbread for scooping up.	',
      note: ' ',
    },
    {
      id: 10,
      method:
        '	Add 4 tbsp self-raising flour, 4 tbsp caster sugar and 2 tbsp cocoa powder to the largest mug you have (to stop it overflowing in the microwave) and mix.	',
      note: ' ',
    },
    {
      id: 11,
      method:
        "	Add 1 medium egg and mix in as much as you can, but don't worry if there's still dry mix left.	",
      note: ' ',
    },
    {
      id: 12,
      method:
        '	Add the 3 tbsp milk, 3 tbsp vegetable or sunflower oil and a few drops of vanilla essence and mix until smooth, before adding 2 tbsp chocolate chips, nuts, or raisins, if using, and mix again.	',
      note: ' ',
    },
    {
      id: 13,
      method:
        '	Centre your mug in the middle of the microwave oven and cook on High for 1½ -2 mins, or until it has stopped rising and is firm to the touch.	',
      note: ' ',
    },
    {
      id: 14,
      method:
        '	Heat oven to 200C/180C fan/gas 6. Make up the bread mix following pack instructions, then roll out to a 30 x 40cm rectangle. Spread over 75g of the garlic butter and half the oregano, then sprinkle the cheese and roll up like a Swiss roll.	',
      note: ' ',
    },
    {
      id: 15,
      method:
        '	Cut into 8 even slices and transfer to a well-greased round 23cm tin and arrange 7 round the outside, 1 in the middle. Brush with any leftover butter. Cover with oiled cling film and leave in a warm place to puff up while you make the soup. Once doubled in size, bake bread for 25-30 mins.	',
      note: ' ',
    },
    {
      id: 16,
      method:
        '	Heat the remaining garlic butter in a pan until foaming. Add the onion and carrot, and cook until softened. Pour in the tomatoes, crumble over the stock cube, add the remaining oregano and simmer for about 20 mins, then stir in the crème fraîche. Blend and season – it may need a pinch of sugar if it tastes slightly acidic. Add enough boiling water for a good soup consistency and keep on a gentle heat until the bread is done.	',
      note: ' ',
    },
    {
      id: 17,
      method:
        '	Tip the couscous into a large bowl and pour over the stock. Cover, then leave for 10 mins until fluffy and all the stock has been absorbed. Meanwhile, slice the onions and pepper, and dice the cucumber. Add these to the couscous, fork through the pesto, crumble in the feta, then sprinkle over pine nuts to serve.	',
      note: ' ',
    },
    {
      id: 18,
      method:
        '	Whisk the coffee, sugar and 3 tbsp boiling water in a bowl for approximately 5 mins until the mixture is thick and fluffy with stiff peaks. This is easiest done using an electric whisk but can be done by hand.	',
      note: ' ',
    },
    {
      id: 19,
      method:
        '	For hot coffee, heat the milk and pour into two heatproof glasses. For cold coffee, pour the cold milk into two glasses. Divide the coffee mixture in half and spoon evenly on top of the glasses. Serve and stir thoroughly before drinking.	',
      note: ' ',
    },
  ])
}
