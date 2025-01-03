import YugadiImg from "../assets/festivals/Yugadi 2024_calender at SCM Shirali.jpg";
import JanmadivasImg from "../assets/festivals/Janmotsava 2024 at Karla.jpg";
import ShivarathriImg from "../assets/festivals/Mahashivaratri_1 at SCM, Shirali.jpg";
import GuruPurnimaImg from "../assets/festivals/Gurupurnima 2024.jpg";
import GuruPurnimaImg1 from "../assets/festivals/Gurupurnima_1 2024.jpg";
import GokulashtamiImg from "../assets/festivals/Gokulashtami Celebrations.jpg";
import DepavaliImg from "../assets/festivals/Deepa Prajwalana on Deepavali.jpg";
import NavarathriImg from "../assets/festivals/Kumarika Pujana_Navratri_Celebration_1.jpg";
import Yuvas from "../assets/Yuvas.webp";
import Yuvas1 from "../assets/Yuvas1.webp";
import Yuvas2 from "../assets/yuvas2.webp";
// import hands from "../assets/hands.jpg";
import district from "../assets/district.webp";
import district1 from "../assets/district1.webp";
import district2 from "../assets/district2.webp";
import cultural from "../assets/culturalProgUsa.webp";
import cultural1 from "../assets/photoGallery/img9.webp";
import cultural2 from "../assets/PPUC Annday (2).webp";
import lecture from "../assets/yuvas_lecture.webp";
import chf_logo from "../assets/chfLogo.png";
import ksa_logo from "../assets/KSA_logo.jpg";
import training from "../assets/training.webp";
import training1 from "../assets/training1.webp";
import financeTraining1 from "../assets/financeTraining1.webp";
import financeTraining2 from "../assets/finaceTraining2.webp";
import financeTraining from "../assets/financeTraining.webp";
import selfHelp from "../assets/selfHelp3.webp";
import selfHelp1 from "../assets/selfHelp1.webp";
import selfHelp2 from "../assets/photoGallery/img11.webp";
import networking from "../assets/networking.webp";
import networking1 from "../assets/networking1.webp";
import networking2 from "../assets/networking2.webp";
import health from "../assets/health.webp";
import health1 from "../assets/health1.webp";
import health2 from "../assets/health3.webp";
import heritage1 from "../assets/heritage1.webp";
import heritage2 from "../assets/heritage2.webp";
import heritage3 from "../assets/heritage3.webp";
import infrastruture from "../assets/infrastructure.webp";
import infrastruture1 from "../assets/infrastrucutre1.webp";
import scholarship from "../assets/scholarship.webp";
import scholarship1 from "../assets/district.webp";
import satsang from "../assets/satsang.webp";
import satsang1 from "../assets/satsang2.webp";
import satsang2 from "../assets/satsang3.webp";

interface Program {
  id: number;
  title: string;
  description: string;
  image?: string | string[];
  url?: string;
  linkTo?: string;
}
interface Event {
  id: number;
  title: string;
  description: string;
  image?: string | string[];
  url?: string;
}

//projects page data
export const EducationPrograms: Program[] = [
  {
    id: 1,
    title: "Scholarship Programs for Underprivileged Students",
    description:
      "Scholarships to deserving students from underprivileged backgrounds to ensure they have access to quality education. These scholarships cover school fees, textbooks, and other necessary materials, empowering students to pursue their academic goals without financial barriers.",
    image: [
      "https://chitrapurmath.net/myAssets/images/report1/coffeeTableWithGlassTop.jpg",
      "https://chitrapurmath.net/myAssets/images/report1/cutting1.jpg",
      "https://chitrapurmath.net/myAssets/images/srivali_trust/school%203.jpg",
    ],
    linkTo: `education`,
  },
  {
    id: 2,
    title: "Vocational Training and Skill Development",
    description:
      "Vocational training programs that focus on equipping youth and adults with practical skills, such as technical trades, computer literacy, and entrepreneurship. These programs are designed to enhance employability and foster economic independence, especially in rural areas.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Inauguration_of_Computer_Lab_and_Robotics_Lab_at_Parjnanashram_Vidyalaya_Karla_2_Dec_2024/Karla%2020240202%20(26).jpg",
      "https://chitrapurmath.net/myAssets/images/report1/shelfWithStoreBoughtSteelBrackets.jpg",
      "https://chitrapurmath.net/myAssets/images/report1/preparingWireUp.jpg",
    ],
    linkTo: `education`,
  },
  {
    id: 3,
    title: "Support for School Infrastructure",
    description:
      "Improving the infrastructure of local schools, particularly in rural or underserved areas. This includes building classrooms, providing essential learning materials, and ensuring that schools have proper sanitation and clean drinking water facilities.",
    image: [
      "https://chitrapurmath.net/myAssets/images/srivali_trust/IMG_5634.jpg",
      infrastruture,
      infrastruture1,
    ],
    linkTo: `shs`,
  },
  {
    id: 4,
    title: "After-School Tutoring and Mentorship Programs",
    description:
      "After-school tutoring programs where students receive personalized attention in subjects they find challenging. In addition, mentorship programs connect students with professionals who provide guidance on career development and personal growth.",
    image: [
      "https://chitrapurmath.net/documents/upload/images/NR-2/ALBUM-2-HARINMAAM/NR-2-1.jpg",
      "https://chitrapurmath.net/documents/upload/23.png",
      "https://chitrapurmath.net/documents/upload/27.png",
    ],
    linkTo: `education`,
  },
  {
    id: 5,
    title: "Educational Workshops and Seminars",
    description:
      "Workshops, seminars, and guest lectures that cover a range of topics from academic subjects to life skills and career guidance. These events are aimed at broadening students' horizons and preparing them for both personal and professional success.",
    image: [
      "https://chfusa.org/static/images/photoGallery/SHS(6).jpg",
      "https://chitrapurmath.net/myAssets/images/report1/testingTheChairAndTable2.jpg",
      "https://chitrapurmath.net/documents/upload/1690618078Carpentry_sessions_by_Harin_Hattangady_Maam.jpg",
    ],
    linkTo: `education`,
  },
  {
    id: 6,
    title: "Digital Learning Initiatives",
    description:
      "Recognizing the growing importance of technology in education, digital learning initiatives are being implemented by providing access to computers, the internet, and online learning resources. This helps bridge the digital divide and ensures students have access to modern learning tools.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Inauguration_of_Computer_Lab_and_Robotics_Lab_at_Parjnanashram_Vidyalaya_Karla_2_Dec_2024/Karla%2020240202%20(27).jpg",
      "https://chitrapurmath.net/documents/gallery/Inauguration_of_Computer_Lab_and_Robotics_Lab_at_Parjnanashram_Vidyalaya_Karla_2_Dec_2024/Karla%2020240202%20(35).jpg",
      "https://chitrapurmath.net/documents/gallery/Inauguration_of_Computer_Lab_and_Robotics_Lab_at_Parjnanashram_Vidyalaya_Karla_2_Dec_2024/Karla%2020240202%20(27).jpg",
    ],
    linkTo: `education`,
  },
  {
    id: 7,
    title: "Cultural and Heritage Education",
    description:
      "Integration of cultural education into its curriculum by organizing programs that teach students about the history, heritage, and values of our community. This fosters a sense of pride and belonging while helping young people stay connected to their roots.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Inauguration_of_Computer_Lab_and_Robotics_Lab_at_Parjnanashram_Vidyalaya_Karla_2_Dec_2024/Karla%2020240202%20(20).jpg",
      "https://chitrapurmath.net/documents/gallery/Inauguration_of_Computer_Lab_and_Robotics_Lab_at_Parjnanashram_Vidyalaya_Karla_2_Dec_2024/Karla%2020240202%20(7).jpg",
      "https://chitrapurmath.net/documents/gallery/Inauguration_of_Computer_Lab_and_Robotics_Lab_at_Parjnanashram_Vidyalaya_Karla_2_Dec_2024/Karla%2020240202%20(4).jpg",
    ],
    linkTo: `education`,
  },
  {
    id: 8,
    title: "Teacher Training and Capacity Building",
    description:
      "Training programs for teachers to enhance their teaching methods, especially in underserved schools. These programs focus on modern pedagogical practices, classroom management, and student engagement techniques to ensure high-quality education for all.",
    image: [
      "https://chitrapurmath.net/documents/upload/1690624198Juggling_session_by_Omkar_Dhareshwar.jpg",
      "https://chitrapurmath.net/documents/upload/1690618116Interaction_with_HH_Swamiji.jpg",
      "https://chitrapurmath.net/documents/upload/1690701288Group_photo_of_shibirarthis_and_sanchalaks_with_HH_Swamiji.jpg",
    ],
    linkTo: `education`,
  },
  {
    id: 9,
    title: "Support for Higher Education",
    description:
      " Financial aid and guidance to students seeking higher education opportunities, whether in India or abroad. The foundation also provides counseling and resources for students applying to universities and vocational institutions, helping them navigate the complexities of admissions and financial aid processes.",
    image: [
      "https://chitrapurmath.net/documents/upload/16567391878.jpg",
      scholarship,
      scholarship1,
    ],
    linkTo: `education`,
  },
  {
    id: 10,
    title: "Partnerships with Educational Institutions",
    description:
      "Collaboration with schools, colleges, and educational organizations to provide enhanced learning opportunities for students. These partnerships help introduce new academic programs, exchange opportunities, and internships to broaden students' educational experiences.",
    image: [
      "https://chitrapurmath.net/documents/upload/12.png",
      "https://chitrapurmath.net/documents/upload/Pari-1_Feb_2018-Flagging_off_the_Swachh_Mangaluru_Mssion_on_9th_October_2017_at_the_Parijnan_PU_College,_Someshwar-Kotekar.jpg",
      "https://chitrapurmath.net/documents/upload/Pari-2-Feb_2018-_Dr._Sheetal_Savur,_Assoc._Prof.jpg",
    ],
    linkTo: `education`,
  },
];

export const WomenEmpowermentPrograms: Program[] = [
  {
    id: 1,
    title: "Vocational Training Programs",
    description:
      "Training in various skills such as tailoring, handicrafts, hand made paper and other traditional crafts, enabling women to generate income and become economically self-reliant.",
    image: [
      "https://samvitsudha.com/wp-content/uploads/2023/09/1-Fabric-Unit-Hand-Embroidery-training-565x377.jpg",
      "https://samvitsudha.com/wp-content/uploads/2023/09/2-Fabric-Unit-training-@-Workplace-565x377.jpg",
      "https://samvitsudha.com/wp-content/uploads/2023/09/4-Fabric-Unit-Working-at-home-565x377.jpg",
    ],
    linkTo: `women-empowerment`,
  },
  {
    id: 2,
    title: "Entrepreneurship and Business Skills Development",
    description:
      "Workshops are conducted to teach women the fundamentals of entrepreneurship, including business planning, marketing, and financial management, to help them start and run their own businesses.",
    image: [
      training,
      "https://samvitsudha.com/wp-content/uploads/2023/09/1-HH-Mothers-working-565x438.jpg",
      training1,
    ],
    linkTo: `women-empowerment`,
  },
  {
    id: 3,
    title: "Financial Literacy Workshops",
    description:
      "Workshops focused on financial literacy, teaching women how to manage their finances, save for the future, and make informed financial decisions.",
    image: [financeTraining, financeTraining1, financeTraining2],
    linkTo: `women-empowerment`,
  },
  {
    id: 4,
    title: "Self-Help Groups (SHGs) and Microfinance Support",
    description:
      " Formation of self-help groups where women can come together to save, invest, and provide loans to one another. Microfinance initiatives help these groups fund small business ventures and improve their financial independence.",
    url: "https://youtu.be/oSyl-EUzFX0?si=KVAkaHGeJQnN-LDo",
    linkTo: `pari`,
  },
  {
    id: 5,
    title: "Leadership and Mentorship Programs",
    description:
      "Leadership training to empower women to take on community leadership roles and mentors them to build confidence and skills in areas like communication, decision-making, and management.",
    image: [selfHelp, selfHelp1, selfHelp2],
    linkTo: `women-empowerment`,
  },
  {
    id: 6,
    title: "Artisan and Craft Revival Programs",
    description:
      "Help women revive traditional crafts, providing training in producing and marketing these crafts for local and international markets.",
    url: "https://youtu.be/pTsJnc2erfQ?si=W_tT61DewZh-E4B1",
    linkTo: `women-empowerment`,
  },
  {
    id: 7,
    title: "Health and Wellness Awareness",
    description:
      "Awareness programs that focus on women's health, hygiene, and wellness, helping women access important healthcare services and encouraging them to prioritize their physical and mental wellbeing.",
    image: [health1, health, health2],
    linkTo: `women-empowerment`,
  },
  {
    id: 8,
    title: "Networking and Community Support Systems",
    description:
      "Community support systems where women can share knowledge, resources, and experiences, creating a strong network that encourages collective growth and empowerment.",
    image: [networking1, networking, networking2],
    linkTo: `women-empowerment`,
  },
];

export const HeritagePrograms: Program[] = [
  {
    id: 1,
    title: "Vantiga",
    description:
      "Vantiga is the annual contributions made by the Chitrapur Saraswat community to support the Shri Chitrapur Math's spiritual, cultural, and community welfare initiatives, reflecting their commitment to their heritage.",
    image: [heritage1, heritage2, heritage3],
    linkTo: `vantiga`,
  },
  {
    id: 2,
    title: "Heritage and Spirituality Programs",
    description:
      "Initiatives that explore the intersection of cultural heritage and spirituality, including discussions on rituals, customs, and traditions, are organized to help individuals understand the significance of their practices and connect with their roots",
    image: [
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_3_11_Nov_2024/Day%203%20(10).jpg",
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_3_11_Nov_2024/Day%203%20(3).jpg",
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_3_11_Nov_2024/Day%203%20(12).jpg",
    ],
    linkTo: `heritage`,
  },
  {
    id: 3,
    title: "Lectures and Discourses",
    description:
      "Regular lectures and discourses are held featuring spiritual leaders, scholars, and practitioners who share insights on spirituality, philosophy, and the teachings of the Chitrapur Saraswat community. These sessions aim to inspire and educate participants on their spiritual journeys.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_9_17_Nov_2024/SPU%20Day%209%20(2).jpg",
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_9_17_Nov_2024/SPU%20Day%209%20(7).jpg",
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_9_17_Nov_2024/SPU%20Day%209%20(18).jpg",
    ],
    linkTo: `heritage`,
  },
  {
    id: 4,
    title: "Community Worship and Festivals",
    description:
      "Community worship events and cultural festivals that celebrate the spiritual heritage of the Chitrapur Saraswat community. These gatherings promote unity, shared values, and collective spiritual experiences.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Shashti_Rathotsava_at_Shrimat_Ananteshwar_Temple,_Vittla_7_Dec_2024/Vittal%20Shashti%202024%20%20(1).jpg",
      "https://chitrapurmath.net/documents/gallery/Datta_Jayanti,_Palki_Utsava_at_Shri_Satchidananda_Dattatraya_Temple,_Kundapur_14-15_Dec_2024/Datta%20Jayanti%20and%20Palki%20Utsava%20at%20SDT,%20Kundapur%20(21).jpg",
      "https://chitrapurmath.net/documents/gallery/Kartik_Deepotsava_at_Shri_Uma_Maheshwar_Devasthan,_Mangaluru_18_Nov_2024/Kartik%20Deepotsava%20UMD%20MGL%20(1).jpg",
    ],
    linkTo: `heritage`,
  },
  {
    id: 5,
    title: "Scriptural Study Groups",
    description:
      "Study groups focused on sacred texts and scriptures, allowing participants to engage in meaningful discussions and reflections on spiritual teachings and their relevance to modern life.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_5_13_Nov_2024/Day%205%20(42).jpg",
      "https://chitrapurmath.net/documents/gallery/HH_Swamijis_visit_to_Maharshi_Karve_Stree_Shikshan_Saunsthas_Anudanith_Madhyamik_Ashram_Shala,_Kamshet_28_Nov_2024/22.jpg",
      "https://chitrapurmath.net/documents/gallery/Shashtyabdapurti_Utsava_-_Karla_-_Day_5_13_Nov_2024/Day%205%20(1).jpg",
    ],
    linkTo: `heritage`,
  },

  {
    id: 6,
    title: "Youth Spiritual Programs",
    description:
      "Targeted programs for youth that focus on building a strong spiritual foundation, encouraging leadership qualities, and promoting community service, helping young individuals understand their roles in preserving spiritual and cultural values.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Bengaluru_Camp,_Day_1_evening_-_Kalarpanam_by_Girvanapratishtha_23_June_2024/Bangalore%20Camp,%20Day%201%20(evening)%2023%20June%202024%20(22).jpg",
      "https://chitrapurmath.net/documents/gallery/Bengaluru_Camp,_Day_1_evening_-_Kalarpanam_by_Girvanapratishtha_23_June_2024/Bangalore%20Camp,%20Day%201%20(evening)%2023%20June%202024%20(6).jpg",
      "https://chitrapurmath.net/documents/gallery/Bengaluru_Camp,_Day_1_evening_-_Kalarpanam_by_Girvanapratishtha_23_June_2024/Bangalore%20Camp,%20Day%201%20(evening)%2023%20June%202024%20(12).jpg",
    ],
    linkTo: `heritage`,
  },
  {
    id: 7,
    title: "Collaborations with Spiritual Leaders",
    description:
      "CHF collaborates with spiritual leaders and organizations to host special events, teachings, and practices that enhance the community's spiritual well-being and understanding.",
    image: [
      "https://chitrapurmath.net/documents/gallery/Devi_Pujana_and_Shivarpana_of_Pushpa_Ratha_at_SCM_Shirali_11_Oct_2024/Shivarpana%20(1).jpg",
      "https://chitrapurmath.net/documents/gallery/HH_Swamijis_visit_to_Shri_Seetharama_Temple,_Bantwal_21_Sep_2024/Shree%20Seetharama%20Temple%20Bantwal%20(10).jpg",
      "https://chitrapurmath.net/documents/gallery/Tiruvannamalai_Camp_-_July_2024/15.jpg",
    ],
    linkTo: `heritage`,
  },
  {
    id: 8,
    title: "Spiritual Retreats and Workshops",
    description:
      "CHF organizes retreats and workshops that focus on various aspects of spiritual growth, meditation, and self-discovery. These events provide participants with the opportunity to reflect, learn, and deepen their spiritual practice in a supportive environment.",
    url: "https://youtu.be/goUtfPoeuWk?si=YKIUQoYiHiBnBROq",
    linkTo: `heritage`,
  },
];

//events page data
export const EventsFestivals: Event[] = [
  {
    id: 1,
    title: "CHF - KSA Mulaqaut",
    description:
      "Mulaqat across the oceans produced by KSA Chitrapur Saraswat Network and Chitrapur Heritage Foundation.",
    image: [satsang, chf_logo, ksa_logo],
  },
  {
    id: 9,
    title: "Life & Times About HH Shrimad Anandashram",
    description:
      " Presented to the Sadhakas in India by Jaidev (Sai) Chandavar of Los Angeles on September 17, 2023 (IST).",
    url: "https://www.youtube.com/watch?v=iRnGeK-U6UY",
  },
  {
    id: 10,
    title: "Education for Children with Special Needs",
    description:
      "Interview of Vinayanand Kallianpur, Principal of Swami Parijnanashram Educational and Vocational Center for the Handicapped, Virar, India by Ashok Kulkarni on April 30, 2022.",
    url: "https://www.youtube.com/watch?v=Mk4AFUqZ3zE&t=171s",
  },
  {
    id: 11,
    title: "The Art of Writing Indian Fiction",
    description:
      "Shoban Bantwal, Indian fiction writer interviewed by Priti Ubhayakar, content writer, on June 26, 2021.",
    url: "https://www.youtube.com/watch?v=umHnkh8heNo",
  },
  {
    id: 12,
    title: "Regulating Internal Inflamation - Cancer Research",
    description:
      "Cancer Research by Dr. Prakash and Dr. Mitzi Nagarkatti's, interviewed by Dr. Nivedita Bijoor on April 24, 2021.",
    url: "https://www.youtube.com/watch?v=VLBGlDmViDw&t=8s",
  },
  {
    id: 13,
    title: "Championing US Foreign Services",
    description:
      " Interview  with Roshni Nirody, US Consulate General Indonesia by Kiran Mundkur on September 11, 2021.",
    url: "https://www.youtube.com/watch?v=E4EMJlZ3WJA",
  },
];

export const EventGettogthers: Event[] = [
  {
    id: 1,
    title: "Chitrapur Yuvadhara",
    description:
      "This program connects young adults (ages 15-35) with the Math and Guru Parampara through workshops, creative forums, and social responsibility activities. It fosters self-expression, skill development, and a strong sense of community.",
    image: [Yuvas1, Yuvas, Yuvas2],
  },
  {
    id: 2,
    title: "Uccharan Training Sessions",
    description:
      "Dedicated training sessions to improve stotra pronunciation, enhancing the spiritual discipline and ensuring the correct intonation of sacred chants. These sessions empower participants to connect deeply with the spiritual essence of stotras.",
    image: [lecture],
  },
  {
    id: 3,
    title: "Chitrapur Satsang",
    description:
      "the USWC also conducts Satsang regularly every month, hosted by different families each month and that we chant stotras, sing Bhajans, do Devi AnushThanam and Guru Poojan (7/8 of us), chant Deepa Namaskar and sing Shankar Narayan Geet and Mangal Pad.",
    image: [satsang, satsang1, satsang2],
  },
  {
    id: 4,
    title: "Amgelo Katto",
    description:
      "A Variety Entertainment Program from USA residents, cohosted by the Chitrapur Heritage Foundation and Saraswat Foundation on February 26, 2022.",
    url: "https://www.youtube.com/watch?v=uK2_6w3pqJI",
  },
  {
    id: 5,
    title: "Yugadi Celebrations",
    description:
      "Sadhakas marked the beginning of the Hindu New Year with a special Yugadi program. The event, rooted in the teachings of our Math, featured cultural performances, stotra chanting, and a message of new beginnings.",
    image: [
      YugadiImg,
      "https://chitrapurmath.net/documents/gallery/Yugadi_2024_at_SCM_Shirali_9_April_2024/thumb/01_thumb.jpg",
      "https://chitrapurmath.net/documents/gallery/Yugadi_2024_at_SCM_Shirali_9_April_2024/thumb/10_thumb.jpg",
    ],
    url: "",
  },
  {
    id: 6,
    title: "Shivaratri Celebrations",
    description:
      "In honor of Lord Shiva, Shivaratri is celebrated during satsangs with deep devotion. Inspired by the Math's emphasis on meditation and prayer, the celebrations include stotra chanting, bhajans, and reflections on Lord Shiva's significance in our lives.",
    image: [
      ShivarathriImg,
      "https://chitrapurmath.net/documents/gallery/Maha_Shivaratri_at_SCM,_Shirali_8_March_2024/thumb/06_thumb.jpg",
      "https://chitrapurmath.net/documents/gallery/Mahashivaratri_Utsava_at_Shri_Umamaheshwar_Temple_Mangalore_(19_Feb_2023)_Picture_Credit:_Shri_Ganesh_Damble/thumb/06_thumb.jpg",
    ],
  },
  {
    id: 7,
    title: "Guru Purnima",
    description:
      "Guru Purnima, a day dedicated to honoring the Guru, holds special significance for all of us. Sadhakas across the United States participate in samuhik guru pujan, either online or in-person, reaffirming their devotion to Param Pujya Swamiji and our revered Guru parampara.",
    image: [
      GuruPurnimaImg,
      "https://chitrapurmath.net/documents/gallery/Datta_Jayanti_Saptah_at_Shri_Guru_Dattatreya_Sannidhi,_Shri_Uma_Maheshwar_Temple,_Mangalore_09_-_15_Dec_2024/thumb/001_thumb.jpg",
      GuruPurnimaImg1,
    ],
  },
  {
    id: 8,
    title: "Gokulashtami Celebrations",
    description:
      "The West Coast celebrated Gokulashtami with devotion and joy at a park in Fremont, CA. The event included stotra chanting, bhajans, and traditional garba, celebrating the divine leelas of Lord Krishna.",
    image: [
      GokulashtamiImg,
      "https://chitrapurmath.net/documents/gallery/Gokulashtami_at_Shi_Venugopal_Sannidhi,_HH_Vamanashram_Samadhi_Math_Mangalore_26_-_298_Aug_2024/thumb/27-2_thumb.jpg",
      "https://chitrapurmath.net/documents/gallery/Gokulashtami_at_Shi_Venugopal_Sannidhi,_HH_Vamanashram_Samadhi_Math_Mangalore_26_-_298_Aug_2024/thumb/27-3_thumb.jpg",
    ],
  },
  {
    id: 9,
    title: "Navratri Celebrations",
    description:
      "During Navratri, sadhakas meet every evening across the West and East Coasts to chant the shlokas of Sadhana Panchakam. This year, the West Coast celebrations were enriched by a dance offering by Yuvadhara and Prarthana, highlighting the divine feminine energy.",
    image: [
      NavarathriImg,
      "https://chitrapurmath.net/documents/gallery/Navaratri_2023_at_Karla_-_Day_2_(16_Oct_2023)/thumb/Navaratri%20Day%202%20(16%20Oct%202023)%20(6)_thumb.jpg",
      "https://chitrapurmath.net/documents/gallery/Navaratri_2023_at_Karla_-_Day_9_(23_Oct_2024)/thumb/Navartri%202023%20at%20Karla%20-%20Day%209%20(23%20Oct%202023)%20(16)_thumb.jpg",
    ],
  },
  {
    id: 10,
    title: "Diwali Celebrations",
    description:
      "As the festival of lights, Diwali is celebrated with great devotion and joy. Sadhakas come together to chant stotras, sing bhajans, and engage in cultural activities, illuminating their hearts and minds with the light of knowledge, unity, and spirituality.",
    image: [
      DepavaliImg,
      "https://chitrapurmath.net/documents/gallery/Deepa_Prajwalana_on_Deepavali_by_H_H_Swamiji_30_Oct_2014/thumb/10_thumb.jpg",
      "https://chitrapurmath.net/documents/gallery/Deepa_Prajwalana_on_Deepavali_by_H_H_Swamiji_30_Oct_2014/thumb/10_thumb.jpg",
    ],
  },
  {
    id: 11,
    title: "Param Pujya Swamiji's Janmadivas Celebrations",
    description:
      "Sadhakas honor Param Pujya Swamiji's birthday with great reverence by performing samuhik guru pujan and singing bhajans, coming together in a spirit of devotion and gratitude. The celebration is followed by a joyful cake-cutting ceremony on the West Coast.",
    image: [
      JanmadivasImg,
      "https://chitrapurmath.net/documents/gallery/Janmotsava_2024_at_Karla_-_Day_2_15_June_2024_/thumb/Janmotsava%202024%20(30)_thumb.jpg",
      "https://chitrapurmath.net/documents/gallery/Janmotsava_2024_at_Karla_-_Day_2_15_June_2024_/thumb/Janmotsava%202024%20(39)_thumb.jpg",
    ],
  },
];

export const EventChildrenEducation: Event[] = [
  {
    id: 1,
    title: "District-level competition, Palghar",
    description:
      "On December 3, 2024, commemorating World Disability Day, a district-level competition took place in Palghar, with participation from 16 schools. Notably, 11 of these schools catered to students with intellectual disabilities. Our school, Swami Parijnanashram Educational and Vocational Centre in Virar, emerged victorious, securing the overall trophy in this category. We extend warm felicitations to our students, teaching staff, and non-teaching personnel on this achievement.",
    image: [district, district1, district2],
  },
  {
    id: 2,
    title: "Chitrapur Yuvadhara",
    description:
      "This program connects young adults (ages 15-35) with the Math and Guru Parampara through workshops, creative forums, and social responsibility activities. It fosters self-expression, skill development, and a strong sense of community.",
    image: [Yuvas, Yuvas1, Yuvas2],
  },
  {
    id: 3,
    title: "Uccharan Training Sessions",
    description:
      "Regular training sessions provide focused guidance for correct stotra pronunciation. These sessions help participants deepen their spiritual connection and refine their chanting skills, preserving traditional recitation techniques.",
    image: [lecture],
  },
  {
    id: 4,
    title: "Educational Workshops & Seminars",
    description:
      "These events enhance learning by providing practical experiences and expert mentorship. Students gain exposure to life skills, academic enrichment, and career guidance, fostering holistic personal and professional growth.",
    image: [
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2049&q=80",
    ],
  },
  {
    id: 5,
    title: "Cultural Education Programs",
    description:
      "Programs integrating lessons on Chitrapur Saraswat history and values into the curriculum. These activities foster pride, cultural awareness, and a sense of belonging while encouraging students to embrace their roots.",
    image: [cultural, cultural1, cultural2],
  },
  {
    id: 6,
    title: "Support for Higher Education",
    description:
      "Offering scholarships, financial aid, and mentorship for students pursuing higher education. The initiative focuses on guiding students through admission processes and providing resources to achieve their academic aspirations.",
    image: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
];
