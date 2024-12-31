import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DonationTable from '../components/Donate/DonationTable';
import Hero from '../components/Home/Hero';
// import Vantiga from "../components/Contribute/Vantiga";
import PaymentForm from '../components/Contribute/AddPaymentDetails';
import VolunteerForm from '../components/Contribute/VolunteerForm';
import FAQSection from '../components/Home/FAQ';
import Footer from '../components/Footer/Footer';
import ChitrapurMathImg from '../assets/Shirali_Math.jpg';
import PhotoGallery from '../components/About/PhotoGallery';
import Ambassador from '../components/About/Ambassador';
import VantigaDetailed from '../components/Contribute/VantigaDetailed';
import { Outlet } from 'react-router-dom';

export default function ContributePage() {
  const [totalDonationAmount, setTotalDonationAmount] = useState<number>(0.0);
  const location = useLocation();

  useEffect(() => {
    // Handle initial load with hash
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Add a small delay to ensure the content is rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]); // Only run when hash changes

  return (
    <div className='min-h-screen bg-cream'>
      <Hero
        title='Support Our Mission to Preserve Heritage and Empower Communities'
        desc='Your contributions enable the Chitrapur Heritage Foundation to sustain its initiatives in heritage preservation, education, women’s empowerment, and community development. Choose from various donation options and be a part of creating lasting positive change for generations to come.'
        img={ChitrapurMathImg}
      />
      {/* <div id="vantiga">
        <Vantiga />
      </div> */}
      <div className='relative'>
      <div id='donation-table'>
        <DonationTable setTotalDonationAmount={setTotalDonationAmount} />
      </div>
      <div id='payment'>
        <PaymentForm totalDonationAmount={totalDonationAmount} />
      </div>
    {/* <div className="absolute inset-0 bg-cream bg-opacity-75 backdrop-filter backdrop-blur-sm flex items-center justify-center z-10">
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl text-gray-800 mb-2">Coming Soon</h2>
        <p className="text-sm md:text-lg text-gray-600">We're working hard to bring you this feature. Stay tuned!</p>
      </div>
    </div> */}
      </div>
      <div id='chf-grants'>
        <VantigaDetailed />
      </div>
      <div id='volunteer'>
        <VolunteerForm />
      </div>
      <PhotoGallery />
      <Ambassador />
      <FAQSection />
      <Footer />
      <Outlet />
    </div>
  );
}

  //https://docs.google.com/forms/d/1kjl7hDg18qtbJtpSL5aFJtGSl8G6Zno69bXeShCYo1g/formResponse

  var FB_PUBLIC_LOAD_DATA_ = [null,[null,[[747206651,"Select Category",null,3,[[351035147,[["Education",null,null,null,0],["Heritage",null,null,null,0],["Women Empowerment",null,null,null,0],["General",null,null,null,0]],0,null,null,null,null,null,0]],null,null,null,null,null,null,[null,"Select Category"]],[892958058,"Full Name",null,0,[[386116062,null,0]],null,null,null,null,null,null,[null,"Full Name"]],[1328938322,"Email Address",null,0,[[1078615357,null,0]],null,null,null,null,null,null,[null,"Email Address"]],[1866274337,"Phone Number",null,0,[[236924547,null,0]],null,null,null,null,null,null,[null,"Phone Number"]],[1408944458,"Address",null,0,[[1860523063,null,0]],null,null,null,null,null,null,[null,"Address"]],[544490224,"City",null,0,[[1412854759,null,0]],null,null,null,null,null,null,[null,"City"]],[1843338224,"Country",null,0,[[887718961,null,0]],null,null,null,null,null,null,[null,"Country"]]],null,null,null,null,null,null,"Volunteer",70,[null,null,null,2,null,null,1],null,null,null,null,[2],null,null,null,null,null,null,null,null,null,[null,"Volunteer"]],"/forms","Volunteer",null,null,null,"0",null,0,0,null,"",0,"e/1FAIpQLSdbHJ20Boa6qwqaDChd6BzX91WR9ZHreD8u-8C7D4pMMpE2dw",1,"[{\"data\":{\"value\":[]},\"keyPath\":[\"syncMap\",\"applicationFonts\",\"6\"],\"state\":{\"hashValue\":\"00000000\"}},{\"data\":{\"value\":[]},\"keyPath\":[\"syncMap\",\"domainFonts\",\"0\"],\"state\":{\"hashValue\":\"00000000\"}},{\"data\":{\"familyList\":[\"Alegreya\",\"Amatic SC\",\"Bree Serif\",\"Calibri\",\"Cambria\",\"Merriweather\",\"Permanent Marker\",\"Pinyon Script\",\"Playfair Display\",\"Proxima Nova\",\"Roboto\",\"Roboto Mono\",\"Ultra\",\"Varela Round\"],\"recentlyUsedFamilyList\":[],\"transitionedFamilyList\":[],\"hasTransitioned\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-fonts\"],\"state\":{\"timestamp\":1735582608110418}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"collaborator-demo-preference\"],\"state\":{\"timestamp\":1735582608113444}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-mention-dsp\"],\"state\":{\"timestamp\":1735582608117656}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_colon_emoji_insertion\"],\"state\":{\"timestamp\":1735582608117656}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"mae-show_addons_menu_promo\"],\"state\":{\"timestamp\":1735582608119585}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-aips\"],\"state\":{\"timestamp\":1735582608121398}},{\"data\":{},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-asp\",\"6\"],\"state\":{\"timestamp\":1732209047148854}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-ftbdct\"],\"state\":{\"timestamp\":1735582608121398}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-dbs\"],\"state\":{\"timestamp\":1735582608121398}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-ht\"],\"state\":{\"timestamp\":1735582608121398}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-homescreen-wws\"],\"state\":{\"timestamp\":1735582608121398}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-etg-lvt\"],\"state\":{\"timestamp\":1735582608125286}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_screen_reader\",\"2\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_screen_reader\",\"5\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_screen_reader\",\"1\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_screen_reader\",\"3\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_braille\",\"2\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_braille\",\"5\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_braille\",\"1\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_braille\",\"3\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_unified_accessibility\",\"2\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_unified_accessibility\",\"5\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_unified_accessibility\",\"1\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_scoped_unified_accessibility\",\"3\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-screenreader\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-enable_braille\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"docs-mute_collaborators\"],\"state\":{\"timestamp\":1689317526114887}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_chooser\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_link_form_promo\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_whats_new\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-expand_dasher_options\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"proto\":\"[]\"},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-auto_create_sink\"],\"state\":{\"timestamp\":1735582608133987}},{\"data\":{\"proto\":\"[]\"},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-ui_version\"],\"state\":{\"timestamp\":1735582608135798}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-questions_required_by_default\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-collect_usernames_by_default\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"proto\":\"[]\"},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-collect_email_default_choice\"],\"state\":{\"timestamp\":1735582608137349}},{\"data\":{\"value\":0},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-default_point_value\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_contact_owner_by_default\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_assessments_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_qxq_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_braveheart_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_manual_grading_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_record_view_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_brain_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-has_seen_braveheart_theme_warning\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_custom_themes_toast\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_edu_bundle_18_toast\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_quizzes_intro\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_question_import_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_locked_mode_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_draft_responses_modal\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-expanded_fonts_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_published_form_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_published_reader_guided_help\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":true},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_formsmith_onboarding_dialog\"],\"state\":{\"timestamp\":1735574986991231}},{\"data\":{\"value\":false},\"keyPath\":[\"syncMap\",\"preferences\",\"freebird-show_contact_form_owner_by_default\"],\"state\":{\"timestamp\":1735574986991231}}]",1,0];
