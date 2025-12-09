export const homepageConfig = {
    hero: {
        title: 'Embrace Choice & Control',
        subtitle: 'Evolve K9 - Fort Collins Professional Dog Training',
        image: 'homepage-hero-image.jpg',
        action: {
            label: 'Schedule a Free Phone Consultation',
            href: '/contact',
        },
        imgSrc: '/assets/echo-summit-hero.webp',
    },
    about: {
        body: [
            `Welcome to Evolve K9!  We are dedicated to empowering dogs to make good choices for themselves. Through our training programs, we instill decision-making skills that promote independence, confidence, and a stronger connection between dogs and their owners. Recognizing the importance of a cooperative partnership, our training methods provide owners with the control needed to guide and shape their dog's behavior. `,
            `This empowerment leads to clear communication, well-defined boundaries, and a solid foundation for a harmonious relationship. We specialize in providing clients the skills and knowledge needed to live a harmonious life with their dogs. We simplify the training journey through a holistic approach that includes relationship, freedom, confidence, basic and advanced obedience, as well as targeted behavioral modification. Our team is committed to responding to your inquiries promptly and providing the information you need.`,
        ],
        image: '/assets/marcusandsummit-optimized.webp',
        certs: [
            { label: 'IACP Prong Collar Knowledge Certified', href: '/assets/docs/pcka-cert.pdf' },
        ],
    },
    contact: {
        title: 'Reach out and take the first step towards empowering your dog to make better decisions for themselves! ',
        subtitle: `Leave us your information by completing the form below and we'll reach out to schedule a phone call consultation within 48 hours. Our team is committed to responding to your inquiries promptly and providing the information you need. For direct assistance, please call us at (970) 235-8466. We're available during business hours to address your questions and concerns. Please note that any inquiries submitted outside of business hours (Sunday-Monday) will be responded to on the next business day (Tuesday).`,
        body: [
            // {
            //     title: 'Contact Evolve K9 LLC – Where we empower clients to train like the pros! ',
            //     text: `Welcome to Evolve K9, where your canine companions are our top priority. Whether you're seeking information about our specialized training programs, have inquiries about our services, or wish to collaborate, our team is here to assist you. Our team is committed to responding to your inquiries promptly and providing the information you need.`,
            // },
            // {
            //     title: 'How to Reach Us:',
            // },
            // {
            //     title: 'Contact Form',
            //     text: `Complete the form below to get in touch with us. Our team is committed to responding to your inquiries promptly and providing the information you need.`,
            // },
            // {
            //     title: 'Phone',
            //     text: `For direct assistance, please call us at (970) 235-8466. We're available during business hours to address your questions and concerns.`,
            // },
        ],
        formFields: [
            [
                {
                    label: 'First Name',
                    type: 'text',
                    placeholder: 'Enter your first name',
                    required: true,
                    name: 'first_name',
                },
                {
                    label: 'Last Name',
                    type: 'text',
                    placeholder: 'Enter your last name',
                    required: true,
                    name: 'last_name',
                },
            ],
            [
                {
                    label: 'Zip Code',
                    type: 'number',
                    placeholder: 'Enter your zip code',
                    required: false,
                    name: 'zip_code',
                },
            ],
            [
                {
                    label: 'Area of interest',
                    type: 'text',
                    placeholder: 'Program information, pricing, consultation, etc.',
                    required: true,
                    name: 'area_of_interest',
                },
            ],
            [
                {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Enter your email',
                    required: true,
                    name: 'email',
                },
            ],
            [
                {
                    label: 'Phone Number',
                    type: 'tel',
                    placeholder: 'Enter your phone number',
                    required: true,
                    name: 'phone_number',
                },
            ],
            [
                {
                    label: `Dog's Name`,
                    type: 'text',
                    placeholder: `Enter your dog's name`,
                    required: true,
                    name: 'dogs_name',
                },
                {
                    label: `Dog's Age`,
                    type: 'text',
                    placeholder: `Enter your dog's age`,
                    required: true,
                    name: 'dogs_age',
                },
            ],
            [
                {
                    label: 'Additional information',
                    type: 'textarea',
                    placeholder:
                        'Tell us more! Where did you get your dog? How did you hear about us?',
                    required: true,
                    name: 'additional_information',
                },
            ],
        ],
        favoriteTreat: {
            name: 'favoriteTreat',
            label: 'Leave this field empty',
        },
        disclaimer: `By submitting this form, you opt-in to receive SMS communications from the Evolve K9 team, Opt-out anytime by replying STOP`,
    },
    programs: {
        title: 'Programs',
        subtitle: 'Explore our Evolved training programs!',
        items: [
            {
                title: 'Evolved Private Training',
                body: `Jump into a personalized training journey, where we not only transform your dog but YOU as well! With 10 private lessons, covering basic and advanced obedience, including off-leash reliability and behavioral modification for ALL issues including aggression and anxiety. Our program includes Relationship Repair, where we help guide you on your journey to redefining your relationship with your dog. Automatic access to Evolve For Life, where you will receive lessons for life and unlimited support!`,
            },
            {
                title: 'Evolved Essentials',
                body: `Optimize your dog's learning experience through 8 private lessons, focusing on basic obedience, basic to intermediate behavioral modifications, and a polished introduction to public spaces. Unveil advanced programs, securing a professionally guided pathway to your dog's ongoing development.`,
            },
            {
                title: 'Puppy Essentials',
                body: `Set yourself and your puppy up for success with 8 private lessons (additional lessons available). Explore Puppy Care and Well-being 101, focusing on problem-solving, structure, and socialization. Lay the foundation for basic and advanced obedience commands, with an emphasis on using play as a reward system. Access advanced programs for an enriched and customized puppy training curriculum.`,
            },
            {
                title: 'Board and Train',
                body: `An immersive training experience designed to transform your dog’s behavior and your knowledge as an owner. Our program is crafted to provide individualized attention and comprehensive training for every dog and owner, ensuring they receive the time and focus they deserve. With limited availability, we prioritize quality over quantity, allowing us to dedicate our efforts to your dog's unique needs. Addressing everything from basic manners and obedience to advanced obedience and off-leash reliability. During their stay, your dog will benefit from a safe and structured environment where consistency is essential. Whether your goal is to correct behavioral issues or to achieve a higher level of obedience, our Board and Train Program is the perfect solution.`,
            },
        ],
        subSectionItems: [
            {
                title: 'Evolved Day Camp',
                body: `Discover a superior alternative to traditional doggie day care with Evolved Day Camp. Our program offers a full day of care designed to enrich your dog's life through training, socialization, and confidence building. At Evolved Day Camp, your dog will enjoy a balanced mix of fun and learning in a safe and engaging environment. Providing training tune-ups to reinforce good behavior and address any minor issues, ensuring your dog maintains their best manners. Your dog will have the opportunity to interact with other dogs, helping them develop essential social skills. We focus on creating positive experiences that boost your dog's confidence and overall well-being.`,
            },
            {
                title: 'Backcountry Day Camp - On Hold Until Spring 2025',
                body: `Backcountry Day Camp, where your dog can embrace the great outdoors in the Rocky Mountains! Our full-day camp offers a unique opportunity for dogs to experience the freedom and excitement of the wilderness, all while enhancing essential skills for everyday life. During Backcountry Day Camp, we harness the power of pack drive to foster better engagement and build your dog's confidence in a natural, stimulating environment. Your dog will enjoy plenty of socialization, play, and exploration with other canine companions, ensuring they return home happy and fulfilled. This day camp is designed to let your dog be a dog while continuing their growth and development.`,
            },
        ],
        action: {
            label: 'Reach out',
            href: '/contact',
        },
    },
    testimonials: {
        title: 'Testimonials',
        link: 'https://www.google.com/search?q=evolve+k9+training&oq=evolve+k9+training&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPTIGCAMQRRg80gEIMjY1M2owajGoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x885fd4dcc9a9c63f:0x8e83b8c925cff196,1,,,,',
        items: [
            {
                rating: 5,
                body: `EvolveK9 is so so amazing!

My recently adopted adult rescue struggled with fence fighting, reactivity, getting along with our resident cat and was a runner.

Marcus has incredible knowledge, patience, and care when training. It was amazing to see how he personalizes his knowledge to each dog and provides great personalized resources throughout. As many are, I was protective and nervous to trust someone with Penny. From the beginning, I could trust that he was just as big of an advocate for Penny as I am! He ensured I always felt confident in my understanding of the entire process and was very supportive when I had many questions. He was always so present and kind.

Our journey with Marcus has been one of the most rewarding experiences. Each walk used to make me nervous, constantly on edge about what dogs could be around the corner. Now, my friends can walk her without any issue! In the backyard, she remains calm and unbothered while neighbor dogs are barking. And we have movie nights with both Penny and Monty (resident cat) in one room.

In the first few weeks of having Penny, she ran out of the door twice, both times took a village to get her back and she almost got hit by cars in the process. Now, I trust her off-leash and feel safe when the front door is open!

I am so grateful I found Marcus. I was worried I could never feel safe without Penny on a leash again (backyard included). Now, thanks to Marcus and the E-collar training, Penny and I are much more fulfilled, happier, and safe!`,
                author: 'Marissa K.',
            },
            {
                rating: 5,
                body: `We contacted Evolve K9 to see if Marcus could help us out.
Our cooper was having some behavioral issues. A lot came from having seizures.
Marcus gave us the reassurance that he could help with Cooper. One thing we love about Marcus is he will always tell you exactly what to expect. He worked with Cooper and us with the most respect. His knowledge with behavior issues as well as training in general is superb!!
Coopers behavior has changed so much. Our veterinarian and the staff were really impressed by how much Cooper became so calm.
We have referred friends to Evolve K9.
When we get another puppy my first call will be to Evolve K9.
Thank you Marcus for everything you have done for us!!
`,
                author: 'Karen S.',
            },
            {
                rating: 5,
                body: `Marcus at Evolve K9 has been amazing! He is incredibly knowledgeable and so great to work with. I’d recommend him to anyone, and have a friend that saw how different our dog was from training with Marcus so she’s working with him now too!

I adopted my rescue dog in 2021 and took a training class with Marcus early on that helped lessen her aggression and reactivity. We’ve also now done the Evolved E-Collar training so she can reliably roam our partially-fence yard off-leash and that experience was also great.

Mia was a very fearful and reactive dog when I first got her. We had a long break between trainings with Marcus in-person, but he has always been willing to answer questions and follow-up between classes. Marcus gave us great info about setting Mia up for our first private lesson so she’d be more comfortable with him coming to our house and making sure that we were not worried about her being rude or aggressive towards him, though that was pretty short-lived and she didn’t mind his visit at all after a few lessons one-on-one.

I was initially hesitant to use an E-collar since Mia was so fearful when I first got her, but Marcus is very diligent about teaching us to condition her to the collar properly and using it in as much of a non-aversive way as possible. Mia loves her freedom now and puts her head through the E-collar herself, so she clearly is not fearful of it!

We are very grateful for Marcus’ help – Mia lives a much calmer, happier, and freer life than I thought would be possible.`,
                author: 'Kathy C.',
            },
            {
                rating: 5,
                body: `We could not be happier from our time with Marcus. We adopted a rescue on a bit of a whim and could not train him on even basics. We tried all the conventional methods we knew from having other dogs, a shelter behaviorist, and a group class and couldn’t even get him to sit. When we decided to hire Marcus, our only goal was for the dog to sit and if we got that it was going to be worth it. Our first session with Marcus had him sitting. Took him 45 minutes to get it but he sat! From there his progress totally took off and he’s gone from half feral to our best trained dog. We were close to giving up but with Marcus he’s been completely turned around and we could not be more grateful.`,
                author: 'Emily S.',
            },
            {
                rating: 5,
                body: `I hired Marcus in April 2024 as I had a puppy that just turned 8 months old. He helped me train my dog Koa to be my Service Dog and also get ready to take a really long trip with 8+ hour flights and 15+ hour long travel days. I am also a college student, Marcus was extremely understanding when finals week came or if I couldn't get as much training as needed done during the week. I am not able to run Koa off leash, go hiking with him and have confidence anywhere I bring Koa. Marcus is also always there for you to answer any questions or give comments on videos and all.`,
                author: 'Jade K.',
            },
            {
                rating: 5,
                body: `We hired Marcus in January to help us with an extremely anxious dog. She is a rescue, and we did initial training with another company (not extensive but we learned basics for establishing trust with anxious dogs). We really wanted her to start to feel comfortable in her new environment so we held off on more training for three months, but I’m not sure that helped. By the time we reached out to Marcus, she was always glued to a corner in the house or her crate, and would not enjoy human interactions or toys.

Fast forward through 8 weeks of hands-on training and this girl is confident, loves to go on walks, and cuddles on the couch. She is so much more personable than we could imagine. Marcus’s training methods were very effective and what we appreciated most, he pivoted goals based on her progress that week.

I would say the at-home training program is for people dedicated to giving their dog the time and energy they deserve to help improve relationships and build the dogs confidence (if that’s what you need). We were diligent about the training process on the days between sessions which led to success. Marcus is so knowledgeable and gives you the tools to succeed so it’s not too difficult. We plan to continue our basic training for now but enroll our sweet girl in the e-collar training program soon!`,
                author: 'Regina L.',
            },
            {
                rating: 5,
                body: `Evolve K9 training! What can I say? Absolute fantastic. Marcus is so passionate about his clients, and really getting the best training experience. Marcus had a variety of options, but before you choose he will come to your home, meet your pup, and really take his time. Our dog Buella adores Marlus and is always so happy to train!`,
                author: 'Mary O.',
            },
            {
                rating: 5,
                body: `We cannot recommend Marcus Chapman and Evolve K-9 Training enough! His patience, professionalism, and incredible ability to hold our dog’s attention are unmatched. He is thorough in every session, ensuring our pup learns and thrives, and his superlative customer service makes every interaction a pleasure. Our dog absolutely loves training and boarding with him, wagging his tail with excitement every time we arrive. We have total confidence and complete peace of mind while our dog is in his care, knowing he is in the very best of hands.
If you want a trainer who truly cares and delivers outstanding results, look no further— Evolve K-9 Training is the best!`,
                author: 'Brian K.',
            },
            {
                rating: 5,
                body: `I highly recommend Marcus. It was a nightmare to take my dog on walks and he had anxiety when I left him. Marcus was wonderful working with Baxter and now we can enjoy walks and his anxiety is much better. Thank you so much Marcus!`,
                author: 'Debbie B.',
            },
            {
                rating: 5,
                body: `Marcus is the absolute best! His attention to detail, thoroughness, and personalized care and support he provides the doggos and their humans is on a whole other level. We highly, highly recommend him!`,
                author: 'Arnold C.',
            },
            {
                rating: 5,
                body: `Working with Marcus has been the best dog training experience we have ever had!

Our dog Lily, who we adopted as a 2.5 year old, has had anxiety and fear towards humans since we got her. As she has gotten older, her reactivity worsened and culminated to multiple bite attempts. After researching multiple dog training companies, we came across Marcus. From the beginning, Marcus was kind, professional, and showed full faith in being able to work with us on this horrible situation!

We completed an intensive 10 week one on one training with Marcus and Lily has basically become a different dog!! Working with Marcus is SO easy - he is accessible and always asks us to text him any questions, give updates, etc, and he is so responsive, and flexible to rescheduling. He is also kind and understanding of our questions and fears as owners of a reactive dog, and has had full faith in Lily this entire process.

He is extremely knowledgeable of dog training methods and dog behavior/psychology. He explains the why and works with you so you really understand each step, and how they build on each other. His training program is comprehensive and intensive, and he provides support and resources every step of the way. We were able to work on things like “state of mind”, place, muzzle training, heeling on leash, and so much more.

because of this we were able to address lilys dangerous behaviors. This has given us such peace of mind as anxious dog owners. We can now walk/run with Lily safely, take her into stores, and have her around when new people come to visit. We are SO lucky to have found Marcus and can’t wait to keep working with him!!`,
                author: 'Megan E.',
            },
            {
                rating: 5,
                body: `Hands down the best dog trainer ever. My wife and I decided to sign up for the Evolved Private Training package for our newly adopted rescue who was completely untrained and had some severe signs of general and separation anxiety pretty early on. Marcus helped us navigate the steps to getting our new dog to a state where she fits into our lives.

Before we met Marcus, our dog would tremble and cower from any stranger, not listen to anything we said, and often would scream if we left her alone. After completing the evolved private training package our dog now knows how to sit, place, down, recall, heel, and settle herself when alone. Marcus has spent countless hours with us via lesson, texting and calling us to talk through how best to address issues we are experiencing, and really prioritize our training goals. His approach really connected with us and our dog, he showed that he was willing to do whatever it took to meet our training goals and have our dog fit into our lives.

I also think his rates are a phenomenally good deal. He not only provides the lessons as advertised but works with you to ensure you get the equipment you need to accomplish your training goals, even if he has to loan you equipment or go out of his way to make adjustments. I would have paid him more in a heartbeat if he asked.

I would hands down go with Marcus for making your pup fit into your life and be happy while doing it.`,
                author: 'Darius D.',
            },
            {
                rating: 5,
                body: `If I could leave a 10 star review I would. I'm writing this review for Marcus and the amazing job he has done and continues to do for our beautiful girl Suki and for my wife and I also. We did the 2 week board and train program with Marcus because our girl was a very anxious rescue. We could see that she had a lot of potential, but we didn't know how to get the most out of her. Our goal wasn't that we wanted her to just learn to obey and respect us, but to know that she is part of our family and that we just want to communicate with her so she can be safe and so we can also be able to have a good and mutually respectful relationship with her. Marcus 100% delivered on all of it helping us to achieve our goal. Our amazing girl is living up to the potential we saw in her and we also as her family have learned how to navigate having her do what we need her to do while also having a fun time with our girl. All of this thanks to Marcus and his very open communication and feedback for us. Don't be fooled by the smaller amount of reviews his business seems to have, he is a seasoned veteran in this area and I will always recommend him. Thank you! See you soon Marcus.`,
                author: 'Jose M.',
            },
            {
                rating: 5,
                body: `We worked with Marcus in the summer of 2023, and it was such a game-changer for both Watson (our pup) and us. Marcus has this amazing ability to look at the whole picture—helping with not just training but creating a toolkit for you and your dog to actually communicate in a way that makes sense. It’s not just about commands—it’s about building a real connection.

Over a year later, Watson had a health issue, and I wasn’t sure if that would change how we’d been working together. I reached out to Marcus, and he jumped right in. He genuinely cared and wanted to help us navigate the situation. His advice and encouragement reminded me why he’s so great at what he does—he’s not just about training, he’s about making sure you and your dog thrive.

If your dog deals with anxiety, separation anxiety, defensiveness, or aggression, or if you’re just looking to feel more confident with your pup, Marcus is your guy. He knows so much, and if there’s something he’s not sure of, he’ll dig into his resources to find answers. Thanks to him, we’ve been able to take Watson to friends’ houses and even breweries again, which felt impossible before.

Marcus is just the best—kind, knowledgeable, and so easy to work with. If you’re thinking about getting help with your dog, seriously, don’t wait. Call Evolve K9 Training. You won’t regret it!`,
                author: 'Dylan S.',
            },
            {
                rating: 5,
                body: `An unexpected life event provided me with 2 dogs to join my one older small pup. I was in no way prepared to take on 2 young, medium to large dogs and felt overwhelmed every day. Someone referred me to Marcus, and it literally changed my life. I have had dog trainers before (not with these dogs) and somehow it really didn't stick. Marcus is thoughtful and takes the time, to give me what I need to make sure my dog Zen was able to keep all his good learned habits. He now walks perfectly at heel, stops when I say, and does not react to dogs or squirrels. A first! He goes into his kennel, understands and does "place" when I need him to. I cannot stay enough good things. Marcus is everything a trainer should be, and I am so grateful to him`,
                author: 'Kat C.',
            },
        ],
    },
    trustedBrands: {
        title: 'Trusted Partners',
        logos: [
            '/assets/ecollarDealer.jpg',
            '/assets/IACP-logo-cropped.png',
            '/assets/maddog-logo.png',
        ],
    },
}
