export const homepageConfig = {
    hero: {
        title: 'Embrace Choice & Control',
        subtitle: 'Evolve K9 - Fort Collins Professional Dog Training',
        image: 'homepage-hero-image.jpg',
        action: {
            label: 'Schedule a Free Phone Consultation',
            href: '/contact',
        },
    },
    about: {
        body: [
            `Welcome to Evolve K9!  We are dedicated to empowering dogs to make good choices for themselves. Through our training programs, we instill decision-making skills that promote independence, confidence, and a stronger connection between dogs and their owners. Recognizing the importance of a cooperative partnership, our training methods provide owners with the control needed to guide and shape their dog's behavior. `,
            `This empowerment leads to clear communication, well-defined boundaries, and a solid foundation for a harmonious relationship. We specialize in providing clients the skills and knowledge needed to live a harmonious life with their dogs. We simplify the training journey through a holistic approach that includes relationship, freedom, confidence, basic and advanced obedience, as well as targeted behavioral modification.`,
        ],
    },
    contact: {
        title: 'Reach out and take the first step towards empowering your dog to make better decisions for themselves! ',
        subtitle: `Leave us your information and we'll reach out to schedule a phone call consultation within 48 hours.`,
        body: [
            {
                title: 'Contact Evolve K9 LLC – Where we empower clients to train like the pros! ',
                text: `Welcome to Evolve K9, where your canine companions are our top priority. Whether you're seeking information about our specialized training programs, have inquiries about our services, or wish to collaborate, our team is here to assist you.
                `,
            },
            {
                title: 'How to Reach Us:',
            },
            {
                title: 'Contact Form',
                text: `Complete the form below to get in touch with us. Our team is committed to responding to your inquiries promptly and providing the information you need.`,
            },
            {
                title: 'Phone',
                text: `For direct assistance, please call us at (970) 235-8466. We're available during business hours to address your questions and concerns.`,
            },
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
        ],
        disclaimer: `By submitting this form, you opt-in to receive SMS communications from the Evolve K9 team, Opt-out anytime by replying STOP`,
    },
    programs: {
        title: 'Programs',
        subtitle: 'Explore our Evolved training programs!',
        items: [
            {
                title: 'Evolved Private Training',
                body: `Jump into a personalized training journey, where we not only transform your dog but YOU as well! With 12 private lessons, covering basic and advanced obedience, including off-leash reliability and behavioral modification for ALL issues including aggression and anxiety. Our program includes Relationship Repair, where we help guide you on your journey to redefining your relationship with your dog. Automatic access to Evolve For Life, where you will receive lessons for life and unlimited support!`,
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
                title: 'Backcountry Day Camp',
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
        items: [
            {
                rating: 5,
                body: `Marcus is INCREDIBLE!! He is an absolute natural & such an incredible trainer. Not only has he helped my very anxious Golden become more confident, but he has also trained both my sister's two dogs and my moms because he's THAT good!
                You will not regret working with Marcus. He has a passion that is unmatched & is incredible at not only training/helping your dog(s) but also helping you (the owner) build a positive connection & learn how to effectively communicate with your dog!`,
                author: 'Karlee T.',
            },
            {
                rating: 5,
                body: `I cannot recommend Evolve K9 enough! Our pup had some behavioral issues that we were struggling to address, I'd tried everything on the internet but it didn't get us very far. But with the expertise of Marcus, balance has been restored to our lives and our dog has never been happier. Marcus took the time to understand our dogs unique personality and our training goals to curate the perfect training methods. What I appreciate most is that our dog is not only more obedient, but he is 200% more calm and through the help of Evolve K9 we've built a trusting relationship.

                We're incredibly grateful for the positive impact Marcus had on our dog's life, and we wholeheartedly recommend them to anyone in need of top-notch training services.`,
                author: 'Kayla W.',
            },
            {
                rating: 5,
                body: `Marcus at EvolveK9 has been working with my border collie Lilly for years. He took her from scared, reactive, and insecure to confident, trusting, and more social. Her quality of life has gone up due to the work Marcus put in with her. I have him to thank for my life long dog best friend. I highly recommend if you want someone professional, knowledgeable and transparent with his approach. You’re dog will be glad you choose Evolve!!`,
                author: 'Benjamin W.',
            },
            {
                rating: 5,
                body: `My husband and I HIGHLY recommend Marcus for all of your dog training needs!

                Marcus is a great teacher, communicator, professional, and truly cares about your pup. You will not go wrong with Evolve K9!`,
                author: 'Tyler W.',
            },
        ],
    },
    trustedBrands: {
        title: 'Trusted Brands',
        logos: ['/assets/ecollarDealer.jpg', '/assets/IACP-logo-cropped.png'],
    },
}
