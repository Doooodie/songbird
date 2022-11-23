(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var i=e.g.document;if(!t&&i&&(i.currentScript&&(t=i.currentScript.src),!t)){var s=i.getElementsByTagName("script");s.length&&(t=s[s.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t+"../../"})();const t=e.p+"assets/images/songbird-logo.svg",i=e.p+"assets/images/bird.jpg",s=e.p+"assets/images/rsschool-logo.svg",o=e.p+"assets/sounds/win.mp3",a=e.p+"assets/sounds/error.mp3";function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}const r=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.overlay=document.querySelector(".overlay"),this.container=document.querySelector(".overlay-container"),this.heading=document.querySelector(".overlay-heading"),this.playButton=document.querySelector(".play-button")}var t,i;return t=e,(i=[{key:"open",value:function(e,t){this.heading.textContent="Вы прошли игру, получив ".concat(e," из 30 баллов."),this.overlay.classList.remove("hidden"),this.container.classList.remove("hidden"),this.playButton.addEventListener("click",t)}},{key:"close",value:function(e){this.heading.textContent="",this.overlay.classList.add("hidden"),this.container.classList.add("hidden"),this.playButton.removeEventListener("click",e)}}])&&n(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}()),c=[[{id:1,name:"Ворон",species:"Corvus corax",description:"Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",image:"https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"},{id:2,name:"Журавль",species:"Grus grus",description:"Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».",image:"https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3"},{id:3,name:"Ласточка",species:"Delichon urbicum",description:"Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.",image:"https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"},{id:4,name:"Козодой",species:"Caprimulgus europaeus",description:"Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ",image:"https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3"},{id:5,name:"Кукушка",species:"Cuculus canorus",description:"Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.",image:"https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3"},{id:6,name:"Синица",species:"Parus major",description:"В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.",image:"https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"}],[{id:1,name:"Воробей",species:"Passer domesticus",description:"Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",image:"https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"},{id:2,name:"Грач",species:"Corvus frugilegus",description:"Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.",image:"https://live.staticflickr.com//65535//49347123322_291c86b016.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3"},{id:3,name:"Галка",species:"Coloeus monedula",description:"Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.",image:"https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3"},{id:4,name:"Певчий дрозд",species:"Turdus philomelos",description:"Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.",image:"https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3"},{id:5,name:"Сорока",species:"Pica pica",description:"Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.",image:"https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3"},{id:6,name:"Сойка",species:"Garrulus glandarius",description:"Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.",image:"https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3"}],[{id:1,name:"Зяблик",species:"Fringilla coelebs",description:"В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.",image:"https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3"},{id:2,name:"Клёст",species:"Loxia curvirostra",description:"Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.",image:"https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3"},{id:3,name:"Горлица",species:"Streptopelia turtur",description:"Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.",image:"https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3"},{id:4,name:"Дятел",species:"Dendrocopos major",description:"Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.",image:"https://live.staticflickr.com/65535/49339376578_e933426455.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3"},{id:5,name:"Удод",species:"Upupa epops",description:"Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.",image:"https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3"},{id:6,name:"Стриж",species:"Apus apus",description:"Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.",image:"https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3"}],[{id:1,name:"Жаворонок",species:"Alauda arvensis",description:"Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",image:"https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"},{id:2,name:"Соловей",species:"Luscinia luscinia",description:"Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.",image:"https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"},{id:3,name:"Скворец",species:"Sturnus vulgaris",description:"Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",image:"https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"},{id:4,name:"Иволга",species:"Oriolus oriolus",description:"Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.",image:"https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"},{id:5,name:"Свиристель",species:"Bombycilla garrulus",description:"У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",image:"https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"},{id:6,name:"Щегол",species:"Carduelis carduelis",description:"Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю",image:"https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"}],[{id:1,name:"Орёл",species:"Aquila nipalensis",description:"В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров",image:"https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"},{id:2,name:"Коршун",species:"Milvus migrans",description:"Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.",image:"https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"},{id:3,name:"Лунь",species:"Circus cyaneus",description:"Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».",image:"https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"},{id:4,name:"Сокол",species:"Falco peregrinus",description:"Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.",image:"https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"},{id:5,name:"Ястреб",species:"Accipiter gentilis",description:"Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",image:"https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"},{id:6,name:"Филин",species:"Bubo bubo",description:"Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.",image:"https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"}],[{id:1,name:"Альбатрос",species:"Diomedea exulans",description:"Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния",image:"https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"},{id:2,name:"Олуша",species:"Sula nebouxii",description:"Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок",image:"https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"},{id:3,name:"Буревестник",species:"Puffinus griseus",description:"Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.",image:"https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"},{id:4,name:"Пеликан",species:"Pelecanus",description:"Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.",image:"https://i.ibb.co/mqqxpKB/89644134.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"},{id:5,name:"Пингвин",species:"Aptenodytes forsteri",description:"Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.",image:"https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"},{id:6,name:"Чайка",species:"Larus argentatus",description:"Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.",image:"https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",audio:"https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"}]];function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,s=new Array(t);i<t;i++)s[i]=e[i];return s}function u(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}(new(function(){function e(){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"startGame",(function(){n.round=-1,n.totalScore=0,r.close(),n.insertLogos(),n.renderScore(),n.startRound()})),l(this,"startRound",(function(){n.roundFinished=!1,n.clickedOnce=!1,n.round+=1,n.setRandomNumber(),n.setActiveSection(),n.toggleDetails(),n.toggleButton(),n.setBirdInfo(),n.insertSummary(),n.insertBirdsNames(),n.handleBirdsClicks()})),l(this,"checkForCorrectAnswer",(function(e){var t=e.target.textContent,i=n.birdsNames.indexOf(t);if(n.insertBirdDetails(i),n.clickedOnce||(n.toggleDetails(),n.clickedOnce=!0),!n.roundFinished){var s=e.target.firstElementChild;e.target.textContent===n.birdName?(n.winSound.pause(),n.winSound.currentTime=0,n.winSound.play(),s.classList.add("success"),n.finishRound()):(n.errorSound.pause(),n.errorSound.currentTime=0,n.errorSound.play(),s.classList.add("error"),n.lastBird!==t&&n.score>0&&(n.score-=1),n.lastBird=e.target.textContent)}})),this.songBirdLogo=t,this.rsSchoolLogo=s,this.unknownBirdImage=i,this.winSound=new Audio(o),this.errorSound=new Audio(a),this.birdsData=c,this.birdsNames=[],this.birdName="",this.birdSpecies="",this.birdDescription="",this.birdSound="",this.birdImage="",this.round=-1,this.score=5,this.totalScore=0,this.randomNumber=0,this.gameFinished=!1,this.roundFinished=!1,this.clickedOnce=!1,this.lastBird=null}var n,p;return n=e,(p=[{key:"insertLogos",value:function(){var e=document.querySelector(".songbird-logo"),t=document.querySelector(".rsschool-logo");e.src=this.songBirdLogo,t.src=this.rsSchoolLogo}},{key:"setRandomNumber",value:function(){this.randomNumber=Math.floor(6*Math.random())}},{key:"finishGame",value:function(){this.gameFinished=!0,this.saveResult(),r.open(this.totalScore,this.startGame)}},{key:"finishRound",value:function(){this.roundFinished=!0,this.totalScore+=this.score,this.insertSummary(),this.renderScore(),this.resetScore(),this.round<5?this.toggleButton():this.finishGame()}},{key:"renderScore",value:function(){document.querySelector(".score").textContent="Очки: ".concat(this.totalScore)}},{key:"resetScore",value:function(){this.score=5}},{key:"saveResult",value:function(){var e=Date.now(),t=JSON.parse(localStorage.getItem("results"));t||(localStorage.setItem("results",JSON.stringify([])),t=JSON.parse(localStorage.getItem("results")));var i,s={date:e,score:this.totalScore};localStorage.setItem("results",JSON.stringify([].concat(function(e){if(Array.isArray(e))return d(e)}(i=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(i)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[s])))}},{key:"handleBirdsClicks",value:function(){var e=this;document.querySelectorAll(".bird-name").forEach((function(t){t.addEventListener("click",e.checkForCorrectAnswer)}))}},{key:"toggleDetails",value:function(){var e=document.querySelector(".details"),t=document.querySelector(".prompt");e.classList.toggle("hidden"),t.classList.toggle("hidden")}},{key:"toggleButton",value:function(){var e=document.querySelector(".main-button");this.roundFinished?(e.disabled=!1,e.addEventListener("click",this.startRound),e.classList.add("success")):(e.disabled=!0,e.removeEventListener("click",this.startRound),e.classList.remove("success"))}},{key:"insertSummary",value:function(){var e=document.querySelector(".summary-bird-image"),t=document.querySelector(".summary-birdname");document.querySelector(".summary-audio").src=this.birdSound,this.roundFinished?(e.src=this.birdImage,t.textContent=this.birdName):(e.src=this.unknownBirdImage,t.textContent="******")}},{key:"insertBirdsNames",value:function(){var e=this;this.setBirdsNames();var t=document.querySelectorAll(".bird-name"),i=[];t.forEach((function(t,s){var o=document.createElement("span");o.className="indicator";var a=t;i.push(o),a.textContent=e.birdsNames[s],a.prepend(o)}))}},{key:"insertBirdDetails",value:function(e){var t=document.querySelector(".details-bird-image"),i=document.querySelector(".details-birdname"),s=document.querySelector(".details-audio"),o=document.querySelector(".details-species"),a=document.querySelector(".details-bottom"),n=this.birdsData[this.round][e];t.src=n.image,i.textContent=n.name,s.src=n.audio,o.textContent=n.species,a.textContent=n.description}},{key:"setActiveSection",value:function(){var e=document.querySelectorAll(".section");e.forEach((function(e){return e.classList.remove("section-active")})),e[this.round].classList.add("section-active")}},{key:"setBirdInfo",value:function(){var e=this.birdsData[this.round][this.randomNumber];this.birdName=e.name,this.birdSpecies=e.species,this.birdDescription=e.description,this.birdSound=e.audio,this.birdImage=e.image}},{key:"setBirdsNames",value:function(){var e=this.birdsData[this.round];this.birdsNames=e.map((function(e){return e.name}))}}])&&u(n.prototype,p),Object.defineProperty(n,"prototype",{writable:!1}),e}())).startGame()})();