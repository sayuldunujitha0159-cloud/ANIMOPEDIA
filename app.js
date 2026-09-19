const animals = [
  {id:'african-elephant',name:'African Elephant',scientific:'Loxodonta africana',group:'Mammals',emoji:'🐘',color:'#dceff2',habitat:'Savanna, woodland and forest',region:'Sub-Saharan Africa',diet:'Herbivore',status:'Endangered',lifespan:'60–70 years',description:'The largest land animal on Earth uses its trunk for breathing, touching, drinking, and communicating.',facts:['Elephants can detect low-frequency sounds through the ground.','Their ears help release excess heat.'],featured:1,related:['Asian Elephant','Mammoths'],adaptations:['Trunk for grasping and communication','Large ears for cooling'],behaviour:'Herbivores often travel in family groups known as herds.'},
  {id:'bengal-tiger',name:'Bengal Tiger',scientific:'Panthera tigris tigris',group:'Mammals',emoji:'🐯',color:'#fff0d0',habitat:'Grasslands, forests and mangroves',region:'The Indian subcontinent',diet:'Carnivore',status:'Endangered',lifespan:'10–15 years',description:'A powerful solitary cat, the Bengal tiger is famous for its striped coat and ability to swim.',facts:['No two tigers have exactly the same stripe pattern.','Tigers are strong swimmers and often cross rivers.'],featured:2,related:['Snow Leopard','Lion'],adaptations:['Striped camouflage','Powerful limbs for pouncing'],behaviour:'Tigers are mostly solitary and mark territory.'},
  {id:'blue-whale',name:'Blue Whale',scientific:'Balaenoptera musculus',group:'Mammals',emoji:'🐋',color:'#dce8ff',habitat:'Open ocean',region:'Oceans worldwide',diet:'Filter feeder',status:'Endangered',lifespan:'70–90 years',description:'The largest animal ever known, the blue whale feeds on tiny krill by filtering seawater through baleen.',facts:['A blue whale heart can weigh as much as a small car.','Their songs can travel long distances underwater.'],featured:3,related:['Humpback Whale','Fin Whale'],adaptations:['Baleen for filter-feeding','Streamlined body for efficient swimming'],behaviour:'Blue whales often migrate long distances between feeding and breeding grounds.'},
  {id:'emperor-penguin',name:'Emperor Penguin',scientific:'Aptenodytes forsteri',group:'Birds',emoji:'🐧',color:'#e6f3f7',habitat:'Antarctic sea ice',region:'Antarctica',diet:'Carnivore',status:'Near Threatened',lifespan:'15–20 years',description:'The tallest penguin species survives harsh Antarctic winters by huddling together for warmth.',facts:['Males incubate the egg on their feet.','They can dive deeper than 500 metres.'],featured:4,related:['Adelie Penguin','King Penguin'],adaptations:['Dense feathers and fat layer','Group huddling for survival'],behaviour:'Emperor penguins gather in large colonies during breeding.'},
  {id:'green-sea-turtle',name:'Green Sea Turtle',scientific:'Chelonia mydas',group:'Reptiles',emoji:'🐢',color:'#e6f5d9',habitat:'Tropical and subtropical seas',region:'Warm oceans worldwide',diet:'Herbivore',status:'Endangered',lifespan:'70–80 years',description:'Green sea turtles travel thousands of kilometres and graze on seagrass and algae.',facts:['They navigate using Earth’s magnetic field.','Females return to nest on beaches near where they hatched.'],featured:5,related:['Loggerhead Turtle','Leatherback Turtle'],adaptations:['Strong flippers for swimming','Long-distance navigation'],behaviour:'Adult turtles often rest in shallow coastal waters.'},
  {id:'red-panda',name:'Red Panda',scientific:'Ailurus fulgens',group:'Mammals',emoji:'🦊',color:'#ffe8d7',habitat:'Temperate mountain forests',region:'Eastern Himalayas',diet:'Omnivore',status:'Endangered',lifespan:'8–10 years',description:'Red pandas are tree-climbing mammals with an agile tail and a bamboo-heavy diet.',facts:['Their name does not mean they are close relatives of giant pandas.','Their tails help with balance in trees.'],featured:6,related:['Giant Panda','Raccoon'],adaptations:['Flexible ankles for climbing head-first down trunks','Dense fur for cold mountain nights'],behaviour:'Red pandas are mostly solitary and active at dawn and dusk.'},
  {id:'green-anaconda',name:'Green Anaconda',scientific:'Eunectes murinus',group:'Reptiles',emoji:'🐍',color:'#e0f0db',habitat:'Swamps, marshes and slow rivers',region:'Tropical South America',diet:'Carnivore',status:'Least Concern',lifespan:'10–12 years',description:'The green anaconda is a heavy-bodied constrictor that spends much of its life in water.',facts:['Females are much larger than males.','They can remain submerged for several minutes.'],featured:7,related:['Reticulated Python','Boa Constrictor'],adaptations:['Powerful muscular body','Camouflage in muddy water'],behaviour:'Anacondas are ambush predators that rely on stealth.'},
  {id:'clownfish',name:'Clownfish',scientific:'Amphiprioninae',group:'Fish',emoji:'🐠',color:'#fff0cf',habitat:'Coral reefs and lagoons',region:'Indian and Pacific Oceans',diet:'Omnivore',status:'Least Concern',lifespan:'6–10 years',description:'Clownfish live among sea anemones and are famous for their partnership with these stinging animals.',facts:['A mucus coating protects them from the anemone’s sting.','The largest fish in a group is usually the female.'],featured:8,related:['Damselfish','Butterflyfish'],adaptations:['Mucus layer for immunity to stings','Territorial defence of host anemones'],behaviour:'Clownfish maintain small social groups around anemones.'},
  {id:'monarch-butterfly',name:'Monarch Butterfly',scientific:'Danaus plexippus',group:'Invertebrates',emoji:'🦋',color:'#fff0d8',habitat:'Meadows, fields and woodland edges',region:'The Americas',diet:'Herbivore',status:'Endangered',lifespan:'2–6 weeks in summer generations',description:'Monarch butterflies are famous for their long migration and bright warning colours.',facts:['Caterpillars feed on milkweed.','Some populations migrate thousands of kilometres.'],featured:9,related:['Swallowtail Butterfly','Painted Lady'],adaptations:['Warning colours to deter predators','Migration behaviour for seasonal survival'],behaviour:'Monarchs cluster in roosts during migration.'},
  {id:'snowy-owl',name:'Snowy Owl',scientific:'Bubo scandiacus',group:'Birds',emoji:'🦉',color:'#edf5f6',habitat:'Arctic tundra and open fields',region:'Arctic regions',diet:'Carnivore',status:'Vulnerable',lifespan:'10 years in wild',description:'Snowy owls are Arctic hunters with excellent hearing and feathers down to their legs.',facts:['They hunt in daylight during the Arctic summer.','Females are usually more heavily marked than males.'],featured:10,related:['Great Horned Owl','Barn Owl'],adaptations:['Camouflage against snow','Sharp hearing for prey detection'],behaviour:'Snowy owls often perch on elevated points while hunting.'},
  {id:'komodo-dragon',name:'Komodo Dragon',scientific:'Varanus komodoensis',group:'Reptiles',emoji:'🦎',color:'#e5eddc',habitat:'Tropical dry forest and savanna',region:'Indonesian islands',diet:'Carnivore',status:'Endangered',lifespan:'20–30 years',description:'The world’s largest living lizard uses smell and stealth to catch prey.',facts:['They can detect carrion from kilometres away.','Young dragons spend time in trees to avoid predators.'],featured:11,related:['Monitor Lizard','Crocodile'],adaptations:['Strong jaws and claws','Excellent sensing of scent'],behaviour:'Komodo dragons are ambush predators and scavengers.'},
  {id:'giant-panda',name:'Giant Panda',scientific:'Ailuropoda melanoleuca',group:'Mammals',emoji:'🐼',color:'#edf1f2',habitat:'Mountain bamboo forests',region:'Central China',diet:'Herbivore',status:'Vulnerable',lifespan:'15–20 years',description:'The giant panda has a specialised wrist bone that helps it grasp bamboo with great dexterity.',facts:['Pandas are bears even though they eat mainly bamboo.','They spend many hours each day feeding.'],featured:12,related:['Red Panda','Spectacled Bear'],adaptations:['Pseudo-thumb for gripping bamboo','Thick fur for mountain cold'],behaviour:'Pandas often spend long periods feeding and resting.'},
  {id:'narwhal',name:'Narwhal',scientific:'Monodon monoceros',group:'Mammals',emoji:'🐬',color:'#dfeef7',habitat:'Arctic seas',region:'Arctic Ocean',diet:'Carnivore',status:'Near Threatened',lifespan:'30–50 years',description:'Narwhals are Arctic whales known for the long tusk of the male, which is actually an elongated tooth.',facts:['The tusk is rich in sensory nerves.','Narwhals often dive deep for squid and fish.'],featured:13,related:['Beluga Whale','Killer Whale'],adaptations:['Deep-diving physiology','Tusks for sensory functions'],behaviour:'Narwhals travel in groups and migrate with sea ice patterns.'},
  {id:'owl',name:'Barn Owl',scientific:'Tyto alba',group:'Birds',emoji:'🦉',color:'#f0f4eb',habitat:'Open fields, grasslands and farms',region:'Worldwide except polar regions',diet:'Carnivore',status:'Least Concern',lifespan:'4–10 years',description:'Barn owls are nocturnal hunters with a distinctive heart-shaped face that helps focus sound.',facts:['Their hearing is so accurate they can locate prey in darkness.','They are often found around open grassland.'],featured:14,related:['Snowy Owl','Eagle Owl'],adaptations:['Acute hearing','Silent flight feathers'],behaviour:'Barn owls are mostly active at night and swallow prey whole.'},
  {id:'octopus',name:'Octopus',scientific:'Octopoda',group:'Invertebrates',emoji:'🐙',color:'#f6e7e0',habitat:'Rocky reefs, coral and open ocean',region:'Global oceans',diet:'Carnivore',status:'Varies by species',lifespan:'1–5 years',description:'An octopus is highly intelligent, with eight arms and the ability to change colour and texture.',facts:['Some octopuses can solve simple puzzles.','They can squeeze through tiny openings.'],featured:15,related:['Squid','Cuttlefish'],adaptations:['Ink defence','Flexible arms for manipulation'],behaviour:'Octopuses are solitary and often hide in crevices.'},
  {id:'lion',name:'Lion',scientific:'Panthera leo',group:'Mammals',emoji:'🦁',color:'#f9ecce',habitat:'Savanna and grassland',region:'Africa and a small remnant in India',diet:'Carnivore',status:'Vulnerable',lifespan:'10–14 years',description:'Lions are social cats that live in prides and coordinate hunting and defence.',facts:['Female lions do most of the hunting.','Their roar can be heard several kilometres away.'],featured:16,related:['Tiger','Leopard'],adaptations:['Cooperative hunting','Strong social structure'],behaviour:'Prides defend territory and raise cubs together.'},
  {id:'koala',name:'Koala',scientific:'Phascolarctos cinereus',group:'Mammals',emoji:'🐨',color:'#d7ead8',habitat:'Eucalyptus forests',region:'Eastern Australia',diet:'Herbivore',status:'Vulnerable',lifespan:'10–18 years',description:'Koalas are specialised tree-dwelling marsupials with powerful limbs for climbing.',facts:['They sleep for much of the day and feed on eucalyptus leaves.','Their bodies are adapted to a nutrient-poor diet.'],featured:17,related:['Kangaroo','Wombat'],adaptations:['Large claws for climbing','Low-energy metabolism'],behaviour:'Koalas rest in tree forks during the day.'},
  {id:'great-white-shark',name:'Great White Shark',scientific:'Carcharodon carcharias',group:'Fish',emoji:'🦈',color:'#dfeaf8',habitat:'Coastal and open ocean',region:'Global temperate waters',diet:'Carnivore',status:'Vulnerable',lifespan:'30–70 years',description:'This apex predator has a streamlined body and powerful senses for locating prey.',facts:['Sharks have electroreceptors that detect electrical fields.','Their teeth are replaced continuously.'],featured:18,related:['Tiger Shark','Hammerhead Shark'],adaptations:['Electroreception','Countershading camouflage'],behaviour:'Great whites patrol coastal zones and travel long distances.'},
  {id:'frog',name:'Poison Dart Frog',scientific:'Dendrobatidae',group:'Amphibians',emoji:'🐸',color:'#d9f1d1',habitat:'Tropical rainforests',region:'Central and South America',diet:'Carnivore',status:'Varies by species',lifespan:'3–15 years',description:'Poison dart frogs are brightly coloured and use skin toxins to deter predators.',facts:['Some species secrete toxins from their skin.','Their colours warn predators about danger.'],featured:19,related:['Tree Frog','Toad'],adaptations:['Bright warning colours','Moist skin for respiration'],behaviour:'Some species care for eggs and tadpoles in small pools.'},
  {id:'falcon',name:'Peregrine Falcon',scientific:'Falco peregrinus',group:'Birds',emoji:'🦅',color:'#ecf4ff',habitat:'Cliffs, coasts and cities',region:'Worldwide',diet:'Carnivore',status:'Least Concern',lifespan:'8–15 years',description:'Peregrine falcons are extremely fast flyers and are among the swiftest animals on Earth.',facts:['They can reach speeds over 300 km/h in a dive.','They often nest on tall cliffs or man-made structures.'],featured:20,related:['Hawk','Eagle'],adaptations:['Streamlined body','High-speed diving ability'],behaviour:'Peregrines use powerful stoops when hunting birds.'},
  {id:'hedgehog',name:'Hedgehog',scientific:'Erinaceinae',group:'Mammals',emoji:'🦔',color:'#f8e3c7',habitat:'Woodland and grassland',region:'Europe, Asia and Africa',diet:'Omnivore',status:'Least Concern',lifespan:'3–7 years',description:'Hedgehogs are small spiny mammals that roll into a defensive ball when threatened.',facts:['They can hibernate in cold climates.','Their spines are modified hairs.'],featured:21,related:['Shrew','Tenrec'],adaptations:['Spines for protection','Ability to hibernate'],behaviour:'Hedgehogs are mostly nocturnal and forage alone.'},
  {id:'dolphin',name:'Bottlenose Dolphin',scientific:'Tursiops truncatus',group:'Mammals',emoji:'🐬',color:'#dfeef7',habitat:'Coastal and offshore waters',region:'Tropical and temperate seas',diet:'Carnivore',status:'Least Concern',lifespan:'20–50 years',description:'Dolphins use echolocation, social behaviour, and teamwork to find food and communicate.',facts:['They can identify objects by sending out sound pulses.','Dolphin groups may work together to herd fish.'],featured:22,related:['Orca','Beluga'],adaptations:['Echolocation','Streamlined body'],behaviour:'Dolphins are highly social and often travel in pods.'},
  {id:'sloth',name:'Brown-throated Sloth',scientific:'Bradypus variegatus',group:'Mammals',emoji:'🦥',color:'#d9e7d1',habitat:'Tropical forest canopy',region:'Central and South America',diet:'Herbivore',status:'Vulnerable',lifespan:'20–30 years',description:'Sloths move slowly and spend most of their lives hanging in trees.',facts:['Their algae-covered fur can help camouflage them.','They move slowly to conserve energy.'],featured:23,related:['Anteater','Armadillo'],adaptations:['Strong climbing limbs','Low metabolic rate'],behaviour:'Sloths spend much of the day resting in tree canopies.'},
  {id:'crocodile',name:'Saltwater Crocodile',scientific:'Crocodylus porosus',group:'Reptiles',emoji:'🐊',color:'#dfe6b3',habitat:'Coastal rivers, estuaries and marshes',region:'Indo-Pacific region',diet:'Carnivore',status:'Least Concern',lifespan:'35–75 years',description:'Saltwater crocodiles are powerful ambush predators with a remarkable tolerance for salt water.',facts:['They are the largest living reptiles.','They can regulate salt balance in seawater.'],featured:24,related:['Alligator','Caiman'],adaptations:['Strong jaws and armour-like skin','Salt regulation'],behaviour:'Crocodiles often ambush prey near the water’s edge.'},
  {id:'hummingbird',name:'Ruby-throated Hummingbird',scientific:'Archilochus colubris',group:'Birds',emoji:'🐦',color:'#f8e7f0',habitat:'Woodlands and gardens',region:'Eastern North America',diet:'Nectar and insects',status:'Least Concern',lifespan:'3–5 years',description:'Hummingbirds can hover and feed on nectar while beating their wings extremely quickly.',facts:['Their hearts can beat hundreds of times per minute.','They can fly backwards.'],featured:25,related:['Sunbird','Bee-eater'],adaptations:['High-speed wing movement','Long beaks for nectar feeding'],behaviour:'Hummingbirds defend flower territories aggressively.'},
  {id:'mantis',name:'Praying Mantis',scientific:'Mantodea',group:'Invertebrates',emoji:'🦗',color:'#e8edc5',habitat:'Gardens, grasslands and forests',region:'Worldwide',diet:'Carnivore',status:'Least Concern',lifespan:'6–12 months',description:'Praying mantises are insect predators with elongated bodies and powerful forelimbs.',facts:['They are excellent at camouflage.','Their front legs are adapted for grasping prey.'],featured:26,related:['Grasshopper','Cockroach'],adaptations:['Camouflage and ambush hunting','Fast forelimb strikes'],behaviour:'Mantises stay still and wait for prey to approach.'},
  {id:'pangolin',name:'White-bellied Pangolin',scientific:'Phataginus tricuspis',group:'Mammals',emoji:'🦔',color:'#d9d3c8',habitat:'Tropical forests',region:'Africa',diet:'Insectivore',status:'Critically Endangered',lifespan:'10–20 years',description:'Pangolins are covered in scales and use their long tongues to eat ants and termites.',facts:['They roll into a tight ball for defence.','Pangolin scales are made of keratin, like human fingernails.'],featured:27,related:['Anteater','Armadillo'],adaptations:['Protective scales','Long sticky tongue'],behaviour:'Pangolins spend much of the time foraging on the ground.'},
  {id:'axolotl',name:'Axolotl',scientific:'Ambystoma mexicanum',group:'Amphibians',emoji:'🦎',color:'#d0f1ec',habitat:'Canals and lakes',region:'Mexico',diet:'Carnivore',status:'Critically Endangered',lifespan:'10–15 years',description:'Axolotls are neotenic salamanders that keep their larval features into adulthood.',facts:['They can remain aquatic their whole lives.','They can regrow parts of their brain and heart.'],featured:28,related:['Salamander','Newt'],adaptations:['Regenerative abilities','Retention of larval traits'],behaviour:'Axolotls remain in water and use external gills.'},
  {id:'eagle',name:'Bald Eagle',scientific:'Haliaeetus leucocephalus',group:'Birds',emoji:'🦅',color:'#edf5ff',habitat:'Lakes, rivers and coastal regions',region:'North America',diet:'Carnivore',status:'Least Concern',lifespan:'20–30 years',description:'Bald eagles are powerful birds of prey that often feed on fish and waterbirds.',facts:['They can soar for long periods with little effort.','Their eyesight is extremely sharp.'],featured:29,related:['Golden Eagle','Sea Eagle'],adaptations:['Strong talons','Excellent vision'],behaviour:'Bald eagles often nest in tall trees or cliffs near water.'},
  {id:'seahorse',name:'Seahorse',scientific:'Hippocampus',group:'Fish',emoji:'🐠',color:'#d3edf5',habitat:'Seagrass beds and reefs',region:'Worldwide',diet:'Carnivore',status:'Vulnerable',lifespan:'1–5 years',description:'Seahorses are unusual fish with upright bodies and a prehensile tail.',facts:['Male seahorses carry eggs in a brood pouch.','They are often slow swimmers.'],featured:30,related:['Pipefish','Stickleback'],adaptations:['Tail for grasping vegetation','Camouflage among seagrass'],behaviour:'Seahorses drift or cling to plant life rather than chasing prey.'},
  {id:'beetle',name:'Stag Beetle',scientific:'Lucanidae',group:'Invertebrates',emoji:'🪲',color:'#ecdcc6',habitat:'Woodland and gardens',region:'Europe and Asia',diet:'Omnivore',status:'Varies by species',lifespan:'1–5 years',description:'Stag beetles are known for the large mandibles of the males, used in displays and combat.',facts:['Their bodies are often dark and shiny.','Larvae live in decaying wood.'],featured:31,related:['June Beetle','Dung Beetle'],adaptations:['Strong mandibles','Larval wood digestion'],behaviour:'Males may wrestle over access to females.'},
  {id:'giraffe',name:'Giraffe',scientific:'Giraffa camelopardalis',group:'Mammals',emoji:'🦒',color:'#f6df9c',habitat:'Savanna and open woodland',region:'Africa',diet:'Herbivore',status:'Vulnerable',lifespan:'20–25 years',description:'Giraffes are the tallest land mammals and browse high leaves from trees.',facts:['Their long necks have the same number of vertebrae as many mammals.','They can run surprisingly fast despite their size.'],featured:32,related:['Okapi','Antelope'],adaptations:['Long neck for browsing','Long legs for running'],behaviour:'Giraffes often move in loose groups and browse high foliage.'},
  {id:'baboon',name:'Olive Baboon',scientific:'Papio anubis',group:'Mammals',emoji:'🐒',color:'#d4a679',habitat:'Savanna and woodland',region:'Africa',diet:'Omnivore',status:'Least Concern',lifespan:'20–30 years',description:'Baboons are social primates that live in complex groups and use a wide range of behaviours.',facts:['They can communicate with facial expressions and calls.','Groups often include many individuals.'],featured:33,related:['Mandrill','Gelada'],adaptations:['Strong social cooperation','Adaptable diet'],behaviour:'Baboons use group living for safety and social learning.'},
  {id:'chameleon',name:'Veiled Chameleon',scientific:'Chamaeleo calyptratus',group:'Reptiles',emoji:'🦎',color:'#d5f0d0',habitat:'Trees and shrubs',region:'Yemen and Saudi Arabia',diet:'Insectivore',status:'Least Concern',lifespan:'5–8 years',description:'Chameleons are famous for their colour-changing skin and independently moving eyes.',facts:['Their eyes can move in different directions at the same time.','Their colour change can relate to mood, temperature, and communication.'],featured:34,related:['Iguana','Anole'],adaptations:['Colour change for communication and camouflage','Tail for balance'],behaviour:'Chameleons are patient hunters and often stay still for long periods.'},
  {id:'butterfly',name:'Swallowtail Butterfly',scientific:'Papilionidae',group:'Invertebrates',emoji:'🦋',color:'#ffe7bf',habitat:'Gardens and meadows',region:'Worldwide',diet:'Herbivore',status:'Varies by species',lifespan:'2–6 weeks',description:'Swallowtails are among the most striking butterflies, with broad wings and graceful flight.',facts:['Their wings can look like large leaves or warning patterns.','Males often patrol for females.'],featured:35,related:['Monarch Butterfly','Painted Lady'],adaptations:['Wing patterns for camouflage and warning','Long proboscis for feeding'],behaviour:'Butterflies often feed on nectar with a long straw-like feeding tube.'},
  {id:'otter',name:'Sea Otter',scientific:'Enhydra lutris',group:'Mammals',emoji:'🦦',color:'#e8d7c5',habitat:'Coastal kelp forests',region:'North Pacific',diet:'Carnivore',status:'Endangered',lifespan:'10–15 years',description:'Sea otters float on their backs, use tools, and help maintain healthy kelp forests.',facts:['They use rocks to crack open shellfish.','Kelp forests depend on their feeding behaviour.'],featured:36,related:['River Otter','Weasel'],adaptations:['Dense fur and flotation','Tool use'],behaviour:'Sea otters often hold hands while resting to avoid drifting apart.'},
  {id:'lemur',name:'Ring-tailed Lemur',scientific:'Lemur catta',group:'Mammals',emoji:'🐒',color:'#f4d4a9',habitat:'Dry forests and scrubland',region:'Madagascar',diet:'Omnivore',status:'Endangered',lifespan:'15–25 years',description:'Ring-tailed lemurs are social primates with striking black-and-white tails and alert calls.',facts:['They live in groups and often sunbathe on rocks.','Their tails are used for balance and communication.'],featured:37,related:['Indri','Mouse Lemur'],adaptations:['Social communication','Flexible foraging behaviour'],behaviour:'Lemurs live in troops and use scent marking.'},
  {id:'ray',name:'Manta Ray',scientific:'Mobula birostris',group:'Fish',emoji:'🐠',color:'#cfe3f7',habitat:'Tropical and subtropical seas',region:'Warm oceans worldwide',diet:'Filter feeder',status:'Vulnerable',lifespan:'20–40 years',description:'Manta rays glide through the water with wide fins and feed by filtering plankton.',facts:['They often travel to cleaning stations.','Their bodies are highly streamlined for open water.'],featured:38,related:['Stingray','Skate'],adaptations:['Filter-feeding plates','Wide wing-like fins'],behaviour:'Mantas often cruise in open water and gather in groups.'},
  {id:'puffin',name:'Atlantic Puffin',scientific:'Fratercula arctica',group:'Birds',emoji:'🐧',color:'#f4e1b1',habitat:'Coastal cliffs and islands',region:'North Atlantic',diet:'Carnivore',status:'Vulnerable',lifespan:'20 years',description:'Puffins are colourful seabirds with brightly coloured beaks and excellent diving skills.',facts:['They use wings to “fly” underwater.','Pairs often return to the same burrow each year.'],featured:39,related:['Auk','Guillemot'],adaptations:['Wing-propulsion underwater','Burrow nesting'],behaviour:'Puffins dive after fish and return to colonies with prey.'},
  {id:'antelope',name:'Impala',scientific:'Aepyceros melampus',group:'Mammals',emoji:'🦌',color:'#dfeec9',habitat:'Savanna and woodland',region:'Eastern and southern Africa',diet:'Herbivore',status:'Least Concern',lifespan:'10–15 years',description:'Impalas are quick, graceful antelope that can leap away from predators with exceptional speed.',facts:['They are capable of remarkable leaps.','Males use horns in display and combat.'],featured:40,related:['Gazelle','Springbok'],adaptations:['Rapid escape running','Vertical jumping'],behaviour:'Impalas often travel in herds with strong social bonds.'},
  {id:'gecko',name:'Leopard Gecko',scientific:'Eublepharis macularius',group:'Reptiles',emoji:'🦎',color:'#e8e4d6',habitat:'Deserts and rocky areas',region:'South Asia and Middle East',diet:'Carnivore',status:'Least Concern',lifespan:'10–20 years',description:'Leopard geckos are nocturnal reptiles with sticky toe pads and distinctive spotted patterns.',facts:['They can shed their tail if threatened.','They often store fat in their tails.'],featured:41,related:['Tokay Gecko','Anole'],adaptations:['Camouflage markings','Tail autotomy'],behaviour:'Leopard geckos rest in burrows during the day.'},
  {id:'urchin',name:'Sea Urchin',scientific:'Echinoidea',group:'Invertebrates',emoji:'🌊',color:'#f7d7d7',habitat:'Seafloor and reefs',region:'Global oceans',diet:'Herbivore',status:'Varies by species',lifespan:'3–10 years',description:'Sea urchins are spiny marine invertebrates that graze on algae and help shape reef ecosystems.',facts:['They are covered in spines and tube feet.','Some species can influence kelp forest health.'],featured:42,related:['Sea Star','Sea Cucumber'],adaptations:['Spines for defence','Tube feet for movement'],behaviour:'Sea urchins graze large areas of algae.'},
  {id:'turle',name:'Leatherback Turtle',scientific:'Dermochelys coriacea',group:'Reptiles',emoji:'🐢',color:'#dfeecf',habitat:'Open ocean and coastal waters',region:'Global oceans',diet:'Carnivore',status:'Vulnerable',lifespan:'30–50 years',description:'Leatherbacks are the largest sea turtles and are adapted to long ocean migrations.',facts:['They can dive to great depths.','Their shells are flexible rather than rigid.'],featured:43,related:['Green Sea Turtle','Loggerhead'],adaptations:['Flexible shell','Large migratory range'],behaviour:'Leatherbacks often travel between nesting and feeding regions.'},
  {id:'salamander',name:'Spotted Salamander',scientific:'Ambystoma maculatum',group:'Amphibians',emoji:'🐸',color:'#dfecc9',habitat:'Forests and wetlands',region:'North America',diet:'Carnivore',status:'Least Concern',lifespan:'10–20 years',description:'Spotted salamanders are amphibians that spend much of the year underground or in moist forest habitats.',facts:['They often return to the same breeding ponds.','Some use chemical cues to find mates.'],featured:44,related:['Newt','Axolotl'],adaptations:['Moist skin for respiration','Hidden lifestyle in forest soil'],behaviour:'Many species breed in temporary ponds in spring.'},
  {id:'mole',name:'European Mole',scientific:'Talpa europaea',group:'Mammals',emoji:'🦔',color:'#c5c1a1',habitat:'Soil-rich grassland and gardens',region:'Europe',diet:'Insectivore',status:'Least Concern',lifespan:'3–5 years',description:'Moles spend most of their lives underground, tunnelling through soil to find insects and worms.',facts:['Their forelimbs are adapted for digging.','They have a highly developed sense of touch.'],featured:45,related:['Shrew','Hedgehog'],adaptations:['Powerful forelimbs','Underground lifestyle'],behaviour:'Moles create extensive tunnel systems. '},
  {id:'parrot',name:'Scarlet Macaw',scientific:'Ara macao',group:'Birds',emoji:'🦜',color:'#f8d0b6',habitat:'Rainforest canopy',region:'Central and South America',diet:'Omnivore',status:'Vulnerable',lifespan:'30–50 years',description:'Scarlet macaws are brightly coloured parrots that rely on social groups and structured forest habitats.',facts:['They can mimic sounds and use complex calls.','They often pair for life.'],featured:46,related:['Cockatoo','Parakeet'],adaptations:['Strong beaks for cracking fruit and nuts','Social communication'],behaviour:'Macaws travel in pairs or flocks and nest in tree cavities.'},
  {id:'crab',name:'Hermit Crab',scientific:'Paguroidea',group:'Invertebrates',emoji:'🦀',color:'#f5ceb2',habitat:'Shorelines and tide pools',region:'Global coasts',diet:'Omnivore',status:'Least Concern',lifespan:'1–5 years',description:'Hermit crabs use empty shells to protect their soft abdomens as they move across the shore.',facts:['They switch shells as they grow.','Shells are a crucial resource in many coastal ecosystems.'],featured:47,related:['Fiddler Crab','Snow Crab'],adaptations:['Shell adoption','Adaptation to intertidal zones'],behaviour:'Hermit crabs often gather in groups on shorelines.'},
  {id:'orca',name:'Orca',scientific:'Orcinus orca',group:'Mammals',emoji:'🐋',color:'#dfeaf5',habitat:'Coastal and open ocean',region:'All oceans',diet:'Carnivore',status:'Data deficient',lifespan:'30–60 years',description:'Orcas are highly intelligent marine mammals with complex social structures and diverse feeding strategies.',facts:['Different populations have distinct dialects and hunting styles.','They are among the most socially complex mammals.'],featured:48,related:['Dolphin','Narwhal'],adaptations:['Sophisticated social learning','Powerful swimming and hunting strategy'],behaviour:'Orcas travel in matrilineal family groups.'},
  {id:'gazelle',name:'Thomson’s Gazelle',scientific:'Eudorcas thomsonii',group:'Mammals',emoji:'🦌',color:'#d7e59b',habitat:'Savanna and grassland',region:'East Africa',diet:'Herbivore',status:'Least Concern',lifespan:'10–15 years',description:'Gazelles are swift grassland herbivores known for their speed and alert behaviour.',facts:['They can leap suddenly to evade predators.','Their eyes are positioned to detect danger from near and far.'],featured:49,related:['Impala','Antelope'],adaptations:['Fast running','Alert social behaviour'],behaviour:'Gazelles often move in herds and stay watchful for predators.'},
  {id:'whale-shark',name:'Whale Shark',scientific:'Rhincodon typus',group:'Fish',emoji:'🐋',color:'#cfe8f6',habitat:'Open ocean and coastal waters',region:'Tropical oceans',diet:'Filter feeder',status:'Endangered',lifespan:'70–100 years',description:'The whale shark is the largest fish in the world and filters plankton from the water.',facts:['Its enormous mouth filters huge volumes of water.','It can travel long distances between feeding grounds.'],featured:50,related:['Basking Shark','Manta Ray'],adaptations:['Filter-feeding apparatus','Large migratory range'],behaviour:'Whale sharks often gather where plankton is abundant.'},
  {id:'bison',name:'American Bison',scientific:'Bison bison',group:'Mammals',emoji:'🐂',color:'#d9d4b9',habitat:'Grassland and prairie',region:'North America',diet:'Herbivore',status:'Near Threatened',lifespan:'15–20 years',description:'Bison are large grazing mammals that once roamed immense herds across the Great Plains.',facts:['They help shape grassland ecosystems by grazing.','Bison calves can run within hours of birth.'],featured:51,related:['Buffalo','Yak'],adaptations:['Heavy bodies for grazing','Social herd behaviour'],behaviour:'Bison move in herds and can shape landscapes through grazing.'},
  {id:'firefly',name:'Firefly',scientific:'Lampyridae',group:'Invertebrates',emoji:'✨',color:'#f6eb9b',habitat:'Warm woodland and meadows',region:'Worldwide',diet:'Carnivore',status:'Varies by species',lifespan:'A few weeks to a year',description:'Fireflies produce light in special organs to communicate and attract mates.',facts:['The flashing pattern can be species-specific.','Light production is called bioluminescence.'],featured:52,related:['Beetle','Glowworm'],adaptations:['Bioluminescent signals','Courtship displays'],behaviour:'Fireflies use glowing signals to recognise mates.'},
  {id:'penguin',name:'King Penguin',scientific:'Aptenodytes patagonicus',group:'Birds',emoji:'🐧',color:'#d7ebf5',habitat:'Subantarctic coasts',region:'Southern oceans',diet:'Carnivore',status:'Near Threatened',lifespan:'10–20 years',description:'King penguins are tall, elegant seabirds that gather in dense colonies in cold southern waters.',facts:['They can dive deeply to catch fish and squid.','Their black and white pattern helps camouflage in water.'],featured:53,related:['Emperor Penguin','Adelie Penguin'],adaptations:['Dense waterproof feathers','Diving physiology'],behaviour:'King penguins use group feeding and colony life.'}
];

const groups = [
  { name: 'Mammals', icon: '🐾', count: '22 guides' },
  { name: 'Birds', icon: '🪶', count: '9 guides' },
  { name: 'Reptiles', icon: '🦎', count: '8 guides' },
  { name: 'Fish', icon: '🐟', count: '7 guides' },
  { name: 'Invertebrates', icon: '🦋', count: '8 guides' },
  { name: 'Amphibians', icon: '🐸', count: '4 guides' }
];

const museumChapters = [
  {
    title: 'Entrance: Why the past still lives in us',
    label: 'Exhibition 1',
    text: 'Welcome to the Evolution Museum. Before we begin, pause at the threshold and look carefully at the world around you. The animals you see, the plants you smell, and the tiny life that may be hidden under a stone are all part of a history that began long before humans walked the Earth. Evolution is not a story of one species becoming better than another. It is a branching story of life changing over time, in many directions, under many pressures. Some branches persist. Some end. Some produce remarkable forms that seem almost impossible until you look at the evidence.\n\nThis museum is a guided introduction to that evidence. We will look at fossils, anatomy, behaviour, genetics, and the way organisms change across generations. The goal is not to give a magical answer to every mystery. The goal is to show how science builds explanations from evidence. Evolution is a powerful idea because it connects animals, plants, fungi, and humans into one deep and shared history. It also reminds us that life is not static. It is always becoming, always adapting, always interacting.'
  },
  {
    title: 'The first living systems',
    label: 'Exhibition 2',
    text: 'The earliest life on Earth was microscopic. For much of the planet’s history, living things were simple cells living in oceans and other watery environments. These early organisms did not leave dramatic skeletons or giant fossils, but they did leave traces. Rocks, chemical signatures, and structures preserved in ancient layers of sediment give scientists clues about early life. This kind of evidence is sometimes difficult to interpret, which is one reason the study of early evolution requires careful comparison and repeated testing.\n\nSome tiny organisms evolved the ability to capture energy from sunlight. This transformation mattered enormously. Photosynthetic organisms changed the chemistry of Earth’s atmosphere by releasing oxygen. This had consequences for many living things. Oxygen was crucial for some organisms, but dangerous for others. Evolution often works this way: a change may open opportunities for some lineages even while making life harder for others. That pattern continues all through evolutionary history.\n\nLater, more complex cells appeared. These cells had internal structures and a nucleus containing genetic material. Scientists believe some of these structures arose through symbiosis, in which one cell lived inside another and the partnership became permanent. The mitochondria in animal cells and chloroplasts in plant cells are still considered evidence of that ancient history. Life did not become complex all at once. It accumulated step by step, and many branches of early life disappeared long ago.'
  },
  {
    title: 'Animal bodies become diverse',
    label: 'Exhibition 3',
    text: 'Around 540 million years ago, the fossil record shows a remarkable broadening of animal diversity. This is often discussed as the Cambrian explosion, but it is important to remember that this term refers to a biological and geological episode, not a single magical event. It was not a one-day explosion in which every animal form suddenly appeared. Instead, many lineages began to diversify, develop harder parts, and occupy new ecological roles. Shells, spines, limbs, eyes, and feeding structures all become more prominent in the record.\n\nBody plans are not invented from scratch. Evolution works by modifying inherited structures. A bat wing, a whale flipper, a horse leg, and a human arm share similar underlying bones even though they are used in different ways. This is a classic example of homology, in which animals share features because they inherited them from a common ancestor.\n\nNatural selection does not produce perfect designs. It produces designs that work well enough under particular conditions. A feature that helps in one context may be limiting in another. The fossil record is incomplete, but it is still highly informative. It shows that animal bodies became more diverse as time passed, and that diversity came with ecological complexity: predators, prey, filter-feeders, burrowers, swimmers, and crawlers all appeared in changing ecosystems.'
  },
  {
    title: 'The move onto land',
    label: 'Exhibition 4',
    text: 'Life began in water, yet some lineages eventually invaded land. Plants were among the first to establish on the surface of continents. Animals followed when they had body systems that could cope with drying conditions, gravity, and air-breathing. A body that works in water may struggle on land, so the move required many changes.\n\nFish such as the lobe-finned fishes had bones and muscles in their fins that could support weight. Some of these lineages became the ancestors of early tetrapods, the four-limbed vertebrates. Fossils like Tiktaalik show features that help explain this transition, but they also remind us that evolution is not a straight march toward modern animals. Early tetrapods were diverse, and many branches disappeared. Not all experiments in body design led to long-term success.\n\nThe first land animals were not like modern reptiles or mammals. They were a varied set of organisms with different body shapes, lifestyles, and reproductive strategies. Later, the amniote lineage evolved membranes around embryos. This allowed reproduction away from water. That innovation opened new habitats and helped produce the ancestors of reptiles, birds, and mammals. The shift from water to land was gradual, and it was full of evolutionary compromise.'
  },
  {
    title: 'Dinosaurs, birds, and the age of giants',
    label: 'Exhibition 5',
    text: 'Dinosaurs dominated terrestrial ecosystems for more than 160 million years. Their diversity was extraordinary. Some were huge, some tiny, some feathered, some predators, some grazers, some alive in forests, others in deserts or wetlands. They were not a single homogenous type of animal. The group included many different lineages with distinct evolutionary histories.\n\nThe word dinosaur can be easy to use in a broad, popular sense, but scientific classification is more precise. Birds are living dinosaurs. This is not a poetic metaphor; it is a conclusion supported by fossils, anatomy, and genetics. Many dinosaurs had feathers or feather-like coverings, and birds are descended from a theropod branch. That means the “birds” you see today are not separate from dinosaur evolution; they are part of the dinosaur family tree.\n\nAt the end of the Cretaceous Period, about 66 million years ago, a major extinction event occurred. A large asteroid impact, climate stress, volcanic activity, and ecosystem disruption likely contributed. Non-avian dinosaurs disappeared, but birds survived. This pushed the story of vertebrate life into a new chapter, one in which mammals diversified dramatically into many forms. The extinction event did not erase evolution; it reshaped the opportunities available to the surviving branches.'
  },
  {
    title: 'The rise of mammals',
    label: 'Exhibition 6',
    text: 'Mammals are older than the age of dinosaurs, but their diversity expanded greatly after the non-avian dinosaurs disappeared. Early mammals were often small, and for a long time they lived in the shadow of dinosaurs. That changed when the extinction event opened many ecological roles. Some mammals became large herbivores. Some became predators. Some became fliers, swimmers, and burrowers. Many of these evolutionary paths are now familiar to us: whales, bats, elephants, primates, horses, and countless others.\n\nMammals share traits such as hair, milk production, and a middle ear with three bones. These are important features, but evolution does not keep a single design fixed. Mammal lineages changed their bodies in many ways. Whales evolved from land-dwelling ancestors and became streamlined ocean mammals. Bats evolved powered flight. Primates evolved forward-facing eyes, grasping hands, and large brains relative to body size. Each lineage reflects a different combination of inherited traits and environmental pressures.\n\nThe history of mammals is not a ladder toward humans. It is a set of branches, many of which survived for millions of years and then disappeared. Human beings are one branch among many, but our branch has the unique ability to shape ecosystems, science, and ethics on a planetary scale.'
  },
  {
    title: 'Extinction is part of life',
    label: 'Exhibition 7',
    text: 'Extinction happens all the time, and it is a normal part of life on Earth. Species disappear when environments change, when competition becomes too intense, or when a lineage cannot reproduce successfully enough to remain viable. Mass extinctions are different because they are catastrophic events that eliminate many groups over a relatively short interval. The end-Permian extinction and the end-Cretaceous extinction are two of the best-known examples. Their causes are complex, and scientists continue to study them carefully.\n\nThe loss of species can be deeply important because ecosystems are networks. Remove a key species, and many other organisms are affected. Loss of habitat, pollution, climate change, invasive species, and over-harvesting have all increased the pressure on modern life. Human actions have accelerated the rate of biodiversity loss in many places. This is not a small problem on the edge of science. It is part of how we store, protect, and study life on Earth.\n\nConservation is therefore not just about preserving a few large or attractive animals. It is about preserving ecological relationships, genetic variation, habitats, and the systems that allow species to continue evolving. Even species that seem ordinary and unremarkable are part of the long story of life. Extinction is a story of endings, but it also teaches us how fragile and how precious life can be.'
  },
  {
    title: 'How scientists know',
    label: 'Exhibition 8',
    text: 'The museum contains fossils, models, skeletons, and interpretive panels, but the deeper story is about scientific reasoning. Scientists do not simply invent narratives from a few fragments. They collect evidence from fossils, geology, genetics, anatomy, and the distribution of living organisms. Comparative anatomy reveals patterns of similarity and difference. Genetic data helps test evolutionary relationships. Fossils allow us to see forms that no longer exist. Biogeography asks where species live and why they live there. Developmental biology asks how bodies form as they grow.\n\nNo single source of evidence is enough by itself. A good scientific explanation is built from multiple lines of evidence that support each other. This is why evolutionary biology is so strong: it is not a single claim but a large and interconnected body of work. Data can revise ideas, and new discoveries often refine older ones. Science always leaves room for better evidence. That is not a weakness. It is what makes scientific knowledge reliable.\n\nWhen we look at a bird’s wing, a whale’s flipper, or a human hand, we are seeing the same kind of logic: structures can be similar because of shared descent, even if their functions differ. This is how the evolutionary tree is built—through evidence, comparison, and repeated testing.'
  },
  {
    title: 'Adaptation and trade-offs',
    label: 'Exhibition 9',
    text: 'An adaptation is an inherited trait that increases the chance of survival or reproduction in a particular environment. But adaptation does not mean perfection. Every trait has a cost and a benefit. A thick fur coat helps in the cold but can be a burden in the heat. A long neck helps an animal reach leaves high in the canopy, but comes with a big body and specialised blood flow. A streamlined body helps an aquatic animal move through water, but may be less flexible in other habitats.\n\nNatural selection acts on variation that already exists in populations. It does not create a perfect blueprint for a species. Traits are shaped by generation after generation as organisms reproduce and compete under changing conditions. Predators and prey influence one another. Parasites select for resistance. Plants and pollinators co-evolve. The world is full of mutual influences.\n\nUnderstanding adaptation means understanding limits as well as advantage. Evolution is full of compromise. A species can be wonderfully specialised and still be vulnerable if its environment changes quickly. That is one reason conservation remains so important. The long history of life is not a guarantee of continuing survival. It is an ongoing process that depends on the conditions of the present.'
  },
  {
    title: 'One living tree',
    label: 'Exhibition 10',
    text: 'If we stand back far enough, all life begins to look connected. A whale and a bat are very different animals, yet their bones show a shared ancestry. A bird and a dinosaur are more closely linked than many people expect. A human and a chimpanzee share a more recent common ancestor than either does with a lizard. The evolutionary tree is not a ladder, and it is not a neat sequence from “simple” to “complex.” It is a branching tree of relationship.\n\nThis is one of the most powerful ideas in biology. It means that even species separated by huge differences in appearance still share deep history. It also means we should be careful not to rank life in a simplistic hierarchy. There is no single kingdom at the summit of evolution. There are many branches, each shaped by different environments and histories.\n\nOur own species is part of this story. Humans are not separate from evolution; we are borne of it. Our bodies, our minds, and our societies are biological products with deep ancestry. We live in a world shaped by evolution, and we can choose how to treat the rest of life. To understand evolution is to understand both our uniqueness and our interconnectedness.'
  },
  {
    title: 'Exit: The question continues',
    label: 'Exhibition 11',
    text: 'The Evolution Museum closes, but the question remains: how did life become so varied, so resilient, and so strange? The answer is not a single event. It is a long series of changes across many generations, in many places, over immense periods of time. Every branch of the tree of life has a story, and every story adds something to the living world.\n\nAs you leave this gallery, remember that science is not a finished book. It is a conversation with evidence. Every fossil, every DNA sequence, every comparison of anatomy, every observation of behaviour adds to a growing understanding. Some questions are answered. Others remain open. That is the healthy state of scientific inquiry.\n\nDo not think of evolution as a distant idea locked inside a museum. It is active around you, because animals are still changing, ecosystems are still responding, and species are still adapting. The museum is only a pause in an ongoing story. Life is still writing itself.'
  }
];

let currentGroup = 'All';
let query = '';
let selectedMode = localStorage.getItem('animopedia-mode') || 'explorer';

function buildMuseum(chapters) {
  const root = document.getElementById('museumContent');
  if (!root) return;
  const fullText = chapters.map(ch => `${ch.title}. ${ch.text}`).join(' ');
  root.innerHTML = `
    <div class="museum-room-heading">
      <p class="museum-label">Full audio guide · ${chapters.length} chapters</p>
      <h2>The Evolution Museum</h2>
      <p>Step through evolutionary history, one chapter at a time. This is an educational guide, not a replacement for specialist sources.</p>
      <div class="museum-controls">
        <button type="button" id="museumRead">🔊 Read full tour</button>
        <button type="button" id="museumStop">■ Stop</button>
        <span id="museumStatus" role="status">Ready when you are.</span>
      </div>
    </div>
    <div class="museum-chapters">
      ${chapters.map((chapter, index) => `
        <article class="museum-chapter">
          <div class="chapter-number">${String(index + 1).padStart(2, '0')}</div>
          <div>
            <p class="chapter-time">${chapter.label}</p>
            <h3>${chapter.title}</h3>
            <p>${chapter.text.replace(/\n\n/g, '</p><p>')}</p>
            <button type="button" class="chapter-read" data-chapter-index="${index}">🔊 Read this chapter</button>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  document.getElementById('museumRead')?.addEventListener('click', () => speakText(fullText, document.getElementById('museumRead'), 'museumStatus'));
  document.getElementById('museumStop')?.addEventListener('click', () => stopSpeech());
  document.querySelectorAll('.chapter-read').forEach((button) => {
    button.addEventListener('click', () => {
      const chapterIndex = Number(button.dataset.chapterIndex);
      const text = museumChapters[chapterIndex].text;
      speakText(`${museumChapters[chapterIndex].title}. ${text}`, button, 'museumStatus');
    });
  });
}

function speakText(text, button, statusId = 'speechStatus') {
  const status = document.getElementById(statusId);
  if (!('speechSynthesis' in window)) {
    if (status) status.textContent = 'Speech is not supported on this browser.';
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = selectedMode === 'kids' ? 0.86 : 0.95;
  utterance.onstart = () => {
    if (status) status.textContent = 'Reading aloud…';
    document.querySelectorAll('.speaking').forEach((item) => item.classList.remove('speaking'));
    button?.classList.add('speaking');
  };
  utterance.onend = () => {
    if (status) status.textContent = 'Finished.';
    button?.classList.remove('speaking');
  };
  window.speechSynthesis.speak(utterance);
}

function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    document.querySelectorAll('.speaking').forEach((item) => item.classList.remove('speaking'));
  }
  const status = document.getElementById('museumStatus');
  if (status) status.textContent = 'Stopped.';
}

function cardMarkup(animal) {
  return `
    <article class="animal-card" tabindex="0" data-id="${animal.id}">
      <div class="card-image" style="background:${animal.color}"><small>${animal.group}</small>${animal.emoji}</div>
      <div class="card-info">
        <h3>${animal.name}</h3>
        <p>${animal.scientific}</p>
        <div class="card-meta">
          <span class="tag">${animal.habitat.split(',')[0]}</span>
          <span class="tag">${animal.status}</span>
        </div>
      </div>
    </article>
  `;
}

function attachAnimalHandlers() {
  document.querySelectorAll('.animal-card').forEach((card) => {
    const open = () => openAnimal(card.dataset.id);
    card.addEventListener('click', open);
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    });
  });
}

function renderCards() {
  const featured = animals.filter((animal) => animal.featured).slice(0, 4);
  const grid = document.getElementById('animalGrid');
  if (grid) {
    grid.innerHTML = featured.map(cardMarkup).join('');
    attachAnimalHandlers();
  }

  const allGrid = document.querySelector('.all-grid');
  const filtered = animals
    .filter((animal) => (currentGroup === 'All' || animal.group === currentGroup))
    .filter((animal) => Object.values(animal).join(' ').toLowerCase().includes(query.toLowerCase()));

  const sortSelect = document.getElementById('sortSelect');
  let sorted = [...filtered];
  if (sortSelect) {
    switch (sortSelect.value) {
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'lifespan':
        sorted.sort((a, b) => Number.parseInt(b.lifespan) - Number.parseInt(a.lifespan));
        break;
      case 'featured':
      default:
        sorted.sort((a, b) => (a.featured || 999) - (b.featured || 999));
        break;
    }
  }

  if (allGrid) {
    allGrid.innerHTML = sorted.map(cardMarkup).join('');
    attachAnimalHandlers();
  }

  const emptyState = document.getElementById('emptyState');
  if (emptyState) emptyState.hidden = sorted.length > 0;
}

function openAnimal(id) {
  const animal = animals.find((item) => item.id === id);
  if (!animal) return;

  const dialog = document.getElementById('animalDialog');
  const content = document.getElementById('dialogContent');
  if (!dialog || !content) return;

  content.innerHTML = `
    <div class="dialog-cover" style="background:${animal.color}">${animal.emoji}</div>
    <div class="dialog-body">
      <p class="eyebrow">${animal.group} · ${animal.status}</p>
      <h2>${animal.name}</h2>
      <p class="scientific">${animal.scientific}</p>
      <p>${animal.description}</p>
      <div class="detail-grid">
        <div class="detail"><b>Habitat</b><span>${animal.habitat}</span></div>
        <div class="detail"><b>Region</b><span>${animal.region}</span></div>
        <div class="detail"><b>Diet</b><span>${animal.diet}</span></div>
        <div class="detail"><b>Lifespan</b><span>${animal.lifespan}</span></div>
      </div>
      <h3>Interesting facts</h3>
      <ul class="facts">
        ${animal.facts.map((fact) => `<li>${fact}</li>`).join('')}
      </ul>
      <button class="read-aloud" type="button" data-dialog-read="true">🔊 Read aloud</button>
    </div>
  `;

  const readButton = content.querySelector('[data-dialog-read]');
  readButton?.addEventListener('click', () => speakText(`${animal.name}. ${animal.scientific}. ${animal.description}. ${animal.facts.join(' ')}`, readButton));
  dialog.showModal();
}

function buildGroups() {
  const root = document.getElementById('groupGrid');
  if (!root) return;
  root.innerHTML = groups.map((group) => `
    <button type="button" class="group-card" data-group-card="${group.name}">
      <span>${group.icon}</span>
      <strong>${group.name}</strong>
      <small>${group.count}</small>
    </button>
  `).join('');

  root.querySelectorAll('[data-group-card]').forEach((button) => {
    button.addEventListener('click', () => {
      currentGroup = button.dataset.groupCard;
      const pills = document.querySelectorAll('#groupFilters button');
      pills.forEach((pill) => pill.classList.toggle('active', pill.dataset.group === currentGroup));
      document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
      renderCards();
    });
  });
}

function attachSearch() {
  const form = document.getElementById('heroSearch');
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.getElementById('heroSearchInput');
    query = input.value.trim();
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
    renderCards();
  });

  document.querySelectorAll('[data-search]').forEach((button) => {
    button.addEventListener('click', () => {
      const value = button.dataset.search;
      const input = document.getElementById('heroSearchInput');
      if (input) input.value = value;
      query = value.trim();
      document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
      renderCards();
    });
  });

  document.getElementById('sortSelect')?.addEventListener('change', renderCards);
  document.querySelectorAll('#groupFilters button').forEach((button) => {
    button.addEventListener('click', () => {
      currentGroup = button.dataset.group;
      query = '';
      const input = document.getElementById('heroSearchInput');
      if (input) input.value = '';
      document.querySelectorAll('#groupFilters button').forEach((pill) => pill.classList.toggle('active', pill === button));
      renderCards();
    });
  });
}

function initAgeGate() {
  const gate = document.getElementById('ageGate');
  const settingsButton = document.getElementById('settingsButton');
  const modeButtons = document.querySelectorAll('[data-mode]');

  function applySelectedMode() {
    const mode = selectedMode || 'explorer';
    document.body.dataset.mode = mode;
    document.getElementById('owlGuide').hidden = mode !== 'kids';
    const owlMessage = document.getElementById('owlMessage');
    if (owlMessage) {
      owlMessage.textContent = mode === 'kids'
        ? 'Whooo wants to explore an animal today? I will help explain tricky words.'
        : 'Choose an animal and let’s explore the world together.';
    }
  }

  modeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedMode = button.dataset.mode;
      localStorage.setItem('animopedia-mode', selectedMode);
      applySelectedMode();
      gate.classList.add('hidden');
      setTimeout(() => gate.hidden = true, 350);
    });
  });

  settingsButton?.addEventListener('click', () => {
    gate.hidden = false;
    gate.classList.remove('hidden');
  });

  if (localStorage.getItem('animopedia-mode')) {
    selectedMode = localStorage.getItem('animopedia-mode');
    gate.classList.add('hidden');
    setTimeout(() => gate.hidden = true, 350);
  } else {
    gate.hidden = false;
  }

  applySelectedMode();
}

function initAniDialog() {
  const aniDialog = document.getElementById('aniDialog');
  const openButton = document.getElementById('openAni');
  const closeButton = document.getElementById('closeAni');
  const form = document.getElementById('aniForm');
  const response = document.getElementById('aniResponse');
  const questionInput = document.getElementById('aniQuestion');

  const suggestions = document.querySelectorAll('[data-question]');
  suggestions.forEach((button) => {
    button.addEventListener('click', () => {
      if (questionInput) questionInput.value = button.dataset.question;
    });
  });

  openButton?.addEventListener('click', () => aniDialog.showModal());
  closeButton?.addEventListener('click', () => aniDialog.close());
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!questionInput) return;
    const value = questionInput.value.trim();
    if (!value) return;
    if (response) {
      response.hidden = false;
      response.innerHTML = `
        <strong>ANI is ready to help.</strong><br />
        <span>Current question: ${value}</span><br />
        <span>ANI uses knowledge from ANIMOPEDIA’s structured database and evidence-based explanations. A full AI backend will be connected separately to provide live conversational answers.</span>
      `;
    }
  });
}

function initMobileMenu() {
  const sidePanel = document.getElementById('sidePanel');
  const openButton = document.getElementById('openMenu');
  const closeButton = document.getElementById('closeMenu');
  openButton?.addEventListener('click', () => sidePanel.classList.add('open'));
  closeButton?.addEventListener('click', () => sidePanel.classList.remove('open'));
  document.querySelectorAll('.side-nav a').forEach((link) => {
    link.addEventListener('click', () => sidePanel.classList.remove('open'));
  });
}

function initMuseumScroll() {
  const button = document.querySelector('[data-museum-scroll="true"]');
  button?.addEventListener('click', () => {
    document.getElementById('museumContent')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function initNarration() {
  const owlReadButton = document.getElementById('owlRead');
  owlReadButton?.addEventListener('click', () => {
    const message = document.getElementById('owlMessage')?.textContent || 'Whooo wants to explore animals today?';
    speakText(message, owlReadButton, 'museumStatus');
  });

  document.querySelectorAll('[data-read-target]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.readTarget);
      speakText(target ? target.textContent : '', button, 'museumStatus');
    });
  });
}

function initialize() {
  buildGroups();
  renderCards();
  attachSearch();
  initAgeGate();
  initAniDialog();
  initMobileMenu();
  buildMuseum(museumChapters);
  initNarration();
  initMuseumScroll();

  const animalDialog = document.getElementById('animalDialog');
  const closeDialogButton = document.getElementById('closeDialog');
  closeDialogButton?.addEventListener('click', () => animalDialog.close());
}

initialize();

window.addEventListener('beforeunload', () => {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
});
