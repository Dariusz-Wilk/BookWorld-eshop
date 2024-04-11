import { PrismaClient } from '@prisma/client';
import { Role } from './enums/role';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      photo: 'bastion-stephen-king-1',
      type: 'book',
      format: 'paper',
      title: 'Bastion',
      author: 'Stephen King',
      ourPrice: 34.0,
      standardPrice: 59.0,
      description:
        'Tak kończy się świat...\nWystarczy błąd na komputerze w laboratorium Ministerstwa Obrony. \nNajpierw nadchodzi epidemia. Potem pojawiają się sny…\n\nZaczyna się niewinnie – od zwykłego przeziębienia. Ktoś kichnął, ktoś umarł i nagle Ziemia staje się masowym grobem.\nNieliczni, którzy przetrwali, zaczynają mieć wizje wskazujące im drogę. Każdy musi dokonać wyboru i podążyć własną ścieżką.\nPodzielona ludzkość tworzy dwa obozy – Wolną Strefę w Kolorado i dyktaturę w Las Vegas, rządzoną przez psychopatów i kryminalistów, w których epidemia obudziła to, co najgorsze. Ci, którzy wierzą w miłość i braterstwo, mają w starciu z nimi niewielkie szanse. Tyle że konfrontacja między siłami dobra i zła staje się nieunikniona.\n\nPowyższy opis pochodzi od wydawcy.',
      category: 'horror',
      publisher: 'Albatros',
      releaseDate: '2024-02-07',
      numberOfPages: 1088,
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      photo: 'bastion-stephen-to-1',
      type: 'book',
      format: 'paper',
      title: 'To',
      author: 'Stephen King',
      ourPrice: 39.0,
      standardPrice: 59.0,
      description:
        'Kilkoro dzieci. \nMałe miasteczko. \nWielki strach.\n\nDorośli uznają miejscowość Derry za swojskie i porządne miasto, idealne do wychowywania dzieci. Ale to dzieci widzą – i czują – co tak strrrasznie różni Derry od innych miejsc. \n\nTylko one potrafią dostrzec TO, ukryte w kanałach, przybierające najróżniejsze postacie, prosto z dziecięcych koszmarów.\nTO zna ich największe lęki.\nAle tylko dzieci mogą stanąć do walki z potworem.\nPo zaginięciu George’a Denbrough dzieci decydują się zmierzyć z TO. Będzie to ich pierwsze, ale nie ostatnie starcie z TO, które, ukryte w zakamarkach pamięci, zamieni dawne dziecięce koszmary w przerażającą rzeczywistość dorosłych…\nCzy odważycie się sięgnąć po TO?\n\nPowyższy opis pochodzi od wydawcy.',
      category: 'horror',
      publisher: 'Albatros',
      releaseDate: '2024-02-07',
      numberOfPages: 1104,
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      photo: 'hobbit-tolkien-1',
      type: 'book',
      format: 'paper',
      title: 'Hobbit czyli tam i z powrotem',
      author: 'J.R.R. Tolkien',
      ourPrice: 32.99,
      standardPrice: 59.0,
      description:
        'Ekskluzywne wydanie bestsellerowej powieści. Arcydzieło literatury fantasy. Baśniowy, przemyślany w najdrobniejszych szczegółach fantastyczny świat oraz barwne postaci i ich wspaniałe przygody.\n\nBohaterem jest tytułowy hobbit, "istota większa od liliputa, mniejsza jednak od krasnala”, pełen życzliwości dla świata, dobroci, nieskory do męstwa, a przecież odważny, poczciwy, a przecież sprytny. \n\nAutor szuka w swej powieści odpowiedzi na podstawowe pytania o źródła dobra i zła. To także wstęp i zaproszenie do najgłośniejszego dzieła Tolkiena "Władcy Pierścieni".\n\nPowyższy opis pochodzi od wydawcy.',
      category: 'fantasy',
      publisher: 'Wydawnictwo Iskry',
      releaseDate: '2012-09-11',
      numberOfPages: 280,
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17259',
      photo: 'mistrz-i-malgorzata-bulhakow-1',
      type: 'book',
      format: 'paper',
      title: 'Mistrz i Małgorzata',
      author: 'Bułhakow Michaił',
      ourPrice: 49.99,
      standardPrice: 59.99,
      description:
        '„Mistrz i Małgorzata” to fascynujący i ponadczasowy obraz walki dobra i zła. Woland, Behemot, Małgorzata są bohaterami wielobarwnymi, z którymi można się utożsamiać. Powieść bawi, wzrusza, zaskakuje i skłania do refleksji filozoficznych.\n\nBułhakow doskonale splótł historię miłości pisarza, zwanego Mistrzem, i Małgorzaty Nikołajewny z ponurymi i zarazem groteskowymi realiami Rosji z lat trzydziestych XX wieku. Wątek z historią Poncjusza Piłata skazującego na śmierć wędrownego filozofa Jeszuę Ha-Nocri stanowi jednocześnie powieść w powieści.\n\nKonwencja, zawierająca elementy absurdu, fantastyczną sferę działań Wolanda była konieczna, aby książka przeszła przez cenzurę panującą w sowieckiej Rosji. Tylko tak Bułhakow mógł ukazać niedorzeczności kraju, w którym tworzył. \n\nPrzepiękna edycja z barwionymi brzegami.\n\nPowyższy opis pochodzi od wydawcy.',
      category: 'klasyka',
      publisher: 'Świat Książki',
      releaseDate: '30.08.2023',
      numberOfPages: 560,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d4',
      photo: 'ojciec-chrzestny-mario-puzo-1',
      type: 'book',
      format: 'paper',
      title: 'Ojciec chrzestny',
      author: 'Mario Puzo',
      ourPrice: 39.99,
      standardPrice: 54.99,
      description:
        'Porywająca opowieść o honorze i nienawiści, szacunku i pogardzie, miłości i śmierci.\n\nMroczny świat przemocy, w którym każda zniewaga musi zostać zmyta krwią.\n\nJedna z najwybitniejszych powieści XX wieku, zekranizowana przez Francisa Forda Coppolę z genialnymi rolami Marlona Brando i Ala Pacino. \n\nVito Corleone jest Ojcem Chrzestnym jednej z sześciu nowojorskich rodzin mafijnych. Sprawuje rządy żelazną ręką, a ci, którzy nie podporządkowują się jego decyzjom, nie mogą liczyć na łaskę. To człowiek honoru, ale zarazem tyran i szantażysta, który wśród wrogów wzbudza strach, a wśród przyjaciół – zasłużony, choć nie całkiem bezinteresowny szacunek. Kiedy odmawia uczestnictwa w nowym, niezwykle opłacalnym interesie – handlu narkotykami – wchodzi w ostry konflikt z cosa nostrą. Przyszłość rodziny może uratować tylko najmłodszy syn Vita, Michael, bohater wojenny, który z brudnymi interesami nie chciał mieć nic wspólnego. Czy okaże się godnym następcą Ojca Chrzestnego? \n\nPowyższy opis pochodzi od wydawcy.',
      category: 'literatura piękna obca',
      publisher: 'Albatros',
      releaseDate: '07.04.2022',
      numberOfPages: 480,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d6',
      photo: 'rok-1984-orwell-1',
      type: 'book',
      format: 'paper',
      title: 'Rok 1984',
      author: 'George Orwell',
      ourPrice: 39.99,
      standardPrice: 54.99,
      description:
        'Wielki brat patrzy – to właśnie napisy tej treści, w antyutopii Orwella krzyczące z plakatów rozlepionych po całym Londynie, natchnęły twórców telewizyjnego show „Big Brother”. Czyżby wraz z upadkiem komunizmu wielka, oskarżycielska powieść straciła swoją rację bytu, stając się zaledwie inspiracją programu rozrywkowego? Nie. Bo ukazuje świat, który zawsze może powrócić. Świat pustych sklepów, permanentnej wojny, jednej wiary.\n\nKlaustrofobiczny świat Wielkiego Brata, w którym każda sekunda ludzkiego życia znajduje się pod kontrolą, a dominującym uczuciem jest strach. Świat, w którym ludzie czują się bezradni i samotni, miłość uchodzi za zbrodnię, a takie pojęcie jak „wolność” i „sprawiedliwość” nie istnieją. Na świecie są miejsca, gdzie ten stan wciąż trwa. I zawsze znajdą się „cudotwórcy” gotowi obiecywać stworzenie nowego ładu, który od wizji Orwella dzieli tylko krok. Niestety, piekło wybrukowane jest dobrymi chęciami… \n\nPowyższy opis pochodzi od wydawcy.',
      category: 'klasyka',
      publisher: 'Wydawnictwo MUZA S.A.',
      releaseDate: '2010-09-29',
      numberOfPages: 360,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d7',
      photo: 'wiedzmin-sapkowski-1',
      type: 'book',
      format: 'paper',
      title: 'Wiedźmin. Ostatnie życzenie. Tom 1 ',
      author: 'Andrzej Sapkowski',
      ourPrice: 29.99,
      standardPrice: 44.99,
      description:
        'Ostatnie życzenie. Wiedźmin, Tom 1 \n\nSięgając po sagę wiedźmińską, masz szansę wkroczyć w fantastyczny świat wykreowany przez Andrzeja Sapkowskiego. W pierwszym tomie sagi pod tytułem „Ostatnie życzenie” poznasz początek historii Geralta z Rivii i wraz z nim wyruszysz w świat przygód. \n\nTom 1. sagi o Wiedźminie to zbiór opowiadań, które pozwolą Ci poznać Geralta. Co ciekawe, książka „Ostatnie życzenie” ukazała się rok po drugim w chronologii wewnętrznej cyklu opowiadań – „Miecz przeznaczenia”. W skład tomu „Ostatnie życzenie” weszły cztery teksty z debiutanckiego zbioru „Wiedźmin”. \n\nPowyższy opis pochodzi od wydawcy.',
      category: 'fantasy',
      publisher: 'SuperNOVA',
      releaseDate: '01.10.2014',
      numberOfPages: 332,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d8',
      photo: 'uwieziona-paris-1',
      type: 'e-book',
      format: 'mobi/epub',
      title: 'Uwięziona',
      author: 'B.A. Paris',
      ourPrice: 29.99,
      standardPrice: 40.99,
      description:
        'Kiedyś: \n\nAmelie zawsze musiała sama o siebie zadbać. Ojciec osierocił ją, gdy była nastolatką, ale zanim wpadła w tryby opieki społecznej, udało jej się uciec i zacząć życie od nowa w Londynie. Poznała wpływowych przyjaciół i zdobyła pracę w redakcji luksusowego magazynu. Wkrótce zgodziła się poślubić jego właściciela, miliardera Neda Hawthorpe’a. \n\nTeraz: \n\nAmelie budzi się w ciemnym pokoju bez okien. Nie ma pojęcia, dokąd ją zabrano i dlaczego. Kim są jej tajemniczy porywacze? I dlaczego czuje się w tym więzieniu bezpieczniejsza niż u boku swojego męża Neda? \n\nPowyższy opis pochodzi od wydawcy.',
      category: 'thriller',
      publisher: 'Albatros',
      releaseDate: '25.01.2023',
      numberOfPages: 352,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2d9',
      photo: 'niewyjasnione-okolicznosci-1',
      type: 'e-book',
      format: 'mobi/epub',
      title: 'Niewyjaśnione okoliczności',
      author: 'dr Shepherd Richard',
      ourPrice: 29.99,
      standardPrice: 40.99,
      description:
        'Gdy ktoś umrze śmiercią gwałtowną lub z niewyjaśnionych przyczyn, zadaniem dr. Shepherda jest ustalić przyczynę zgonu. Każda sekcja zwłok to swego rodzaju zagadka kryminalna – a dr Shepherd przeprowadził ich w swoim życiu ponad 23 tysiące. Dzięki swoim umiejętnościom, oddaniu i wnikliwości jest w stanie odpowiedzieć na jedno z najtrudniejszych pytań: jak doszło do śmierci danej osoby? \n\nCzy chodzi o seryjnego mordercę, o katastrofę naturalną, o zbrodnię doskonałą, czy o podejrzany wypadek – dr Shepherd nigdy nie zakłada niczego z góry, ale zawsze dąży do odkrycia prawdy. Chociaż był zaangażowany w wyjaśnianie najgłośniejszych spraw takich jak masakra w Hungerford (1987), morderstwo Rachel Nickell (1992), a nawet w śledztwo dotyczące wypadku księżnej Diany (1997) oraz atak na World Trade Center (2001), to często te mniej głośne przypadki okazują się najbardziej zagadkowe, intrygujące, a nawet dziwaczne. Dowody przedstawione przez dr. Shepherda – zarówno w świetle jupiterów, jak i poza mediami – doprowadziły do skazania morderców, uniewinnienia osób fałszywie oskarżonych, a nawet do ponownego otwarcia dawno zamkniętych spraw. \n\nNiewyjaśnione okoliczności to fascynująca opowieść, relacja wyjątkowego człowieka, unikalny wgląd w niezwykły zawód, a przede wszystkim przejmujący i niosący otuchę testament tych, których życie przedwcześnie się zakończyło. \n\nPowyższy opis pochodzi od wydawcy.',
      category: 'biografia',
      publisher: 'Insignis',
      releaseDate: '2019-01-24',
      numberOfPages: 396,
    },
    {
      id: '01c7599d-318b-4b9f-baf7-51f3a936a2e9',
      photo: 'sztuka-komunikacji-1',
      type: 'audiobook',
      format: 'mp3',
      title: 'Sztuka komunikacji. W drodze do sukcesu',
      author: 'Carnegie Dale',
      ourPrice: 29.99,
      standardPrice: 40.99,
      description:
        'Kompetencje merytoryczne są niezwykle ważne, jednak niemal zawsze o sukcesie decyduje zdolność komunikowania się z ludźmi i przekonywania ich do swych racji. Właśnie ta magiczna umiejętność, dzięki której można się stać osobą lubianą, popularną i skutecznie nakłaniającą innych do przyjęcia jej punktu widzenia, przyczyniła się do powstania fortun czy imponujących karier, również politycznych. Oznacza to jednak, że wiele niepowtarzalnych szans zostało zaprzepaszczonych z powodu błędnych interpretacji, nieporozumień i innych niedoskonałości w komunikacji. Wniosek jest jasny: jeśli pragniesz sukcesu, musisz posiąść umiejętność klarownego, zwięzłego i przekonującego wyrażania swoich myśli.? \n\nTrzymasz w ręku książkę, dzięki której łatwiej rozwiniesz swoje umiejętności komunikacyjne. Poznasz strategie pozwalające zwiększyć skuteczność wypowiedzi. Zawarte tu wskazówki pomogą Ci w doskonaleniu sztuki konwersacji, czyli rozmów z innymi osobami. Poprawisz również umiejętność wystąpień publicznych (np. wygłaszanie wykładów) czy prezentowania informacji członkom grupy. Nauczysz się także słuchać, dzięki czemu będziesz w stanie w pełni zrozumieć przesłanie rozmówcy. Zapoznasz się również z ważnymi zagadnieniami na temat mowy ciała. Przyswoisz sobie zasady klarownego i zwięzłego komunikowania się na piśmie.. ',
      category: 'biografia',
      publisher: 'Insignis',
      releaseDate: '2019-01-24',
      recordingLength: '4godz 52min',
    },
  ];
}

function getUsers() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      email: 'j.steinbeck@gmail.com',
      name: 'John Steinbeck',
      address: '123 Main St, Springfield, IL 62701, USA',
      role: Role.ADMIN,
    },
    {
      id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56',
      email: 'adam.smith.1977@gmail.com',
      name: 'Adam Smith',
      address: '10 Downing St, Westminster, London SW1A 2AA, UK',
      role: Role.USER,
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      email: 'olivia.sanders.1988@yahoo.com',
      name: 'Olivia Sanders',
      address: '100 Wellington St, Ottawa, ON K1A 0A6, Canada',
      role: Role.USER,
    },
  ];
}

function getPasswords() {
  return [
    {
      user: { connect: { id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256' } },
      hashedPassword: 'tested_hashed_password_1',
    },
    {
      user: { connect: { id: 'c920c7b9-a67d-4edb-8ce7-e3c9f3889e56' } },
      hashedPassword: 'tested_hashed_password_2',
    },
    {
      user: { connect: { id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258' } },
      hashedPassword: 'tested_hashed_password_3',
    },
  ];
}

async function seed() {
  await db.user.deleteMany();
  await db.product.deleteMany();
  await db.password.deleteMany();

  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
  await Promise.all(
    getUsers().map((user) => {
      return db.user.create({ data: user });
    }),
  );
  await Promise.all(
    getPasswords().map((pass) => {
      return db.password.create({ data: pass });
    }),
  );
}

seed();
