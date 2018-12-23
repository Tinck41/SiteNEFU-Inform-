var content = document.getElementById('cont').innerHTML;
var a7 = 'Located only about 10 miles from Aspen, Colorado, the Maroon Bellsare two 14,000-foot peaks in the Elk Mountains that are reflected in crystal-clear Maroon Lake, snuggled in a glacial valley. They are the crown jewels of the Rocky Mountains and by far one of the most photographed scenes in the country. It is difficult to say when the timeless beauty of these two sentinels mirrored in the lake is more striking: In the summer, when every hiking trail takes you through fields of wild flowers, in the fall, when tall aspen trees dazzle with a rainbow of fall colors, or in the winter, when snow and ice silence the world. The best photo opportunities are from one of the many hiking trails – access by motor vehicles is limited. The lake is popular among fly-fishermen – even if they don’t catch anything, the beauty all around them is enough.' ;
var a7head = 'Maroon Bells, USA';
var a8 = 'The Grand Canyon is a steep, 1-mile-deep, and up to 18-mile-wide gash in the fabric of the world, an immense gorge carved by the Colorado River over the last 5,000 years. Its sheer size is breathtaking and although you can see only a small portion of it even from the best vantage point, its geology and its age fire the imagination. The layers of colorful rock show the passage of time and some of the rocks at the bottom are 1,8 billion years old. There is a lot of life growing on the canyon’s steep sides – you can see more of it hiking the trails of the northern rim, where it is also less crowded. Most people limit their visit to the breathtaking views from the southern rim. Some of the most popular viewpoints are Yavapai Observation Station, Mary Colter’s Lookout Studio, and Mather Point.';
var a8head = 'The Grand Canyon, USA';
var a9 = 'Located in the eastern United States and part of the massive Appalachians, the Blue Ridge Mountains stretch from their southernmost end in Georgia all the way northward to Pennsylvania. Between the Blue Ridge and the rest of the Appalachians lies the Great Appalachian Valley. When seen from a distance, the Blue Ridge Mountains appear blue – the trees that release a gas called isoprene are responsible for the bluish color and thus the mountains’ name.Within the Blue Ridge Mountains are two large national parks: The Shenandoah and the Great Smoky Mountains. The best way to enjoy and get to know Blue Ridge is by taking the Blue Ridge Parkway, a 469-mile-long beautiful scenic highway that runs along the ridge together with the renowned Appalachian Trail and which connects the two parks.';
var a9head = 'Blue Ridge Mountains, USA';
var a1 = 'Located about halfway between the Croatian capital Zagreb and Zadar on the coast of the Adriatic Sea, Plitvice Lakes are a magical world of living, moving water surrounded by ancient forests, 16 lakes linked by waterfalls, bridges natural and man-made, and 300 square kilometers of wild beauty full of bears, wolves, boars, and birds.The difference in altitude between 1,280 meters at the highest point and 280 meters at the lowest creates a seemingly endless number of falls, big and small, that permanently fill the air with spray and fog. Wooden and natural walkways and hiking trails spin around and across the lake and a ferry on Lake Kozjak shuttles people between the upper and lower lakes. The lakes are beautiful all year round, but especially when mirroring magical fall colors or the lacy frozen branches of the surrounding trees. Next read: Croatia Attractions.';var a1head = 'Plitvice Lakes, Croatia';
var a1head = 'Plitvice Lakes, Croatia';
var a5head = 'Salar de Uyuni, Bolivia';
var a5 = 'Salar de Uyuni, located high up in the Andes in southwest Bolivia at an altitude of 11,995 feet, is the largest salt flat in the world, covering over 4,086 square miles. It was once a prehistoric lake that dried up, leaving behind 11,000 square kilometers of otherworldly desert-like landscape made up of sparkling bright white salt, bizarre rock formations, and strange cacti-covered islands. The best spot to observe this surreal landscape is central Incahuasi Island.There is not much wildlife in this fairly barren ecosystem, except for about 80 species of birds and the thousands of pink flamingos that come in November. The salt crust, between 7 and 66 feet deep, covers a sea of brine. The salt is very rich in lithium, accounting for up to 70 percent of the world’s reserves of the mineral.';
var a6head = 'Torres del Paine National Park, Chile';
var a6 = 'At the southern tip of the Andes in Chile’s Patagonia lies Torres del Paine National Park, a place with more than its fair share of nature’s majesty: It has soaring mountains, cold blue icebergs cleaving from ancient glaciers, bottomless lakes, spectacular geological formations, narrow fjords, deep rivers, ancient forests, and endless golden pampas covered with wild flowers and providing home to such rare wildlife as pumas and the llama-like guanacos.The best way to see Torres del Paine is on foot following one of many famous tracks, but if you have to limit yourself to just a few iconic sites, visit the three majestic granite towers, or torres del paine, Los Cuernos, Grey Glacier, and French Valley.';
var a2head = 'Lake Bled, Slovenia';
var a2 = 'If you glimpse Lake Bled in Slovenia from one of the distant mountaintops, you will be convinced that you are seeing some magical, lost fantasy world of dragons and knights: A vivid emerald green lake with a tiny island in the middle with a church perched on its cliff and an ancient medieval castle clinging to its slopes, hugged on all sides by enormous mountains, snow-topped and covered with dark, green, ancient forests. Lake Bled is just as beautiful as you get closer and is a popular Slovenian tourist destination that attracts those seeking romance on Bled Island, visitors enjoying a leisurely hike around the lake or rowing its placid waters, and young adventurers exploring the steep hiking trails of the surrounding Julian Alps and the Karavanke Mountains.';
var a3head = 'Amalfi Coast, Italy';
var a3 = 'The Amalfi Coast is an extravagantly beautiful stretch of rugged coast in Campania, Italy, at the edge of the Sorrentine Peninsula. For about 50 kilometers, the coast looks like something a romantic artist might have conjured – sheer cliffs plunging into the azure sea, tiny golden beaches hidden in secluded coves, pastel sun-washed villages hugging the steep slopes of Mount Ravello, and fragrant orange groves competing for attention with ancient vineyards. You can take a typical Mediterranean coastal road between the port of Salerno, famous Positano and Amalfi, and lovely Sorrento perched on the clifftop to enjoy the landscape in all its majesty, or you can take one of the many hiking trails that will take you past old villages, offer spectacular views, and introduce you to some fantastic quaint local restaurants and tavernas.';
var a4head = 'Krabi, Thailand';
var a4 = 'Krabi is a lively resort town on the Andaman coast in southern Thailand. This very old settlement, now overtaken by tourism, has been shaped by limestone karsts jutting out of the dense mangrove forest and surrounded by vast sandy beaches. One of the city’s most popular destinations is Tiger Cave Temple, a Buddhist temple perched on a hilltop that can be reached by climbing a lot of stairs, but the views are worth the effort. Rising out the water are Khao Kanab Nam, two slanting hills that form a popular local landmark. Busy and noisy, Krabi is best known as the gateway to the magnificent Andaman Sea islands and national parks that can be reached by ferries and boats.';




function change(a) {
	switch(a) {
		case 1: document.getElementById('head').innerHTML = a1head;
				document.getElementById('txt').innerHTML = a1; break;
		case 2: document.getElementById('head').innerHTML = a2head;
				document.getElementById('txt').innerHTML = a2; break;
		case 3: document.getElementById('head').innerHTML = a3head;
				document.getElementById('txt').innerHTML = a3; break;
		case 4: document.getElementById('head').innerHTML = a4head;
				document.getElementById('txt').innerHTML = a4; break;
		case 5: document.getElementById('head').innerHTML = a5head;
				document.getElementById('txt').innerHTML = a5; break;
		case 6: document.getElementById('head').innerHTML = a6head;
				document.getElementById('txt').innerHTML = a6; break;
		case 7: document.getElementById('head').innerHTML = a7head;
				document.getElementById('txt').innerHTML = a7; break;
		case 8: document.getElementById('head').innerHTML = a8head;
				document.getElementById('txt').innerHTML = a8; break;
		case 9: document.getElementById('head').innerHTML = a9head;
				document.getElementById('txt').innerHTML = a9; break;
	};
}