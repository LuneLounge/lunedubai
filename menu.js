/* <span class="fw-bold text-primary">${item.Price} ${item.Currency}</span>  put that line in script if want to show the price */
/*<p class="card-text">${item.Description}</p>*/
const showPrice = false; // Change to false to hide the price globally
const showDescription = false; // Change to false to hide descriptions

const menuData = {
  menu: {
    breakfast: [
      {
        id: "Breakfast1",
        name: "Croissant Eggs Benedict",
        Description:
          "This dish consists of flaky croissants, organic poached egg, smashed avocado, and hollandaise sauce. Allergens to take note of are; eggs, dairy, and gluten.",
        Price: 58,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292890/CroissantEggsBenedict_h4jluc.webp",
      },
      {
        id: "Breakfast2",
        name: "Croissant Shakshuka",
        Description:
          "This dish consists of flaky croissants, aromatic and spicy shakshuka with roasted potatoes and organic poached eggs. Allergens to take note of are; eggs, pine nuts, feta cheese, and gluten.",
        Price: 58,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292888/Croissant_Shakshuka_vcbffo.webp",
      },
      {
        id: "Breakfast3",
        name: "Lune Signature Croissant & Burrata",
        Description:
          "Flaky croissant with fresh and creamy burrata cheese, balsamic vinaigrette paired with pan-grilled organic cherry tomatoes & pesto.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292897/lune_signature_Croissant_Burrata_jms7dl.webp",
      },
      {
        id: "Breakfast4",
        name: "Scrambled Eggs",
        Description:
          "This dish consists of organic scrambled eggs, flaky croissants for the first option. The 2nd option consists of the addition of pencil asparagus and cherry tomatoes. Allergens to take note of are; eggs, dairy, and gluten.",
        Price: 62,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292895/Scrambled_eggs_tsuogs.webp",
      },
      {
        id: "Breakfast5",
        name: "French Omelette Shakshuka",
        Description:
          "This dish consists of organic buttery French omelette, aromatic and spicy shakshuka with roasted potatoes, accompanied by 3 mini croissants. Allergens to take note of are; eggs, pine nuts, feta cheese, and gluten.",
        Price: 65,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292894/French_Omelette_Shakshuka_bywsad.webp",
      },
      {
        id: "Breakfast6",
        name: "Creamy Scrambled Egg & Roasted Vegetable",
        Description:
          "Description not provided, but add any extra details if necessary.",
        Price: 62,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292887/Creamy_Scrambled_egg_Roasted_Vegetable_otsgqi.webp",
      },
      {
        id: "Breakfast7",
        name: "Avocado Toast",
        Description:
          "Slices of French baguette topped organic with smashed avocado, cherry tomatoes, sliced avocado rose, and feta cheese.",
        Price: 63,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292884/Avocado_Toast_ejgjvf.webp",
      },
      {
        id: "Breakfast8",
        name: "Avocado & Scrambled Egg Toast",
        Description:
          "Slices of French baguette topped organic with smashed avocado, cherry tomatoes, sliced avocado rose, and feta cheese.",
        Price: 65,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292880/Avocado_scrambled_egg_toas_hnirp5.webp",
      },
      {
        id: "Breakfast9",
        name: "Citrus Indulgence",
        Description:
          "This dish contains blended yogurt topped with a variety of organic fruits, honey roasted granola, and grated dark chocolate. Allergens to take note of are: dairy and nuts.",
        Price: 65,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292885/Citrus_Indulgence_sspjgc.webp",
      },
      {
        id: "Breakfast10",
        name: "Figs And Berries",
        Description:
          "This dish contains blended yogurt topped with a variety of organic fruits, honey roasted granola, and grated dark chocolate. Allergens to take note of are: dairy and nuts.",
        Price: 65,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292892/Figs_And_Berries_odjt2z.webp",
      },
      {
        id: "Breakfast11",
        name: "Buratta Toast",
        Description:
          "Description not provided, but add any extra details if necessary.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292882/Buratta_Toast_mqxhnm.webp",
      },
    ],
    dinner: [
      {
        id: "Dinner1",
        name: "Roasted Chicken and Truffle Rigatoni",
        Description:
          "A flavorful combination of roasted chicken and truffle rigatoni.",
        Price: 75,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290713/RoastedChickenAndTruffleRigatoni_tzx9gb.webp",
      },
      {
        id: "Dinner2",
        name: "Chicken Risotto",
        Description:
          "This dish consists of organic chicken, risotto, tomato paste, rich chicken stock, peaches, and parmesan crisps. Allergens to take note of are: chicken, dairy, and cheese.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290713/Chicken_Risotto_ylyghu.webp",
      },
      {
        id: "Dinner3",
        name: "Pasta Alfredo & Chicken Parmigiana",
        Description:
          "A classic combination of Alfredo pasta and crispy Chicken Parmigiana.",
        Price: 75,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290713/Pasta_Alferdo_Chicken_Parmigiana_fvxuix.webp",
      },
      {
        id: "Dinner4",
        name: "Truffle Risotto",
        Description:
          "A creamy risotto with truffles, porcini stock, herbs, and spices topped with parmesan crisps and freshly shaved truffle. Allergens to take note of are: dairy and cheese.",
        Price: 76,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290713/Truffle_Ristto_k6thcu.webp",
      },
      {
        id: "Dinner5",
        name: "Brisket Pacherri & Smoked Cheese Pasta",
        Description:
          "A rich, savory dish featuring brisket, Pacherri pasta, and smoked cheese.",
        Price: 85,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290713/Brisket_Pacherri_Smoked_Cheese_Past_ve48r9.webp",
      },
      {
        id: "Dinner6",
        name: "Truffle Rigatoni Pasta",
        Description: "A luxurious combination of truffles and rigatoni pasta.",
        Price: 85,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290713/Truffle_Rigatoni_Pasta_vko6pr.webp",
      },
      {
        id: "Dinner7",
        name: "Deconstructed Pesto & Burrata Lasagna",
        Description:
          "A deconstructed version of lasagna with pesto and creamy burrata.",
        Price: 75,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290713/Deconstructed_Pesto_Burrata_Lasagna_o1wm7h.webp",
      },
    ],
    desserts: [
      {
        id: "D001",
        name: "Tiramisu Roll",
        Description:
          "Coffee Viennese Roll Cake Filled with Coffee Blond Chocolate Cream and Light Cloudy Eggless Mascarpone Whipped Ganache.",
        Price: 58,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292929/Tiramisu_Roll_hpyeby.webp",
      },
      {
        id: "D002",
        name: "Blueberry Cheesecake",
        Description: "Cream Cheese, Sugar, Egg, Cream, Blueberry.",
        Price: 58,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292903/Blueberry_Cheesecake_lhbd8t.webp",
      },
      {
        id: "D003",
        name: "San Sebastian Cheesecake",
        Description:
          "Ultra Creamy Baked Basque Cheesecake on to a Crispy Brittany Shortbread Crust. Almond nuts (Seven AED Extra for normal chocolate or Caramel)(Ten AED Extra for Lune special Chocolate or Caramel).",
        Price: 58,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292925/San_Sebastian_Cheesecake_yobznx.webp",
      },
      {
        id: "D004",
        name: "Cruller Milk Chocolate",
        Description:
          "Choux Pastry Filled with Vanilla Light Cream and Coated with Milk Chocolate Rock Mix.",
        Price: 37,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292914/Cruller_Milk_Chocolate_fcffq6.webp",
      },
      {
        id: "D005",
        name: "Acai Bowl",
        Description:
          "Choose up to 4 ingredients from the following options. (Three AED per Extra Topping) 1- Banana 2- Strawberry 3- Pomegranate 4- Blueberry 5- Blackberry 6- Peanut Butter 7- Granola.",
        Price: 65,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292901/Acai_Bowl_cyphnt.webp",
      },
      {
        id: "D006",
        name: "Lune French Toast",
        Description: "Brioche Bread, Vanilla Ice Cream, Berries, Maple Syrup.",
        Price: 64,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292919/Lune_French_Toast_mkvltf.webp",
      },
      {
        id: "D007",
        name: "Um Ali",
        Description: "Puff Pastry, Milk, Cream, Sugar and Mix Nuts.",
        Price: 56,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292931/Um_Ali_g4f2en.webp",
      },
      {
        id: "D008",
        name: "Creme Brulee",
        Description: "Cream, Sugar, Egg, Vanilla, and Saffron.",
        Price: 56,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743294223/Creme_Brulee_vqabiz.jpg",
      },
      {
        id: "D009",
        name: "Chocolate Fondant",
        Description: "Chacalet, Egg, Sugar, Butter, Vanilla Ice Cream.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292905/Chocolate_Fondant_ruma1p.webp",
      },
      {
        id: "D010",
        name: "Creme Brulee French Toast",
        Description: "Cream brulee, brioche bread, fresh fruits.",
        Price: 85,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292908/Creme_Brulee_French_Toast_ripslm.webp",
      },
      {
        id: "D011",
        name: "Hazelnut Crown",
        Description:
          "Chocolate Mousse, Caramel Sauce, Chocolate Sponge, Hazelnut Praline.",
        Price: 64,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743294463/Hazelnut_Crown_b77l9a.jpg",
      },
      {
        id: "D012",
        name: "Classic Tiramisu",
        Description: "Cream, Cheese, Coffee, Biscuit.",
        Price: 54,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292907/Classic_Tiramisu_spa3fl.webp",
      },
      {
        id: "D013",
        name: "La lune gialla",
        Description:
          "Luscious Vanilla Panna Cotta with Fresh Mango, Peach, and Passionfruit.",
        Price: 58,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292917/La_lune_gialla_xwuzl3.webp",
      },
      {
        id: "D014",
        name: "Signature Fondant",
        Description:
          "Lune’s signature Fondant inspired by traditional dessert, served with Saffron Cream Sauce and a scoop of Vanilla Ice Cream.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292927/Signature_Fondant_pbfxgq.webp",
      },
      {
        id: "D015",
        name: "L’inedit",
        Description: "Lune Signature Creamy Tiramisu Cheesecake.",
        Price: 63,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292921/L_inedit_blf4ko.webp",
      },
      {
        id: "D016",
        name: "Paris Brest",
        Description:
          "Choux pastry filled with crème diplomat, hazelnut praline, and salted caramel truffles topped with almond.",
        Price: 58,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292922/Paris_Brest_xk1qmd.webp",
      },
      {
        id: "D017",
        name: "Date Pudding",
        Description:
          "A classic sticky toffee pudding made with premium dates, doused in salted maple caramel, topped with vanilla ice cream and crisp and delicate dates.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292915/Date_Pudding_tazeqy.webp",
      },
    ],
    Salad: [
      {
        id: "Salad_1",
        name: "Burrata Salad",
        Description:
          "This dish consists of fresh creamy burrata, all organic grilled heirloom tomatoes, balsamic marinated cherry tomatoes, olive oil, and balsamic glaze. Allergens to take note of are; cheese and dairy.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290766/BurrataSalad_ynstjz.webp",
      },
      {
        id: "Salad_2",
        name: "Ciliegina Salad",
        Description:
          "This salad consists of fresh organic mezlun greens, ciliegina cheese, cherry tomatoes, cucumber, and mini croissants in balsamic pesto vinaigrette. Allergens to take note of are; cheese, dairy, and gluten.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290767/CilieginaSalad_abcm8f.webp",
      },
      {
        id: "Salad_3",
        name: "Figs & Nectarine Salad",
        Description:
          "This salad consists of fresh organic mezlun greens, figs, nectarine, brie cheese, crushed walnuts in balsamic vinaigrette. Allergens to take note of are; cheese.",
        Price: 68,
        Currency: "AED",
        Image:
          "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290768/Figs_NectarineSalad_mge9vd.webp",
      },
    ],
    drinks: {
      // Changed to object containing subcategories
      classic_coffee: [
        {
          id: "Coffee1",
          name: "Espresso",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 24,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292684/Expresso_jcmegt.webp",
        },
        {
          id: "Coffee2",
          name: "Macchiato",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 24,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292689/Macchiato_pod0lr.webp",
        },
        {
          id: "Coffee3",
          name: "Piccolo",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 27,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292692/Piccolo_pphoas.webp",
        },
        {
          id: "Coffee4",
          name: "Cortado",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 27,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292683/Cortado_r5sgui.webp",
        },
        {
          id: "Coffee5",
          name: "Spanish Cortado",
          Description: "Blended.",
          Price: 27,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292696/Spanish_Cortado_kmiamz.webp",
        },
        {
          id: "Coffee6",
          name: "Flat White",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 34,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292685/Flat_White_z90zja.webp",
        },
        {
          id: "Coffee7",
          name: "Cappuccino",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292680/Cappuccino_d4f159.webp",
        },
        {
          id: "Coffee8",
          name: "Spanish Latte Hot",
          Description: "Blended.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292697/Spanish_Latte_Hot_htzyfp.webp",
        },
        {
          id: "Coffee9",
          name: "Latte",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 34,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292689/Latte_c4nxh1.webp",
        },
        {
          id: "Coffee10",
          name: "Caramel Latte",
          Description: "Coffee, Caramel and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292681/Caramel_Latte_r4g2ks.webp",
        },
        {
          id: "Coffee11",
          name: "Red Velvet Latte",
          Description: "Red Velvet Powder, Coffee and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292693/Red_Velvet_Latte_kg7t1f.webp",
        },
        {
          id: "Coffee12",
          name: "Mocha",
          Description: "Coffee, Dark Chocolate and Sweet Milk.",
          Price: 28,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292691/Mocha_sipxss.webp",
        },
        {
          id: "Coffee13",
          name: "Matcha",
          Description:
            "Matcha Powder and Fresh Milk / Sweet Milk. Normal - Sweet.",
          Price: 34,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292690/Matcha_sqt0z5.webp",
        },
        {
          id: "Coffee14",
          name: "Saffron Latte",
          Description: "Coffee, Saffron and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292695/Saffron_Latte_yc4dzs.webp",
        },
        {
          id: "Coffee15",
          name: "Rose Latte",
          Description: "Coffee, Rose Syrup and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292694/Rose_Latte_ltflhb.webp",
        },
        {
          id: "Coffee16",
          name: "Americano",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 28,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292680/Americano_p848ch.webp",
        },
        {
          id: "Coffee17",
          name: "Hot Chocolate",
          Description: "White Mocha.",
          Price: 49,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292686/Hot_Chocolate_menxnd.webp",
        },
        {
          id: "Coffee18",
          name: "White Mocha",
          Description: "Blended Coffee, White Chocolate Sauce and Sweet Milk.",
          Price: 28,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292698/White_Mocha_o32dbv.webp",
        },
        {
          id: "Coffee19",
          name: "Hot Colocasia",
          Description: "Blended Beans.",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292688/Hot_Colocasia_ucgk8e.webp",
        },
        {
          id: "Coffee20",
          name: "Hot Tiramisu Latte",
          Description: "Blended Beans.",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292687/Hot_Tiramisu_Latte_rs76ze.webp",
        },
      ],
      ice_coffee: [
        {
          id: "IC001",
          name: "Iced V60 - Signature Lune",
          Description:
            "Origin - Marrakech, Morocco. Flavor Notes - Real Mocha, Chocolatey, Aromatic Flavor and Very Smooth. Roast - Medium to Dark. 100% Arabica Blend.",
          Price: 95,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292789/Iced_V60_-_signature_lune_sdgvdb.webp",
        },
        {
          id: "IC002",
          name: "Iced V60",
          Description: "Choice of Beans.",
          Price: 39,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292790/Iced_V60_cnagkb.webp",
        },
        {
          id: "IC003",
          name: "Iced Chemex",
          Description:
            "Choice of Beans: Ethiopia / Ethiopia Wush Wush, Columbia / Yemen / Indonesia / Panama Geisha.",
          Price: 32,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292774/Iced_Chemex_fp5jhw.webp",
        },
        {
          id: "IC004",
          name: "Iced Americano",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 28,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292770/Iced_Americano_yvr7sl.webp",
        },
        {
          id: "IC005",
          name: "Iced Spanish Latte",
          Description: "Blended.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292787/Iced_Spanish_Latte_npx6wi.webp",
        },
        {
          id: "IC006",
          name: "Iced Latte",
          Description: "Choice of Beans: Ethiopia / Columbia / Brazil.",
          Price: 34,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292778/Iced_Latte_h5ntby.webp",
        },
        {
          id: "IC007",
          name: "Iced Saffron Latte",
          Description: "Coffee, Saffron and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292784/Iced_Saffron_Latte_lrre28.webp",
        },
        {
          id: "IC008",
          name: "Iced Latte Pistachio",
          Description: "Coffee, Pistachio Sauce and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292777/Iced_Latte_Pistacho_ba5sic.webp",
        },
        {
          id: "IC009",
          name: "Iced Rose Latte",
          Description: "Coffee, Rose Syrup and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292783/Iced_Rose_Latte_ckdlfd.webp",
        },
        {
          id: "IC010",
          name: "Iced Caramel Latte",
          Description: "Coffee, Caramel and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292772/Iced_Caramel_Latte_qlv1yo.webp",
        },
        {
          id: "IC011",
          name: "Iced Red Velvet",
          Description: "Red Velvet Powder, Coffee and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292782/Iced_Red_Velvet_mhk9vu.webp",
        },
        {
          id: "IC012",
          name: "Iced Mocha",
          Description: "Coffee, Dark Chocolate and Sweet Milk.",
          Price: 32,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292781/Iced_Mocha_v9uwvv.webp",
        },
        {
          id: "IC013",
          name: "Iced Matcha",
          Description:
            "Matcha Powder and Fresh Milk / Sweet Milk. Normal - Sweet.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292779/Iced_Matcha_h83lu0.webp",
        },
        {
          id: "IC014",
          name: "Iced Spanish Cortado",
          Description: "Blended.",
          Price: 27,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292786/Iced_Spanish_Cortado_tjuw1g.webp",
        },
        {
          id: "IC015",
          name: "Espresso Tonic",
          Description: "Blended Coffee and Soda.",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292769/Espresso_Tonic_qpiaap.webp",
        },
        {
          id: "IC016",
          name: "Affogato",
          Description: "Vanilla Ice Cream and Espresso Shot.",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292767/Affogato_t4pxxl.webp",
        },
        {
          id: "IC017",
          name: "Iced Caramel",
          Description: "Caramel Syrup and Sweet Milk.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292773/Iced_Caramel_joaklx.webp",
        },
        {
          id: "IC018",
          name: "Iced White Mocha",
          Description: "Blended Coffee, White Chocolate Sauce and Sweet Milk.",
          Price: 32,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292792/Iced_White_Mocha_gpmbso.webp",
        },
        {
          id: "IC019",
          name: "Cream Espresso",
          Description: "Vanilla Ice Cream and Espresso Shot.",
          Price: 53,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292768/Cream_espresso_bfq4d0.webp",
        },
        {
          id: "IC020",
          name: "Salted Vanilla Matcha",
          Description:
            "Vanilla Ice Cream, Vanilla Beans, Salted Vanilla Syrup, Matcha Powder and Fresh Milk.",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292793/Salted_vanilla_matcha_g5wd8h.webp",
        },
        {
          id: "IC021",
          name: "Iced Colocasia",
          Description: "Blended Beans.",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292776/Iced_Colocasia_git7ul.webp",
        },
        {
          id: "IC022",
          name: "Iced Tiramisu Latte",
          Description: "Blended Beans.",
          Price: 55,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292788/Iced_Tiramisu_Latte_huk4lw.webp",
        },
      ],
      juices: [
        {
          id: "juice1",
          name: "Hibiscus",
          Description: "",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292754/Hibiscus_hms96a.webp",
        },
        {
          id: "juice2",
          name: "Hibiscus Nitro",
          Description: "",
          Price: 40,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292753/Hibiscus_Nitro_rt7mhy.webp",
        },
        {
          id: "juice3",
          name: "LA-Lune",
          Description: "",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292756/LA-Lune_xalmai.webp",
        },
        {
          id: "juice4",
          name: "Cascara lemonade",
          Description: "",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292743/Cascara_lemonade_jtflvk.webp",
        },
        {
          id: "juice5",
          name: "Cascara Mix Berries",
          Description: "",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292745/Cascara_Mix_Berries_heq1ua.webp",
        },
        {
          id: "juice6",
          name: "Sun Shine",
          Description: "Fresh Orange, Passion Fruit and Grenadine Syrup",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292763/Sun_shine_kcz3f4.webp",
        },
        {
          id: "juice7",
          name: "Cascara",
          Description: "",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292746/Cascara_b53wys.webp",
        },
        {
          id: "juice8",
          name: "V-90",
          Description: "Fresh Orange, Passion Fruit",
          Price: 59,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292764/V-90_vq2jae.webp",
        },
        {
          id: "juice9",
          name: "Fresh Orange",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292752/Fresh_Orange_ll8rkz.webp",
        },
        {
          id: "juice10",
          name: "Flavored Nitro",
          Description:
            "NITRO - Ice Tea and Cold Brew. Choice of Flavors: Cinnamon/Watermelon/Pineapple /Coconut /Caramel /Chocolate",
          Price: 42,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292749/Flavored_Nitro_cq6ooz.webp",
        },
        {
          id: "juice11",
          name: "Passion Fruit Margarita",
          Description:
            "Fresh Mint, Fresh Passion Fruit, Wild Mint, Passion Fruit Puree, Lemon Juice",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292758/passion_fruit_Margarita_atgoi3.webp",
        },
        {
          id: "juice12",
          name: "Crunchy Chocolate",
          Description:
            "Ice Cream, Chocolate Caramel Sauce, Milk, Crunchy Flakes",
          Price: 42,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292748/crunchy_chocolate_cz6vbb.webp",
        },
        {
          id: "juice13",
          name: "Colada Ice",
          Description: "Ice Cream Coconut",
          Price: 40,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292747/colada_Ice_vxz3zi.webp",
        },
        {
          id: "juice14",
          name: "Bad Peach",
          Description: "Peach, Lemon, Wild Mint",
          Price: 39,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292742/BAD_PEACH_mirqxg.webp",
        },
        {
          id: "juice15",
          name: "Passion Honey",
          Description:
            "Banana, Passion Fruit, Honey, Coconut Milk Blend with Ice",
          Price: 40,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292759/Passion_Honey_tu2rhz.webp",
        },
        {
          id: "juice16",
          name: "Ginger Honey",
          Description: "Fresh Ginger, Honey, Lemon Juice",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292751/Ginger_Honey_swg18u.webp",
        },
        {
          id: "juice17",
          name: "Raspberry Rose",
          Description:
            "Raspberry, Rose, Raspberry Lemon Juice, Wild Mint, Soda Water",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292762/Raspberry_Rose_m7gntq.webp",
        },
        {
          id: "juice18",
          name: "Peach Billini",
          Description: "",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292761/Peach_billini_dfz7tv.webp",
        },
        {
          id: "juice19",
          name: "Nitro-Infused Lune",
          Description: "Passion Fruit, Raspberry, Peach Fruit, Cold Brew",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292757/NITRO-INFUSED_LUNE_kb1koh.webp",
        },
      ],
      manual_brew: [
        {
          id: "manual_brew1",
          name: "v60-Signature Lune",
          Description:
            "Origin - Marrakech, Morocco. Flavor Notes - Real Mocha, Chocolatey, Aromatic Flavor and Very Smooth. Roast - Medium to Dark 💯Arabica Blend.",
          Price: 95,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289538/v60-Signature_lune_lxlzel.webp",
        },
        {
          id: "manual_brew2",
          name: "V60",
          Description: "Choice of Beans.",
          Price: 43,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289538/V60_vxjaro.webp",
        },
        {
          id: "manual_brew3",
          name: "Chemex",
          Description: "Choice of Beans.",
          Price: 36,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289538/Chemex_l4rq4u.webp",
        },
        {
          id: "manual_brew4",
          name: "Syphon",
          Description: "Choice of Beans.",
          Price: 34,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289538/Syphon_tq8bud.webp",
        },
        {
          id: "manual_brew5",
          name: "Aeropress",
          Description: "Choice of Beans.",
          Price: 39,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289537/Aeropress_vmtswg.webp",
        },
        {
          id: "manual_brew6",
          name: "Cold Brew",
          Description: "Ethiopia Wush Wush.",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289538/Cold_Brew_orz8ih.webp",
        },
        {
          id: "manual_brew7",
          name: "Kalita Wave",
          Description: "Choice of Beans.",
          Price: 40,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289538/kalita_wave_inxcef.webp",
        },
      ],
      mojito: [
        {
          id: "Mojito 1",
          name: "Passion Fruit Mojito",
          Description: "",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743350310/Passion_Fruit_Mojito_lkxuhf.webp",
        },
        {
          id: "Mojito 2",
          name: "Strawberry Mojito",
          Description: "",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743350314/Strawberry_Mojito_oqiukz.webp",
        },
        {
          id: "Mojito 3",
          name: "Classic Mojito",
          Description: "A refreshing original mojito with Lemon & Mint mix",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743350307/classic_mojito_cfkkqa.webp",
        },
        {
          id: "Mojito 4",
          name: "Raspberry Mojito",
          Description: "",
          Price: 39,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743350311/Raspberry_mojito_fb1cfe.webp",
        },
        {
          id: "Mojito 5",
          name: "Bubble Gum Mojito",
          Description: "A refreshing original mojito with Lemon & Mint mix",
          Price: 38,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743350306/Bubble_Gum_Mojito_cpiqec.webp",
        },
        {
          id: "Mojito 6",
          name: "Watermelon Mojito",
          Description: "Watermelon, wild mint, lime juice",
          Price: 39,
          Currency: "AED",
          Description: "Watermelon, wild mint, lime juice",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743350316/Water_melon_mojito_hu6qbo.webp",
        },
      ],

      organic_tea: [
        {
          id: "Organic_Tea_1",
          name: "Lemon Grass Tea",
          Description: "A refreshing tea made from lemongrass.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292830/Lemon_Grass_Tea_wtwupu.webp",
        },
        {
          id: "Organic_Tea_2",
          name: "White Rose Tea",
          Description: "A fragrant and delicate tea made from white roses.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292836/White_Rose_Tea_n1bvx6.webp",
        },
        {
          id: "Organic_Tea_3",
          name: "Earl Gray Tea",
          Description: "A classic black tea flavored with bergamot.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292824/Earl_Gray_Tea_jsn7eb.webp",
        },
        {
          id: "Organic_Tea_4",
          name: "Chamomile Tea",
          Description: "A soothing herbal tea made from chamomile flowers.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292821/Chamomile_Tea_yf3iig.webp",
        },
        {
          id: "Organic_Tea_5",
          name: "Green Tea",
          Description:
            "A refreshing and healthy tea made from green tea leaves.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292829/Green_Tea_ccmna4.webp",
        },
        {
          id: "Organic_Tea_6",
          name: "English Tea",
          Description: "A traditional black tea blend.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292826/English_Tea_s88ypk.webp",
        },
        {
          id: "Organic_Tea_7",
          name: "Moroccan Mint Tea",
          Description: "A refreshing blend of mint and green tea.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292831/Morrocan_Mint_Tea_wgwssm.webp",
        },
        {
          id: "Organic_Tea_8",
          name: "Ginger Lemon Tea",
          Description: "A spicy and tangy blend of ginger and lemon.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292827/Ginger_Lemon_Tea_mqka3i.webp",
        },
        {
          id: "Organic_Tea_9",
          name: "Collada Ice Tea",
          Description: "A chilled ice tea with tropical flavors.",
          Price: 40,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292823/Collada_Ice_Tea_l1a16p.webp",
        },
        {
          id: "Organic_Tea_10",
          name: "Red Fruit Ice Tea",
          Description: "A fruity and refreshing iced tea made with red fruits.",
          Price: 40,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292834/Red_Fruit_Ice_Tea_r7abuq.webp",
        },
        {
          id: "Organic_Tea_11",
          name: "Berries Ice Tea",
          Description: "A refreshing iced tea made with mixed berries.",
          Price: 40,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292819/Berries_Ice_Tea_rp0r67.webp",
        },
        {
          id: "Organic_Tea_12",
          name: "Strawberry Ice Tea",
          Description:
            "A sweet and refreshing iced tea made with strawberries.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292835/Strawberry_ice_tea_r2vsr9.webp",
        },
        {
          id: "Organic_Tea_13",
          name: "Classic Iced Tea",
          Description: "A refreshing classic iced tea.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292822/Classic_iced_tea_bd11bg.webp",
        },
        {
          id: "Organic_Tea_14",
          name: "Peach Ice Tea",
          Description: "A sweet and tangy iced tea made with peaches.",
          Price: 35,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292832/PEACH_ICE_TEA_bztchr.webp",
        },
      ],
      smoothies: [
        {
          id: "Smoothie_1",
          name: "Acai Smoothie",
          Price: 48,
          Currency: "AED",
          Description:
            "Choose up to 3 ingredients from the following options. (Three AED per Extra Topping) 1- Banana 2- Strawberry 3- Pomegranate 4- Blueberry 5- Blackberry 6- Peanut Butter 7- Granola",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292718/Acai_Smoothie_ndhp2j.webp",
        },
        {
          id: "Smoothie_2",
          name: "Matcha Smoothie",
          Description: "",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292717/Matcha_Smoothie_uljddw.webp",
        },
        {
          id: "Smoothie_3",
          name: "Healthy Organic Lune Smoothie",
          Price: 38,
          Currency: "AED",
          Description: "Banana, Strawberry, Blueberry, Coconut milk",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292716/Healthy_Organic_Lune_Smoothie_oazyoe.webp",
        },
        {
          id: "Smoothie_4",
          name: "Matcha Strawberry Smoothie",
          Price: 48,
          Currency: "AED",
          Description:
            "Organic Matcha powder, Strawberry, strawberry syrup, Garnish: Fresh Strawberry",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292720/Matcha_Strawberry_Smoothie_xugbmj.webp",
        },
        {
          id: "Smoothie_5",
          name: "Smoothie Coconut Matcha",
          Price: 40,
          Currency: "AED",
          Description: "Coconut flakes, vanilla ice cream, milk, matcha",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743292721/Smoothie_Coconut_matcha_gophim.webp",
        },
      ],
      frappe: [
        {
          id: "frappe-1",
          name: "Caramel Frappe",
          Price: 45,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743290454/Caramel_Frappe_bky6yr.webp",
        },
      ],
      water: [
        {
          id: "water-1",
          name: "Ginger Ale Britvic",
          Price: 15,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289540/Ginger_Ale_Britvic_axckzy.webp",
        },
        {
          id: "water-2",
          name: "Evian Sparkling Water",
          Price: 18,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289540/Evian_Sparkling_Water_nn8ewf.webp",
        },
        {
          id: "water-3",
          name: "Evian Still Water",
          Price: 16,
          Currency: "AED",
          Image:
            "https://res.cloudinary.com/dx2ncdota/image/upload/v1743289540/Evian_Still_Water_h5nsdr.webp",
        },
      ],
    },
  },
};
