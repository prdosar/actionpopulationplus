/* =============================================
   ACTION POPULATION PLUS - JavaScript Principal
   ============================================= */

/* ---- Translations ---- */
const t = {
  fr: {
    'nav.about':'À Propos','nav.programmes':'Programmes','nav.actualites':'Actualités',
    'nav.galerie':'Activités','nav.partenaires':'Partenaires','nav.contact':'Contact',
    'nav.donate':'Faire un Don',
    'hero.badge':'ONG reconnue • Togo depuis 2003',
    'hero.title':'Inspiration, Solidarité<br>et Développement',
    'hero.subtitle':'L\'ONG Action Population Plus œuvre depuis 2003 pour le développement harmonieux des populations togolaises à travers la santé, l\'éducation, et l\'autonomisation des femmes et des jeunes.',
    'hero.btn.donate':'Faire un Don',
    'hero.btn.discover':'En savoir plus',
    'hero.quote':'« Nous devons apprendre à vivre ensemble comme des frères, sinon nous allons mourir tous ensemble comme des idiots. »',
    'hero.discover':'Découvrir l\'APP','hero.tagline':'FAIRE PLUS POUR LES PROBLÈMES DE POPULATION',
    'hero.stat1':'Années d\'expérience','hero.stat2':'Programmes actifs','hero.stat3':'Régions couvertes',
    'hero.scroll':'Défiler',
    'about.badge.txt':'Fondée','about.label':'Qui sommes-nous ?',
    'about.h2':'Une ONG au service <span>des communautés</span>',
    'about.desc':'L\'<strong>ONG Action Population Plus (APP)</strong> est une organisation non gouvernementale de développement officiellement reconnue par l\'État togolais. Fondée en 2003 et basée à Lomé, l\'APP œuvre pour l\'amélioration des conditions de vie et de la qualité de vie des populations urbaines et rurales du Togo à travers des activités socio-économiques, culturelles, sportives et environnementales.',
    'about.recognition':'<p><strong>Récépissé N° 0395/MISD-SG-DAPSC-DSC</strong> délivré le 16 avril 2003<br /><strong>Attestation de Qualité N° 460/MCDAT</strong> délivrée le 28 août 2008<br />Opérant dans les régions de <strong>Lomé, Kara et Sara</strong></p>',
    'about.mission.title':'Notre Mission','about.vision.title':'Notre Vision','about.values.title':'Nos Valeurs',
    'about.mission.text':'Contribuer au développement harmonieux et intégral des populations en améliorant leurs conditions de vie socio-économiques, culturelles et environnementales.',
    'about.vision.text':'Un Togo où chaque individu, quel que soit son milieu, bénéficie d\'un accès équitable aux soins, à l\'éducation et à des opportunités économiques durables.',
    'about.values.text':'Solidarité, intégrité, inclusivité et engagement envers les communautés les plus vulnérables : femmes, enfants, veuves et agriculteurs.',
    'about.btn':'Nos programmes',
    'prog.label':'Ce que nous faisons','prog.h2':'Nos <span>Programmes</span>',
    'prog.desc':'L\'APP intervient dans six domaines clés pour répondre aux défis de développement des communautés togolaises.',
    'prog.sante.title':'Santé Communautaire','prog.sante.tag1':'Bilan de Santé','prog.sante.tag3':'Terrain',
    'prog.sante.text':'Campagnes de bilans de santé, sensibilisation au VIH/SIDA et aux maladies chroniques. Nos équipes de terrain portant les vestes APP se déploient dans les communautés rurales et urbaines.',
    'prog.enfants.title':'Enfants &amp; Orphelins','prog.enfants.tag1':'Orphelinats','prog.enfants.tag3':'Humanitaire',
    'prog.enfants.text':'Actions humanitaires en faveur des orphelins via notre programme "La Lumière" en partenariat avec l\'Association AVI Togo, qui gère 4 orphelinats et un centre de santé.',
    'prog.sensib.title':'Campagnes de Sensibilisation','prog.sensib.tag1':'Mobilisation','prog.sensib.tag2':'Droits enfants','prog.sensib.tag3':'Planning familial',
    'prog.sensib.text':'Mobilisation communautaire sur les grandes questions de santé publique, de droits des enfants et de planning familial. L\'édition du 08 mai 2025 a réuni plus de 40 participants.',
    'prog.femmes.title':'Femmes &amp; Veuves','prog.femmes.tag2':'Veuvage',
    'prog.femmes.text':'Célébration annuelle de la Journée Internationale de la Veuve — Édition 2025 à Kara — offrant soutien moral, repas communautaire et plaidoyer pour les droits des femmes veuves.',
    'prog.formation.title':'Formation &amp; Éducation','prog.formation.tag2':'Formation','prog.formation.tag3':'Jeunesse',
    'prog.formation.text':'Programme AFEDI (Appui Formatif en Éducation pour le Développement Intégral) : formations des femmes, des jeunes et des éducateurs pour renforcer les capacités locales.',
    'prog.agri.title':'Agriculture &amp; Paysans','prog.agri.tag2':'Biométhanisation',
    'prog.agri.text':'Aide aux paysans en période de soudure alimentaire. Formation en biométhanisation pour une agriculture durable, et soutien au Comité pour le Développement Intégral de Sara (CODISA).',
    'impact.label':'Notre Impact','impact.h2':'L\'APP en <span style="color:var(--gold);">Chiffres</span>',
    'impact.label1':'Années d\'expérience au service des communautés togolaises',
    'impact.label2':'Bénéficiaires touchés par nos programmes et activités',
    'impact.label3':'Programmes actifs couvrant santé, éducation et développement',
    'impact.label4':'Régions d\'intervention : Lomé, Kara et Sara (P/Kozah)',
    'actu.label':'Nos Activités','actu.h2':'Actualités &amp; <span>Événements</span>',
    'actu.desc':'Découvrez nos dernières activités et événements réalisés sur le terrain au Togo et à l\'international.',
    'actu.mission.badge':'Mission Internationale • Juillet',
    'actu.mission.title':'Mission en Europe – Développement &amp; Partenariats Stratégiques',
    'actu.mission.desc':'Cette mission a permis de réaliser plusieurs rencontres stratégiques en Belgique, au Luxembourg et en France, dans le but de développer des partenariats, de partager des expériences et d\'explorer des initiatives innovantes adaptées au contexte togolais.',
    'actu.mission.h1.title':'Centre d\'Entreprise &amp; Éducation',
    'actu.mission.h1.sub':'Liège (9 juillet)',
    'actu.mission.h2.title':'Échanges &amp; Coopération',
    'actu.mission.h2.sub':'Luxembourg (10 juillet)',
    'actu.mission.h3.title':'Cercle des Armées &amp; ONG MIM',
    'actu.mission.h3.sub':'Paris (13 juillet)',
    'actu.mission.btn_read':'Lire le compte-rendu complet',
    'actu.mission.btn_partners':'Voir les partenaires',
    'actu.mission.partner_tag':'Coopération Internationale',
    'actu.mission.partner_sub':'Partenariat &amp; Résilience',
    'modal.mission.badge':'Compte-rendu officiel • Mission Internationale',
    'modal.mission.title':'Mission en Europe – Juillet',
    'modal.mission.intro':'Cette mission a permis de réaliser plusieurs rencontres stratégiques en Belgique, au Luxembourg et en France, dans le but de développer des partenariats, de partager des expériences et d\'explorer des initiatives pouvant être adaptées au contexte togolais.',
    'modal.mission.stepA.title':'Rencontre avec le responsable du Centre d\'Entreprise et Mme Marina',
    'modal.mission.stepA.desc1':'Une séance de travail s\'est tenue à Liège avec le responsable du Centre d\'Entreprise ainsi que Mme Marina, une responsable d\'ONG déjà installée à Kpalimé dans le domaine de l\'éducation.',
    'modal.mission.stepA.obj_title':'<i class="fas fa-bullseye"></i> Objectif de la rencontre',
    'modal.mission.stepA.obj_desc':'L\'objectif principal était de s\'inspirer du modèle belge afin de créer au Togo un centre de rencontres réunissant régulièrement les entreprises publiques, les entreprises privées et les organisations de la société civile.',
    'modal.mission.stepA.frame_title':'Ce cadre permettra notamment de :',
    'modal.mission.stepA.l1':'<i class="fas fa-check-circle"></i> Favoriser les échanges entre les différents acteurs ;',
    'modal.mission.stepA.l2':'<i class="fas fa-check-circle"></i> Partager les projets en cours ;',
    'modal.mission.stepA.l3':'<i class="fas fa-check-circle"></i> Développer des partenariats ;',
    'modal.mission.stepA.l4':'<i class="fas fa-check-circle"></i> Renforcer le réseau professionnel ;',
    'modal.mission.stepA.l5':'<i class="fas fa-check-circle"></i> Encourager une collaboration durable autour des enjeux de développement.',
    'modal.mission.stepB.title':'Rencontre avec M. Paul Weiss',
    'modal.mission.stepB.desc':'Une rencontre d\'échanges s\'est déroulée au Luxembourg avec M. Paul Weiss, un Luxembourgeois connaissant déjà le Togo.',
    'modal.mission.stepB.quote':'Les discussions se sont déroulées dans un climat chaleureux et constructif, marqué par une forte appréciation du Togo et par l\'exploration de perspectives prometteuses de collaboration future.',
    'modal.mission.stepC.title1':'Rencontre au Cercle National des Armées',
    'modal.mission.stepC.desc1':'Une importante séance de travail s\'est tenue au Cercle National des Armées à Paris.',
    'modal.mission.stepC.desc2':'À l\'issue des échanges, un moment de remise de cadeaux souvenirs est venu symboliser la qualité des relations établies et la volonté commune de renforcer la coopération.',
    'modal.mission.stepC.mim_title':'Séance de travail avec l\'ONG Médiateurs Internationaux Multilingues (MIM)',
    'modal.mission.stepC.mim_sub':'Avec Mme Imen Chaanbi, Secrétaire Générale de l\'ONG MIM',
    'modal.mission.stepC.mim_pres_title':'<i class="fas fa-heartbeat"></i> Domaines d\'expertise MIM',
    'modal.mission.stepC.mim_d1':'Santé mentale',
    'modal.mission.stepC.mim_d2':'Accompagnement psychologique',
    'modal.mission.stepC.mim_d3':'Soutien des adolescents',
    'modal.mission.stepC.mim_d4':'Assistance aux populations en période de crise',
    'modal.mission.stepC.mim_ctx_title':'<i class="fas fa-shield-virus"></i> Contextes d\'action',
    'modal.mission.stepC.mim_c1':'Zones de guerre &amp; camps de réfugiés',
    'modal.mission.stepC.mim_c2':'Situations d\'attaques terroristes',
    'modal.mission.stepC.mim_c3':'Catastrophes naturelles',
    'modal.mission.stepC.mim_c4':'Formations militaires, écoles de guerre &amp; ministères',
    'modal.mission.stepC.conclusion':'<i class="fas fa-sparkles"></i> Cette rencontre ouvre des perspectives majeures de coopération autour des questions de médiation, de résilience et d\'accompagnement psychosocial au Togo.',
    'modal.mission.btn_collab':'Initier un partenariat',
    'modal.mission.btn_close':'Fermer',
    'actu.event1.category':'Événement Majeur','actu.event1.title':'Journée Internationale de la Veuve – Édition 2025 à Kara',
    'actu.event1.text':'L\'ONG APP a organisé la célébration de la Journée Internationale de la Veuve à Kara. Cet événement a rassemblé des femmes veuves, des responsables communautaires et des partenaires pour un temps fort de solidarité, de plaidoyer et de partage d\'un repas communautaire.',
    'actu.see_photos':'Voir les photos',
    'actu.event2.category':'Santé Publique','actu.event2.title':'Campagne de Sensibilisation VIH/SIDA',
    'actu.event2.text':'Plus de 40 jeunes participants à la Place de la Victoire pour cette campagne sur le thème de la santé publique à l\'horizon 2030.',
    'actu.event3.category':'Santé Terrain','actu.event3.title':'Projet Bilan de Santé Communautaire',
    'actu.event3.text':'Nos équipes en vestes APP ont mené des consultations de terrain, recueillant les données de santé des populations vulnérables dans les quartiers défavorisés.',
    'galerie.label':'Nos Photos','galerie.h2':'Galerie <span>d\'Activités</span>',
    'galerie.desc':'Images de nos activités sur le terrain, événements communautaires et formations.',
    'galerie.filter.all':'Toutes','galerie.filter.sensib':'Sensibilisation','galerie.filter.veuve':'Journée Veuve',
    'galerie.filter.sante':'Santé','galerie.filter.formation':'Formation',
    'cat.sensibilisation':'Sensibilisation','cat.veuve':'Journée Veuve','cat.sante':'Santé',
    'cat.sante_terrain':'Santé Terrain','cat.formation':'Formation',
    'gallery.sensib1':'Campagne VIH/SIDA – Place de la Victoire, 08 Mai 2025',
    'gallery.sensib2':'Mobilisation communautaire','gallery.sensib3':'Équipe et participants',
    'gallery.veuve1':'Panel – Kara 2025','gallery.veuve2':'Allocution officielle',
    'gallery.veuve3':'Distribution de repas communautaire – Kara 2025',
    'gallery.veuve4':'Solidarité et partage','gallery.veuve5':'Participants à l\'événement',
    'gallery.sante1':'Équipe de la Campagne de Sensibilisation 2025',
    'gallery.sante2':'Collecte de données – bilan de santé','gallery.sante3':'Équipe en vestes APP',
    'gallery.sante4':'Consultation communautaire','gallery.sante5':'Enregistrement des bénéficiaires',
    'gallery.formation1':'Séance de formation AFEDI','gallery.formation2':'Formation des femmes de la communauté',
    'gallery.formation3':'Appui formatif en éducation','gallery.formation4':'Programme AFEDI en action',
    'partenaires.label':'Ils nous soutiennent','partenaires.h2':'Nos <span>Partenaires</span>',
    'partenaires.desc':'L\'APP collabore avec des organisations partageant les mêmes valeurs de développement communautaire et de solidarité.',
    'partenaires.avi.text':'Partenaire clé de l\'APP dans le soutien aux orphelins, gérant 4 orphelinats et un centre de santé pour les enfants vulnérables au Togo.',
    'partenaires.kondjigan.text':'Partenaire santé basée à Djidjolé, travaillant avec l\'APP sur des projets de santé communautaire et d\'accès aux soins pour les populations défavorisées.',
    'partenaires.moov.text':'Sponsor officiel lors des événements communautaires de l\'APP, contribuant à la visibilité et au rayonnement des actions de l\'organisation sur le terrain.',
    'partenaires.kiss.text':'Entreprise engagée aux côtés de l\'APP, soutenant ses actions sociales et contribuant à l\'amélioration des conditions de vie des communautés vulnérables.',
    'partenaires.mim.text':'Réseau de médiateurs internationaux facilitant le dialogue interculturel et accompagnant l\'APP dans ses projets de cohésion sociale.',
    'partenaires.become.title':'Devenez Partenaire de l\'APP',
    'partenaires.become.text':'Vous partagez notre vision d\'un Togo solidaire et développé ? Rejoignez notre réseau de partenaires et contribuez à des actions concrètes sur le terrain.',
    'partenaires.become.btn':'Nous contacter',
    'dons.label':'Soutenez-nous','dons.h2':'Faire un <span>Don</span>',
    'dons.text':'Votre soutien financier est essentiel pour permettre à l\'APP de poursuivre ses missions auprès des populations les plus vulnérables du Togo. Chaque contribution, quelle que soit sa taille, a un impact réel sur le terrain.',
    'dons.choose':'Choisissez un montant ou indiquez le vôtre :','dons.other':'Autre montant',
    'dons.methods.title':'Moyens de paiement disponibles','dons.intl_transfer':'Transfert international',
    'dons.bank':'Virement Bancaire','dons.on_request':'Sur demande',
    'dons.other_method':'Autres méthodes','dons.contact_us':'Nous contacter',
    'dons.impact.title':'💛 Ce que votre don permet',
    'dons.impact1':'<strong>Kits d\'hygiène</strong> pour 2 enfants d\'un orphelinat partenaire de l\'APP.',
    'dons.impact2':'<strong>Participation</strong> à une campagne de sensibilisation santé dans un quartier défavorisé.',
    'dons.impact3':'<strong>Formation</strong> d\'un groupe de femmes aux techniques d\'autonomisation économique.',
    'dons.impact4':'<strong>Soutien alimentaire</strong> aux veuves et familles vulnérables lors des événements APP.',
    'dons.impact5':'<strong>Financement</strong> d\'une mission de bilan de santé terrain dans une zone rurale.',
    'dons.cta':'Je fais un don maintenant',
    'dons.receipt':'Pour tout don, contactez-nous directement via le formulaire ou par téléphone.<br />Un reçu peut être fourni sur demande.',
    'contact.label':'Contactez-nous','contact.h2':'Restons en <span>Contact</span>',
    'contact.address.title':'Siège Social',
    'contact.address.text':'Lomé, République Togolaise<br /><small style="color:var(--text-light);">Bureaux régionaux : Kara &amp; Sara (P/Kozah)</small>',
    'contact.phone.title':'Téléphone / Mobile Money','contact.phone.sub':'T-Money disponible',
    'contact.email.title':'Email','contact.official.title':'Reconnaissance Officielle',
    'contact.availability.title':'Disponibilité',
    'contact.availability.text':'Lundi – Vendredi : 8h00 – 17h00<br /><small style="color:var(--text-light);">Samedi sur rendez-vous</small>',
    'contact.social':'Suivez-nous','contact.form.title':'Envoyez-nous un message',
    'contact.form.prenom':'Prénom *','contact.form.prenom.ph':'Votre prénom',
    'contact.form.nom':'Nom *','contact.form.nom.ph':'Votre nom',
    'contact.form.telephone':'Téléphone','contact.form.sujet':'Sujet *',
    'contact.form.sujet.default':'Choisissez un sujet…','contact.form.sujet.partenariat':'Partenariat',
    'contact.form.sujet.don':'Faire un don','contact.form.sujet.volontariat':'Devenir bénévole',
    'contact.form.sujet.programme':'Informations sur nos programmes','contact.form.sujet.autre':'Autre demande',
    'contact.form.message.ph':'Écrivez votre message ici…',
    'contact.form.submit':'Envoyer le message','contact.form.submitting':'Envoi en cours...',
    'contact.form.success':'Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.',
    'footer.brand.text':'L\'ONG Action Population Plus œuvre depuis 2003 pour le développement harmonieux des populations togolaises à travers la santé, l\'éducation, l\'autonomisation des femmes et le soutien aux groupes vulnérables.',
    'footer.brand.tagline':'« Faire plus pour les problèmes de population »',
    'footer.nav.title':'Navigation','footer.nav.programmes':'Nos Programmes','footer.nav.galerie':'Activités',
    'footer.prog.title':'Nos Programmes','footer.prog.formation':'Formation AFEDI','footer.prog.agri':'Agriculture CODISA',
    'footer.contact.address':'Lomé, République Togolaise<br />Bureaux à Kara &amp; Sara',
    'footer.bottom1':'© 2025 Action Population Plus (APP) – Tous droits réservés.',
    'footer.bottom2':'Conçu avec <span style="color:var(--gold);">♥</span> pour le développement du Togo',
  },
  en: {
    'nav.about':'About','nav.programmes':'Programmes','nav.actualites':'News',
    'nav.galerie':'Gallery','nav.partenaires':'Partners','nav.contact':'Contact',
    'nav.donate':'Donate',
    'hero.badge':'Recognized NGO • Togo since 2003',
    'hero.title':'Inspiration, Solidarity<br>and Development',
    'hero.subtitle':'Action Population Plus NGO has been working since 2003 for the harmonious development of Togolese populations through health, education, and the empowerment of women and youth.',
    'hero.btn.donate':'Make a Donation',
    'hero.btn.discover':'Learn More',
    'hero.quote':'"We must learn to live together as brothers or perish together as fools."',
    'hero.discover':'Discover APP','hero.tagline':'DOING MORE FOR POPULATION CHALLENGES',
    'hero.stat1':'Years of experience','hero.stat2':'Active programmes','hero.stat3':'Regions covered',
    'hero.scroll':'Scroll',
    'about.badge.txt':'Founded','about.label':'Who are we?',
    'about.h2':'An NGO serving <span>communities</span>',
    'about.desc':'<strong>NGO Action Population Plus (APP)</strong> is a development non-governmental organisation officially recognised by the Togolese State. Founded in 2003 and based in Lomé, APP works to improve the living conditions and quality of life of urban and rural populations in Togo through socio-economic, cultural, sporting and environmental activities.',
    'about.recognition':'<p><strong>Registration N° 0395/MISD-SG-DAPSC-DSC</strong> issued on 16 April 2003<br /><strong>Quality Certificate N° 460/MCDAT</strong> issued on 28 August 2008<br />Operating in the regions of <strong>Lomé, Kara and Sara</strong></p>',
    'about.mission.title':'Our Mission','about.vision.title':'Our Vision','about.values.title':'Our Values',
    'about.mission.text':'Contributing to the harmonious and integral development of populations by improving their socio-economic, cultural and environmental living conditions.',
    'about.vision.text':'A Togo where every individual, regardless of their background, benefits from equitable access to healthcare, education and sustainable economic opportunities.',
    'about.values.text':'Solidarity, integrity, inclusivity and commitment to the most vulnerable communities: women, children, widows and farmers.',
    'about.btn':'Our programmes',
    'prog.label':'What we do','prog.h2':'Our <span>Programmes</span>',
    'prog.desc':'APP operates in six key areas to address the development challenges of Togolese communities.',
    'prog.sante.title':'Community Health','prog.sante.tag1':'Health Check','prog.sante.tag3':'Field',
    'prog.sante.text':'Health check campaigns, HIV/AIDS and chronic disease awareness. Our field teams wearing APP vests deploy in rural and urban communities.',
    'prog.enfants.title':'Children &amp; Orphans','prog.enfants.tag1':'Orphanages','prog.enfants.tag3':'Humanitarian',
    'prog.enfants.text':'Humanitarian actions for orphans through our "La Lumière" programme in partnership with AVI Togo Association, which manages 4 orphanages and a health centre.',
    'prog.sensib.title':'Awareness Campaigns','prog.sensib.tag1':'Mobilisation','prog.sensib.tag2':'Children\'s Rights','prog.sensib.tag3':'Family Planning',
    'prog.sensib.text':'Community mobilisation on major issues of public health, children\'s rights and family planning. The 8 May 2025 edition brought together more than 40 participants.',
    'prog.femmes.title':'Women &amp; Widows','prog.femmes.tag2':'Widowhood',
    'prog.femmes.text':'Annual celebration of International Widow\'s Day — 2025 Edition in Kara — offering moral support, community meal and advocacy for the rights of widowed women.',
    'prog.formation.title':'Training &amp; Education','prog.formation.tag2':'Training','prog.formation.tag3':'Youth',
    'prog.formation.text':'AFEDI Programme (Formative Support in Education for Integral Development): training for women, youth and educators to strengthen local capacities.',
    'prog.agri.title':'Agriculture &amp; Farmers','prog.agri.tag2':'Biomethanisation',
    'prog.agri.text':'Assistance to farmers during the lean season. Training in biomethanisation for sustainable agriculture, and support for the Committee for Integral Development of Sara (CODISA).',
    'impact.label':'Our Impact','impact.h2':'APP in <span style="color:var(--gold);">Numbers</span>',
    'impact.label1':'Years of experience serving Togolese communities',
    'impact.label2':'Beneficiaries reached by our programmes and activities',
    'impact.label3':'Active programmes covering health, education and development',
    'impact.label4':'Regions of operation: Lomé, Kara and Sara (P/Kozah)',
    'actu.label':'Our Activities','actu.h2':'News &amp; <span>Events</span>',
    'actu.desc':'Discover our latest activities and events carried out in the field in Togo and internationally.',
    'actu.mission.badge':'International Mission • July',
    'actu.mission.title':'Mission in Europe – Development &amp; Strategic Partnerships',
    'actu.mission.desc':'This mission enabled several strategic meetings in Belgium, Luxembourg and France, aiming to develop partnerships, share expertise and explore innovative initiatives tailored to Togo.',
    'actu.mission.h1.title':'Business Center &amp; Education',
    'actu.mission.h1.sub':'Liège (July 9)',
    'actu.mission.h2.title':'Exchanges &amp; Cooperation',
    'actu.mission.h2.sub':'Luxembourg (July 10)',
    'actu.mission.h3.title':'Armed Forces Club &amp; MIM NGO',
    'actu.mission.h3.sub':'Paris (July 13)',
    'actu.mission.btn_read':'Read the full report',
    'actu.mission.btn_partners':'View partners',
    'actu.mission.partner_tag':'International Cooperation',
    'actu.mission.partner_sub':'Partnership &amp; Resilience',
    'modal.mission.badge':'Official Report • International Mission',
    'modal.mission.title':'Mission in Europe – July',
    'modal.mission.intro':'This mission enabled several strategic meetings in Belgium, Luxembourg and France to build partnerships, share experiences and explore initiatives that can be adapted to Togo.',
    'modal.mission.stepA.title':'Meeting with the Head of the Business Centre & Mrs. Marina',
    'modal.mission.stepA.desc1':'A working session was held in Liège with the head of the Business Centre and Mrs. Marina, head of an NGO already active in Kpalimé in education.',
    'modal.mission.stepA.obj_title':'<i class="fas fa-bullseye"></i> Purpose of the Meeting',
    'modal.mission.stepA.obj_desc':'The main objective was to draw inspiration from the Belgian model to create a meeting hub in Togo bringing together public enterprises, private companies and civil society.',
    'modal.mission.stepA.frame_title':'This framework will specifically help to:',
    'modal.mission.stepA.l1':'<i class="fas fa-check-circle"></i> Foster exchanges between diverse stakeholders;',
    'modal.mission.stepA.l2':'<i class="fas fa-check-circle"></i> Share ongoing projects;',
    'modal.mission.stepA.l3':'<i class="fas fa-check-circle"></i> Develop partnerships;',
    'modal.mission.stepA.l4':'<i class="fas fa-check-circle"></i> Strengthen the professional network;',
    'modal.mission.stepA.l5':'<i class="fas fa-check-circle"></i> Encourage lasting collaboration on development challenges.',
    'modal.mission.stepB.title':'Meeting with Mr. Paul Weiss',
    'modal.mission.stepB.desc':'An exchange session took place in Luxembourg with Mr. Paul Weiss, a Luxembourger already familiar with Togo.',
    'modal.mission.stepB.quote':'Discussions took place in a warm and constructive atmosphere, marked by a strong appreciation for Togo and promising future collaboration prospects.',
    'modal.mission.stepC.title1':'Meeting at Cercle National des Armées',
    'modal.mission.stepC.desc1':'An important working session was held at the Cercle National des Armées in Paris.',
    'modal.mission.stepC.desc2':'Following discussions, gifts were exchanged to symbolize established relationships and the shared commitment to strengthening cooperation.',
    'modal.mission.stepC.mim_title':'Working session with Multilingual International Mediators NGO (MIM)',
    'modal.mission.stepC.mim_sub':'With Mrs. Imen Chaanbi, General Secretary of MIM NGO',
    'modal.mission.stepC.mim_pres_title':'<i class="fas fa-heartbeat"></i> MIM Areas of Expertise',
    'modal.mission.stepC.mim_d1':'Mental health',
    'modal.mission.stepC.mim_d2':'Psychological support',
    'modal.mission.stepC.mim_d3':'Adolescent support',
    'modal.mission.stepC.mim_d4':'Assistance to populations during crises',
    'modal.mission.stepC.mim_ctx_title':'<i class="fas fa-shield-virus"></i> Operating Contexts',
    'modal.mission.stepC.mim_c1':'War zones &amp; refugee camps',
    'modal.mission.stepC.mim_c2':'Terrorist attack situations',
    'modal.mission.stepC.mim_c3':'Natural disasters',
    'modal.mission.stepC.mim_c4':'Military academies, war colleges &amp; ministries',
    'modal.mission.stepC.conclusion':'<i class="fas fa-sparkles"></i> This meeting opens major cooperation opportunities in mediation, resilience, and psychosocial support in Togo.',
    'modal.mission.btn_collab':'Initiate a partnership',
    'modal.mission.btn_close':'Close',
    'actu.event1.category':'Major Event','actu.event1.title':'International Widow\'s Day – 2025 Edition in Kara',
    'actu.event1.text':'APP NGO organised the celebration of International Widow\'s Day in Kara. This event brought together widowed women, community leaders and partners for a moment of solidarity, advocacy and sharing a community meal.',
    'actu.see_photos':'See photos',
    'actu.event2.category':'Public Health','actu.event2.title':'HIV/AIDS Awareness Campaign',
    'actu.event2.text':'More than 40 young participants at Place de la Victoire for this campaign on the theme of public health towards 2030.',
    'actu.event3.category':'Field Health','actu.event3.title':'Community Health Assessment Project',
    'actu.event3.text':'Our teams in APP jackets conducted field consultations, collecting health data from vulnerable populations in disadvantaged neighbourhoods.',
    'galerie.label':'Our Photos','galerie.h2':'Activity <span>Gallery</span>',
    'galerie.desc':'Images from our field activities, community events and training sessions.',
    'galerie.filter.all':'All','galerie.filter.sensib':'Awareness','galerie.filter.veuve':'Widow\'s Day',
    'galerie.filter.sante':'Health','galerie.filter.formation':'Training',
    'cat.sensibilisation':'Awareness','cat.veuve':'Widow\'s Day','cat.sante':'Health',
    'cat.sante_terrain':'Field Health','cat.formation':'Training',
    'gallery.sensib1':'HIV/AIDS Campaign – Place de la Victoire, 8 May 2025',
    'gallery.sensib2':'Community mobilisation','gallery.sensib3':'Team and participants',
    'gallery.veuve1':'Panel – Kara 2025','gallery.veuve2':'Official address',
    'gallery.veuve3':'Community meal distribution – Kara 2025',
    'gallery.veuve4':'Solidarity and sharing','gallery.veuve5':'Event participants',
    'gallery.sante1':'2025 Awareness Campaign Team',
    'gallery.sante2':'Data collection – health assessment','gallery.sante3':'Team in APP jackets',
    'gallery.sante4':'Community consultation','gallery.sante5':'Beneficiary registration',
    'gallery.formation1':'AFEDI training session','gallery.formation2':'Training of community women',
    'gallery.formation3':'Educational training support','gallery.formation4':'AFEDI programme in action',
    'partenaires.label':'They support us','partenaires.h2':'Our <span>Partners</span>',
    'partenaires.desc':'APP collaborates with organisations sharing the same values of community development and solidarity.',
    'partenaires.avi.text':'Key APP partner in supporting orphans, managing 4 orphanages and a health centre for vulnerable children in Togo.',
    'partenaires.kondjigan.text':'Health partner based in Djidjolé, working with APP on community health projects and access to care for disadvantaged populations.',
    'partenaires.moov.text':'Official sponsor at APP community events, contributing to the visibility and reach of the organisation\'s actions in the field.',
    'partenaires.kiss.text':'A committed company standing alongside APP, supporting its social initiatives and helping improve the living conditions of vulnerable communities.',
    'partenaires.mim.text':'A network of international mediators fostering intercultural dialogue and supporting APP in its social cohesion projects.',
    'partenaires.become.title':'Become an APP Partner',
    'partenaires.become.text':'Do you share our vision of a united and developed Togo? Join our partner network and contribute to concrete actions in the field.',
    'partenaires.become.btn':'Contact us',
    'dons.label':'Support us','dons.h2':'Make a <span>Donation</span>',
    'dons.text':'Your financial support is essential to enable APP to continue its missions among the most vulnerable populations in Togo. Every contribution, regardless of its size, has a real impact in the field.',
    'dons.choose':'Choose an amount or enter your own:','dons.other':'Other amount',
    'dons.methods.title':'Available payment methods','dons.intl_transfer':'International transfer',
    'dons.bank':'Bank Transfer','dons.on_request':'On request',
    'dons.other_method':'Other methods','dons.contact_us':'Contact us',
    'dons.impact.title':'💛 What your donation enables',
    'dons.impact1':'<strong>Hygiene kits</strong> for 2 children at an APP partner orphanage.',
    'dons.impact2':'<strong>Participation</strong> in a health awareness campaign in a disadvantaged neighbourhood.',
    'dons.impact3':'<strong>Training</strong> of a group of women in economic empowerment techniques.',
    'dons.impact4':'<strong>Food support</strong> for widows and vulnerable families at APP events.',
    'dons.impact5':'<strong>Funding</strong> of a field health assessment mission in a rural area.',
    'dons.cta':'I donate now',
    'dons.receipt':'For any donation, contact us directly via the form or by phone.<br />A receipt can be provided on request.',
    'contact.label':'Contact us','contact.h2':'Let\'s Stay in <span>Touch</span>',
    'contact.address.title':'Head Office',
    'contact.address.text':'Lomé, Republic of Togo<br /><small style="color:var(--text-light);">Regional offices: Kara &amp; Sara (P/Kozah)</small>',
    'contact.phone.title':'Phone / Mobile Money','contact.phone.sub':'T-Money available',
    'contact.email.title':'Email','contact.official.title':'Official Recognition',
    'contact.availability.title':'Availability',
    'contact.availability.text':'Monday – Friday: 8:00 AM – 5:00 PM<br /><small style="color:var(--text-light);">Saturday by appointment</small>',
    'contact.social':'Follow us','contact.form.title':'Send us a message',
    'contact.form.prenom':'First Name *','contact.form.prenom.ph':'Your first name',
    'contact.form.nom':'Last Name *','contact.form.nom.ph':'Your last name',
    'contact.form.telephone':'Phone','contact.form.sujet':'Subject *',
    'contact.form.sujet.default':'Choose a subject…','contact.form.sujet.partenariat':'Partnership',
    'contact.form.sujet.don':'Make a donation','contact.form.sujet.volontariat':'Become a volunteer',
    'contact.form.sujet.programme':'Information about our programmes','contact.form.sujet.autre':'Other request',
    'contact.form.message.ph':'Write your message here…',
    'contact.form.submit':'Send message','contact.form.submitting':'Sending...',
    'contact.form.success':'Your message has been sent! We will get back to you as soon as possible.',
    'footer.brand.text':'NGO Action Population Plus has been working since 2003 for the harmonious development of Togolese populations through health, education, women\'s empowerment and support for vulnerable groups.',
    'footer.brand.tagline':'"Doing more for population challenges"',
    'footer.nav.title':'Navigation','footer.nav.programmes':'Our Programmes','footer.nav.galerie':'Photo Gallery',
    'footer.prog.title':'Our Programmes','footer.prog.formation':'AFEDI Training','footer.prog.agri':'CODISA Agriculture',
    'footer.contact.address':'Lomé, Republic of Togo<br />Offices in Kara &amp; Sara',
    'footer.bottom1':'© 2025 Action Population Plus (APP) – All rights reserved.',
    'footer.bottom2':'Designed with <span style="color:var(--gold);">♥</span> for the development of Togo',
  },
  de: {
    'nav.about':'Über uns','nav.programmes':'Programme','nav.actualites':'Aktuelles',
    'nav.galerie':'Galerie','nav.partenaires':'Partner','nav.contact':'Kontakt',
    'nav.donate':'Spenden',
    'hero.badge':'Anerkannte NGO • Togo seit 2003',
    'hero.title':'Inspiration, Solidarität<br>und Entwicklung',
    'hero.subtitle':'Die NGO Action Population Plus setzt sich seit 2003 für die harmonische Entwicklung der togolesischen Bevölkerung durch Gesundheit, Bildung und die Stärkung von Frauen und Jugendlichen ein.',
    'hero.btn.donate':'Spenden',
    'hero.btn.discover':'Mehr erfahren',
    'hero.quote':'„Wir müssen lernen, als Brüder zusammenzuleben, sonst werden wir als Narren gemeinsam umkommen."',
    'hero.discover':'APP entdecken','hero.tagline':'MEHR FÜR BEVÖLKERUNGSPROBLEME TUN',
    'hero.stat1':'Jahre Erfahrung','hero.stat2':'Aktive Programme','hero.stat3':'Abgedeckte Regionen',
    'hero.scroll':'Scrollen',
    'about.badge.txt':'Gegründet','about.label':'Wer sind wir?',
    'about.h2':'Eine NGO im Dienst <span>der Gemeinschaften</span>',
    'about.desc':'Die <strong>NGO Action Population Plus (APP)</strong> ist eine offizielle Entwicklungs-Nichtregierungsorganisation, die vom togolesischen Staat anerkannt wird. 2003 gegründet und in Lomé ansässig, setzt sich APP für die Verbesserung der Lebensbedingungen und Lebensqualität der städtischen und ländlichen Bevölkerung Togos durch sozioökonomische, kulturelle, sportliche und ökologische Aktivitäten ein.',
    'about.recognition':'<p><strong>Registriernummer N° 0395/MISD-SG-DAPSC-DSC</strong> ausgestellt am 16. April 2003<br /><strong>Qualitätsbescheinigung N° 460/MCDAT</strong> ausgestellt am 28. August 2008<br />Tätig in den Regionen <strong>Lomé, Kara und Sara</strong></p>',
    'about.mission.title':'Unsere Mission','about.vision.title':'Unsere Vision','about.values.title':'Unsere Werte',
    'about.mission.text':'Beitrag zur harmonischen und integralen Entwicklung der Bevölkerung durch Verbesserung ihrer sozioökonomischen, kulturellen und ökologischen Lebensbedingungen.',
    'about.vision.text':'Ein Togo, in dem jeder Einzelne, unabhängig von seinem Hintergrund, von einem gerechten Zugang zu Gesundheitsversorgung, Bildung und nachhaltigen wirtschaftlichen Möglichkeiten profitiert.',
    'about.values.text':'Solidarität, Integrität, Inklusivität und Engagement für die verletzlichsten Gemeinschaften: Frauen, Kinder, Witwen und Landwirte.',
    'about.btn':'Unsere Programme',
    'prog.label':'Was wir tun','prog.h2':'Unsere <span>Programme</span>',
    'prog.desc':'APP ist in sechs Schlüsselbereichen tätig, um die Entwicklungsherausforderungen der togolesischen Gemeinschaften zu bewältigen.',
    'prog.sante.title':'Gemeinschaftsgesundheit','prog.sante.tag1':'Gesundheitscheck','prog.sante.tag3':'Vor Ort',
    'prog.sante.text':'Gesundheitschecks, Aufklärung über HIV/AIDS und chronische Krankheiten. Unsere Feldteams in APP-Jacken sind in ländlichen und städtischen Gemeinschaften tätig.',
    'prog.enfants.title':'Kinder &amp; Waisen','prog.enfants.tag1':'Waisenhäuser','prog.enfants.tag3':'Humanitär',
    'prog.enfants.text':'Humanitäre Maßnahmen für Waisen über unser Programm "La Lumière" in Partnerschaft mit dem AVI Togo Verein, der 4 Waisenhäuser und ein Gesundheitszentrum verwaltet.',
    'prog.sensib.title':'Aufklärungskampagnen','prog.sensib.tag1':'Mobilisierung','prog.sensib.tag2':'Kinderrechte','prog.sensib.tag3':'Familienplanung',
    'prog.sensib.text':'Gemeinschaftliche Mobilisierung zu wichtigen Themen der öffentlichen Gesundheit, Kinderrechte und Familienplanung. Die Ausgabe vom 8. Mai 2025 versammelte mehr als 40 Teilnehmer.',
    'prog.femmes.title':'Frauen &amp; Witwen','prog.femmes.tag2':'Witwenschaft',
    'prog.femmes.text':'Jährliche Feier des Internationalen Tages der Witwe — Ausgabe 2025 in Kara — mit moralischer Unterstützung, Gemeinschaftsmahlzeit und Interessenvertretung für die Rechte verwitweter Frauen.',
    'prog.formation.title':'Ausbildung &amp; Bildung','prog.formation.tag2':'Ausbildung','prog.formation.tag3':'Jugend',
    'prog.formation.text':'AFEDI-Programm (Formative Unterstützung in Bildung für integrale Entwicklung): Ausbildung für Frauen, Jugendliche und Pädagogen zur Stärkung lokaler Kapazitäten.',
    'prog.agri.title':'Landwirtschaft &amp; Bauern','prog.agri.tag2':'Biomethanisierung',
    'prog.agri.text':'Unterstützung der Bauern in der Mangelzeit. Ausbildung in Biomethanisierung für eine nachhaltige Landwirtschaft und Unterstützung des Komitees für die integrale Entwicklung von Sara (CODISA).',
    'impact.label':'Unsere Wirkung','impact.h2':'APP in <span style="color:var(--gold);">Zahlen</span>',
    'impact.label1':'Jahre Erfahrung im Dienst der togolesischen Gemeinschaften',
    'impact.label2':'Begünstigte durch unsere Programme und Aktivitäten',
    'impact.label3':'Aktive Programme für Gesundheit, Bildung und Entwicklung',
    'impact.label4':'Interventionsregionen: Lomé, Kara und Sara (P/Kozah)',
    'actu.label':'Unsere Aktivitäten','actu.h2':'Aktuelles &amp; <span>Veranstaltungen</span>',
    'actu.desc':'Entdecken Sie unsere neuesten Aktivitäten und Veranstaltungen in Togo und international.',
    'actu.mission.badge':'Internationale Mission • Juli',
    'actu.mission.title':'Mission in Europa – Entwicklung &amp; Strategische Partnerschaften',
    'actu.mission.desc':'Diese Mission ermöglichte wichtige strategische Treffen in Belgien, Luxemburg und Frankreich zur Förderung von Partnerschaften, Erfahrungsaustausch und innovativen Initiativen für Togo.',
    'actu.mission.h1.title':'Unternehmenszentrum &amp; Bildung',
    'actu.mission.h1.sub':'Lüttich (9. Juli)',
    'actu.mission.h2.title':'Austausch &amp; Kooperation',
    'actu.mission.h2.sub':'Luxemburg (10. Juli)',
    'actu.mission.h3.title':'Militäroffiziersclub &amp; NGO MIM',
    'actu.mission.h3.sub':'Paris (13. Juli)',
    'actu.mission.btn_read':'Vollständigen Bericht lesen',
    'actu.mission.btn_partners':'Partner ansehen',
    'actu.mission.partner_tag':'Internationale Zusammenarbeit',
    'actu.mission.partner_sub':'Partnerschaft &amp; Resilienz',
    'modal.mission.badge':'Offizieller Bericht • Internationale Mission',
    'modal.mission.title':'Mission in Europa – Juli',
    'modal.mission.intro':'Diese Mission ermöglichte strategische Treffen in Belgien, Luxemburg und Frankreich, um Partnerschaften aufzubauen, Erfahrungen auszutauschen und für Togo geeignete Initiativen zu erkunden.',
    'modal.mission.stepA.title':'Treffen mit dem Leiter des Unternehmenszentrums & Frau Marina',
    'modal.mission.stepA.desc1':'Eine Arbeitssitzung fand in Lüttich mit dem Leiter des Unternehmenszentrums und Frau Marina statt, Leiterin einer bereits in Kpalimé im Bildungsbereich tätigen NGO.',
    'modal.mission.stepA.obj_title':'<i class="fas fa-bullseye"></i> Ziel des Treffens',
    'modal.mission.stepA.obj_desc':'Hauptziel war es, sich vom belgischen Modell inspirieren zu lassen, um in Togo ein Begegnungszentrum für öffentliche und private Unternehmen sowie die Zivilgesellschaft zu schaffen.',
    'modal.mission.stepA.frame_title':'Dieser Rahmen soll insbesondere:',
    'modal.mission.stepA.l1':'<i class="fas fa-check-circle"></i> Den Austausch zwischen den Akteuren fördern;',
    'modal.mission.stepA.l2':'<i class="fas fa-check-circle"></i> Laufende Projekte teilen;',
    'modal.mission.stepA.l3':'<i class="fas fa-check-circle"></i> Partnerschaften entwickeln;',
    'modal.mission.stepA.l4':'<i class="fas fa-check-circle"></i> Das professionelle Netzwerk stärken;',
    'modal.mission.stepA.l5':'<i class="fas fa-check-circle"></i> Eine nachhaltige Zusammenarbeit bei Entwicklungsfragen fördern.',
    'modal.mission.stepB.title':'Treffen mit Herrn Paul Weiss',
    'modal.mission.stepB.desc':'Ein Austausch fand in Luxemburg mit Herrn Paul Weiss statt, einem Luxemburger mit Togo-Erfahrung.',
    'modal.mission.stepB.quote':'Die Gespräche verliefen in einer herzlichen und konstruktiven Atmosphäre, geprägt von großer Wertschätzung für Togo und vielversprechenden Kooperationsperspektiven.',
    'modal.mission.stepC.title1':'Treffen im Cercle National des Armées',
    'modal.mission.stepC.desc1':'Eine wichtige Arbeitssitzung fand im Cercle National des Armées in Paris statt.',
    'modal.mission.stepC.desc2':'Zum Abschluss wurden Gastgeschenke überreicht, die die Qualität der Beziehungen und den gemeinsamen Kooperationswillen symbolisieren.',
    'modal.mission.stepC.mim_title':'Arbeitssitzung mit der NGO Médiateurs Internationaux Multilingues (MIM)',
    'modal.mission.stepC.mim_sub':'Mit Frau Imen Chaanbi, Generalsekretärin der NGO MIM',
    'modal.mission.stepC.mim_pres_title':'<i class="fas fa-heartbeat"></i> MIM Fachbereiche',
    'modal.mission.stepC.mim_d1':'Psychische Gesundheit',
    'modal.mission.stepC.mim_d2':'Psychologische Begleitung',
    'modal.mission.stepC.mim_d3':'Unterstützung für Jugendliche',
    'modal.mission.stepC.mim_d4':'Hilfe für Bevölkerungsgruppen in Krisenzeiten',
    'modal.mission.stepC.mim_ctx_title':'<i class="fas fa-shield-virus"></i> Einsatzkontexte',
    'modal.mission.stepC.mim_c1':'Kriegsgebiete &amp; Flüchtlingslager',
    'modal.mission.stepC.mim_c2':'Terroranschlagssituationen',
    'modal.mission.stepC.mim_c3':'Naturkatastrophen',
    'modal.mission.stepC.mim_c4':'Militärakademien, Kriegsschulen &amp; Ministerien',
    'modal.mission.stepC.conclusion':'<i class="fas fa-sparkles"></i> Dieses Treffen eröffnet wichtige Kooperationsperspektiven in Mediation, Resilienz und psychosozialer Betreuung in Togo.',
    'modal.mission.btn_collab':'Partnerschaft starten',
    'modal.mission.btn_close':'Schließen',
    'actu.event1.category':'Großveranstaltung','actu.event1.title':'Internationaler Tag der Witwe – Ausgabe 2025 in Kara',
    'actu.event1.text':'APP NGO organisierte die Feier des Internationalen Tages der Witwe in Kara. Diese Veranstaltung brachte Witwen, Gemeinschaftsführer und Partner für einen Moment der Solidarität, des Engagements und des Teilens einer Gemeinschaftsmahlzeit zusammen.',
    'actu.see_photos':'Fotos ansehen',
    'actu.event2.category':'Öffentliche Gesundheit','actu.event2.title':'HIV/AIDS-Aufklärungskampagne',
    'actu.event2.text':'Mehr als 40 junge Teilnehmer auf dem Place de la Victoire für diese Kampagne zum Thema öffentliche Gesundheit bis 2030.',
    'actu.event3.category':'Gesundheit vor Ort','actu.event3.title':'Gemeinschaftlicher Gesundheitscheck',
    'actu.event3.text':'Unsere Teams in APP-Jacken führten Feldberatungen durch und sammelten Gesundheitsdaten von schutzbedürftigen Bevölkerungsgruppen in benachteiligten Vierteln.',
    'galerie.label':'Unsere Fotos','galerie.h2':'Galerie <span>unserer Aktivitäten</span>',
    'galerie.desc':'Bilder unserer Feldaktivitäten, Gemeinschaftsveranstaltungen und Schulungen.',
    'galerie.filter.all':'Alle','galerie.filter.sensib':'Aufklärung','galerie.filter.veuve':'Witwen-Tag',
    'galerie.filter.sante':'Gesundheit','galerie.filter.formation':'Ausbildung',
    'cat.sensibilisation':'Aufklärung','cat.veuve':'Witwen-Tag','cat.sante':'Gesundheit',
    'cat.sante_terrain':'Gesundheit vor Ort','cat.formation':'Ausbildung',
    'gallery.sensib1':'HIV/AIDS-Kampagne – Place de la Victoire, 8. Mai 2025',
    'gallery.sensib2':'Gemeinschaftliche Mobilisierung','gallery.sensib3':'Team und Teilnehmer',
    'gallery.veuve1':'Podiumsdiskussion – Kara 2025','gallery.veuve2':'Offizielle Ansprache',
    'gallery.veuve3':'Gemeinschaftliche Mahlzeitverteilung – Kara 2025',
    'gallery.veuve4':'Solidarität und Teilen','gallery.veuve5':'Veranstaltungsteilnehmer',
    'gallery.sante1':'Team der Aufklärungskampagne 2025',
    'gallery.sante2':'Datenerhebung – Gesundheitscheck','gallery.sante3':'Team in APP-Jacken',
    'gallery.sante4':'Gemeinschaftskonsultation','gallery.sante5':'Registrierung der Begünstigten',
    'gallery.formation1':'AFEDI-Ausbildungssitzung','gallery.formation2':'Ausbildung der Frauen der Gemeinschaft',
    'gallery.formation3':'Bildungsunterstützung','gallery.formation4':'AFEDI-Programm in Aktion',
    'partenaires.label':'Sie unterstützen uns','partenaires.h2':'Unsere <span>Partner</span>',
    'partenaires.desc':'APP arbeitet mit Organisationen zusammen, die dieselben Werte der Gemeinschaftsentwicklung und Solidarität teilen.',
    'partenaires.avi.text':'Wichtiger APP-Partner bei der Unterstützung von Waisen, der 4 Waisenhäuser und ein Gesundheitszentrum für schutzbedürftige Kinder in Togo verwaltet.',
    'partenaires.kondjigan.text':'Gesundheitspartner in Djidjolé, der mit APP an Projekten zur Gemeinschaftsgesundheit und zum Zugang zu medizinischer Versorgung für benachteiligte Bevölkerungsgruppen arbeitet.',
    'partenaires.moov.text':'Offizieller Sponsor bei gemeinschaftlichen APP-Veranstaltungen, der zur Sichtbarkeit und Reichweite der Aktionen der Organisation vor Ort beiträgt.',
    'partenaires.kiss.text':'Ein engagiertes Unternehmen an der Seite der APP, das ihre sozialen Maßnahmen unterstützt und zur Verbesserung der Lebensbedingungen schutzbedürftiger Gemeinschaften beiträgt.',
    'partenaires.mim.text':'Ein Netzwerk internationaler Mediatoren, das den interkulturellen Dialog fördert und die APP bei ihren Projekten zum sozialen Zusammenhalt begleitet.',
    'partenaires.become.title':'Werden Sie APP-Partner',
    'partenaires.become.text':'Teilen Sie unsere Vision eines solidarischen und entwickelten Togos? Treten Sie unserem Partnernetzwerk bei und tragen Sie zu konkreten Maßnahmen vor Ort bei.',
    'partenaires.become.btn':'Kontaktieren Sie uns',
    'dons.label':'Unterstützen Sie uns','dons.h2':'Jetzt <span>Spenden</span>',
    'dons.text':'Ihre finanzielle Unterstützung ist unerlässlich, damit APP seine Missionen unter den verletzlichsten Bevölkerungsgruppen Togos fortsetzen kann. Jeder Beitrag, unabhängig von seiner Größe, hat eine reale Wirkung vor Ort.',
    'dons.choose':'Wählen Sie einen Betrag oder geben Sie Ihren eigenen ein:','dons.other':'Anderer Betrag',
    'dons.methods.title':'Verfügbare Zahlungsmethoden','dons.intl_transfer':'Internationaler Transfer',
    'dons.bank':'Banküberweisung','dons.on_request':'Auf Anfrage',
    'dons.other_method':'Andere Methoden','dons.contact_us':'Kontaktieren Sie uns',
    'dons.impact.title':'💛 Was Ihre Spende ermöglicht',
    'dons.impact1':'<strong>Hygienekits</strong> für 2 Kinder in einem APP-Partnerheim.',
    'dons.impact2':'<strong>Teilnahme</strong> an einer Gesundheitsaufklärungskampagne in einem benachteiligten Viertel.',
    'dons.impact3':'<strong>Ausbildung</strong> einer Gruppe von Frauen in wirtschaftlichen Stärkungstechniken.',
    'dons.impact4':'<strong>Lebensmittelunterstützung</strong> für Witwen und schutzbedürftige Familien bei APP-Veranstaltungen.',
    'dons.impact5':'<strong>Finanzierung</strong> einer Gesundheitscheck-Mission vor Ort in einem ländlichen Gebiet.',
    'dons.cta':'Ich spende jetzt',
    'dons.receipt':'Für jede Spende kontaktieren Sie uns direkt über das Formular oder telefonisch.<br />Eine Quittung kann auf Anfrage ausgestellt werden.',
    'contact.label':'Kontaktieren Sie uns','contact.h2':'Bleiben Sie in <span>Kontakt</span>',
    'contact.address.title':'Hauptsitz',
    'contact.address.text':'Lomé, Republik Togo<br /><small style="color:var(--text-light);">Regionalbüros: Kara &amp; Sara (P/Kozah)</small>',
    'contact.phone.title':'Telefon / Mobile Money','contact.phone.sub':'T-Money verfügbar',
    'contact.email.title':'E-Mail','contact.official.title':'Offizielle Anerkennung',
    'contact.availability.title':'Verfügbarkeit',
    'contact.availability.text':'Montag – Freitag: 8:00 – 17:00 Uhr<br /><small style="color:var(--text-light);">Samstag nach Vereinbarung</small>',
    'contact.social':'Folgen Sie uns','contact.form.title':'Senden Sie uns eine Nachricht',
    'contact.form.prenom':'Vorname *','contact.form.prenom.ph':'Ihr Vorname',
    'contact.form.nom':'Nachname *','contact.form.nom.ph':'Ihr Nachname',
    'contact.form.telephone':'Telefon','contact.form.sujet':'Betreff *',
    'contact.form.sujet.default':'Wählen Sie ein Thema…','contact.form.sujet.partenariat':'Partnerschaft',
    'contact.form.sujet.don':'Spenden','contact.form.sujet.volontariat':'Ehrenamtlich werden',
    'contact.form.sujet.programme':'Informationen zu unseren Programmen','contact.form.sujet.autre':'Andere Anfrage',
    'contact.form.message.ph':'Schreiben Sie Ihre Nachricht hier…',
    'contact.form.submit':'Nachricht senden','contact.form.submitting':'Senden...',
    'contact.form.success':'Ihre Nachricht wurde erfolgreich gesendet! Wir werden uns so schnell wie möglich bei Ihnen melden.',
    'footer.brand.text':'Die NGO Action Population Plus arbeitet seit 2003 für die harmonische Entwicklung der togolesischen Bevölkerung durch Gesundheit, Bildung, Stärkung der Stellung der Frau und Unterstützung schutzbedürftiger Gruppen.',
    'footer.brand.tagline':'„Mehr für Bevölkerungsprobleme tun"',
    'footer.nav.title':'Navigation','footer.nav.programmes':'Unsere Programme','footer.nav.galerie':'Fotogalerie',
    'footer.prog.title':'Unsere Programme','footer.prog.formation':'AFEDI-Ausbildung','footer.prog.agri':'CODISA-Landwirtschaft',
    'footer.contact.address':'Lomé, Republik Togo<br />Büros in Kara &amp; Sara',
    'footer.bottom1':'© 2025 Action Population Plus (APP) – Alle Rechte vorbehalten.',
    'footer.bottom2':'Entworfen mit <span style="color:var(--gold);">♥</span> für die Entwicklung Togos',
  }
};

let currentLang = localStorage.getItem('app-lang') || 'fr';

function applyTranslations(lang) {
  if (!t[lang]) return;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[lang][key] !== undefined) {
      el.innerHTML = t[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[lang][key] !== undefined) {
      el.placeholder = t[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Language Switcher ---- */
  applyTranslations(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      localStorage.setItem('app-lang', lang);
      applyTranslations(lang);
      if (typeof navToggle !== 'undefined' && typeof navLinks !== 'undefined' && navToggle && navLinks) {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      }
    });
  });

  /* ---- Navigation Sticky ---- */
  const navbar = document.getElementById('navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---- Smooth Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- Intersection Observer (Fade-in animations) ---- */
  const fadeEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  fadeEls.forEach(el => observer.observe(el));

  /* ---- Counter Animation ---- */
  const counters = document.querySelectorAll('.count-up');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 2000;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(animate);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(animate);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  /* ---- Gallery Filter ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = ''; }, 10);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  /* ---- Lightbox ---- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentIndex = 0;
  const allImages = [];

  galleryItems.forEach((item, idx) => {
    const img = item.querySelector('img');
    allImages.push({ src: img.src, alt: img.alt });
    item.addEventListener('click', () => {
      currentIndex = idx;
      openLightbox(idx);
    });
  });

  function openLightbox(idx) {
    lightboxImg.src = allImages[idx].src;
    lightboxImg.alt = allImages[idx].alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
      openLightbox(currentIndex);
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % allImages.length;
      openLightbox(currentIndex);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') { lightbox.classList.remove('open'); document.body.style.overflow = ''; }
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + allImages.length) % allImages.length; openLightbox(currentIndex); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % allImages.length; openLightbox(currentIndex); }
  });

  /* ---- Back to Top ---- */
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (btt) btt.classList.toggle('visible', window.scrollY > 400);
  });
  if (btt) btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---- Donation Amount Buttons ---- */
  document.querySelectorAll('.amount-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.amount-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ---- Contact Form ---- */
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const btnSpan = btn.querySelector('[data-i18n="contact.form.submit"]');
      if (btnSpan) btnSpan.textContent = t[currentLang]['contact.form.submitting'] || '...';
      btn.disabled = true;
      setTimeout(() => {
        if (successMsg) { successMsg.style.display = 'block'; }
        form.reset();
        if (btnSpan) btnSpan.innerHTML = t[currentLang]['contact.form.submit'] || 'Send';
        btn.disabled = false;
        setTimeout(() => { if (successMsg) successMsg.style.display = 'none'; }, 5000);
      }, 1500);
    });
  }

  /* ---- Active Nav Link on Scroll ---- */
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a[href^="#"]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navItems.forEach(a => {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current) {
        a.style.color = 'var(--gold)';
      }
    });
  });

  /* ---- Mission Modal Logic ---- */
  const missionModal = document.getElementById('mission-modal');
  const openMissionBtn = document.getElementById('open-mission-modal');
  const closeMissionBtn = document.getElementById('close-mission-modal');
  const footerCloseBtn = document.getElementById('modal-footer-close');
  const modalContactBtn = document.querySelector('.modal-contact-btn');

  function openMissionModal() {
    if (!missionModal) return;
    missionModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMissionModal() {
    if (!missionModal) return;
    missionModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openMissionBtn) {
    openMissionBtn.addEventListener('click', openMissionModal);
  }

  if (closeMissionBtn) {
    closeMissionBtn.addEventListener('click', closeMissionModal);
  }

  if (footerCloseBtn) {
    footerCloseBtn.addEventListener('click', closeMissionModal);
  }

  if (modalContactBtn) {
    modalContactBtn.addEventListener('click', () => {
      closeMissionModal();
    });
  }

  if (missionModal) {
    missionModal.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-backdrop')) {
        closeMissionModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && missionModal && missionModal.classList.contains('open')) {
      closeMissionModal();
    }
  });

  // =========================================
  // HERO FULL-WIDTH CAROUSEL (Version unique et nettoyée)
  // =========================================
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const heroSection = document.querySelector('.hero-full-section');
  
  if (slides.length > 0) {
    let currentSlide = 0;
    let autoPlayInterval;
    const slideDuration = 5000;

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
      
      currentSlide = (index + slides.length) % slides.length;
      
      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function startAutoPlay() {
      clearInterval(autoPlayInterval);
      autoPlayInterval = setInterval(nextSlide, slideDuration);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
        stopAutoPlay();
        startAutoPlay();
      });
    });

    if (heroSection) {
      heroSection.addEventListener('mouseenter', stopAutoPlay);
      heroSection.addEventListener('mouseleave', startAutoPlay);
    }

    startAutoPlay();
  }
});