import ChitrapurMathImg from "../assets/Shirali_Math.jpg";
import YugadiImg from "../assets/festivals/Yugadi 2024_calender at SCM Shirali.jpg";
import JanmadivasImg from "../assets/festivals/Janmotsava 2024 at Karla.jpg";
import ShivarathriImg from "../assets/festivals/Mahashivaratri_1 at SCM, Shirali.jpg";
import GuruPurnimaImg from "../assets/festivals/Gurupurnima 2024.jpg";
import GokulashtamiImg from "../assets/festivals/Gokulashtami Celebrations.jpg";
import DepavaliImg from "../assets/festivals/Deepa Prajwalana on Deepavali.jpg";
import NavarathriImg from "../assets/festivals/Kumarika Pujana_Navratri_Celebration_1.jpg";
import Yuvas from "../assets/Yuvas.png";
import Yuvas1 from "../assets/Yuvas1.png";
import Yuvas2 from "../assets/yuvas2.png";
import hands from "../assets/hands.jpg";
import district from "../assets/district.jpg";
import district1 from "../assets/district1.jpg";
import district2 from "../assets/district2.jpg";
import cultural from "../assets/culturalProgUsa.png";
import cultural1 from "../assets/photoGallery/img9.jpg";
import cultural2 from "../assets/PPUC Annday (2).jpg";
import lecture from "../assets/yuvas_lecture.png";
import chf_logo from "../assets/chfLogo.png";
import ksa_logo from "../assets/KSA_logo.jpg";

interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
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
    image: ChitrapurMathImg,
  },
  {
    id: 2,
    title: "Vocational Training and Skill Development",
    description:
      "Vocational training programs that focus on equipping youth and adults with practical skills, such as technical trades, computer literacy, and entrepreneurship. These programs are designed to enhance employability and foster economic independence, especially in rural areas.",
    image: ChitrapurMathImg,
  },
  {
    id: 3,
    title: "Support for School Infrastructure",
    description:
      "Improving the infrastructure of local schools, particularly in rural or underserved areas. This includes building classrooms, providing essential learning materials, and ensuring that schools have proper sanitation and clean drinking water facilities.",
    image: ChitrapurMathImg,
  },
  {
    id: 4,
    title: "After-School Tutoring and Mentorship Programs",
    description:
      "After-school tutoring programs where students receive personalized attention in subjects they find challenging. In addition, mentorship programs connect students with professionals who provide guidance on career development and personal growth.",
    image: ChitrapurMathImg,
  },
  {
    id: 5,
    title: "Educational Workshops and Seminars",
    description:
      "Workshops, seminars, and guest lectures that cover a range of topics from academic subjects to life skills and career guidance. These events are aimed at broadening students' horizons and preparing them for both personal and professional success.",
    image: ChitrapurMathImg,
  },
  {
    id: 6,
    title: "Digital Learning Initiatives",
    description:
      "Recognizing the growing importance of technology in education, digital learning initiatives are being implemented by providing access to computers, the internet, and online learning resources. This helps bridge the digital divide and ensures students have access to modern learning tools.",
    image: ChitrapurMathImg,
  },
  {
    id: 7,
    title: "Cultural and Heritage Education",
    description:
      "Integration of cultural education into its curriculum by organizing programs that teach students about the history, heritage, and values of our community. This fosters a sense of pride and belonging while helping young people stay connected to their roots.",
    image: ChitrapurMathImg,
  },
  {
    id: 8,
    title: "Teacher Training and Capacity Building",
    description:
      "Training programs for teachers to enhance their teaching methods, especially in underserved schools. These programs focus on modern pedagogical practices, classroom management, and student engagement techniques to ensure high-quality education for all.",
    image: ChitrapurMathImg,
  },
  {
    id: 9,
    title: "Support for Higher Education",
    description:
      " Financial aid and guidance to students seeking higher education opportunities, whether in India or abroad. The foundation also provides counseling and resources for students applying to universities and vocational institutions, helping them navigate the complexities of admissions and financial aid processes.",
    image: ChitrapurMathImg,
  },
  {
    id: 10,
    title: "Partnerships with Educational Institutions",
    description:
      "Collaboration with schools, colleges, and educational organizations to provide enhanced learning opportunities for students. These partnerships help introduce new academic programs, exchange opportunities, and internships to broaden students' educational experiences.",
    image: ChitrapurMathImg,
  },
];

export const WomenEmpowermentPrograms: Program[] = [
  {
    id: 1,
    title: "Vocational Training Programs",
    description:
      "Training in various skills such as tailoring, handicrafts, hand made paper and other traditional crafts, enabling women to generate income and become economically self-reliant.",
    image: ChitrapurMathImg,
  },
  {
    id: 2,
    title: "Entrepreneurship and Business Skills Development",
    description:
      "Workshops are conducted to teach women the fundamentals of entrepreneurship, including business planning, marketing, and financial management, to help them start and run their own businesses.",
    image: ChitrapurMathImg,
  },
  {
    id: 3,
    title: "Financial Literacy Workshops",
    description:
      "Workshops focused on financial literacy, teaching women how to manage their finances, save for the future, and make informed financial decisions.",
    image: ChitrapurMathImg,
  },
  {
    id: 4,
    title: "Self-Help Groups (SHGs) and Microfinance Support",
    description:
      " Formation of self-help groups where women can come together to save, invest, and provide loans to one another. Microfinance initiatives help these groups fund small business ventures and improve their financial independence.",
    image: ChitrapurMathImg,
  },
  {
    id: 5,
    title: "Leadership and Mentorship Programs",
    description:
      "Leadership training to empower women to take on community leadership roles and mentors them to build confidence and skills in areas like communication, decision-making, and management.",
    image: ChitrapurMathImg,
  },
  {
    id: 6,
    title: "Artisan and Craft Revival Programs",
    description:
      "Help women revive traditional crafts, providing training in producing and marketing these crafts for local and international markets.",
    image: ChitrapurMathImg,
  },
  {
    id: 7,
    title: "Health and Wellness Awareness",
    description:
      "Awareness programs that focus on women's health, hygiene, and wellness, helping women access important healthcare services and encouraging them to prioritize their physical and mental wellbeing.",
    image: ChitrapurMathImg,
  },
  {
    id: 8,
    title: "Networking and Community Support Systems",
    description:
      "Community support systems where women can share knowledge, resources, and experiences, creating a strong network that encourages collective growth and empowerment.",
    image: ChitrapurMathImg,
  },
];

export const HeritagePrograms: Program[] = [
  {
    id: 1,
    title: "Vantiga",
    description:
      "Vantiga is the annual contributions made by the Chitrapur Saraswat community to support the Shri Chitrapur Math's spiritual, cultural, and community welfare initiatives, reflecting their commitment to their heritage.",
    image: ChitrapurMathImg,
  },
  {
    id: 2,
    title: "Heritage and Spirituality Programs",
    description:
      "Initiatives that explore the intersection of cultural heritage and spirituality, including discussions on rituals, customs, and traditions, are organized to help individuals understand the significance of their practices and connect with their roots",
    image: ChitrapurMathImg,
  },
  {
    id: 3,
    title: "Lectures and Discourses",
    description:
      "Regular lectures and discourses are held featuring spiritual leaders, scholars, and practitioners who share insights on spirituality, philosophy, and the teachings of the Chitrapur Saraswat community. These sessions aim to inspire and educate participants on their spiritual journeys.",
    image: ChitrapurMathImg,
  },
  {
    id: 4,
    title: "Community Worship and Festivals",
    description:
      "Community worship events and cultural festivals that celebrate the spiritual heritage of the Chitrapur Saraswat community. These gatherings promote unity, shared values, and collective spiritual experiences.",
    image: ChitrapurMathImg,
  },
  {
    id: 5,
    title: "Scriptural Study Groups",
    description:
      "Study groups focused on sacred texts and scriptures, allowing participants to engage in meaningful discussions and reflections on spiritual teachings and their relevance to modern life.",
    image: ChitrapurMathImg,
  },

  {
    id: 6,
    title: "Youth Spiritual Programs",
    description:
      "Targeted programs for youth that focus on building a strong spiritual foundation, encouraging leadership qualities, and promoting community service, helping young individuals understand their roles in preserving spiritual and cultural values.",
    image: ChitrapurMathImg,
  },
  {
    id: 7,
    title: "Collaborations with Spiritual Leaders",
    description:
      "CHF collaborates with spiritual leaders and organizations to host special events, teachings, and practices that enhance the community's spiritual well-being and understanding.",
    image: ChitrapurMathImg,
  },
  {
    id: 8,
    title: "Spiritual Retreats and Workshops",
    description:
      "CHF organizes retreats and workshops that focus on various aspects of spiritual growth, meditation, and self-discovery. These events provide participants with the opportunity to reflect, learn, and deepen their spiritual practice in a supportive environment.",
    image: ChitrapurMathImg,
  },
];

//events page data
export const EventsFestivals: Event[] = [
  {
    id: 1,
    title: "CHF - KSA Mulaqaut",
    description:
      "Mulaqat across the oceans produced by KSA Chitrapur Saraswat Network and Chitrapur Heritage Foundation.",
    image: [hands, chf_logo, ksa_logo],
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
      "Through monthly satsangs, sadhakas come together to celebrate festivals in alignment with the practices of our Math, integrating bhajans, stotra chanting, anushthans, and cultural activities. These gatherings unite us as a spiritual family, offering an opportunity to stay connected to our roots while building a strong sense of community.",
    image: ChitrapurMathImg,
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
    image: YugadiImg,
    url: "",
  },
  {
    id: 6,
    title: "Shivaratri Celebrations",
    description:
      "In honor of Lord Shiva, Shivaratri is celebrated during satsangs with deep devotion. Inspired by the Math's emphasis on meditation and prayer, the celebrations include stotra chanting, bhajans, and reflections on Lord Shiva’s significance in our lives.",
    image: ShivarathriImg,
  },
  {
    id: 7,
    title: "Guru Purnima",
    description:
      "Guru Purnima, a day dedicated to honoring the Guru, holds special significance for all of us. Sadhakas across the United States participate in samuhik guru pujan, either online or in-person, reaffirming their devotion to Param Pujya Swamiji and our revered Guru parampara.",
    image: GuruPurnimaImg,
  },
  {
    id: 8,
    title: "Gokulashtami Celebrations",
    description:
      "The West Coast celebrated Gokulashtami with devotion and joy at a park in Fremont, CA. The event included stotra chanting, bhajans, and traditional garba, celebrating the divine leelas of Lord Krishna.",
    image: GokulashtamiImg,
  },
  {
    id: 9,
    title: "Navratri Celebrations",
    description:
      "During Navratri, sadhakas meet every evening across the West and East Coasts to chant the shlokas of Sadhana Panchakam. This year, the West Coast celebrations were enriched by a dance offering by Yuvadhara and Prarthana, highlighting the divine feminine energy.",
    image: NavarathriImg,
  },
  {
    id: 10,
    title: "Diwali Celebrations",
    description:
      "As the festival of lights, Diwali is celebrated with great devotion and joy. Sadhakas come together to chant stotras, sing bhajans, and engage in cultural activities, illuminating their hearts and minds with the light of knowledge, unity, and spirituality.",
    image: DepavaliImg,
  },
  {
    id: 11,
    title: "Param Pujya Swamiji’s Janmadivas Celebrations",
    description:
      "Sadhakas honor Param Pujya Swamiji’s birthday with great reverence by performing samuhik guru pujan and singing bhajans, coming together in a spirit of devotion and gratitude. The celebration is followed by a joyful cake-cutting ceremony on the West Coast.",
    image: JanmadivasImg,
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
    image: ChitrapurMathImg,
  },
  {
    id: 4,
    title: "Educational Workshops & Seminars",
    description:
      "These events enhance learning by providing practical experiences and expert mentorship. Students gain exposure to life skills, academic enrichment, and career guidance, fostering holistic personal and professional growth.",
    image: ChitrapurMathImg,
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
    image: ChitrapurMathImg,
  },
];
