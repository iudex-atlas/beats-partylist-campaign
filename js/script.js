const track = document.getElementById('sliderTrack');
    const cards = document.querySelectorAll('.candidate-card');
    const total = cards.length;
    const dotsContainer = document.getElementById('dotsContainer');
    const counter = document.getElementById('sliderCounter');
    let current = 0;

    // Build dots
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      document.querySelectorAll('.dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
      const num = String(current + 1).padStart(2, '0');
      const tot = String(total).padStart(2, '0');
      counter.textContent = `${num} / ${tot}`;
    }

    document.getElementById('prevBtn').addEventListener('click', () => goTo(current - 1));
    document.getElementById('nextBtn').addEventListener('click', () => goTo(current + 1));

    // Keyboard navigation
    document.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // Touch/swipe support
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });

    // ── PLATFORM MODAL ──
    const platformData = {
      1: {
        tag: 'Platform · 01',
        title: 'THE FRIDAY BREAKPOINT and COMMIT-AND-CHILL',
        sections: [
          {
            body: 'The Friday Breakpoint (Weekly Trivia)',
            points: [
              'WHAT: A weekly digital trivia competition held every Friday afternoon on the CCS Facebook page and Discord.',
              'HOW: We mix fun tech/eSports facts with Mindfulness Tips. Top participants are tracked on a Leaderboard to keep engagement high.',
              'GAIN: Students get a forced system reboot from coding stress, a boost in morale, and rewards like Priority Printing Passes or Lab Fast Passes.'
            ]
          },
          {
            body: 'COMMIT-AND-CHILL (Peer Support)',
            points: [
              'WHAT: A safe, on-campus space where students can gather weekly to share concerns, vent frustrations, and talk openly about mental health or academic struggles.',
              'HOW: Each session is moderated by Squad Leads per year level (trained peers who guide discussions respectfully). The lounge will feature "Open Mic Circles" for sharing, a "Resource Wall" with capstone templates and study guides, and quiet corners for one-on-one conversations.',
              'GAIN: Students gain a supportive community that listens without judgment, helps normalize talking about stress, and ensures no one feels isolated during heavy project seasons. It builds solidarity and strengthens the CCS family spirit.'
            ]
          }
        ]
      },
      2: {
        tag: 'Platform · 02',
        title: 'Effective Communication Towards Students',
        sections: [
          {
            body: 'As a running officer in this coming election, I want to push this specific platform that aims to improve the quality of communication from the officers to the students.',
            points: [
              'To improve communication between officers and students, a multi-platform approach is highly recommended.',
              'Officers should post announcements early in the respective group chats and relay important messages through the Mayors’ Group Chats for faster dissemination..',
              'Physical bulletin boards should also be utilized to ensure visibility for students who may not always check their phones.',
              'Additionally, posting announcements on the official Facebook page will serve as a reliable and accessible platform for wider reach and documentation.'
            ]
          },
          {
            body: 'This combination of digital and physical channels will ensure that important information reaches every student effectively and on time. I aspire for a better environment where updates and announcements are clearly relayed to reduce hassle and lessen confusion among students from small information to the big events inside the campus.',
          },
        ]
      },
      3: {
        tag: 'Platform · 03',
        title: 'AN EXPRESSIVE ENVIRONMENT',
        body: 'I believe that a school is more than just a place for learning, but a community where every student feels safe, respected, heard, and valued. I want to create an environment where no one feels left out or afraid to express themselves, and where every voice truly matters. I understand that each student has their own struggles and dreams, so I aim to lead with empathy, kindness, and genuine care. As a leader, I will focus on building unity, encouraging open communication, and supporting my fellow students in every way I can. With your trust, I will serve with integrity and dedication to help create a positive and welcoming environment for everyone.',
      },
      4: {
        tag: 'Platform · 04',
        title: 'B.E.A.T.S.',
        sections: [
          {
            body: 'Broadcast Efficiency.',
            points: [
              'Real-Time Data Sync: Ensuring all departmental updates are broadcasted across the FB Page, Mayors GCs, and physical bulletin boards within a strict 30-minute window for maximum reach.',
            ]
          },
          {
          body: 'Efficient Record-Keeping.',
          points: [
            'Real-Time Minutes: Providing concise summaries of every meeting within a day to keep the student body and officers instantly aligned on all decisions.',
          ]
          },
          {
          body: 'Accessible Duty Schedules.',
          points: [
            'Operational Hours Hub: A published weekly roster of officer duties and emergency contact information, providing the student body with reliable and consistent access to our services.',
          ]
          },
          {
          body: 'Timely Notification Calendars.',
          points: [
            'CCS Calendar: A public Google Calendar that students can access. It will sync directly to their phones, sending them notifications for exam weeks, school holidays, and organization events.',
          ]
          },
          {
          body: 'Student Synergy and Support.',
          points: [
            'Emergency Supplies: A service providing free or borrowed basic supplies, like ballpens, pencils, and erasers that are available at the CCS office during midterm and final exam weeks.',
          ]
          },
        ]
        },
      5: {
        tag: 'Platform · 05',
        title: 'CCS Event Requirements Tracker Program and STUDENT BANK PROGRAM',
        sections: [
          {
            bodies: [
              'CCS Event Requirements Tracker Program',
              'I propose to enhance our College of Computer Studies’ existing event requirements documentation system by upgrading it to a fully accessible online platform where all CCS students can conveniently check, anytime and anywhere, the status of their submitted paper requirements, forms, and supporting documents for any department event—each submission is clearly marked as submitted, pending review, approved, or missing, so you can instantly confirm if your requirements meet the event’s standards. This improved system keeps all event-related requirement records organized and updated in real time, eliminating confusion, lost paperwork, and the need for repeated follow-ups with organizers or advisers, ensuring full transparency and convenience for every student participating in department activities.',
            ],
          },
          {
            bodies: [
              'STUDENT BANK PROGRAM',
              'I propose to enhance our College of Computer Studies’ existing event requirements documentation system by upgrading it to a fully accessible online platform where all CCS students can conveniently check, anytime and anywhere, the status of their submitted paper requirements, forms, and supporting documents for any department event—each submission is clearly marked as submitted, pending review, approved, or missing, so you can instantly confirm if your requirements meet the event’s standards. This improved system keeps all event-related requirement records organized and updated in real time, eliminating confusion, lost paperwork, and the need for repeated follow-ups with organizers or advisers, ensuring full transparency and convenience for every student participating in department activities.'
            ],
            points: [
              'Deposit Process - All contributions are logged like official bank deposits, with issued receipts and an up-to-date balance accessible anytime.',
              'Withdrawal System - Fast release of funds for projects, events, or other school needs, simply submit a valid request for quick approval, with clear guidelines and repayment plans.',
              'Transaction Records - Every deposit and withdrawal is clearly documented, with no hidden or unlisted transactions',
              'Secure Fund Management - All funds are kept secure, with only approved transactions allowed to prevent any misuse'
            ]
          },
          {
            body: 'With this project, we build a secure, transparent, and student-focused fund system that turns every contribution into meaningful support for your academic and campus life, ensuring trust and value for every CCS student.'
          }
        ]
      },
      6: {
        tag: 'Platform · 06',
        title: 'CCS Student Online Banking Payment Program',
        body:'In times of payment period to the Consultation Room, there are times that some students have their money on G-Cash instead of handling physical money. Some students would need to go outside the Campus to Cash-out or they need to find someone to Withdraw their money from G-Cash. Some G-Cash withdrawal outside has a convenience fee. Since the current payment method is by paying with physical money, Students can pay via G-Cash to the Consultation Room in times of collecting payments for (e.g. Acquaintance Party, Department Membership, etc.), so that they won’t need to go somewhere else to Cash-out and pay the convenience fee for withdrawal.'
      },
      7: {
        tag: 'Platform · 07',
        title: 'The Voice of the Students',
        sections: [
          {
            bodies: ['1.1 Freedom Wall', 'Goal: To provide a structured yet open space for every student\'s expression.'],
            points: [
              'This will help the students to be more open and vocal about how they feel. It will help emphasize the connection between students and focus on the diversity of students\' views. This will be a classical name for a place of open discussion and ideas that sounds academically high-level.',
            ]
          },
          {
            bodies: ['1.2 Bulletin Board', 'Goal: To act as the official source of truth and visual documentation'],
            points: [
              'As a P.I.O., it is my duty to tell the students about the relevant information and announcement without a delay – it will help for students to know the announcement, such as students who have no internet access and have no phones. This gives the impression of official and organized record-keeping. It also focuses on the "Building" and "Transforming" aspects of the platform – suggesting a modern, data-driven centre for news.',
            ]
          },
          {
            bodies: ['1.3 Box for Student\'s Concerns', 'Goal: To establish a formal, confidential channel for grievance and feedback.'],
            points: [
              'It will help the students to make their concerns known and for us officers that need to improve this will ensure that students will be heard. This focuses on the result (solving the problem) rather than just the complaint–A professional term for an official who investigates complaints. Each student\'s complaint and suggestions will make us improve.',
            ]
          },
          {
            bodies: ['1.4 Primary Communication Hubs (The voice)', 'Goal: To facilitate efficient, real-time communication across the student body.'],
            points: [
              'It will help the students to make their concerns known and for us officers that need to improve this will ensure that students will be heard. This focuses on the result (solving the problem) rather than just the complaint–A professional term for an official who investigates complaints. Each student\'s complaint and suggestions will make us improve.',
            ]
          }
        ]
      },
      8: {
        tag: 'Platform · 08',
        title: 'STRENGTHENING EFFECTIVE COMMUNICATION BETWEEN MEDIA AND STUDENTS IN UCLM CCS DEPARTMENT',
        sections: [
          { 
            bodies: [
            'As running the position of Creatives, I aim to bridge the gap between media and students by ensuring that all information is communicated clearly, creatively, and on time. I will ensure that all events and important information are posted ahead of time to give students enough awareness and preparation. Through consistent and well-designed content, we can avoid misinformation and confusion.',
            'Additionally, I plan to:',
                ],
            points: [
                'Create visually appealing and organized pubmats that catch attention and deliver messages effectively',
                'Establish a consistent posting schedule so students know when to expect updates',
                'Promote transparency by making sure no important detail is left out',
                'Encourage feedback from students to improve communication strategies',
                'Create a supportive environment where every member in the organization can grow and develop their skills in designing.',
            ]
          },
        ],
      },
      9: {
        tag: 'Platform · 09',
        title: 'Distinguished Talents, Open Mic: Speak-up Student, and Timely Updates',
        sections: [
          {
          body: 'Distinguished Talents',
          points: [
            'Many IT students possess talents that are built upon but often go unnoticed due to the heavy academic workload. Since school events involve every department, this is their time to shine, showcase what they really have, and step out of their comfort zones. We want our students to represent and participate in the IT department, giving them a chance to clear their minds and enjoy themselves outside of the classroom.',
          ]
          },
          {
          body: 'Open Mic: Speak-up Student',
          points: [
            'As a running candidate for chief of representative, I want to ensure student\'s voices are heard. We\'ll conduct seminars to encourage students to speak up about their personal struggles and concerns voluntarily. Sometimes, students can\'t share with family or friends what they feel because they prefer opening up to a stranger. Knowing many IT students are introverts, this platform provides a space to speak with officers they\'re comfortable with.',
          ],
          },
          {
          body: 'Timely Updates',
          points: [
            'Students are swamped with academic workload, and announcements often get lost as they don’t have time to check them. As a future chief of representative, I want to ensure everyone stays fully informed about department announcements, official school announcements, and all upcoming events. I’ll do my best to provide timely updates on essential information so no one misses a beat.',
          ]
          },
        ],
      },
      10: {
        tag: 'Platform · 10',
        title: 'Student Engagement Across Competitions',
        sections: [
          {
            bodies: [
              'Event Player Privileges',
              'Players playing in events will have benefits for participating as representatives for the department. Players will be exempted on doing the attendance stamps in Innovation Days and in Intramurals so that they can focus on preparation for the events. The players can also propose practice sessions to the department, so that they will be granted official excuse letters that they can present to their teachers. The players will also have coaches that will guide and teach them so that they are equipped with sufficient knowledge and experience for the events.',
            ],
          },
          {
            bodies: [
              'Community Engagement',
              'Our social media page will propose bi-weekly challenges that test the students’ knowledge in programming. They will be tasked to create programs that can tackle a specific problem in the campus or community. They will then submit their programs either in the form of a video presentation, or a live presentation to the department showcasing their program. Rewards such as wifi vouchers or CCS merch will be given to the best team after a round of testing. Not only will this encourage interactivity and cooperation with group planning between students, but also provide helpful solutions that may benefit the school and the community.',
            ],
          },
          {
            bodies: [
              'Student Concerns',
              'Any problems or concerns that a student has can be addressed through a suggestion box posted outside the department’s office. A student may anonymously submit a report with a piece of paper and slip it inside the box. The council members will then check/collect the papers every other day and address the issues the students submitted within it in a meeting. This may encourage students to speak up about issues in the department that the council has missed, so that they can make a decision to fix them accordingly.',
            ],
          },
          {
            bodies: [
              'Mini E-Competitions',
              'To take a break from the stresses of academic life, students may volunteer to enter monthly mini competitions that the department proposes, mostly relating to e-sports (Mobile Legends, Valorant, etc.), which can also act as a fundraiser for the department for their future projects. In an appropriate venue where the mini competition is held, the department officers may also sell products like merch or snacks to the audience as they watch the games, as well as ensure a joyful and lighthearted atmosphere that the students may need to destress from academic life.',
            ],
          },
          {
            bodies: [
              'Utilization of Social Platforms and Physical Media',
              'Aside from ensuring that information and announcements will be disseminated quickly to social media pages and department gcs, the officers will also post physical copies of such information onto the bulletin board for students who cannot open social media and messaging applications due to network issues. A post about FAQs can also be posted so that student concerns will already be addressed and to prevent repetition of questions and answers.',
            ],
          },
          {
            body: 'Other than regular updates pertaining to academic life and event schedules, the department’s media officers may also share lighthearted posts like comics or thread discussions to bring the community together and promote student engagement, which in turn may bring more people to follow the department’s page for updates.',
          },
        ],
      },
      11: {
        tag: 'Platform · 11',
        title: 'Student Connection, Recognition, and Volunteer Programs',
        sections: [
          {
            bodies: [
              'Centralized Coding Resource Drive',
              'I will create a Google Drive with organized folders where students from all year levels can voluntarily share capstone codes, project templates, and coding resources. The files will be grouped by programming language such as Java, Python, and C++ so students can easily find what they need. This platform will make it easier for students to study, practice coding, and improve their projects. It will also encourage collaboration and sharing among students who want to help one another.',
            ],
          },
          {
            bodies: [
              'Recognition & Motivation Programs',
              'I will launch programs that recognize students’ achievements in academics, arts, sports, and projects. These programs will help motivate students to do their best and feel proud of their hard work. By recognizing student accomplishments, we can build a school community that values effort, talent, and participation. This will also inspire others to become more active and involved in school activities.',
            ],
          },
          {
            bodies: [
              'Environmental Volunteer Program',
              'I will organize voluntary student activities such as clean-up drives and tree planting. These activities will give students the chance to help care for the environment and contribute to the community. This program will also promote teamwork, responsibility, and environmental awareness among students. Through these efforts, we can help create a cleaner, greener, and better school environment.',
            ],
          },
          {
            body: 'As your representative, I will work to support every student by creating more opportunities for growth, recognition, and active participation in school activities. I will do my best to build a community where students feel valued, heard, and encouraged to reach their full potential. I will also help promote programs that develop teamwork, responsibility, and leadership among students. Through these efforts, I aim to make our school a better place for learning, involvement, and success. My goal is to serve the student body with dedication, fairness, and commitment.',
          },
        ],
      },
      12: {
        tag: 'Platform · 12',
        title: 'The 3C\'s',
        sections: [
          {
            bodies: [
              'COMMUNICATION : LIBERATION NOTES',
              'Communication is vital, yet many students hesitate to speak up, group chats have limits, and officers aren’t always available.',
              'Solution:',
            ],
            points: [
              'Create a community group (Facebook) that allows open and anonymous submissions for capstone, coding, or urgent concerns. It will be fast, interactive, and inclusive with fellow students, while officers step in only when necessary.',
              'Set up a Voice Box (Department), a physical station for course, department, or personal suggestions and concerns. Its review and responses will be exclusive to officers only, which will later be posted in the group or bulletin board to ensure transparency.',
            ],
            body: 'Through Liberation Notes, every student’s voice will be heard — whether instantly online or through official responses shared with the community.',
          },
          {
            bodies: [
              'CURIOSITY : TRENDLINE',
              'Curiosity drives growth and innovation. Students need accessible updates on topics that matter to their studies and future careers.',
              'Solution:',
            ],
            points: [
              'Utilize the student publication page (Bits and Bytes) not only for official competitions, events, and department matters, but also for weekly awareness posts.',
              'Share content such as industry trends, facts, and student submissions (essays, stories, creative works). Contributors will receive perks like priority printing.',
              'Keep posts short, engaging, and relevant to spark curiosity and broaden perspectives.',
            ],
            body: 'By sparking curiosity, we prepare students not only for their classes, but for the future careers waiting ahead.',
          },
          {
            bodies: [
              'CONNECTION : SPOTLIGHT SERIES',
              'Connection is built through recognition and shared pride. Students thrive when their efforts are acknowledged.',
              'Solution:',
            ],
            points: [
              'Launch a monthly recognition post featuring student achievements in academics, creativity, and volunteer work.',
              'Extend recognition beyond online platforms by posting on bulletin boards for offline visibility.',
            ],
            body: 'This boosts confidence, initiative, and engagement, while fostering familiarity and stronger bonds among students. Recognizing achievements builds confidence and connection, reminding us that growth is a shared journey.',
          },
          {
            body: 'My platforms are based on the 3C’s: Communication, Curiosity, and Connection — pillars that I believe encourage student development and academic excellence. As a running officer, I aim to be open to all, providing spaces where voices are heard, ideas are shared, and achievements are celebrated. With these initiatives, we can build a community where every student feels included, supported, and inspired to grow.',
          },
        ],
      },
      
        
}

    const modal = document.getElementById('platformModal');
    const modalClose = document.getElementById('modalClose');

    document.querySelectorAll('.platform-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-modal');
        const data = platformData[id];
        if (!data) return;

        document.getElementById('modalTag').textContent = data.tag;
        document.getElementById('modalIcon').textContent = data.icon || '🎓';
        document.getElementById('modalTitle').textContent = data.title;

        const contentDiv = document.getElementById('modalContent');
        contentDiv.innerHTML = '';

        if (data.sections) {
          data.sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('modal-section');

            // Handle multiple bodies (array) or single body (string)
            if (section.bodies && Array.isArray(section.bodies)) {
              section.bodies.forEach(bodyText => {
                const bodyP = document.createElement('p');
                bodyP.classList.add('modal-body');
                bodyP.textContent = bodyText;
                sectionDiv.appendChild(bodyP);
              });
            } else if (section.body) {
              const bodyP = document.createElement('p');
              bodyP.classList.add('modal-body');
              bodyP.textContent = section.body;
              sectionDiv.appendChild(bodyP);
            }

            if (section.points && section.points.length > 0) {
              const ul = document.createElement('ul');
              ul.classList.add('modal-points');
              section.points.forEach(pt => {
                const li = document.createElement('li');
                li.textContent = pt;
                ul.appendChild(li);
              });
              sectionDiv.appendChild(ul);
            }

            contentDiv.appendChild(sectionDiv);
          });
        } else {
          const bodyP = document.createElement('p');
          bodyP.classList.add('modal-body');
          bodyP.textContent = data.body;
          contentDiv.appendChild(bodyP);

          if (data.points && data.points.length > 0) {
            const ul = document.createElement('ul');
            ul.classList.add('modal-points');
            data.points.forEach(pt => {
              const li = document.createElement('li');
              li.textContent = pt;
              ul.appendChild(li);
            });
            contentDiv.appendChild(ul);
          }
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ── MOBILE OPTIMIZATIONS ──

    // Fix modal width on mobile
    function adjustModalForMobile() {
      const modal = document.querySelector('.modal-box');
      if (window.innerWidth <= 480) {
        modal.style.width = '100vw';
        modal.style.maxWidth = 'none';
        modal.style.height = '100vh';
      }
    }

    window.addEventListener('resize', adjustModalForMobile);
    adjustModalForMobile();

    // Swipe-to-close on mobile
    let touchStartY = 0;
    let touchEndY = 0;

    modal.addEventListener('touchstart', e => {
      touchStartY = e.changedTouches[0].clientY;
    }, false);

    modal.addEventListener('touchend', e => {
      touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 100) {
        closeModal();
      }
    }, false);

    // Prevent body scroll when modal is open on mobile
    document.addEventListener('touchmove', e => {
      if (modal.classList.contains('active')) {
        e.preventDefault();
      }
    }, { passive: false });        ]
      },
      2: {
        tag: 'Platform · 02',
        title: 'Effective Communication Towards Students',
        sections: [
          {
            body: 'As a running officer in this coming election, I want to push this specific platform that aims to improve the quality of communication from the officers to the students.',
            points: [
              'To improve communication between officers and students, a multi-platform approach is highly recommended.',
              'Officers should post announcements early in the respective group chats and relay important messages through the Mayors’ Group Chats for faster dissemination..',
              'Physical bulletin boards should also be utilized to ensure visibility for students who may not always check their phones.',
              'Additionally, posting announcements on the official Facebook page will serve as a reliable and accessible platform for wider reach and documentation.'
            ]
          },
          {
            body: 'This combination of digital and physical channels will ensure that important information reaches every student effectively and on time. I aspire for a better environment where updates and announcements are clearly relayed to reduce hassle and lessen confusion among students from small information to the big events inside the campus.',
          },
        ]
      },
      3: {
        tag: 'Platform · 03',
        title: 'AN EXPRESSIVE ENVIRONMENT',
        body: 'I believe that a school is more than just a place for learning, but a community where every student feels safe, respected, heard, and valued. I want to create an environment where no one feels left out or afraid to express themselves, and where every voice truly matters. I understand that each student has their own struggles and dreams, so I aim to lead with empathy, kindness, and genuine care. As a leader, I will focus on building unity, encouraging open communication, and supporting my fellow students in every way I can. With your trust, I will serve with integrity and dedication to help create a positive and welcoming environment for everyone.',
      },
      4: {
        tag: 'Platform · 04',
        title: 'B.E.A.T.S.',
        sections: [
          {
            body: 'Broadcast Efficiency.',
            points: [
              'Real-Time Data Sync: Ensuring all departmental updates are broadcasted across the FB Page, Mayors GCs, and physical bulletin boards within a strict 30-minute window for maximum reach.',
            ]
          },
          {
          body: 'Efficient Record-Keeping.',
          points: [
            'Real-Time Minutes: Providing concise summaries of every meeting within a day to keep the student body and officers instantly aligned on all decisions.',
          ]
          },
          {
          body: 'Accessible Duty Schedules.',
          points: [
            'Operational Hours Hub: A published weekly roster of officer duties and emergency contact information, providing the student body with reliable and consistent access to our services.',
          ]
          },
          {
          body: 'Timely Notification Calendars.',
          points: [
            'CCS Calendar: A public Google Calendar that students can access. It will sync directly to their phones, sending them notifications for exam weeks, school holidays, and organization events.',
          ]
          },
          {
          body: 'Student Synergy and Support.',
          points: [
            'Emergency Supplies: A service providing free or borrowed basic supplies, like ballpens, pencils, and erasers that are available at the CCS office during midterm and final exam weeks.',
          ]
          },
        ]
        },
      5: {
        tag: 'Platform · 05',
        title: 'CCS Event Requirements Tracker Program and STUDENT BANK PROGRAM',
        sections: [
          {
            bodies: [
              'CCS Event Requirements Tracker Program',
              'I propose to enhance our College of Computer Studies’ existing event requirements documentation system by upgrading it to a fully accessible online platform where all CCS students can conveniently check, anytime and anywhere, the status of their submitted paper requirements, forms, and supporting documents for any department event—each submission is clearly marked as submitted, pending review, approved, or missing, so you can instantly confirm if your requirements meet the event’s standards. This improved system keeps all event-related requirement records organized and updated in real time, eliminating confusion, lost paperwork, and the need for repeated follow-ups with organizers or advisers, ensuring full transparency and convenience for every student participating in department activities.',
            ],
          },
          {
            bodies: [
              'STUDENT BANK PROGRAM',
              'I propose to enhance our College of Computer Studies’ existing event requirements documentation system by upgrading it to a fully accessible online platform where all CCS students can conveniently check, anytime and anywhere, the status of their submitted paper requirements, forms, and supporting documents for any department event—each submission is clearly marked as submitted, pending review, approved, or missing, so you can instantly confirm if your requirements meet the event’s standards. This improved system keeps all event-related requirement records organized and updated in real time, eliminating confusion, lost paperwork, and the need for repeated follow-ups with organizers or advisers, ensuring full transparency and convenience for every student participating in department activities.'
            ],
            points: [
              'Deposit Process - All contributions are logged like official bank deposits, with issued receipts and an up-to-date balance accessible anytime.',
              'Withdrawal System - Fast release of funds for projects, events, or other school needs, simply submit a valid request for quick approval, with clear guidelines and repayment plans.',
              'Transaction Records - Every deposit and withdrawal is clearly documented, with no hidden or unlisted transactions',
              'Secure Fund Management - All funds are kept secure, with only approved transactions allowed to prevent any misuse'
            ]
          },
          {
            body: 'With this project, we build a secure, transparent, and student-focused fund system that turns every contribution into meaningful support for your academic and campus life, ensuring trust and value for every CCS student.'
          }
        ]
      },
      6: {
        tag: 'Platform · 06',
        title: 'CCS Student Online Banking Payment Program',
        body:'In times of payment period to the Consultation Room, there are times that some students have their money on G-Cash instead of handling physical money. Some students would need to go outside the Campus to Cash-out or they need to find someone to Withdraw their money from G-Cash. Some G-Cash withdrawal outside has a convenience fee. Since the current payment method is by paying with physical money, Students can pay via G-Cash to the Consultation Room in times of collecting payments for (e.g. Acquaintance Party, Department Membership, etc.), so that they won’t need to go somewhere else to Cash-out and pay the convenience fee for withdrawal.'
      },
      7: {
        tag: 'Platform · 07',
        title: 'The Voice of the Students',
        sections: [
          {
            bodies: ['1.1 Freedom Wall', 'Goal: To provide a structured yet open space for every student\'s expression.'],
            points: [
              'This will help the students to be more open and vocal about how they feel. It will help emphasize the connection between students and focus on the diversity of students\' views. This will be a classical name for a place of open discussion and ideas that sounds academically high-level.',
            ]
          },
          {
            bodies: ['1.2 Bulletin Board', 'Goal: To act as the official source of truth and visual documentation'],
            points: [
              'As a P.I.O., it is my duty to tell the students about the relevant information and announcement without a delay – it will help for students to know the announcement, such as students who have no internet access and have no phones. This gives the impression of official and organized record-keeping. It also focuses on the "Building" and "Transforming" aspects of the platform – suggesting a modern, data-driven centre for news.',
            ]
          },
          {
            bodies: ['1.3 Box for Student\'s Concerns', 'Goal: To establish a formal, confidential channel for grievance and feedback.'],
            points: [
              'It will help the students to make their concerns known and for us officers that need to improve this will ensure that students will be heard. This focuses on the result (solving the problem) rather than just the complaint–A professional term for an official who investigates complaints. Each student\'s complaint and suggestions will make us improve.',
            ]
          },
          {
            bodies: ['1.4 Primary Communication Hubs (The voice)', 'Goal: To facilitate efficient, real-time communication across the student body.'],
            points: [
              'It will help the students to make their concerns known and for us officers that need to improve this will ensure that students will be heard. This focuses on the result (solving the problem) rather than just the complaint–A professional term for an official who investigates complaints. Each student\'s complaint and suggestions will make us improve.',
            ]
          }
        ]
      },
      8: {
        tag: 'Platform · 08',
        title: 'STRENGTHENING EFFECTIVE COMMUNICATION BETWEEN MEDIA AND STUDENTS IN UCLM CCS DEPARTMENT',
        sections: [
          { 
            bodies: [
            'As running the position of Creatives, I aim to bridge the gap between media and students by ensuring that all information is communicated clearly, creatively, and on time. I will ensure that all events and important information are posted ahead of time to give students enough awareness and preparation. Through consistent and well-designed content, we can avoid misinformation and confusion.',
            'Additionally, I plan to:',
                ],
            points: [
                'Create visually appealing and organized pubmats that catch attention and deliver messages effectively',
                'Establish a consistent posting schedule so students know when to expect updates',
                'Promote transparency by making sure no important detail is left out',
                'Encourage feedback from students to improve communication strategies',
                'Create a supportive environment where every member in the organization can grow and develop their skills in designing.',
            ]
          },
        ],
      },
      9: {
        tag: 'Platform · 09',
        title: 'Distinguished Talents, Open Mic: Speak-up Student, and Timely Updates',
        sections: [
          {
          body: 'Distinguished Talents',
          points: [
            'Many IT students possess talents that are built upon but often go unnoticed due to the heavy academic workload. Since school events involve every department, this is their time to shine, showcase what they really have, and step out of their comfort zones. We want our students to represent and participate in the IT department, giving them a chance to clear their minds and enjoy themselves outside of the classroom.',
          ]
          },
          {
          body: 'Open Mic: Speak-up Student',
          points: [
            'As a running candidate for chief of representative, I want to ensure student\'s voices are heard. We\'ll conduct seminars to encourage students to speak up about their personal struggles and concerns voluntarily. Sometimes, students can\'t share with family or friends what they feel because they prefer opening up to a stranger. Knowing many IT students are introverts, this platform provides a space to speak with officers they\'re comfortable with.',
          ],
          },
          {
          body: 'Timely Updates',
          points: [
            'Students are swamped with academic workload, and announcements often get lost as they don’t have time to check them. As a future chief of representative, I want to ensure everyone stays fully informed about department announcements, official school announcements, and all upcoming events. I’ll do my best to provide timely updates on essential information so no one misses a beat.',
          ]
          },
        ],
      },
      10: {
        tag: 'Platform · 10',
        title: 'Student Engagement Across Competitions',
        sections: [
          {
            bodies: [
              'Event Player Privileges',
              'Players playing in events will have benefits for participating as representatives for the department. Players will be exempted on doing the attendance stamps in Innovation Days and in Intramurals so that they can focus on preparation for the events. The players can also propose practice sessions to the department, so that they will be granted official excuse letters that they can present to their teachers. The players will also have coaches that will guide and teach them so that they are equipped with sufficient knowledge and experience for the events.',
            ],
          },
          {
            bodies: [
              'Community Engagement',
              'Our social media page will propose bi-weekly challenges that test the students’ knowledge in programming. They will be tasked to create programs that can tackle a specific problem in the campus or community. They will then submit their programs either in the form of a video presentation, or a live presentation to the department showcasing their program. Rewards such as wifi vouchers or CCS merch will be given to the best team after a round of testing. Not only will this encourage interactivity and cooperation with group planning between students, but also provide helpful solutions that may benefit the school and the community.',
            ],
          },
          {
            bodies: [
              'Student Concerns',
              'Any problems or concerns that a student has can be addressed through a suggestion box posted outside the department’s office. A student may anonymously submit a report with a piece of paper and slip it inside the box. The council members will then check/collect the papers every other day and address the issues the students submitted within it in a meeting. This may encourage students to speak up about issues in the department that the council has missed, so that they can make a decision to fix them accordingly.',
            ],
          },
          {
            bodies: [
              'Mini E-Competitions',
              'To take a break from the stresses of academic life, students may volunteer to enter monthly mini competitions that the department proposes, mostly relating to e-sports (Mobile Legends, Valorant, etc.), which can also act as a fundraiser for the department for their future projects. In an appropriate venue where the mini competition is held, the department officers may also sell products like merch or snacks to the audience as they watch the games, as well as ensure a joyful and lighthearted atmosphere that the students may need to destress from academic life.',
            ],
          },
          {
            bodies: [
              'Utilization of Social Platforms and Physical Media',
              'Aside from ensuring that information and announcements will be disseminated quickly to social media pages and department gcs, the officers will also post physical copies of such information onto the bulletin board for students who cannot open social media and messaging applications due to network issues. A post about FAQs can also be posted so that student concerns will already be addressed and to prevent repetition of questions and answers.',
            ],
          },
          {
            body: 'Other than regular updates pertaining to academic life and event schedules, the department’s media officers may also share lighthearted posts like comics or thread discussions to bring the community together and promote student engagement, which in turn may bring more people to follow the department’s page for updates.',
          },
        ],
      },
      11: {
        tag: 'Platform · 11',
        title: 'Student Connection, Recognition, and Volunteer Programs',
        sections: [
          {
            bodies: [
              'Centralized Coding Resource Drive',
              'I will create a Google Drive with organized folders where students from all year levels can voluntarily share capstone codes, project templates, and coding resources. The files will be grouped by programming language such as Java, Python, and C++ so students can easily find what they need. This platform will make it easier for students to study, practice coding, and improve their projects. It will also encourage collaboration and sharing among students who want to help one another.',
            ],
          },
          {
            bodies: [
              'Recognition & Motivation Programs',
              'I will launch programs that recognize students’ achievements in academics, arts, sports, and projects. These programs will help motivate students to do their best and feel proud of their hard work. By recognizing student accomplishments, we can build a school community that values effort, talent, and participation. This will also inspire others to become more active and involved in school activities.',
            ],
          },
          {
            bodies: [
              'Environmental Volunteer Program',
              'I will organize voluntary student activities such as clean-up drives and tree planting. These activities will give students the chance to help care for the environment and contribute to the community. This program will also promote teamwork, responsibility, and environmental awareness among students. Through these efforts, we can help create a cleaner, greener, and better school environment.',
            ],
          },
          {
            body: 'As your representative, I will work to support every student by creating more opportunities for growth, recognition, and active participation in school activities. I will do my best to build a community where students feel valued, heard, and encouraged to reach their full potential. I will also help promote programs that develop teamwork, responsibility, and leadership among students. Through these efforts, I aim to make our school a better place for learning, involvement, and success. My goal is to serve the student body with dedication, fairness, and commitment.',
          },
        ],
      },
      12: {
        tag: 'Platform · 12',
        title: 'The 3C\'s',
        sections: [
          {
            bodies: [
              'COMMUNICATION : LIBERATION NOTES',
              'Communication is vital, yet many students hesitate to speak up, group chats have limits, and officers aren’t always available.',
              'Solution:',
            ],
            points: [
              'Create a community group (Facebook) that allows open and anonymous submissions for capstone, coding, or urgent concerns. It will be fast, interactive, and inclusive with fellow students, while officers step in only when necessary.',
              'Set up a Voice Box (Department), a physical station for course, department, or personal suggestions and concerns. Its review and responses will be exclusive to officers only, which will later be posted in the group or bulletin board to ensure transparency.',
            ],
            body: 'Through Liberation Notes, every student’s voice will be heard — whether instantly online or through official responses shared with the community.',
          },
          {
            bodies: [
              'CURIOSITY : TRENDLINE',
              'Curiosity drives growth and innovation. Students need accessible updates on topics that matter to their studies and future careers.',
              'Solution:',
            ],
            points: [
              'Utilize the student publication page (Bits and Bytes) not only for official competitions, events, and department matters, but also for weekly awareness posts.',
              'Share content such as industry trends, facts, and student submissions (essays, stories, creative works). Contributors will receive perks like priority printing.',
              'Keep posts short, engaging, and relevant to spark curiosity and broaden perspectives.',
            ],
            body: 'By sparking curiosity, we prepare students not only for their classes, but for the future careers waiting ahead.',
          },
          {
            bodies: [
              'CONNECTION : SPOTLIGHT SERIES',
              'Connection is built through recognition and shared pride. Students thrive when their efforts are acknowledged.',
              'Solution:',
            ],
            points: [
              'Launch a monthly recognition post featuring student achievements in academics, creativity, and volunteer work.',
              'Extend recognition beyond online platforms by posting on bulletin boards for offline visibility.',
            ],
            body: 'This boosts confidence, initiative, and engagement, while fostering familiarity and stronger bonds among students. Recognizing achievements builds confidence and connection, reminding us that growth is a shared journey.',
          },
          {
            body: 'My platforms are based on the 3C’s: Communication, Curiosity, and Connection — pillars that I believe encourage student development and academic excellence. As a running officer, I aim to be open to all, providing spaces where voices are heard, ideas are shared, and achievements are celebrated. With these initiatives, we can build a community where every student feels included, supported, and inspired to grow.',
          },
        ],
      },
      
        
}

    const modal = document.getElementById('platformModal');
    const modalClose = document.getElementById('modalClose');

    document.querySelectorAll('.platform-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-modal');
        const data = platformData[id];
        if (!data) return;

        document.getElementById('modalTag').textContent = data.tag;
        document.getElementById('modalIcon').textContent = data.icon || '🎓';
        document.getElementById('modalTitle').textContent = data.title;

        const contentDiv = document.getElementById('modalContent');
        contentDiv.innerHTML = '';

        if (data.sections) {
          data.sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('modal-section');

            // Handle multiple bodies (array) or single body (string)
            if (section.bodies && Array.isArray(section.bodies)) {
              section.bodies.forEach(bodyText => {
                const bodyP = document.createElement('p');
                bodyP.classList.add('modal-body');
                bodyP.textContent = bodyText;
                sectionDiv.appendChild(bodyP);
              });
            } else if (section.body) {
              const bodyP = document.createElement('p');
              bodyP.classList.add('modal-body');
              bodyP.textContent = section.body;
              sectionDiv.appendChild(bodyP);
            }

            if (section.points && section.points.length > 0) {
              const ul = document.createElement('ul');
              ul.classList.add('modal-points');
              section.points.forEach(pt => {
                const li = document.createElement('li');
                li.textContent = pt;
                ul.appendChild(li);
              });
              sectionDiv.appendChild(ul);
            }

            contentDiv.appendChild(sectionDiv);
          });
        } else {
          const bodyP = document.createElement('p');
          bodyP.classList.add('modal-body');
          bodyP.textContent = data.body;
          contentDiv.appendChild(bodyP);

          if (data.points && data.points.length > 0) {
            const ul = document.createElement('ul');
            ul.classList.add('modal-points');
            data.points.forEach(pt => {
              const li = document.createElement('li');
              li.textContent = pt;
              ul.appendChild(li);
            });
            contentDiv.appendChild(ul);
          }
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ==================== MODAL OPEN / CLOSE FUNCTIONS ====================

    const modalOverlay = document.querySelector('.modal-overlay');   // or use document.getElementById('your-modal-id')

    function openPlatformModal() {
        modalOverlay.classList.add('active');
        document.body.classList.add('modal-open');     // ← This is the important line
    }

    function closePlatformModal() {
        modalOverlay.classList.remove('active');
        document.body.classList.remove('modal-open');  // ← This restores normal scrolling
    }

    // Optional: Close modal when clicking outside the modal box
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closePlatformModal();
        }
    });

    // ── MOBILE OPTIMIZATIONS ──

    // Fix modal width on mobile
    function adjustModalForMobile() {
      const modal = document.querySelector('.modal-box');
      if (window.innerWidth <= 480) {
        modal.style.width = '100vw';
        modal.style.maxWidth = 'none';
        modal.style.height = '100vh';
      }
    }

    window.addEventListener('resize', adjustModalForMobile);
    adjustModalForMobile();

    // Swipe-to-close on mobile
    let touchStartY = 0;
    let touchEndY = 0;

    modal.addEventListener('touchstart', e => {
      touchStartY = e.changedTouches[0].clientY;
    }, false);

    modal.addEventListener('touchend', e => {
      touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 100) {
        closeModal();
      }
    }, false);

    // Prevent body scroll when modal is open on mobile
    document.addEventListener('touchmove', e => {
      if (modal.classList.contains('active')) {
        e.preventDefault();
      }
    }, { passive: false });        ]
      },
      2: {
        tag: 'Platform · 02',
        title: 'Effective Communication Towards Students',
        sections: [
          {
            body: 'As a running officer in this coming election, I want to push this specific platform that aims to improve the quality of communication from the officers to the students.',
            points: [
              'To improve communication between officers and students, a multi-platform approach is highly recommended.',
              'Officers should post announcements early in the respective group chats and relay important messages through the Mayors’ Group Chats for faster dissemination..',
              'Physical bulletin boards should also be utilized to ensure visibility for students who may not always check their phones.',
              'Additionally, posting announcements on the official Facebook page will serve as a reliable and accessible platform for wider reach and documentation.'
            ]
          },
          {
            body: 'This combination of digital and physical channels will ensure that important information reaches every student effectively and on time. I aspire for a better environment where updates and announcements are clearly relayed to reduce hassle and lessen confusion among students from small information to the big events inside the campus.',
          },
        ]
      },
      3: {
        tag: 'Platform · 03',
        title: 'AN EXPRESSIVE ENVIRONMENT',
        body: 'I believe that a school is more than just a place for learning, but a community where every student feels safe, respected, heard, and valued. I want to create an environment where no one feels left out or afraid to express themselves, and where every voice truly matters. I understand that each student has their own struggles and dreams, so I aim to lead with empathy, kindness, and genuine care. As a leader, I will focus on building unity, encouraging open communication, and supporting my fellow students in every way I can. With your trust, I will serve with integrity and dedication to help create a positive and welcoming environment for everyone.',
      },
      4: {
        tag: 'Platform · 04',
        title: 'B.E.A.T.S.',
        sections: [
          {
            body: 'Broadcast Efficiency.',
            points: [
              'Real-Time Data Sync: Ensuring all departmental updates are broadcasted across the FB Page, Mayors GCs, and physical bulletin boards within a strict 30-minute window for maximum reach.',
            ]
          },
          {
          body: 'Efficient Record-Keeping.',
          points: [
            'Real-Time Minutes: Providing concise summaries of every meeting within a day to keep the student body and officers instantly aligned on all decisions.',
          ]
          },
          {
          body: 'Accessible Duty Schedules.',
          points: [
            'Operational Hours Hub: A published weekly roster of officer duties and emergency contact information, providing the student body with reliable and consistent access to our services.',
          ]
          },
          {
          body: 'Timely Notification Calendars.',
          points: [
            'CCS Calendar: A public Google Calendar that students can access. It will sync directly to their phones, sending them notifications for exam weeks, school holidays, and organization events.',
          ]
          },
          {
          body: 'Student Synergy and Support.',
          points: [
            'Emergency Supplies: A service providing free or borrowed basic supplies, like ballpens, pencils, and erasers that are available at the CCS office during midterm and final exam weeks.',
          ]
          },
        ]
        },
      5: {
        tag: 'Platform · 05',
        title: 'CCS Event Requirements Tracker Program and STUDENT BANK PROGRAM',
        sections: [
          {
            bodies: [
              'CCS Event Requirements Tracker Program',
              'I propose to enhance our College of Computer Studies’ existing event requirements documentation system by upgrading it to a fully accessible online platform where all CCS students can conveniently check, anytime and anywhere, the status of their submitted paper requirements, forms, and supporting documents for any department event—each submission is clearly marked as submitted, pending review, approved, or missing, so you can instantly confirm if your requirements meet the event’s standards. This improved system keeps all event-related requirement records organized and updated in real time, eliminating confusion, lost paperwork, and the need for repeated follow-ups with organizers or advisers, ensuring full transparency and convenience for every student participating in department activities.',
            ],
          },
          {
            bodies: [
              'STUDENT BANK PROGRAM',
              'I propose to enhance our College of Computer Studies’ existing event requirements documentation system by upgrading it to a fully accessible online platform where all CCS students can conveniently check, anytime and anywhere, the status of their submitted paper requirements, forms, and supporting documents for any department event—each submission is clearly marked as submitted, pending review, approved, or missing, so you can instantly confirm if your requirements meet the event’s standards. This improved system keeps all event-related requirement records organized and updated in real time, eliminating confusion, lost paperwork, and the need for repeated follow-ups with organizers or advisers, ensuring full transparency and convenience for every student participating in department activities.'
            ],
            points: [
              'Deposit Process - All contributions are logged like official bank deposits, with issued receipts and an up-to-date balance accessible anytime.',
              'Withdrawal System - Fast release of funds for projects, events, or other school needs, simply submit a valid request for quick approval, with clear guidelines and repayment plans.',
              'Transaction Records - Every deposit and withdrawal is clearly documented, with no hidden or unlisted transactions',
              'Secure Fund Management - All funds are kept secure, with only approved transactions allowed to prevent any misuse'
            ]
          },
          {
            body: 'With this project, we build a secure, transparent, and student-focused fund system that turns every contribution into meaningful support for your academic and campus life, ensuring trust and value for every CCS student.'
          }
        ]
      },
      6: {
        tag: 'Platform · 06',
        title: 'CCS Student Online Banking Payment Program',
        body:'In times of payment period to the Consultation Room, there are times that some students have their money on G-Cash instead of handling physical money. Some students would need to go outside the Campus to Cash-out or they need to find someone to Withdraw their money from G-Cash. Some G-Cash withdrawal outside has a convenience fee. Since the current payment method is by paying with physical money, Students can pay via G-Cash to the Consultation Room in times of collecting payments for (e.g. Acquaintance Party, Department Membership, etc.), so that they won’t need to go somewhere else to Cash-out and pay the convenience fee for withdrawal.'
      },
      7: {
        tag: 'Platform · 07',
        title: 'The Voice of the Students',
        sections: [
          {
            bodies: ['1.1 Freedom Wall', 'Goal: To provide a structured yet open space for every student\'s expression.'],
            points: [
              'This will help the students to be more open and vocal about how they feel. It will help emphasize the connection between students and focus on the diversity of students\' views. This will be a classical name for a place of open discussion and ideas that sounds academically high-level.',
            ]
          },
          {
            bodies: ['1.2 Bulletin Board', 'Goal: To act as the official source of truth and visual documentation'],
            points: [
              'As a P.I.O., it is my duty to tell the students about the relevant information and announcement without a delay – it will help for students to know the announcement, such as students who have no internet access and have no phones. This gives the impression of official and organized record-keeping. It also focuses on the "Building" and "Transforming" aspects of the platform – suggesting a modern, data-driven centre for news.',
            ]
          },
          {
            bodies: ['1.3 Box for Student\'s Concerns', 'Goal: To establish a formal, confidential channel for grievance and feedback.'],
            points: [
              'It will help the students to make their concerns known and for us officers that need to improve this will ensure that students will be heard. This focuses on the result (solving the problem) rather than just the complaint–A professional term for an official who investigates complaints. Each student\'s complaint and suggestions will make us improve.',
            ]
          },
          {
            bodies: ['1.4 Primary Communication Hubs (The voice)', 'Goal: To facilitate efficient, real-time communication across the student body.'],
            points: [
              'It will help the students to make their concerns known and for us officers that need to improve this will ensure that students will be heard. This focuses on the result (solving the problem) rather than just the complaint–A professional term for an official who investigates complaints. Each student\'s complaint and suggestions will make us improve.',
            ]
          }
        ]
      },
      8: {
        tag: 'Platform · 08',
        title: 'STRENGTHENING EFFECTIVE COMMUNICATION BETWEEN MEDIA AND STUDENTS IN UCLM CCS DEPARTMENT',
        sections: [
          { 
            bodies: [
            'As running the position of Creatives, I aim to bridge the gap between media and students by ensuring that all information is communicated clearly, creatively, and on time. I will ensure that all events and important information are posted ahead of time to give students enough awareness and preparation. Through consistent and well-designed content, we can avoid misinformation and confusion.',
            'Additionally, I plan to:',
                ],
            points: [
                'Create visually appealing and organized pubmats that catch attention and deliver messages effectively',
                'Establish a consistent posting schedule so students know when to expect updates',
                'Promote transparency by making sure no important detail is left out',
                'Encourage feedback from students to improve communication strategies',
                'Create a supportive environment where every member in the organization can grow and develop their skills in designing.',
            ]
          },
        ],
      },
      9: {
        tag: 'Platform · 09',
        title: 'Distinguished Talents, Open Mic: Speak-up Student, and Timely Updates',
        sections: [
          {
          body: 'Distinguished Talents',
          points: [
            'Many IT students possess talents that are built upon but often go unnoticed due to the heavy academic workload. Since school events involve every department, this is their time to shine, showcase what they really have, and step out of their comfort zones. We want our students to represent and participate in the IT department, giving them a chance to clear their minds and enjoy themselves outside of the classroom.',
          ]
          },
          {
          body: 'Open Mic: Speak-up Student',
          points: [
            'As a running candidate for chief of representative, I want to ensure student\'s voices are heard. We\'ll conduct seminars to encourage students to speak up about their personal struggles and concerns voluntarily. Sometimes, students can\'t share with family or friends what they feel because they prefer opening up to a stranger. Knowing many IT students are introverts, this platform provides a space to speak with officers they\'re comfortable with.',
          ],
          },
          {
          body: 'Timely Updates',
          points: [
            'Students are swamped with academic workload, and announcements often get lost as they don’t have time to check them. As a future chief of representative, I want to ensure everyone stays fully informed about department announcements, official school announcements, and all upcoming events. I’ll do my best to provide timely updates on essential information so no one misses a beat.',
          ]
          },
        ],
      },
      10: {
        tag: 'Platform · 10',
        title: 'Student Engagement Across Competitions',
        sections: [
          {
            bodies: [
              'Event Player Privileges',
              'Players playing in events will have benefits for participating as representatives for the department. Players will be exempted on doing the attendance stamps in Innovation Days and in Intramurals so that they can focus on preparation for the events. The players can also propose practice sessions to the department, so that they will be granted official excuse letters that they can present to their teachers. The players will also have coaches that will guide and teach them so that they are equipped with sufficient knowledge and experience for the events.',
            ],
          },
          {
            bodies: [
              'Community Engagement',
              'Our social media page will propose bi-weekly challenges that test the students’ knowledge in programming. They will be tasked to create programs that can tackle a specific problem in the campus or community. They will then submit their programs either in the form of a video presentation, or a live presentation to the department showcasing their program. Rewards such as wifi vouchers or CCS merch will be given to the best team after a round of testing. Not only will this encourage interactivity and cooperation with group planning between students, but also provide helpful solutions that may benefit the school and the community.',
            ],
          },
          {
            bodies: [
              'Student Concerns',
              'Any problems or concerns that a student has can be addressed through a suggestion box posted outside the department’s office. A student may anonymously submit a report with a piece of paper and slip it inside the box. The council members will then check/collect the papers every other day and address the issues the students submitted within it in a meeting. This may encourage students to speak up about issues in the department that the council has missed, so that they can make a decision to fix them accordingly.',
            ],
          },
          {
            bodies: [
              'Mini E-Competitions',
              'To take a break from the stresses of academic life, students may volunteer to enter monthly mini competitions that the department proposes, mostly relating to e-sports (Mobile Legends, Valorant, etc.), which can also act as a fundraiser for the department for their future projects. In an appropriate venue where the mini competition is held, the department officers may also sell products like merch or snacks to the audience as they watch the games, as well as ensure a joyful and lighthearted atmosphere that the students may need to destress from academic life.',
            ],
          },
          {
            bodies: [
              'Utilization of Social Platforms and Physical Media',
              'Aside from ensuring that information and announcements will be disseminated quickly to social media pages and department gcs, the officers will also post physical copies of such information onto the bulletin board for students who cannot open social media and messaging applications due to network issues. A post about FAQs can also be posted so that student concerns will already be addressed and to prevent repetition of questions and answers.',
            ],
          },
          {
            body: 'Other than regular updates pertaining to academic life and event schedules, the department’s media officers may also share lighthearted posts like comics or thread discussions to bring the community together and promote student engagement, which in turn may bring more people to follow the department’s page for updates.',
          },
        ],
      },
      11: {
        tag: 'Platform · 11',
        title: 'Student Connection, Recognition, and Volunteer Programs',
        sections: [
          {
            bodies: [
              'Centralized Coding Resource Drive',
              'I will create a Google Drive with organized folders where students from all year levels can voluntarily share capstone codes, project templates, and coding resources. The files will be grouped by programming language such as Java, Python, and C++ so students can easily find what they need. This platform will make it easier for students to study, practice coding, and improve their projects. It will also encourage collaboration and sharing among students who want to help one another.',
            ],
          },
          {
            bodies: [
              'Recognition & Motivation Programs',
              'I will launch programs that recognize students’ achievements in academics, arts, sports, and projects. These programs will help motivate students to do their best and feel proud of their hard work. By recognizing student accomplishments, we can build a school community that values effort, talent, and participation. This will also inspire others to become more active and involved in school activities.',
            ],
          },
          {
            bodies: [
              'Environmental Volunteer Program',
              'I will organize voluntary student activities such as clean-up drives and tree planting. These activities will give students the chance to help care for the environment and contribute to the community. This program will also promote teamwork, responsibility, and environmental awareness among students. Through these efforts, we can help create a cleaner, greener, and better school environment.',
            ],
          },
          {
            body: 'As your representative, I will work to support every student by creating more opportunities for growth, recognition, and active participation in school activities. I will do my best to build a community where students feel valued, heard, and encouraged to reach their full potential. I will also help promote programs that develop teamwork, responsibility, and leadership among students. Through these efforts, I aim to make our school a better place for learning, involvement, and success. My goal is to serve the student body with dedication, fairness, and commitment.',
          },
        ],
      },
      12: {
        tag: 'Platform · 12',
        title: 'The 3C\'s',
        sections: [
          {
            bodies: [
              'COMMUNICATION : LIBERATION NOTES',
              'Communication is vital, yet many students hesitate to speak up, group chats have limits, and officers aren’t always available.',
              'Solution:',
            ],
            points: [
              'Create a community group (Facebook) that allows open and anonymous submissions for capstone, coding, or urgent concerns. It will be fast, interactive, and inclusive with fellow students, while officers step in only when necessary.',
              'Set up a Voice Box (Department), a physical station for course, department, or personal suggestions and concerns. Its review and responses will be exclusive to officers only, which will later be posted in the group or bulletin board to ensure transparency.',
            ],
            body: 'Through Liberation Notes, every student’s voice will be heard — whether instantly online or through official responses shared with the community.',
          },
          {
            bodies: [
              'CURIOSITY : TRENDLINE',
              'Curiosity drives growth and innovation. Students need accessible updates on topics that matter to their studies and future careers.',
              'Solution:',
            ],
            points: [
              'Utilize the student publication page (Bits and Bytes) not only for official competitions, events, and department matters, but also for weekly awareness posts.',
              'Share content such as industry trends, facts, and student submissions (essays, stories, creative works). Contributors will receive perks like priority printing.',
              'Keep posts short, engaging, and relevant to spark curiosity and broaden perspectives.',
            ],
            body: 'By sparking curiosity, we prepare students not only for their classes, but for the future careers waiting ahead.',
          },
          {
            bodies: [
              'CONNECTION : SPOTLIGHT SERIES',
              'Connection is built through recognition and shared pride. Students thrive when their efforts are acknowledged.',
              'Solution:',
            ],
            points: [
              'Launch a monthly recognition post featuring student achievements in academics, creativity, and volunteer work.',
              'Extend recognition beyond online platforms by posting on bulletin boards for offline visibility.',
            ],
            body: 'This boosts confidence, initiative, and engagement, while fostering familiarity and stronger bonds among students. Recognizing achievements builds confidence and connection, reminding us that growth is a shared journey.',
          },
          {
            body: 'My platforms are based on the 3C’s: Communication, Curiosity, and Connection — pillars that I believe encourage student development and academic excellence. As a running officer, I aim to be open to all, providing spaces where voices are heard, ideas are shared, and achievements are celebrated. With these initiatives, we can build a community where every student feels included, supported, and inspired to grow.',
          },
        ],
      },
      
        
}

    const modal = document.getElementById('platformModal');
    const modalClose = document.getElementById('modalClose');

    document.querySelectorAll('.platform-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-modal');
        const data = platformData[id];
        if (!data) return;

        document.getElementById('modalTag').textContent = data.tag;
        document.getElementById('modalIcon').textContent = data.icon || '🎓';
        document.getElementById('modalTitle').textContent = data.title;

        const contentDiv = document.getElementById('modalContent');
        contentDiv.innerHTML = '';

        if (data.sections) {
          data.sections.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.classList.add('modal-section');

            // Handle multiple bodies (array) or single body (string)
            if (section.bodies && Array.isArray(section.bodies)) {
              section.bodies.forEach(bodyText => {
                const bodyP = document.createElement('p');
                bodyP.classList.add('modal-body');
                bodyP.textContent = bodyText;
                sectionDiv.appendChild(bodyP);
              });
            } else if (section.body) {
              const bodyP = document.createElement('p');
              bodyP.classList.add('modal-body');
              bodyP.textContent = section.body;
              sectionDiv.appendChild(bodyP);
            }

            if (section.points && section.points.length > 0) {
              const ul = document.createElement('ul');
              ul.classList.add('modal-points');
              section.points.forEach(pt => {
                const li = document.createElement('li');
                li.textContent = pt;
                ul.appendChild(li);
              });
              sectionDiv.appendChild(ul);
            }

            contentDiv.appendChild(sectionDiv);
          });
        } else {
          const bodyP = document.createElement('p');
          bodyP.classList.add('modal-body');
          bodyP.textContent = data.body;
          contentDiv.appendChild(bodyP);

          if (data.points && data.points.length > 0) {
            const ul = document.createElement('ul');
            ul.classList.add('modal-points');
            data.points.forEach(pt => {
              const li = document.createElement('li');
              li.textContent = pt;
              ul.appendChild(li);
            });
            contentDiv.appendChild(ul);
          }
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

    // ── MOBILE OPTIMIZATIONS ──

    // Fix modal width on mobile
    function adjustModalForMobile() {
      const modal = document.querySelector('.modal-box');
      if (window.innerWidth <= 480) {
        modal.style.width = '100vw';
        modal.style.maxWidth = 'none';
        modal.style.height = '100vh';
      }
    }

    window.addEventListener('resize', adjustModalForMobile);
    adjustModalForMobile();

    // Swipe-to-close on mobile
    let touchStartY = 0;
    let touchEndY = 0;

    modal.addEventListener('touchstart', e => {
      touchStartY = e.changedTouches[0].clientY;
    }, false);

    modal.addEventListener('touchend', e => {
      touchEndY = e.changedTouches[0].clientY;
      if (touchStartY - touchEndY > 100) {
        closeModal();
      }
    }, false);

    // Prevent body scroll when modal is open on mobile
    document.addEventListener('touchmove', e => {
      if (modal.classList.contains('active')) {
        e.preventDefault();
      }
    }, { passive: false });
